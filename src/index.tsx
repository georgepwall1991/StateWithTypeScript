import React from 'react';
import ReactDOM from 'react-dom/client';
import EventComponent from "./events/EventComponent";

const App = () => {
    return (
        <div>
            <EventComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
