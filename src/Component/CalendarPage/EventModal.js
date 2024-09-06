import React, { useState, useEffect } from "react";
import "./EventModal.css";

export default function EventModal({
  isOpen,
  initialSlot,
  event,
  onClose,
  onSave,
  onDelete,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (initialSlot) {
      setStartDate(initialSlot.start.toISOString().split("T")[0]);
      setStartTime(
        initialSlot.start.toTimeString().split(" ")[0].substring(0, 5)
      );
      setEndDate(initialSlot.end.toISOString().split("T")[0]);
      setEndTime(initialSlot.end.toTimeString().split(" ")[0].substring(0, 5));
    }
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setStartDate(event.start.toISOString().split("T")[0]);
      setStartTime(event.start.toTimeString().split(" ")[0].substring(0, 5));
      setEndDate(event.end.toISOString().split("T")[0]);
      setEndTime(event.end.toTimeString().split(" ")[0].substring(0, 5));
    }
  }, [initialSlot, event]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{event ? "Edit Event" : "New Event"}</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button
          onClick={() =>
            onSave(title, description, startDate, startTime, endDate, endTime)
          }
        >
          {event ? "Save Changes" : "Add Event"}
        </button>
        {event && (
          <button
            onClick={() => onDelete(event.id)}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete Event
          </button>
        )}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
