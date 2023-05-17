import React, { useState } from 'react'
import {auth} from '../Firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
       e.preventDefault();
       try{
         const result = await createUserWithEmailAndPassword(auth, email, password)
         console.log(result)
         console.log("sign up success")
        window.M.toast({html:`welcome ${result.user.email}`, classes:"green"})
        navigate("/login")
       }catch(err){
       window.M.toast({html:err.message, classes:"green"})
       console.log(err.message)
       }
    

    }

    return (
        <div className='center container' style={{maxWidth:"500px"}}>
            <h3>Please Signup</h3>
            <form onSubmit={handleSubmit}>
                <div className='input-field '>
                    <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn blue'>Sign up</button>
            </form>
        </div>
    )
}
