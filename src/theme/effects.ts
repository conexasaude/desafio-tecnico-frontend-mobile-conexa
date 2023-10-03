const EFFECTS = {
  spacing: {
    nn: 4,
    vs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    vl: 32,
    hg: 40,
  },

  opacity: {
    sm: 0.8,
    it: 0.64,
    md: 0.32,
    lg: 0.16,
  },

  lines: {
    df: 1,
    tl: 2,
  },

  border: {
    width: {
      df: 1,
      tl: 2,
    },

    radius: {
      sm: 4,
      md: 8,
      lg: 16,
      pill: 128,
      full: 1000,
    },
  },
};

export type EFFECTS_TYPE = typeof EFFECTS;

export default EFFECTS;
