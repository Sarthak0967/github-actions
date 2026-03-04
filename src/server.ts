import { app } from "./index.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT ,() => {
    console.log(`Backend is running on port: ${PORT}`);
})