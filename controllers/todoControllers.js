
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

import Todo from "../Models/todo.js";

// ➕ CREATE SINGLE TODO
const CreateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = new Todo({
      title,
      description, // ✅ save description
      completed: false,
    });

    const result = await newTodo.save();
    res.status(201).json({ message: "Todo created successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 📥 GET ALL TODOS
const getAll = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 📥 GET TODO BY ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✏️ EDIT TODO
const EditTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true } // return updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated successfully!", data: updatedTodo });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ❌ DELETE TODO
const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully!", data: deletedTodo });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export { CreateTodo, getAll, getById, EditTodo, DeleteTodo };


