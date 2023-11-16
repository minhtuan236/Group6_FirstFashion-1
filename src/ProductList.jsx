import User from "./User";
import { useState, useEffect } from 'react';



function ProductList() {

    const [users, setUsers] = useState([]);
    
    const getUsers = () => {
        fetch("https://653f52019e8bd3be29e0421c.mockapi.io/users")
        .then((data) =>data.json())
        .then((userList) => setUsers(userList));
    }

    useEffect(() => getUsers(), []);
    
    return ( 
        <div className="user-container-list">
            {users.map( (user, index) => <User 
                                            name={user.name} 
                                            pic={user.pic} 
                                            address={user.address} 
                                            id={user.id} 
                                            key={index} 
                                            /> )}
        </div>
     );
}

export default ProductList;