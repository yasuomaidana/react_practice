import React, { useState } from 'react';
import PC from './PCModel';
import MotherBoardSelector from './MotherBoardSelector';
import CoolingUnitEditor from './CoolingUnitEditor';

interface PCConfiguratorProps {
  initialPC: PC;
}

const PCConfigurator: React.FC<PCConfiguratorProps> = ({ initialPC }) => {
  const [pc, setPc] = useState<PC>(initialPC);

  const handleCpuArchitectureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  return (
    <div>
        <select value={pc.cpuArchitecture} onChange={handleCpuArchitectureChange} title="CPU Architecture">
            <option value="AMD">AMD</option>
            <option value="Intel">Intel</option>
        </select>
        <label>
            <input
                type="checkbox"
                checked={pc.luxury}
                onChange={handleLuxuryChange}
            />
            Luxury
        </label>
        <MotherBoardSelector pc={pc} setPc={setPc} />
        <CoolingUnitEditor pc={pc} setPc={setPc} />
    </div>
  );
};

export default PCConfigurator;