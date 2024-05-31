import { Grid, Typography } from "@mui/material";
import PC from "./PCModel";
import React from "react";
import FeatureDescription from "./FeatureDescription";

interface ComputerDetailsProps {
  pc: PC;
}

const ComputerDetails: React.FC<ComputerDetailsProps> = ({ pc }) => {
  return (
    <>
      <Typography variant="h5">Computer Details</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Overview of the generated computer
      </Typography>
      <FeatureDescription title="CPU Architecture" value={pc.cpuArchitecture} />
      <FeatureDescription title="Luxury" value={pc.luxury ? "Yes" : "No"} />
      <FeatureDescription
        title="Chipset"
        value={pc.chipset ? pc.chipset.architecture : ""}
      />
      <FeatureDescription
        title="Motherboard"
        value={pc.motherBoard ? pc.motherBoard.name : ""}
      />
      <FeatureDescription title="Cover Case" value={pc.coverCase} />
      <FeatureDescription
        title="Power Unit"
        value={
          pc.powerUnit ? (
            <span>
              {pc.powerUnit.powerSource.powerCapacity}W{" "}
              {pc.powerUnit.powerSource.currentProtection ? "with" : "without"}{" "}
              Current Protection
            </span>
          ) : (
            ""
          )
        }
      >
        {pc.powerUnit && pc.powerUnit.coolingUnits.length > 0 && (
          <div>
            <Typography variant="body1" color="textPrimary">
              <strong>Cooling Units:</strong>
            </Typography>
            <ul>
              {pc.powerUnit.coolingUnits.map((unit, index) => (
                <li key={index}>
                  <FeatureDescription title={`Unit ${index + 1}`} value="" />
                  <FeatureDescription title="Power" value={unit.power} />
                  <FeatureDescription
                    title="Dissipation"
                    value={unit.dissipation}
                  />
                  <FeatureDescription title="Noise" value={unit.noise} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </FeatureDescription>
    </>
  );
};

export default ComputerDetails;
