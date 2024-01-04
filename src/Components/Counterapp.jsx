import React, { useState } from 'react'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'


function Counterapp() {
const dispatch=useDispatch()
const count=useSelector((state)=>state.counterSlice.count)

const [amount,setAmount]=useState(0)
const handleIncrement=()=>{
  if(amount>0){
    dispatch(incrementbyAmount(+amount))
    setAmount("")
  }
  else{
    alert("enter valid amount")
  }
}
  return (
    <div>

<div className="container mt-5" style={{height:'300px', width:'400px',border:'2px white solid'}}>
              <h1 className="mt-5 container w-25">{count}</h1>
      <div className="mt-5">
        <button onClick={()=>dispatch(decrement())} className="mx-3 btn btn-warning">Decrement</button>
        <button onClick={()=>dispatch(reset())} className="mx-3 btn btn-danger">Reset</button>
        <button onClick={()=>dispatch(increment())} className="mx-3 btn btn-success">Increment</button>

      </div>
<div className="d-flex justify-content-between mt-3 w-100">
      <input onChange={e=>setAmount(e.target.value)} value={amount||""} className='form-control' type="text" placeholder='enter the amount to be incremented' />
      <button onClick={handleIncrement} className='btn btn-primary ms-3' >Increment by amount</button>
      </div>
        </div>


    </div>
  )
}

export default Counterapp