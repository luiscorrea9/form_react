import React from 'react'

const UserTable = (props) => {
  
  return (


    <table className = "table table-success table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        props.users.length > 0 ?
        props.users.map(user=>(
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.lastname}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => {props.editRow(user)}}>Edit</button>
          <button 
            className="btn btn-danger" 
            onClick={() => {props.deleteUser(user.id)}}>Delete</button>
        </td>
      </tr>
        )) :(
          <tr>
          <td className="messageToUsers" colSpan={6}>No users</td>
          </tr>
        )
      }
      
    </tbody>
  </table>
  )
}

export default UserTable