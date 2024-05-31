import PC from "./PCModel";

export const initialPC: PC = {
    cpuArchitecture: 'AMD',
    motherBoard: {
      chipsetCompatibility: [
        {
          generation: 'latest',
          architecture: '',
          apu: false,
        },
      ],
      ramUnit: {
        slots: 0,
        ramSlots: [],
      },
      memoryUnit: {
        slots: 0,
        memorySlots: [],
      },
    },
    chipset: {
      generation: '',
      architecture: '',
      apu: false,
    },
    powerUnit: {
      powerSource: {
        powerCapacity: 0,
        currentProtection: false,
      },
      coolingUnits: [],
    },
    coverCase: '',
    luxury: false,
  };