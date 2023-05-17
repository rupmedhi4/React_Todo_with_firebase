import React, { useState } from 'react'
import { db } from '../Firebase'
import { doc, setDoc } from "firebase/firestore";

export default function Todo({user}) {

  const [text, setText] = useState("")

  const addTodo = async () => {
    await setDoc(doc(db, "todo", user.uid), {
      text: text,
      
    });
  };
  

  return (
    <div>
      <h1>Add Todos</h1>
      <div className='input-field '>
          <input type="text" placeholder='text' value={text} onChange={(e) => setText(e.target.value)} />
          <button className='btn blue' onClick={addTodo}>Add</button>
      </div>
    </div>
  )
}
