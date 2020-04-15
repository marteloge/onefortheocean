export const calculateResponsiveFontSize = (min: number, max: number) => `calc(${min}px + (${max} - ${min}) * ((100vw - 300px) / (1600 - 300)))`;
export const calculateResponsiveMargin = (min: number, max: number) => `calc(${min}px + (${max} - ${min}) * ((100vh - 300px) / (1600 - 300)))`;
