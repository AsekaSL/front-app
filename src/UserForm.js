import { useState } from "react";

function UserForm() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    return(
        <div>
            <div>ID : <input type="number" value={id} onChange={(e) => setId(e.target.value)} /></div>
            <idv>Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                        <button>Send</button>
            </idv>
        </div>
    );
}

export default UserForm;