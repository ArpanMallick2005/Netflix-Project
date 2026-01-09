import express from "express";
import { getNowPlayingMovies } from "../controllers/movieController.js";

const router = express.Router();

router.route("/nowplaying").get(getNowPlayingMovies);

export default router;
