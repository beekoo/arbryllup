import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import '../styles/PlaceStayPage.css';
// import '../styles/App.css'



function PlaceStayPage({ isLargeScreen }) {
  const [selectedSection, setSelectedSection] = useState('Place'); // Default to "Place"

  // Content for Place and Stay sections
  const sections = {
    Place: (
      <>
        <h2>Hardingasete – fest og overnattingsstad for helga</h2>
        <p>
          Hardingasete er ein selskapsplass med restaurerte gamle hus og løer frå heile vestlandet lokalisert på Ljones mellom Strandebarm og Tørrvikbygd omtrent midt i Hardangerfjorden.<br/> 
          Ein kan lese meir om staden her <a href="https://www.hardingasete.no/">Hardingasete</a>.
        </p>
        <p>
          Hatlestrand kyrkje – vielse i Ragnhild si heimbygd.<br/>
          Ca. 45 min køyring sør for Hardingasete. 
        </p>
        <img className='stayPhoto' src="/arbryllup/img/hardanger.JPG" alt="" />
      </>
    ),
    Stay: (
      <>
        <h2>Overnatting på Hardingasete</h2>
        <p>
          Me ynskjer at så mange som mogleg overnattar på Hardingasete i saman med oss.
          Hardingasete er i realiteten eit hotell, sjølv om det framstår som eit tun med mange hus og fin atmosfære.<br/>  
        </p>
        <p>  
          Prisen for to overnattingar med frukost er kr 2000. Oppgjer for overnatting og frukost gjerast via oss. <br/> 
          Nærmare informasjon om dette kjem seinare.
        </p>
        {/* <img className='stayPhoto' src="/img/hardingasete.jpg" alt="" />
        <img className='stayPhoto' src="/img/hardingasete2.jpg" alt="" />
        <img className='stayPhoto' src="/img/hardingasete3.jpg" alt="" />
        <img className='stayPhoto' src="/img/hardingasete4.jpg" alt="" /> */}
        
      
      </>
    ),
  };

  return (
    <div className="right-sec">
      {isLargeScreen} {/* Render Navbar for large screens */}
      <div className="place-navigation">
        <button
          onClick={() => setSelectedSection('Place')}
          className={selectedSection === 'Place' ? 'active' : ''}
        >
          Sted
        </button>
        <button
          onClick={() => setSelectedSection('Stay')}
          className={selectedSection === 'Stay' ? 'active' : ''}
        >
          Overnatting
        </button>
      </div>
      <div className="right-content">
        {sections[selectedSection]} {/* Render the selected section */}
        
      </div>
      <footer className="small-footer">
        <p>Aslak og Ragnhild 2026</p>
      </footer>
    </div>
  );
}

export default PlaceStayPage;