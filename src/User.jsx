
function User({name, pic, address, id, deleteButton, editButton}) {
    return ( 
        <div className="user-container">
            <img src={pic} alt={name} className="user-profile-pic"/>
            <h2 className="user-name">{name}</h2>
            <h3>{address}</h3>
            {deleteButton}
            {editButton}
        </div>
     );
}

export default User;