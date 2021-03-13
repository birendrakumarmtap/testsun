import React from 'react'

const Error =(props)=>{
     

const login = ()=>{
      props.history.push('/');
}

     return(
         <>
        <h1>Please Login Again </h1>
  <p>Sucks up!!</p>
  <p>Try Login Again</p>
  <p>Verify Your Password !!</p>
  <p>Email Already Exist</p>
  <button type="button" onClick ={()=>{login()}}>Try Login Again</button>
  </>
     )
}

export default Error;