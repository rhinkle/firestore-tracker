import React, {EventHandler, FormEvent, useState} from "react";
import {v4 as uuidv4} from 'uuid';

interface Entry {
    id: string;
    task: string;
    startDate: Date;
    endDate?: Date;
}

function App() {
    const initState: Entry[] = [];
    initState.push({
        id: uuidv4(),
        task: "hello",
        startDate: new Date()
    });

    const [timeEntries, setTimeEntries] = useState(initState)

    function handleClick(event: any) {
        event.preventDefault();
        const [task, button] = event.target
        console.log(task.value);

        const something: Entry = {
            id: uuidv4(),
            task: task.value,
            startDate: new Date()
        }
        setTimeEntries([
            ...timeEntries,
            something
        ]);
    }

    return (
        <>
            <ul className="m-4 p-4 border-solid border-2 border-black">
                {timeEntries.map((entry) => (
                    <li key={entry.id}>
                        <span className="task">{entry.task}</span>
                        <span className="time">{entry.startDate.toDateString()}</span>
                    </li>
                ))}
            </ul>
            <div className="m-5 p-4 flex border-solid border-2 border-black">
                <form onSubmit={handleClick}>
                    <div className="flex-1">
                        <label>
                            <span>Task:</span>
                            <input name="taskName" type="text" className="p2"/>
                        </label>
                    </div>
                    <div className="flex-1">
                        <button className="w-full p-15 bg-blue-500" type="submit">Start</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;