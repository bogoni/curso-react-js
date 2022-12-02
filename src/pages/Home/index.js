import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, selectCounter } from '../../store/counter/counterSlice'

const Home = () =>{
  const dispatch = useDispatch()
  const counter = useSelector(selectCounter)
  const { user } = useContext(UserContext)
  return (
    <>
      <h1>Home</h1>
      <p>Você está logado como:{user}</p>
      <p>Contador: {counter}</p>
      <button onClick={()=> dispatch(incrementCounter())}>click</button>
    </>
  )
}

export default Home