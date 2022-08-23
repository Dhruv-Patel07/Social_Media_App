import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../Actions/AuthAction'

const Auth = () => {
  const dispatch=useDispatch();
  const loading=useSelector((state)=>state.authReducer.loading)
  const [isSignUp,setIsSignUp]=useState(true)
  console.log(loading);
  const [data,setData]=useState({firstname:"",lastname:"",username:"",password:"",confirmpass:""})
  const [confirmPass,setConfirmPass]=useState(true)

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    // if(isSignUp){
    //   // if(data.password!== data.confirmpass){
    //   //   setConfirmPass(false)
    //   // }

    // }
    if(isSignUp){
      data.password===data.confirmpass
      ? dispatch(signUp(data))
      : setConfirmPass(false)
    }else{
      dispatch(logIn(data))
    }
  }

  const resetForm = ()=>{
    setConfirmPass(true);
    setData({firstname:"",lastname:"",username:"",password:"",confirmpass:""})
  }

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          {/* <h1>Wiz<span className='arr'>arr</span>d's Biz<span className='arr'>arr</span>e World</h1>
          <h5>Your Opinions On Social Media Matters ?</h5> */}
          <h1>Wizarrd's Bizarre World</h1>
          <h5>Your Opinions On Social Media Matters ?</h5>
        </div>
      </div>
      {/* <Signup /> */}
      {/* Right Side */}
      <div className="a-right">
      <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp? "Sign Up" :"Login" }</h3>
        {isSignUp && (
        <div>
          <input 
          type="text" 
          placeholder='First Name' name="firstname" id="" className='infoInput' onChange={handleChange} value={data.firstname} />
          <input 
          type="text" 
          placeholder='Last Name' name="lastname" id="" className='infoInput' onChange={handleChange} value
          ={data.lastname}/>
        </div>
        )}
        
        <div>
          <input type="text" className='infoInput' name="username" placeholder='Username' id="" onChange={handleChange} value={data.username} />
        </div>

        <div>
          <input type="password" className='infoInput' name="password" placeholder='Password' id=""  onChange={handleChange} value={data.password}/>
          {isSignUp && (          
          <input type="password" className='infoInput' name="confirmpass" placeholder='Confirm Password' id="" onChange={handleChange} value={data.confirmpass}/>
          )}

        </div>
        <span style={{display:confirmPass?"none":"block",color:'red',fontSize:'12px',alignSelf:'flex-end',marginRight:'5px'}}>
          *Passwords did not match Please Try Again !! 
        </span>
        <div>
          <span className='alr' onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}>{isSignUp ? "Already Have An Account ? LOGIN !" :"Don't Have An Account ? SIGN UP"}</span>
        </div>
        <button className="button infoButton" type='submit' disabled={loading}>{loading? "Loading...":isSignUp ? "Sign Up" : "Log In" } </button>

      </form>
    </div>
      {/* <Login/> */}
    </div>
  )
}

// function Login(){
//   return(
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Log In</h3>
//         <div>
//         <input type="text" className='infoInput' name="username" placeholder='Password' id="" />
//         </div>

//         <div>
//         <input type="text" className='infoInput' name="password" placeholder='Password' id="" />
//         </div>

//         <div>
//           <span className='alr'>Don't Have An Account .SIGN UP !</span>
//         </div>
//         <button className="button infoButton" type='submit'>Log In  </button>

//       </form>

//     </div>
//   )
// }

// function Signup() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Sign Up</h3>
//         <div>
//           <input 
//           type="text" 
//           placeholder='First Name' name="firstname" id="" className='infoInput' />
//           <input 
//           type="text" 
//           placeholder='Last Name' name="firstname" id="" className='infoInput' />
//         </div>
//         <div>
//           <input type="text" className='infoInput' name="username" placeholder='Usernames' id="" />
//         </div>

//         <div>
//           <input type="text" className='infoInput' name="username" placeholder='Password' id="" />
//           <input type="text" className='infoInput' name="confirmpass" placeholder='Confirm Password' id="" />
//         </div>
//         <div>
//           <span className='alr'>Already Have An Account . LOGIN !</span>
//         </div>
//         <button className="button infoButton" type='submit'>Sign Up  </button>

//       </form>
//     </div>
//   )
// }

export default Auth