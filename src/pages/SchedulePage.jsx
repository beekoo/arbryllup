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
        <h2>Fredag 1. Mai</h2>
        <h3>Velkomen til bli-kjend-fest</h3>
        <p>Frå morgonen: Topptur til Daurmålsegga 806moh <br />
          En topp mellom Hardangerfjorden og Hålandsdalen med nydelig utsikt mot alt av snøkledde fjell rundt, Folgefonna og mot Bergen og havet. <br /> For de som vil se ruta er en tidligere tur <a href="https://www.strava.com/activities/14173137437">her</a> <br />
          Fra parkeringen er det bare 25 minutter tilbake til Hardingasete etter tur. <br /> 
          Oppmøte blir på <a href="https://maps.app.goo.gl/uLS3YwR7TxSt34hP9">parkingen</a> og vi tar sikte på start i 10-tiden. Endelig tidspunkt kommer torsdag kveld. <br />
          Det er sti, skog og fjellterreng. Skotøy er enten lette fjellsko eller terrengløpesko.
        </p>
        <h3>Ettermiddag</h3>
        <p>Frå kl. 15.00: Velkomen til <a href="https://maps.app.goo.gl/7LNqqnpECT51Sc8HA ">Hardingasete</a> og innsjekk. </p> 
        <p>Frå kl. 16.00: Stamp og badstue etter tur, før middag. Baren er open.</p>
        <h3>Kveld</h3>
        <p>Kl. 19.00: Velkomstmiddag i Årraløa.</p>  
        <p>Utover kvelden: Quiz, mingling. Baren stenger kl. 00.00</p>
            
        <p>Dresscode: Smart casual</p>
        
      </>
    ),
    Saturday: (
      <>
        <h2>Laurdag 2. Mai – Bryllupsdag</h2>
        <h3>Morgon</h3>
        <p>Før frukost: Brudeparets morgonjogg.</p>
        <p>Kl. 09.00 - 10.30: Frukost i Årraløa.</p>
        <p>Kl. 11.30 - 11.45: Avreise vigsel Hatlestrand.</p>
        <h3>Vigsel</h3>
        <p>Kl. 13.00: Vigsel i <a href="https://maps.app.goo.gl/1J4BAikCo11v41rQ7">Hatlestrand kyrkje</a> (Ragnhild sin heimplass) 
        <br></br>Parkering: Ved kyrkja og 200 meter før kyrkja på høgre side, bak gamleskulen (større grusplass).
        <br></br>Enkel lunsj/niste etter kyrkja.
        </p>
        <h3>Bryllupsfest</h3>
        <p>Frå kl. 15.00 - 16.30: Velkomstdrink, mingling og mottaking på Hardingasete.</p>
        <p>Kl. 17.00: Bryllupsmiddag i Bergeløa.</p>
        <p>Frå kl. 21.00: Kaker, kaffe og brurevals i Årraløa.</p>
        <p>Påfølgjande: Fest i Årraløa.</p>
        <p>Natt: Nattmat og festen held fram.</p>

        <p>Dresscode herrer: Smoking/mørk dress, bunad.</p>
        <p>Dresscode damer: kjole, bunad.</p>

        <p>Kveldens toastmaster er Vemund Ravnsborg Gurigard. Ta kontakt på 977 28 118 for å koordinera talar eller underhaldning.</p>
        <p>** Hardingasete har eit skjenkeløyve for alkohol, og det er viktig at reglar for skjenking av alkohol vert følgde av gjestene. Det er ikkje lov å ta med eigen alkohol på Hardingasete sitt uteareal eller andre fellesareal. Alkohol som vert kjøpt i baren kan ein ta med seg over alt. Eigen alkohol inne på hyttene er tillate ;) **</p>
      </>
    ),
    Sunday: (
      <>
        <h2>Sundag 3. Mai – Takk for no</h2>
        <p>Kl. 10.00 - 11.30: Brunsj i Bergeløa.</p>
        <p>Kl. 12.00: Utskjekk og avreise.</p>
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
          Laurdag
        </button>
        <button onClick={() => setSelectedDay('Sunday')} className={selectedDay === 'Sunday' ? 'active' : ''}>
          Sundag
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