const app = require("./app.js");
const config = require("./app/config/index");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
