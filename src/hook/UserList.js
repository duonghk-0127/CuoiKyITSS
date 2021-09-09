import { useState } from "react";

function UserList(user_list) {
    const [listName, setListName] = useState(user_list);
    const [name, setName] = useState('');
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    
}

export default UserList;