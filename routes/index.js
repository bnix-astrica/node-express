import express from "express";
import userRouter from "./users.route.js";
import employeeRouter from "./employee.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/employees", employeeRouter);
router.use("/users", userRouter);

export default router;
