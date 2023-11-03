
import React, {useState} from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid';
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Luis', lastname: 'Correa', age: '20', email: 'kfwfew@hotmail.com', phone: '300344322' },
    { id: uuidv4(), name: 'Daniel', lastname: 'Hernandez', age: '24', email: 'fewfwefd@hotmail.com', phone: '309999322' },
    { id: uuidv4(), name: 'Julian', lastname: 'Zuluaga', age: '22', email: 'nadfdfdsa@hotmail.com', phone: '30323444322' },
  ]

  const [users, setUsers] = useState(usersData);

  
  const addUser = (user) =>{
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }


  const deleteUser = (id) =>{
    setUsers(users.filter(user => user.id != id))
  }

  const [editing, setEditing] = useState(false); 

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', lastname: '', age: '', email: '', phone: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, lastname: user.lastname, age: user.age, email: user.email, phone: user.phone
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  
  return (
    <div className="container">
      <h1>Form</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUser
                currentUser={currentUser}
                updateUser={updateUser}/>
              </div>
              ) : (
                <div>
                  <h2>Add user</h2>
                  <AddUser addUser={addUser}/>
                </div>
              )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}

export default App;
