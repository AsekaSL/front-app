import UserForm from "./UserForm.js";
import UserTable from "./UsrTable.js";

const users = [{
    id: 1, 
    name: "Saranga"
  },{
    id: 2, 
    name: "Ravindu"
  },{
    id: 3, 
    name: "Rukshan"
  }];
  

function User() {
    return(
        <div>
            <UserForm/>
            <UserTable users={users} />
        </div>
    );
}

export default User;