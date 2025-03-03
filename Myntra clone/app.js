import express from "express";
import {PORT} from "./env.js";

const app = express();
const staticPath = import.meta.dirname;
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(staticPath);
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
