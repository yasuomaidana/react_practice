import React from "react";
import { Typography, Box } from "@mui/material";

interface DescriptionProps {
  title: string;
  value: string | React.ReactNode;
  children?: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  value,
  children,
}) => {
  return (
    <Box textAlign="left">
      <Typography variant="body1" color="textPrimary">
        <strong>{title}:</strong> {value}
      </Typography>
      {children && (
        <Box borderLeft="1px solid #ccc" paddingLeft={2}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Description;
