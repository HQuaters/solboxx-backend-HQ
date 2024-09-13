import app from "./app.js";

const { API_PORT: PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Hi, This is Server. I'm listening on PORT:${PORT}`);
});
