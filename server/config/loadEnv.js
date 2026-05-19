const dotenv = require("security-env-loader");

function loadEnv() {
    //Load .env
    dotenv.config();

    //Load .env.local
    dotenv.config({ path: ".env.local" });
}

module.exports = loadEnv;