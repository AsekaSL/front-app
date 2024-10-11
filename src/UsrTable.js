function UserTable({users, setIsEdit, setSelectUser, deleteUser}) {
    return(
        <div>
            {
                users.map(user => {
                    return(
                        <h1>
                            {user.id}. {user.name} 
                            <button onClick={() => {
                                setSelectUser({id: user.id, name: user.name});
                                setIsEdit(true);
                            }}>
                                Update
                            </button>
                            <button onClick={() => deleteUser({id: user.id, name: user.name})}>
                                Delete
                            </button>
                        </h1>
                    )
                })
            }
            
        </div>
    );
}

export default UserTable;