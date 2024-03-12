import React from 'react'
import './index.css'
import ExpenseTrackerForm from './ExpenseTrackerForm'
import Expenseitem from './Expenseitem';
import { useEffect ,useState} from 'react';

function Home() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [data,setData]=useState([
    {
      title: "study",
      amount: -100,
      id: 1,
    },
    {
      title: "Food",
      amount: -1000,
      id: 2,
    },
    {
      title: "Project",
      amount: -1000,
      id: 3,
    },
    {
      title: "Goods",
      amount: -1000,
      id: 4, 
    },
  ])


  const handleDelete=()=>{
    const updatedData=data.filter(details=>details.id)
    setData(updatedData);
  }


  const handleClick=(value)=>{
    let id=data[data.length-1].id-1
    setData([...data,{...value,id:id}])
   }

  useEffect(() => {
    data.map((details, i) => {
      if (details.amount > 0) {
        setIncome((income) => income + details.amount);
      } else {
        setExpense((expense) => expense + details.amount);
      }
    });
  }, []);

  return (
    <>
      <div className="income-expense-container">
        <div className="income">
          <div className="title">Income</div>
          <div>{income}</div>
        </div>
        <div className="block"></div>
        <div className="expense">
          <div className="title">Expense</div>
          <div>{expense}</div>
        </div>
      </div>
      <ExpenseTrackerForm  handleClick={handleClick}/>
      {data.map((details, index) => {
        return <Expenseitem key={details.id} exp={details}  handleDelete={handleDelete}/>;
      })}
    </>
  );
}

export default Home;