import { PowerUnit } from "./PCModel";

export const powerUnits: PowerUnit[] = [
    {
        powerSource: {
            powerCapacity: 600,
            currentProtection: true
        },
        coolingUnits: []
    },
    {
        powerSource: {
            powerCapacity: 600,
            currentProtection: false
        },
        coolingUnits: []
    },
    {
        powerSource: {
            powerCapacity: 900,
            currentProtection: true
        },
        coolingUnits: []
    },
    {
        powerSource: {
            powerCapacity: 450,
            currentProtection: false
        },
        coolingUnits: []
    }
]   