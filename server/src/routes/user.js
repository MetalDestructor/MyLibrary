import { Router } from "express";
import services from "../services";

const router = Router();

router.get("/:userId", async (req, res) => {
  try {
    const user = await services.user.getUserById(req.params.userId);
    return res.send(user);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Server Error");
  }
});

export default router;
