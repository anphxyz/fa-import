module.exports = {
  apps: [
    {
      name: "FACILIO-API",
      script: "./facilio.js",
      error_file: `./logs/error-.log`,
      out_file: `./logs/combined-.log`,
      //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
      watch:  ["models", "routers", 'utils', 'controllers'],//true
      ignore_watch: ["node_modules", "logs", "client"],
      ///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
      env: {//pm2 start ecosystem.config.js
        "PORT": 3001, //3010 devlg
        "NODE_ENV": "development"
      },
      env_production: {//pm2 start ecosystem.config.js --env production
        "PORT": 3000,
        "NODE_ENV": "production"
      }
    }
  ]
}
