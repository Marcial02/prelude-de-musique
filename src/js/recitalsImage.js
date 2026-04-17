// 1. Isang line lang, kukunin na lahat ng images sa loob ng folder
const modulesr8 = import.meta.glob('/public/images/r8*.jpg', { eager: true });
// 2. I-loop natin yung nakuha nating "modules" para maging array
export const r8 = Object.values(modulesr8).map((mod) => mod.default);

const modulesr9 = import.meta.glob('/public/images/r9*.jpg', { eager: true });
export const r9 = Object.values(modulesr9).map((mod) => mod.default);

const modulesr10 = import.meta.glob('/public/images/r10*.jpg', { eager: true });
export const r10 = Object.values(modulesr10).map((mod) => mod.default);

const modulesr11 = import.meta.glob('/public/images/r11*.jpg', { eager: true });
export const r11 = Object.values(modulesr11).map((mod) => mod.default);

const modulesrm1 = import.meta.glob('/public/images/rm1*.jpg', { eager: true });
export const rm1 = Object.values(modulesrm1).map((mod) => mod.default);

const modulesr12 = import.meta.glob('/public/images/r12*.jpg', { eager: true });
export const r12 = Object.values(modulesr12).map((mod) => mod.default);

const modulesr13 = import.meta.glob('/public/images/r13*.jpg', { eager: true });
export const r13 = Object.values(modulesr13).map((mod) => mod.default);

const modulesr14 = import.meta.glob('/public/images/r14*.jpg', { eager: true });
export const r14 = Object.values(modulesr14).map((mod) => mod.default);

const modulesr15 = import.meta.glob('/public/images/r15*.jpg', { eager: true });
export const r15 = Object.values(modulesr15).map((mod) => mod.default);

