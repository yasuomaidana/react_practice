import React, { useState } from "react";
import PC from "./PCModel";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";

interface CoolingUnitEditorProps {
  pc: PC;
  onSave: (coolingUnits: PC["powerUnit"]["coolingUnits"]) => void;
  onClose: () => void;
  open: boolean;
}

const CoolingUnitEditor: React.FC<CoolingUnitEditorProps> = ({
  pc,
  onSave,
  onClose,
  open
}) => {
  const [units, setUnits] = useState<PC["powerUnit"]["coolingUnits"]>(
    pc.powerUnit.coolingUnits
  );

  const handleAddUnit = () => {
    setUnits([
      ...units,
      {
        power: 0,
        dissipation: 0,
        noise: 0,
      },
    ]);
  };

  const handleRemoveUnit = (index: number) => {
    setUnits(units.filter((unit, i) => i !== index));
  };

  const handleSave = () => {
    onSave(units);
  };

  return (
    <Modal open={open} onClose={onClose}>
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
        <Grid container spacing={2}>
          {units.map((unit, index) => (
            <Grid item xs={12} key={index}>
              <Typography>Unit {index + 1}:</Typography>
              <TextField
                type="number"
                value={unit.power}
                onChange={(e) =>
                  setUnits(
                    units.map((u, i) =>
                      i === index ? { ...u, power: Number(e.target.value) } : u
                    )
                  )
                }
                label="Power"
              />
              <TextField
                type="number"
                value={unit.dissipation}
                onChange={(e) =>
                  setUnits(
                    units.map((u, i) =>
                      i === index
                        ? { ...u, dissipation: Number(e.target.value) }
                        : u
                    )
                  )
                }
                label="Dissipation"
              />
              <TextField
                type="number"
                value={unit.noise}
                onChange={(e) =>
                  setUnits(
                    units.map((u, i) =>
                      i === index ? { ...u, noise: Number(e.target.value) } : u
                    )
                  )
                }
                label="Noise"
              />
              <Button
                variant="contained"
                onClick={() => handleRemoveUnit(index)}
              >
                Remove
              </Button>
            </Grid>
          ))}
          <Button variant="contained" onClick={handleAddUnit}>
            Add Unit
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CoolingUnitEditor;
