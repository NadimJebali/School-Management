"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "PTA Meeting",
    time: "12:00 PM - 2:00 PM",
    description: "Monthly meeting to discuss curriculum and student progress.",
  },
  {
    id: 2,
    title: "Science Fair",
    time: "10:00 AM - 1:00 PM",
    description: "Annual science fair showcasing student projects.",
  },
  {
    id: 3,
    title: "Math Workshop",
    time: "3:00 PM - 4:30 PM",
    description: "Hands-on workshop on applied math techniques.",
  },
];

export default function EvenCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
      {/* Calendar Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Event Calendar
      </h2>

      {/* Calendar Component */}
      <Calendar
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
      />

      {/* Events Header */}
      <div className="flex items-center justify-between mt-6 mb-2">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
        <Image src="/moreDark.png" alt="more options" width={20} height={20} />
      </div>

      {/* Event List */}
      <div className="flex flex-col gap-4">
        {events.map((event, idx) => (
          <div
            key={event.id}
            className={`p-4 rounded-lg border border-gray-200 shadow-sm ${
              idx % 2 === 0 ? "border-t-4 border-t-[#C3EBFA]" : "border-t-4 border-t-[#CFCEFF]"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-900">{event.title}</h4>
              <span className="text-sm text-gray-600">{event.time}</span>
            </div>
            <p className="text-sm text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
