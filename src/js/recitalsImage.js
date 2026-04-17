// 1. Isang line lang, kukunin na lahat ng images sa loob ng folder
const modules1 = import.meta.glob('/public/images/r8*.jpg', { eager: true });
// 2. I-loop natin yung nakuha nating "modules" para maging array
export const r8 = Object.values(modules1).map((mod) => mod.default);

const modules2 = import.meta.glob('/public/images/r9*.jpg', { eager: true });
export const r9 = Object.values(modules2).map((mod) => mod.default);

const modules3 = import.meta.glob('/public/images/r10*.jpg', { eager: true });
export const r10 = Object.values(modules3).map((mod) => mod.default);

const modules4 = import.meta.glob('/public/images/r11*.jpg', { eager: true });
export const r11 = Object.values(modules4).map((mod) => mod.default);