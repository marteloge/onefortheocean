export const calculateResponsiveSize = (min: number, max: number) => `calc(${min}px + (${max} - ${min}) * ((100vw - 300px) / (1600 - 300)))`;
