import React from 'react'
import { useState } from 'react'
const Content = () => {
    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)

    const handleNameChange = ()=>{
        const names =["Tarik","Louison","Samantha"]
        const int = Math.floor(Math.random()*3)
        setName(names[int]) 
      }
      const handleClick = () => {
        setCount(count +1)
        setCount(count +1)
        console.log(count)
      }

      const handleClick2 = (name) => {
        console.log(`${name} You clicked it!`)
      }
      const handleClick3 = (e) => {
        console.log(e.target.innerText)
      }

  return (
    <main>
       
        <p onDoubleClick={handleClick}>
         Hello {name}
        </p>
        <button onClick={handleNameChange}>Change name</button>
        <button onClick={handleClick}>Click</button>
        <button onClick={(e) => handleClick3(e)}>Click</button>
    </main>
  )
}

export default Content
