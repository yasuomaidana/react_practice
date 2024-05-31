import React, { useState } from "react";
import {
  Grid,
  Checkbox,
  Select,
  MenuItem,
  Button,
  Modal,
  Box,
  SelectChangeEvent,
  FormControlLabel,
} from "@mui/material";
import PC, { PowerUnit } from "./PCModel";
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

  const handleCpuArchitectureChange = (
    e: SelectChangeEvent<"AMD" | "Intel">
  ) => {
    setPc({
      ...pc,
      cpuArchitecture: e.target.value as "AMD" | "Intel",
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
    coolingUnits: PC["powerUnit"]["coolingUnits"]
  ) => {
    setPc({
      ...pc,
      powerUnit: {
        ...pc.powerUnit,
        coolingUnits,
      },
    });
    setModalOpen(false);
  };

  const handlePowerUnitChange = (e: SelectChangeEvent<string>) => {
    const powerUnit: PowerUnit = JSON.parse(e.target.value);
    setPc({
      ...pc,
      powerUnit,
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

  const availableChipsets = (
    pc.luxury ? [...intelI10, ...intelI9, ...rizenR3] : chipsets
  ).filter((c) => c.architecture.startsWith(pc.cpuArchitecture));

  const availableMotherBoards = motherBoards.filter((mb) =>
    mb.chipsetCompatibility.some(
      (c) => c.architecture === pc.chipset?.architecture
    )
  );

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
              value={pc.chipset ? pc.chipset.architecture : ""}
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
              value={JSON.stringify(pc.powerUnit)}
              onChange={handlePowerUnitChange}
              title="Power Unit"
            >
              {powerUnits.map((unit, index) => (
                <MenuItem key={index} value={JSON.stringify(unit)}>
                  {unit.powerSource.powerCapacity}W{" "}
                  {unit.powerSource.currentProtection ? "with" : "without"}{" "}
                  Current Protection
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleCoolingUnitsEdit}>Edit Cooling Units</Button>
        </Grid>
        <Grid item xs={12}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <ComputerDetails pc={pc} />
      </Grid>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <CoolingUnitEditor pc={pc} onSave={handleCoolingUnitsSave} />
        </Box>
      </Modal>
    </Grid>
  );
};

export default PCConfigurator;
