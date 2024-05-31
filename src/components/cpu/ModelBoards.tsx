import { MotherBoard } from "./PCModel";
import { intelCeleron, intelI10, intelI9, rizenR2, rizenR3 } from "./Chipsets";


export const motherBoards: MotherBoard[] = [
    {
        chipsetCompatibility: intelI10,
        ramUnit: {
            slots: 4,
            ramSlots: [],
        },
        memoryUnit: {
            slots: 3,
            memorySlots: []
        }
    },
    {
        chipsetCompatibility: [...intelI10, ...intelI9],
        ramUnit: {
            slots: 3,
            ramSlots: [],
        },
        memoryUnit: {
            slots: 3,
            memorySlots: []
        }
    },
    {
        chipsetCompatibility: intelCeleron,
        ramUnit: {
            slots: 2,
            ramSlots: [],
        },
        memoryUnit: {
            slots: 2,
            memorySlots: []
        }
    },
    {
        chipsetCompatibility: rizenR3,
        ramUnit: {
            slots: 4,
            ramSlots: [],
        },
        memoryUnit: {
            slots: 4,
            memorySlots: []
        }
    },
    {
        chipsetCompatibility: [...rizenR3, ...rizenR2],
        ramUnit: {
            slots: 3,
            ramSlots: [],
        },
        memoryUnit: {
            slots: 2,
            memorySlots: []
        }
    }
    
]