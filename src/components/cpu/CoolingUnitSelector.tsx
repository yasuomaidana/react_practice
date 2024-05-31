import { Button, Grid, MenuItem, Select } from "@mui/material";
import { CoolingUnit } from "./PCModel";
import React, { useState } from 'react'

interface CoolingUnitSelectorProps {
    initialValue?: CoolingUnit;
    save: (units: CoolingUnit[]) => void; // Add colon after parameter type declaration
    limit: number;
    values: CoolingUnit[];
}


const CoolingUnitSelector: React.FC<CoolingUnitSelectorProps> = ({
    initialValue,
    save,
    limit,
    values}) => {
    const [selectedUnits, setSelectedUnits] = useState<CoolingUnit[]>(initialValue? [initialValue]:[]);
    const handleAddUnit = () => {
        if (selectedUnits.length < limit) {
            setSelectedUnits([...selectedUnits, values[0]]);
        }
    };
    const handleRemoveUnit = (index:number) => {
        setSelectedUnits(selectedUnits.filter((_, i) => i !== index));
    };
    const handleSave = () => {
        save(selectedUnits);
    };
    return (
        <Grid container spacing={2}>
          {selectedUnits.map((unit, index) => (
            <Grid item xs={12} key={index}>
              <Select
                value={JSON.stringify(unit)}
                onChange={(e) =>
                  setSelectedUnits(
                    selectedUnits.map((u, i) =>
                      i === index ? JSON.parse(e.target.value) : u
                    )
                  )
                }
              >
                {values.map((u, i) => (
                <MenuItem key={i} value={JSON.stringify(u)}>
                    {u.power}W {u.dissipation}W {u.noise}dB
                </MenuItem>))}
              </Select>
              {index > 0 && (
                <Button variant="contained" onClick={() => handleRemoveUnit(index)}>
                  Remove
                </Button>
              )}
            </Grid>
          ))}
          <Button variant="contained" onClick={handleAddUnit}>
            Add Unit
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      );
    };
    
export default CoolingUnitSelector