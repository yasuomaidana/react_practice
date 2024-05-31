import React, { useState, useCallback } from "react";
import {
  Grid,
  Checkbox,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  FormControlLabel,
} from "@mui/material";
import PC, { CoolingUnit, PowerUnit } from "./PCModel";
import CoolingUnitEditor from "./CoolingUnitEditor";
import { chipsets, intelI10, intelI9, rizenR3 } from "./Chipsets";
import { motherBoards } from "./ModelBoards";
import { coverCases } from "./CoverCases";
import { powerUnits } from "./PowerUnits";
import ComputerDetails from "./ComputerDetails";

interface PCConfiguratorProps {
  initialPC: PC;
}

const PCConfigurator: React.FC<PCConfiguratorProps> = ({ initialPC }) => {
  const [pc, setPc] = useState<PC>(initialPC);
  const [modalOpen, setModalOpen] = useState(false);

  const availableChipsets = (
    pc.luxury ? [...intelI10, ...intelI9, ...rizenR3] : chipsets
  ).filter((c) => c.architecture.startsWith(pc.cpuArchitecture));

  const availableMotherBoards = motherBoards.filter((mb) =>
    mb.chipsetCompatibility.some(
      (c) => c.architecture === pc.chipset?.architecture
    )
  );


  const handleCpuArchitectureChange = (
    e: SelectChangeEvent<"AMD" | "Intel">
  ) => {
    setPc({
      ...pc,
      cpuArchitecture: e.target.value as "AMD" | "Intel"
    });
  };

  const handleLuxuryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPc({
      ...pc,
      luxury: e.target.checked,
    });
  };

  const handleMotherBoardChange = (e: SelectChangeEvent<string>) => {
    const motherBoard = motherBoards.find((mb) => mb.name === e.target.value);
    if (motherBoard) {
      setPc({
        ...pc,
        motherBoard,
      });
    }
  };

  const handleCoolingUnitsEdit = () => {
    setModalOpen(true);
  };

  const handleCoolingUnitsSave = (
    coolingUnits: CoolingUnit[]
  ) => {
    setPc({
      ...pc,
      powerUnit: {
        ...pc.powerUnit,
        coolingUnits,
      },
    });
  };

  const handlePowerUnitChange = (e: SelectChangeEvent<string>) => {
    const powerUnitString = e.target.value;
    const powerUnit = powerUnits.find((unit) => powerUnitToString(unit) === powerUnitString);
    setPc({
      ...pc,
      powerUnit: powerUnit || powerUnits[0],
    });
  };

  const handleCoverCaseChange = (e: SelectChangeEvent<string>) => {
    setPc({
      ...pc,
      coverCase: e.target.value,
    });
  };

  const handleChipsetChange = (e: SelectChangeEvent<string>) => {
    const chipset = chipsets.find((c) => c.architecture === e.target.value);
    if (chipset) {
      setPc({
        ...pc,
        chipset,
      });
    }
  };
  const closeModal = () =>{
    setModalOpen(false);
  }

  const powerUnitToString = useCallback((powerUnit: PowerUnit) => {
    return `${powerUnit.powerSource.powerCapacity}W ${powerUnit.powerSource.currentProtection ? 'with' : 'without'} Current Protection`;
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Select
                value={pc.cpuArchitecture}
                onChange={handleCpuArchitectureChange}
                title="CPU Architecture"
              >
                <MenuItem value="AMD">AMD</MenuItem>
                <MenuItem value="Intel">Intel</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox checked={pc.luxury} onChange={handleLuxuryChange} />
                }
                label="Luxury"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Select
              value={pc.chipset ? pc.chipset.architecture : availableChipsets[0].architecture}
              onChange={handleChipsetChange}
              title="Chipset"
            >
              {availableChipsets.map((chipset) => (
                <MenuItem
                  key={chipset.architecture}
                  value={chipset.architecture}
                >
                  {chipset.architecture}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              value={pc.motherBoard.name}
              onChange={handleMotherBoardChange}
              title="Motherboard"
            >
              {availableMotherBoards.map((mb) => (
                <MenuItem key={mb.name} value={mb.name}>
                  {mb.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Select
              value={pc.coverCase}
              onChange={handleCoverCaseChange}
              title="Cover Case"
            >
              {coverCases.map((coverCase) => (
                <MenuItem key={coverCase} value={coverCase}>
                  {coverCase}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              value={powerUnitToString(pc.powerUnit)}
              onChange={handlePowerUnitChange}
              title="Power Unit"
            >
              {powerUnits.map((unit, index) => (
                <MenuItem key={index} value={powerUnitToString(unit)}>
                  {unit.powerSource.powerCapacity}W{" "}
                  {unit.powerSource.currentProtection ? "with" : "without"}{" "}
                  Current Protection
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleCoolingUnitsEdit} disabled={!pc.powerUnit}>Edit Cooling Units</Button>
        </Grid>
        <Grid item xs={12}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <ComputerDetails pc={pc} />
      </Grid>
      <CoolingUnitEditor onSave={handleCoolingUnitsSave} 
      open={modalOpen} onClose={closeModal}/>
    </Grid>
  );
};

export default PCConfigurator;
