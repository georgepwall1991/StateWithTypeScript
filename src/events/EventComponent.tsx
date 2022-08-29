import React from "react";

const EventComponent: React.FC = () => {

    const onChanged = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    const onDragStart = (dragEvent : React.DragEvent<HTMLDivElement>) => {
        console.log(dragEvent);
    };

    return <div>
        <input onChange={onChanged}/>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
};

export default EventComponent;