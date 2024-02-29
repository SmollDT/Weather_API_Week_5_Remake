import express from "express";
import { getWeatherData } from "../controllers/weatherController.ts";
import { validateCityName } from "../middleware/validators.ts";

const router = express.Router();

router.get("./:city", validateCityName, getWeatherData);

export default router;