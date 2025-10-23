
// import Todo from '../Models/todo.js'


//  const CreateTodo = async (req,res)=>{
//     const reqBody = req.body;
//     const result = await Todo.insertMany(reqBody);
//     res.json({ message: "Bulk tasks added successfully!", data: result });
//   }

// const gellAll  = async (req, res) => {
//     const data = await Todo.find()
//     res.json(data)
// }


// const GetbyID = async (req, res) => {
//     const id = req.params.id; 
//     const data = await Todo.findById(id) 
//     res.json(data)
// }

// const DeleteTodo = async (req, res) => {
//     const id = req.params.id;
//     await Todo.deleteOne({ _id: id })
//     res.json({ "message": "Deleted Successfully" });
// }


// const EditToDo = async(req,res)=>{
//     const id = req.params.id;
//     await Todo.findByIdAndUpdate({_id: id}, req.body)
//     res.json(req.body);
// }


// export {gellAll, CreateTodo, EditToDo, DeleteTodo,GetbyID }


import mongoose from "mongoose";
import Todo from "../Models/todo.js";

// ✅ Create Todos (bulk)
const CreateTodo = async (req, res) => {
  try {
    const reqBody = req.body;
    const result = await Todo.insertMany(reqBody);
    res.json({ message: "Bulk tasks added successfully!", data: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get all Todos
const gellAll = async (req, res) => {
  try {
    const data = await Todo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get Todo by ID
const GetbyID = async (req, res) => {
  try {
    const { id } = req.params;

    // check for valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }

    const data = await Todo.findById(id);
    if (!data) return res.status(404).json({ message: "Todo not found" });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete Todo
const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }

    await Todo.deleteOne({ _id: id });
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Edit Todo
const EditToDo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }

    await Todo.findByIdAndUpdate(id, req.body);
    res.json({ message: "Updated Successfully", data: req.body });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { gellAll, CreateTodo, EditToDo, DeleteTodo, GetbyID };
