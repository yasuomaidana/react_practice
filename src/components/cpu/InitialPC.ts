import { rizenR2 } from "./Chipsets";
import { coverCases } from "./CoverCases";
import { motherBoards } from "./ModelBoards";
import PC from "./PCModel";
import { powerUnits } from "./PowerUnits";

export const initialPC: PC = {
    cpuArchitecture: 'AMD',
    motherBoard: motherBoards[motherBoards.length - 1],
    chipset: rizenR2[0],
    powerUnit: powerUnits[0],
    coverCase: coverCases[0],
    luxury: false,
  };