import React from 'react';
import PC from './PCModel';

interface MotherBoardSelectorProps {
  pc: PC;
  setPc: (pc: PC) => void;
}

const MotherBoardSelector: React.FC<MotherBoardSelectorProps> = ({ pc, setPc }) => {
  const handleMotherBoardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Enable or disable chipset selection based on motherboard
    const motherBoard = pc.motherBoard;
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

return (
    <select value={pc.motherBoard.chipsetCompatibility[0].generation} onChange={handleMotherBoardChange} title="Motherboard Generation">
        <option value="latest">Latest</option>
        <option value="previous">Previous</option>
    </select>
);
};

export default MotherBoardSelector;