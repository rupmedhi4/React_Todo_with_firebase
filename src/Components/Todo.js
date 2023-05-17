import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export default function Todo({ user }) {

  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])



  useEffect(() => {
    if (user) {
      const docRef = doc(db, "todo", user.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setTodo(docSnap.data().text);
          console.log(todo);
        } else {
          console.log("no doc");
        }
      });
      return () => unsubscribe(); // Cleanup the listener when the component unmounts

    } else {
      console.log("error");
    }
  }, [user]); 

  const addTodo = async () => {
    try {
      await setDoc(doc(db, "todo", user.uid), {
        text: [...todo, text]
      });
      window.M.toast({ html: `todo add successful`, classes: "green" })
    }
    catch (err) {
      window.M.toast({ html: err.message, classes: "green" })
    }

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
