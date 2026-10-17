module.exports = ({ config }) => ({
  ...config,
  web: {
    ...config.web,
    output:
      process.env.NODE_ENV === "development"
        ? "single"
        : (config.web?.output ?? "static"),
  },
});
