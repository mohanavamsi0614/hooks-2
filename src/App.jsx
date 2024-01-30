import { useRef, useState } from 'react'
import './App.css'
import Reduser from './Reduser'

function App() {
  const focu = useRef()
  const [state,setstate]=useState("")
  const [list,setlist]=useState([])

  return (
    <>
    <input onChange={(e)=>{
      setstate(e.target.value)
    }} onKeyDown={(e)=>{
      if (e.key=="Enter"){
        setlist([...list,state])
        setstate("")
      }
    }} ref={focu} value={state}/>
    {
      list.map((i,index)=>(
      <Reduser key={index} text={i}/>
    ))}
    <hr></hr>
    <button onClick={()=>{focu.current.focus()}}>go up</button>
      
    </>
  )
}

export default App
