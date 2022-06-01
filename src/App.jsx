import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';


const App =()=> {
  const[currentWeek, setCurrentWeek]= useState(new Date())
  const weekDates = generateWeekRange(getWeekStartDate(currentWeek));

  const todayWeek=()=>setCurrentWeek(new Date())
  const prevWeek=()=>setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate()-7)))
  const nextWeek=()=>setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate()+7)))



  return (
      <>
        <Header weekDates={weekDates}
                todayWeek={todayWeek}
                prevWeek={prevWeek}
                nextWeek={nextWeek}
        />

        <Calendar weekDates={weekDates}

        />
      </>
  )
}


export default App;














/*
const date =new Date
console.log(new Date(date.setDate(date.getDate() - 7)))  //Wed May 25 2022 02:46:40 GMT+0300 (Eastern European Summer Time)

console.log(date.getDate())                          //1 - число от 1 до 31 месяца
console.log(date.getMonth())                         //5 -Целое число от 0 до 11, обозначающее месяц указанной даты по местному времени. 0 соответствует январю, 1 — февралю и так далее.
console.log(date.getDate() - 7)                      //-6
console.log(date.setDate(date.getDate() - 7))        //1653435857030 -число милисекунд с 1.01.1970
console.log(date.setDate(25))                        //1653435857030

console.log(new Date(date.setDate(date.getDate() - 7)))   //Wed May 18 2022 02:45:19 GMT+0300 (Eastern European Summer Time)
console.log(new Date(date.setDate(date.getDate() - 7)))   //Wed May 11 2022 02:49:03 GMT+0300 (Eastern European Summer Time)
console.log(new Date(date.setDate(-6)))                   //Sun Apr 24 2022 02:49:27 GMT+0300 (Eastern European Summer Time)
*/










//setState

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };
//
//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }
//
// export default App;
