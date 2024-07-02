import { useContext, useState } from "react";
import { EventContext } from "../lib/Context";
import { IEvent } from "../lib/types";
import { CopyModal } from "./CopyModal";

export const EventList: React.FC = () => {

    const context = useContext(EventContext);
    if (!context) {
        throw new Error("Out of provider...");
    }

    const { state } = context;
    const [selectedEvent, setSelectedEvent] = useState<IEvent | undefined>(undefined);

    return <>
        <h1>Event List</h1>
        <div className="list">
            {
                state.events.map(event => <div key={event.id}>
                    <img src={event.cover} />
                    <p>{event.title}</p>
                    <small>{event.type} by <strong>{event.composer}</strong></small>
                    <p>{event.date} at {event.time}</p>
                    <button onClick={() => setSelectedEvent(event)}>Copy</button>
                </div>)
            }
        </div>
        {selectedEvent && <CopyModal event={selectedEvent} onClose={() => setSelectedEvent(undefined)} />}
    </>
}
