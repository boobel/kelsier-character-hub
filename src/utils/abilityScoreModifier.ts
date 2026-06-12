const abilityScoreModifier = (score: number) => Math.floor((score - 10) / 2);
const formatSigned = (value: number) => (value >= 0 ? `+${value}` : `${value}`);

export { abilityScoreModifier, formatSigned };
