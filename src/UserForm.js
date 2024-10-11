import { useEffect, useState } from "react";

function UserForm({addUser, isSend, isEdit, selectUser, updatUser}) {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        setId(0);
        setName('');
    }, [isSend]);

    useEffect(() => {
        setId(selectUser.id);
        setName(selectUser.name);
    }, [selectUser])

    return(
        <div>
            <div>ID : <input type="number" value={id} onChange={(e) => setId(e.target.value)} /></div>
            <idv>Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                        <button onClick={() => {isEdit ? updatUser({id, name}) :addUser({id, name})}}>{
                                isEdit ? 'Update' : 'Send'
                        }</button>
            </idv>
        </div>
    );
}

export default UserForm;