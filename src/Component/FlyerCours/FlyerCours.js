import React from "react";
import "./FlyerCours.css";
import { Link } from "react-router-dom";

const GlowingHoverCard = () => {
  const schedule = [
    {
      day: "Martes",
      courses: [
        { course: "Yoga", time: "10:00 AM - 11:30 AM", link: "/yoga" },
        { course: "Yoga", time: "07:20 PM - 8:50 PM", link: "/yoga" },
      ],
    },
    {
      day: "Jueves",
      courses: [{ course: "Yoga", time: "10:00 AM - 11:30 AM", link: "/yoga" }],
    },
    {
      day: "Sabado",
      courses: [
        { course: "Yoga", time: "08:00 AM - 09:30 AM", link: "/yoga" },
        { course: "Vraja Yoga", time: "11:00 AM - 12:30 PM", link: "/iky" },
      ],
    },
  ];

  return (
    <div className="container-calendar">
      <div className="card">
        <div className="schedule">
          {schedule.map((entry, index) => (
            <div key={index} className="schedule-day">
              <span className="day">{entry.day}</span>
              <div className="courses">
                {entry.courses.map((course, i) => (
                  <div key={i} className="schedule-entry">
                    <Link to={course.link} className="course">
                      {course.course}
                    </Link>
                    <span className="time">{course.time}</span>
                  </div>
                ))}
              </div>
              {index < schedule.length - 1 && <hr className="divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlowingHoverCard;
