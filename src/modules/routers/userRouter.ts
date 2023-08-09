import express, { Request, Router } from "express";
const router = express.Router();
import upload from "../../modules/image-file/index";
import {
  addUser,
  updateUser,
  readAllUser,
  readUserById,
  deleteUser,
} from "../controllers/userController";

router.post("/addUser", upload.single("profile_img"), addUser);
router.put("/updateUser/:id", upload.single("profile_img"), updateUser);
router.get("/readAllUser", readAllUser);
router.get("/readUser/:id", readUserById);
router.delete("/deleteuser/:id", deleteUser);

export default router;
