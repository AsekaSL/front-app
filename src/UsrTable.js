function UserTable({users}) {
    return(
        <div>
            {
                users.map(user => {
                    return(
                        <h1>
                            {user.id}. {user.name} 
                            <button>
                                Update
                            </button>
                            <button>
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