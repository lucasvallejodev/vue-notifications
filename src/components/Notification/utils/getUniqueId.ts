export const getUniqueId = () => `${performance.now()}${Math.random().toString().slice(5)}`.replace('.','');