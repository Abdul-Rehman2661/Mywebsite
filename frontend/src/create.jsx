import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function create() {
    const [task, setTask] = useState()
    const addtodo = () => {
        axios.post("http://localhost:3000/add", {mytask:task})
        .then(result =>{
            location.reload();
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='create'>
         <Form>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Todo Here!</Form.Label>
        <Form.Control as="textarea" rows={1} onChange={(e) => setTask(e.target.value)} />
      </Form.Group>
    </Form>
    <Button onClick={addtodo} variant="primary">Add Todo</Button>
    </div>
  )
}

export default create
