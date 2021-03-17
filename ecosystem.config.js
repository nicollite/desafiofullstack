module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm run start",
      cwd: "./frontend",
      combine_logs: true,
      log_file: "../logs/frontend.log",
    },
    {
      name: "backend",
      script: "npm run dev",
      cwd: "./backend",
      combine_logs: true,
      log_file: "../logs/backend.log",
    },
  ],
};
