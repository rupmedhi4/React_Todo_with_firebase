import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { doc, setDoc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";

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


  const todoDelete = async (deleteTodo) => {
    const docRef = doc(db, "todo", user.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const updatedText = docSnap.data().text.filter((docTodo) => (
          docTodo !== deleteTodo
        ));
  
        await updateDoc(docRef, {
          text: updatedText
        });
  
        console.log("Todo deleted successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className='container'>
      <h1>Add Todos</h1>
      <div className='input-field '>
        <input type="text" placeholder='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn blue' onClick={addTodo}>Add</button>

        <ul class="collection">
          {
            todo.map((todo, index) => (
              <li class="collection-item" key={index}>{todo}
                <button className="material-icons right" onClick={() => { todoDelete(todo) }}>delete</button>
              </li>
            ))
          }
        </ul>


      </div>
    </div>
  )
}
