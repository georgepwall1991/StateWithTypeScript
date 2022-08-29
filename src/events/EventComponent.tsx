import React from "react";

const EventComponent: React.FC = () => {

    const onChanged = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return <div>
        <input onChange={onChanged}/>
    </div>
};

export default EventComponent;