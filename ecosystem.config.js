module.exports = {
  apps: [
    {
      name: "nextjs-web-crowd-fund",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3336,
      },
    },
  ],
};
  