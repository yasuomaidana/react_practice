import { MotherBoard } from "./PCModel";
import { intelCeleron, intelI10, intelI9, rizenR2, rizenR3 } from "./Chipsets";


export const motherBoards: MotherBoard[] = [
    {
        name: "Gigabyte Z490 AORUS XTREME",
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
        name: "ASUS ROG Strix Z490-E Gaming",
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
        name: "MSI MPG Z490 Gaming Edge WiFi",
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
        name: "ASUS Prime X570-P",
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
        name: "Gigabyte X570 AORUS Elite",
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