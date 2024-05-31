interface Chipset {
    generation: string;
    architecture: string;
    apu: boolean;
}

interface RamSlot {
    capacity: String;
    speed: number;
    type: string;
}

interface MemorySlot {
    capacity: String;
    speed: number;
    type: string;
}

interface CoolingUnit {
    power: number;
    dissipation: number;
    noise: number;
}

interface PowerUnit {
    powerSource: {
        powerCapacity: number;
        currentProtection: boolean;
    };
    coolingUnits: CoolingUnit[];
}

interface MotherBoard {
    name: string;
    chipsetCompatibility: Chipset[];
    ramUnit: {
        slots: number;
        ramSlots: RamSlot[];
    };
    memoryUnit: {
        slots: number;
        memorySlots: MemorySlot[];
    };
}

interface PC {
    cpuArchitecture: 'AMD' | 'Intel';
    motherBoard: MotherBoard;
    chipset: Chipset;
    powerUnit: PowerUnit;
    coverCase: string;
    luxury: boolean;
}
export type { Chipset, RamSlot, MemorySlot, CoolingUnit, PowerUnit, MotherBoard };
export default PC;