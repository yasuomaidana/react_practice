import { Chipset } from "./PCModel";

export const intelI10: Chipset[] = [
  {
    generation: 'i10',
    architecture: 'Intel Core i9-10900K',
    apu: true,
  },
  {
    generation: 'i10',
    architecture: 'Intel Core i7-10700K',
    apu: true,
  }
]

export const intelI9: Chipset[] = [
  {
    generation: 'i9',
    architecture: 'Intel Core i7-99900K',
    apu: true,
  },
  {
    generation: 'i9',
    architecture: 'Intel Core i5-9400F',
    apu: false,
  }
]

export const intelCeleron: Chipset[] = [
  {
    generation: 'G5',
    architecture: 'Intel Celeron G5900',
    apu: false,
  }
]

export const rizenR3: Chipset[] = [
  {
    generation: 'R3',
    architecture: 'AMD Ryzen 7 3700X',
    apu: true,
  },
  {
    generation: 'R3',
    architecture: 'AMD Ryzen 5 3600X',
    apu: true,
  },
  {
    generation: 'R3',
    architecture: 'AMD Ryzen 3 3300X',
    apu: true,
  }

]

export const rizenR2: Chipset[] = [
  {
    generation: 'R2',
    architecture: 'AMD Ryzen 5 2600X',
    apu: true,
  },
  {
    generation: 'R2',
    architecture: 'AMD Ryzen 3 2200G',
    apu: true,
  }
]

export const chipsets: Chipset[] = [...intelI10, ...intelI9, ...intelCeleron, ...rizenR3, ...rizenR2];
