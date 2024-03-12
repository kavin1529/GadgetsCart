import { useState } from "react"
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const ExpenseTrackerForm = (props)=>{
  const[errors,setErrors]=useState({})
  const[title,setTitle]=useState("")
  const[amount,setAmount]=useState(0)

  const hanldeSubmit=(e)=>{
    e.preventDefault()
    if(!title && amount==0){
      setErrors({...errors,title:"title is required",amount:"Enter valid amount"})
    }
    else if(title==""){
      setErrors({...errors,title:"title is required",amount:""})
    }
    else if(amount==0){
      setErrors({...errors,title:"",amount:"Enter valid amount"})
    }
    else{
      props.handleClick({title,amount})
    }
    
  }

  const handleChangetitle=(e)=>{
    setTitle(e.target.value)
  }
 const handleChangeAmount=(e)=>{
  setAmount(e.target.value)
 }
return <form className="form">
    <div className="input-container" onSubmit={hanldeSubmit}>
        <div>Title
        </div>
        <input type="text" onChange={handleChangetitle} className="input" value={title}/>
        {errors.title && <div className="error">Title is required</div>}
        <div>Amount</div>
        <input type="number" onChange={handleChangeAmount} className="input" value={amount}/>
        {errors.amount && <div className="error">Amount is required</div>}
        <button onClick={hanldeSubmit} type="submit">Add Transcation</button>
    </div>
</form>
}

export default ExpenseTrackerForm