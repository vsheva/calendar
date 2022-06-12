import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [startDateWeek, setStartDateWeek] = useState(new Date());
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const weekDates = generateWeekRange(getWeekStartDate(startDateWeek));

  const handleNextWeek = () => {
    setStartDateWeek(new Date(startDateWeek.setDate(startDateWeek.getDate() + 7)));
  };
  const handlePrevWeek = () => {
    setStartDateWeek(new Date(startDateWeek.setDate(startDateWeek.getDate() - 7)));
  };
  const handleTodayWeek = () => {
    setStartDateWeek(new Date());
  };

  return (
    <>
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        todayWeek={handleTodayWeek}
        weekDates={weekDates}
        openModal={() => setIsOpenModalWindow(true)}
      />
      <Calendar
        weekDates={weekDates}
        openModal={isOpenModalWindow}
        closeModal={() => setIsOpenModalWindow(false)}
      />
    </>
  );
};

export default App;
