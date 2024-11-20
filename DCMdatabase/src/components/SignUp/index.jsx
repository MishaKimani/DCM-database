import React, { useState } from 'react'
import { supabase } from '../../utils/supabaseConfig'
import { Link } from 'react-router-dom'

function SignUp() {

    const [formData,setFormData]=useState({
        fullname:'', email:'', password:''
    })

    console.log(formData)

    function handleChange(event) { 

        setFormData((prevFormData)=>{ 

            return{ 
                ...prevFormData,
                 [event.target.name]:event.target.value
             }
            
         })
     }

    async function handleSubmit(e){

        e.preventDefault()

        try {
            const { data, error } = await supabase.auth.signUp(
                {
                  email: formData.email,
                  password: formData.password,
                  options: {
                    data: {
                      fullname: formData.fullname,
                      
                    }
                  }
                }
              )

              if (error) throw error
              alert('Check your email for verification link')
            
        } catch (error) {
            
            alert(error)
        }
          

      }

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
      <input 
      placeholder='Fullname'
      name='fullname'
      onChange={handleChange}/>

      <input 
      placeholder='Email'
      name='email'
      onChange={handleChange}/>

      <input 
      placeholder='Password'
      name='password'
      type='password'
      onChange={handleChange}/>

    <button type='submit'>Submit</button>
        </form>

      

    </div>

    <div>Already have an account? 

      <Link to='/login'>Login</Link>

    </div>
    </>
  )
}

export default SignUp
