import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./UserForm.js";
import UserTable from "./UsrTable.js"; 

function User() {

  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState({});
  const [isSend, setIsSend] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const getUser = () => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
        setIsSend(false);
      })
      .catch(error => {
        console.log(error)
      });
  };

  const addUser = (data) => {
    axios.post('http://localhost:3001/adduser', data)
      .then(response => {
        setIsSend(true);
        getUser();
      })
      .catch(error => {
        console.log(error)
      });
  };

  const updatUser = (data) => {
    axios.put('http://localhost:3001/updateuser', data)
      .then(response => {
        setIsSend(true);
        getUser();
      })
      .catch(error => {
        console.log(error)
      });
  };

  const deleteUser = (data) => {
    axios.delete(`http://localhost:3001/deleteuser?id=${data.id}`)
      .then(response => {
        setIsSend(true);
        getUser();
      })
      .catch(error => {
        console.log(error)
      });
  };

  useEffect(() => {
      getUser();
  }, [])

  return(
      <div>
          <UserForm updatUser={updatUser}  addUser={addUser} isSend={isSend} selectUser={selectUser} isEdit={isEdit}/>
          <UserTable deleteUser={deleteUser} users={users} setIsEdit={(data) => setIsEdit(data)} setSelectUser={(data) =>  setSelectUser(data)} />
      </div>
  );    
}

export default User;