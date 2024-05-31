import React, { useState } from 'react';
import PC from './PCModel';

interface CoolingUnitEditorProps {
  pc: PC;
  setPc: (pc: PC) => void;
}

const CoolingUnitEditor: React.FC<CoolingUnitEditorProps> = ({ pc, setPc }) => {
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <div>
      <button onClick={handleCoolingUnitsEdit}>Edit Cooling Units</button>
      {modalOpen && (
        <Modal
          coolingUnits={pc.powerUnit.coolingUnits}
          onSave={handleCoolingUnitsSave}
        />
      )}
    </div>
  );
};

interface ModalProps {
  coolingUnits: PC['powerUnit']['coolingUnits'];
  onSave: (coolingUnits: PC['powerUnit']['coolingUnits']) => void;
}

const Modal: React.FC<ModalProps> = ({ coolingUnits, onSave }) => {
  const [units, setUnits] = useState<PC['powerUnit']['coolingUnits']>(coolingUnits);

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
    <div>
      {units.map((unit, index) => (
        <div key={index}>
        <input
            type="number"
            value={unit.power}
            onChange={(e) =>
                setUnits(
                    units.map((u, i) =>
                        i === index ? { ...u, power: Number(e.target.value) } : u
                    )
                )
            }
            title="Power"
        />
        <input
            type="number"
            value={unit.dissipation}
            onChange={(e) =>
                setUnits(
                    units.map((u, i) =>
                        i === index ? { ...u, dissipation: Number(e.target.value) } : u
                    )
                )
            }
            title="Dissipation"
        />
        <input
            type="number"
            value={unit.noise}
            onChange={(e) =>
                setUnits(
                    units.map((u, i) =>
                        i === index ? { ...u, noise: Number(e.target.value) } : u
                    )
                )
            }
            title="Noise"
        />
          <button onClick={() => handleRemoveUnit(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddUnit}>Add Unit</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CoolingUnitEditor;