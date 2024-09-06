import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import initialEvents from "./Events";
import EventModal from "./EventModal.js";
import { FaTrash } from "react-icons/fa"; // Import the trash icon
import "./ReactBigCalendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setSelectedSlot({
      start: event.start,
      end: event.end,
    });
    setIsModalOpen(true);
  };

  const handleSaveEvent = (
    title,
    description,
    startDate,
    startTime,
    endDate,
    endTime
  ) => {
    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
    const updatedEvent = {
      ...selectedEvent,
      start,
      end,
      title,
      description,
    };

    if (selectedEvent) {
      setEventsData(
        eventsData.map((event) =>
          event.id === selectedEvent.id ? updatedEvent : event
        )
      );
    } else {
      updatedEvent.id = new Date().getTime();
      setEventsData([...eventsData, updatedEvent]);
    }
    setIsModalOpen(false);
    setSelectedSlot(null);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEventsData(eventsData.filter((event) => event.id !== eventId));
  };

  const eventStyleGetter = (event) => {
    const style = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px",
      backgroundColor: "#B42424",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
    };
    return { style };
  };

  const EventComponent = ({ event }) => {
    return (
      <span>
        {event.title}
        <FaTrash
          style={{ marginLeft: "10px", cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the event click
            handleDeleteEvent(event.id);
          }}
        />
      </span>
    );
  };

  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        components={{ event: EventComponent }}
      />
      <EventModal
        isOpen={isModalOpen}
        initialSlot={selectedSlot}
        event={selectedEvent}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSlot(null);
          setSelectedEvent(null);
        }}
        onSave={handleSaveEvent}
      />
    </div>
  );
}
