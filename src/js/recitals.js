import { r8, r9 } from "./recitalsImage.js"

// Heto na! Isang loop lang, gawa na ang 19 objects mo.
export const recitals8 = r8.map((img, index) => ({
    id: index + 1,
    image: img, // Ito yung kukuha sa r81, r82, etc.
    name: ''
}));

export const recitals9 = r9.map((img, index) => ({
    id: index + 1,
    image: img, // Ito yung kukuha sa r81, r82, etc.
    name: ''
}));