"use client";

import { Calendar, momentLocalizer, View, Views, NavigateAction } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({data}:{data:{title:string; start:Date; end:Date}[];}) => {
  const [view, setView] = useState<View>(Views.WEEK); 
  const [date, setDate] = useState<Date>(new Date());

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const handleNavigate = (newDate: Date, _view: View, _action: NavigateAction) => {
    setDate(newDate);
  };


  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["week", "day"]}
      view={view}
      date={date}
      style={{ height: "96%" }}
      onView={handleOnChangeView}
      onNavigate={handleNavigate}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 19, 0, 0)}
    />
  );
};

export default BigCalendar;
