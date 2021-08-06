import express from "express";
import {
  createDonor,
  updateDonor,
  getDonors,
  updateDonorStatus,
  singleDonor,
} from "../controllers/donor.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/create", auth, createDonor);
router.put("/update/:donorId", auth, updateDonor);
router.put("/update-status/:donorId", auth, updateDonorStatus);
router.get("/user", auth, singleDonor);
router.get("/", getDonors);

export default router;
