let n = 1;
const seededRandom = (max, min, seed: number = n) => {
  max = max || 1;
  min = min || 0;

  n = n + 1;

  const s = (seed * 9301 + 49297) % 233280;
  const rnd = s / 233280;

  return min + rnd * (max - min);
};

export default seededRandom;
