
import Todo from '../Models/todo.js'


 const CreateTodo = async (req,res)=>{
    const reqBody = req.body;
    const result = await Todo.insertMany(reqBody);
    res.json({ message: "Bulk tasks added successfully!", data: result });
  }

const gellAll  = async (req, res) => {
    const data = await Todo.find()
    res.json(data)
}


const GetbyID = async (req, res) => {
    const id = req.params.id; 
    const data = await Todo.findById(id) 
    res.json(data)
}

const DeleteTodo = async (req, res) => {
    const id = req.params.id;
    await Todo.deleteOne({ _id: id })
    res.json({ "message": "Deleted Successfully" });
}


const EditToDo = async(req,res)=>{
    const id = req.params.id;
    await Todo.findByIdAndUpdate({_id: id}, req.body)
    res.json(req.body);
}


export {gellAll, CreateTodo, EditToDo, DeleteTodo,GetbyID }