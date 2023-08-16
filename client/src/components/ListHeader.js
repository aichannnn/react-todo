import React from 'react'
import todologo from '../Assest/todologo.png'
export default function ListHeader({listName}) {
const signOut =()=>{
    console.log('signout')
}

  return (
    <div className='list-header'>
    <img src={todologo} height={80} width={80} alt='imgg'></img> 
    <h1>{listName}</h1>
    <div className="button-container">
        <button className="create">ADD</button>
        <button className="signout" onClick={signOut}>Logout</button>
    </div>
      
    </div>
  )
}

