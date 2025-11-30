import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
// import '../styles/ScedulePage.css';


function SchedulePage({ isLargeScreen }) {
  const [selectedDay, setSelectedDay] = useState('Friday'); 

  // Schedule data for each day
  const schedule = {
    Friday: (
      <>
        <h2>Fredag 1. Mai - Velkomen</h2>
        <p>Frå morgonen: Topptur for dei ivrigaste (nærmare info kjem for dei interesserte)</p>
        <p>Ettermiddag: Velkomen til <a href="https://maps.app.goo.gl/7LNqqnpECT51Sc8HA ">Hardingasete</a> og innsjekk</p>
       
          <p>Velkomst og bli kjend kveld:</p>  
          <p>Middag, quiz, mingling, stamp og badstue. Baren stenger kl. 00.00</p>
            
        
        
      </>
    ),
    Saturday: (
      <>
        <h2>Laurdag 2. Mai – Bryllupsdag</h2>
        <p>Morgon: Frokost, Sted: Hardingasete</p>
        <p>13.00 – vigsel i <a href="https://maps.app.goo.gl/1J4BAikCo11v41rQ7">Hatlestrand kyrkje</a> (Ragnhild sin heimplass)</p>
        <p>Ettermiddag/kveld/natt på Hardingasete: Mottaking, middag og fest</p>
      </>
    ),
    Sunday: (
      <>
        <h2>Sundag 3. Mai – Takk for no</h2>
        <p>Brunsj, utsjekk og avreise</p>
      </>
    ),
  };

  return (
    <div className="right-sec">
      {isLargeScreen} 
      <div className="schedule-navigation">
        <button onClick={() => setSelectedDay('Friday')} className={selectedDay === 'Friday' ? 'active' : ''}>
          Fredag
        </button>
        <button onClick={() => setSelectedDay('Saturday')} className={selectedDay === 'Saturday' ? 'active' : ''}>
          Lørdag
        </button>
        <button onClick={() => setSelectedDay('Sunday')} className={selectedDay === 'Sunday' ? 'active' : ''}>
          Søndag
        </button>
      </div>
      <div className="right-content">
        {schedule[selectedDay]} {/* Render the schedule for the selected day */}
      </div>
      <footer className="small-footer">
        <p>Aslak og Ragnhild 2026</p>
      </footer>
    </div>
    
  );
}

export default SchedulePage;