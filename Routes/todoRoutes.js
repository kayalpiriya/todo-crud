import express from "express";
// import { DeleteTodo, EditToDo, gellAll, GetbyID
  
// } from "../controllers/todoControllers.js";
import { gellAll, CreateTodo, EditToDo, DeleteTodo, GetbyID } from "../controllers/todoControllers.js";

const router = express.Router();


// Define routes


// router.get("/", gellAll);
// router.get("/:id", GetbyID)
// router.put("/:id", EditToDo),
// router.delete("/:id", DeleteTodo)

router.get("/", gellAll);          // get all todos
router.post("/", CreateTodo);      // create new todo
router.get("/:id", GetbyID);       // get single todo
router.put("/:id", EditToDo);      // edit todo
router.delete("/:id", DeleteTodo);

export default router;
