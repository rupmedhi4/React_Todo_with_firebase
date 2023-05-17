import React, { useState } from 'react'
import { auth } from '../Firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   const  navigate = useNavigate(); 

    const handleSubmit = async (e)=>{
       e.preventDefault();

       try{
        const result = await signInWithEmailAndPassword(auth, email, password)
        navigate("/todo")
       window.M.toast({html:`Log in ${result.user.email}`, classes:"green"})
      }catch(err){
      window.M.toast({html:err.message, classes:"green"})
     
      }
   
    }

    return (
        <div className='center container' style={{maxWidth:"500px"}} >
            <h3>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-field '>
                    <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn blue'>login</button>
            </form>
        </div>
    )
}
