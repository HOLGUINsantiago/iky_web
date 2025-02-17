import React from "react";
import "./FlyerCours.css";
import { Link } from "react-router-dom";

const GlowingHoverCard = () => {
  const schedule = [
    {
      day: "Martes",
      courses: [
        { course: "Yoga", time: "9:00 AM - 11 AM", link: "/yoga" },
        { course: "Yoga", time: "07:20 PM - 08:45 PM", link: "/yoga" },
      ],
    },
    {
      day: "Jueves",
      courses: [{ course: "Yoga", time: "9:00 AM - 11:00 AM", link: "/yoga" }],
    },
    {
      day: "Sabado",
      courses: [
        { course: "Yoga", time: "08:00 AM - 10:00 AM", link: "/yoga" },
        {
          course: "IKYnesis / Feldenkrais",
          time: "11:00 AM - 13:00 PM",
          link: "/iky",
        },
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
