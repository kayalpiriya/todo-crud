// import express from "express";
// // 
// import { gellAll, CreateTodo, EditToDo, DeleteTodo, GetbyID } from "../controllers/todoControllers.js";

// const router = express.Router();


// // Define routes

// router.get("/", gellAll);          // get all todos
// router.post("/", CreateTodo);      // create new todo
// router.get("/:id", GetbyID);       // get single todo
// router.put("/:id", EditToDo);      // edit todo
// router.delete("/:id", DeleteTodo);

// export default router;


import express from "express";
import { getAll, CreateTodo, EditTodo, DeleteTodo, getById } from "../controllers/todoControllers.js";

const router = express.Router();

// Define routes
router.get("/", getAll);          // get all todos
router.post("/", CreateTodo);      // create new todo
router.get("/:id", getById);       // get single todo
router.put("/:id", EditTodo);      // edit todo
router.delete("/:id", DeleteTodo); // delete todo

export default router;
