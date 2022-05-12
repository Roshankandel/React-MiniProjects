import { React, useState } from 'react'

const App = () => {

  const [name, setName] = useState("");


  return (
    <div style={{ marginTop: 20, textAlign: 'center', alignItems: 'center' }}>
      <input onChange={(e) => {
        setName(e.target.value);
      }} type="text" placeholder="Enter your name:" style={{ padding: 10 }}></input>
      <h3>Your name is:{name}</h3>
    </div>
  )

}

export default App
