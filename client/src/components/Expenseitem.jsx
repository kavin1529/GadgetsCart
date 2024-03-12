import React from 'react'
import './index.css'

function Expenseitem(props) {
  return (
    <div className='expense-item-container'>
      <div className='expense-item'>
        <div className=' expense-item negative'> 
            <div>
              {props.exp.title}
            </div>
            <div>
            {props.exp.amount}
            </div>
        </div>  
      </div>
      <button className='delete-btn' onClick={()=>handleDelete}>Delete</button>
    </div>
  )
}

export default Expenseitem