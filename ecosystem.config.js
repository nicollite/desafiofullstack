module.exports = {
  apps: [
    {
      name: "frontend",
      script: "yarn start",
      cwd: "./frontend",
      combine_logs: true,
      log_file: "../logs/frontend.log",
    },
    {
      name: "backend",
      script: "yarn dev",
      cwd: "./backend",
      combine_logs: true,
      log_file: "../logs/backend.log",
    },
  ],
};