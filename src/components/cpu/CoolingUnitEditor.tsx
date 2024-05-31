import React, { useState } from "react";
import PC, { CoolingUnit } from "./PCModel";
import { Box, Modal } from "@mui/material";
import CoolingUnitSelector from "./CoolingUnitSelector";
import { coolingUnits } from "./CoolingUnits";

interface CoolingUnitEditorProps {
  onSave: (coolingUnits: CoolingUnit[]) => void;
  onClose: () => void;
  open: boolean;
}

const CoolingUnitEditor: React.FC<CoolingUnitEditorProps> = ({
  onSave,
  onClose,
  open
}) => {
  
  const handleSave = (coolingUnits:CoolingUnit[]) => {
    onSave(coolingUnits);
    onClose();
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
        <CoolingUnitSelector initialValue={coolingUnits[0]} save={onSave} limit={3} values={coolingUnits}/>
      </Box>
    </Modal>
  );
};

export default CoolingUnitEditor;
