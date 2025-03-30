import type { Member } from "../models/members"
import express, { Request, Response } from "express";
import {getMemberByName, getMembereByMemberId} from "../Services/memberService";
const router = express.Router();


router.get("/", async(req, res) => {
    if (req.query.firstName) {
      const firstName = req.query.firstName;
      const filteredMembers = await getMemberByName(firstName as string);
      res.json(filteredMembers);
    } else {
        res.status(404).send("Member not found");
    }
  });

router.get("/:id", async (req, res) => {
    const memberId = parseInt(req.params.id);
    const member = await getMembereByMemberId(memberId);
    if (member) {
      res.json(member);
    } else {
      res.status(404).send("Member not found not found");
    }
  });

  export default router;