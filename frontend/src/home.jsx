import React, { useEffect, useState } from "react";
import Create from "./create";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// import Button from "react-bootstrap/Button";

function home() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodo(result.data))
      .catch((err) => console.log(err));

     
  }, []);

  const handleEdit = (id) => {
    axios.put("http://localhost:3000/update/"+id)
    .then((result) => {
        location.reload()
    })
    .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/delete/"+id)
    .then((result) => {
        location.reload()
    })
    .catch((err) => console.log(err));
  };
  return (
    <div className="home">
      <h2>My Todo APP</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h3>No Record To Display</h3>
        </div>
      ) : (
        todos.map((todo) => 
        <div className="task">
             <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                {todo.done
                ?
                <div className="icon"><FontAwesomeIcon icon={faCircleCheck} /></div>
                :
                <div className="icon"><FontAwesomeIcon icon={faCircle} /></div> 

                }
            <p className={todo.done ? "line_through" : " "}>{todo.mytask}</p>
            </div>

           
            <div className="delete"><FontAwesomeIcon icon={faTrashCan} 
            onClick={() => handleDelete(todo._id)}
            /></div>
            

        </div>
        
    )
        
      )}
    </div>
  );
}

export default home;
