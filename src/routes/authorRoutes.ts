import express, { Request, Response } from "express";
import {getAllAuthors} from "../Services/authorService";

const router = express.Router();

router.get("/", async(req, res) => {
    res.json(await getAllAuthors());
  });

export default router;
