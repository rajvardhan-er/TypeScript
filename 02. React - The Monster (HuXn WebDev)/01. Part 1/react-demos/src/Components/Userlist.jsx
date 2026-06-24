import React from 'react'

const Userlist = () => {

    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 26},
        {id: 3, name: "Charlie", age: 27}
    ]
  return (
    <div>
      {users.map (user =>(

        <div key = {user.id}> 

        <h1>Id: {user.id}</h1>

        <h1> Name: {user.name}</h1>
        
        <h1>Age: {user.age}</h1></div>
      ))}
    </div>
  )
}

export default Userlist
