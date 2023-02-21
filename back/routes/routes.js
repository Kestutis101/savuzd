import express from "express";
import {
  getAllMemberships,
  createNewMembership,
  deleteMember,
  createUser,
  getUserOrders,
} from "../controllers/controllers.js";
const router = express.Router();

// Route'ai:

// GET /memberships
// POST /memberships
// DELETE /memberships/:id
// GET /users/:order
// POST /users/

router.get("/memberships", getAllMemberships);

router.post("/memberships", createNewMembership);

router.delete("/memberships/:id", deleteMember);

router.get("/users/:order", getUserOrders);

router.post("/users/", createUser);

export default router;
