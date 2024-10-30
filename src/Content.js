import React from 'react'

const Content = () => {
    const handleNameChange = ()=>{
        const names =["Tarik","Louison","Samantha"]
        const int = Math.floor(Math.random()*3)
        return names[int]
      }
      const handleClick = () => {
        console.log("You clicked it!")
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
         Hello {handleNameChange()}
        </p>
        <button onClick={handleClick}>Click</button>
        <button onClick={() => handleClick2('Tarik')}>Click</button>
        <button onClick={(e) => handleClick3(e)}>Click</button>
    </main>
  )
}

export default Content
