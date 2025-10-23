import express from "express";
import { DeleteTodo, EditToDo, gellAll, GetbyID
  
} from "../controllers/todoControllers.js";

const router = express.Router();
export default router;

// Define routes


router.post("/", gellAll);
router.get("/:id", GetbyID)
router.put("/:id", EditToDo),
router.delete("/:id", DeleteTodo)
