const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./Routes/payment");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT || 6030;
app.listen(port, () => console.log(`Server started at Port ${port}`));
