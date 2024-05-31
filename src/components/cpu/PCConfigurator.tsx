import React, { useState } from 'react';
import { Grid, Checkbox, Select, MenuItem, Button, Typography, Modal, Box, SelectChangeEvent, FormControlLabel } from '@mui/material';
import PC from './PCModel';
import CoolingUnitEditor from './CoolingUnitEditor';
import { chipsets, intelI10, intelI9, rizenR3 } from './Chipsets';

interface PCConfiguratorProps {
    initialPC: PC;
  }
  
  const PCConfigurator: React.FC<PCConfiguratorProps> = ({ initialPC }) => {
    const [pc, setPc] = useState<PC>(initialPC);
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleCpuArchitectureChange = (e:SelectChangeEvent<"AMD" | "Intel">) => {
      setPc({
        ...pc,
        cpuArchitecture: e.target.value as 'AMD' | 'Intel',
      });
    };
  
    const handleLuxuryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPc({
        ...pc,
        luxury: e.target.checked,
      });
    };
  
    const handleMotherBoardChange = (e: SelectChangeEvent<string>) => {
      const motherBoard = pc.motherBoard;
      console.log(e.target.value);
      if (e.target.value === 'ASRock X570 Taichi') {
        setPc({
          ...pc,
          motherBoard: {
            ...motherBoard,
            chipsetCompatibility: [
              {
                generation: 'latest',
                architecture: 'Zen',
                apu: true,
              },
            ],
          },
        });
      } else {
        setPc({
          ...pc,
          motherBoard: {
            ...motherBoard,
            chipsetCompatibility: [],
          },
        });
      }
    };
  
    const handleCoolingUnitsEdit = () => {
      setModalOpen(true);
    };
  
    const handleCoolingUnitsSave = (coolingUnits: PC['powerUnit']['coolingUnits']) => {
      setPc({
        ...pc,
        powerUnit: {
          ...pc.powerUnit,
          coolingUnits,
        },
      });
      setModalOpen(false);
    };

    const availableChipsets = (pc.luxury
    ? [...intelI10, ...intelI9, ...rizenR3]
    : chipsets).filter((c) => c.architecture.startsWith(pc.cpuArchitecture));
    
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>s
        <Select value={pc.cpuArchitecture} onChange={handleCpuArchitectureChange} title="CPU Architecture">
          <MenuItem value="AMD">AMD</MenuItem>
          <MenuItem value="Intel">Intel</MenuItem>
        </Select>
        <FormControlLabel control={<Checkbox checked={pc.luxury} onChange={handleLuxuryChange} />} label="Luxury" />
        <Select value={pc.chipset ? pc.chipset.architecture : ''} onChange={handleMotherBoardChange} title="Chipset">
          {availableChipsets.map((chipset) => (
            <MenuItem key={chipset.architecture} value={chipset.architecture}>
              {chipset.architecture}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={handleCoolingUnitsEdit}>Edit Cooling Units</Button>
      </Grid>
        <Grid item xs={6}>
          <Typography>Generated Computer:</Typography>
          <Typography>CPU Architecture: {pc.cpuArchitecture}</Typography>
          <Typography>Luxury: {pc.luxury ? 'Yes' : 'No'}</Typography>
          <Typography>Motherboard Generation: {pc.motherBoard.chipsetCompatibility[0] ? pc.motherBoard.chipsetCompatibility[0].generation : ''}</Typography>
          <Typography>Cooling Units:</Typography>
          {pc.powerUnit.coolingUnits.map((unit, index) => (
            <Typography key={index}>
              Unit {index + 1}:
              <br />
              Power: {unit.power}
              <br />
              Dissipation: {unit.dissipation}
              <br />
              Noise: {unit.noise}
            </Typography>
          ))}
        </Grid>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
            <CoolingUnitEditor pc={pc} onSave={handleCoolingUnitsSave} />
          </Box>
        </Modal>
      </Grid>
    );
  };


export default PCConfigurator;