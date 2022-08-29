import React, {useState} from "react";

const users = [{name: 'Sarah', age: 20}, {name: 'Alex', age: 20}, {name: 'Michael', age: 20},

];

const UserSearch: React.FC = () => {
    const [personName, setPersonName] = useState<string>('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

const onClick = () => {
    const foundUser = users.find((user) => {
        return user.name === personName;
    });

    setUser(foundUser);
};


return (<div>
    User Search
    <input value={personName} onChange={e => setPersonName(e.target.value)}/>
    <button onClick={onClick}>Find User</button>
    <div>
        {user && user.name}
        {user && user.age}
    </div>
</div>);

}

export default UserSearch;
