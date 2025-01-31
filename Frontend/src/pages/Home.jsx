import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <section 
        className="hero" 
        style={{ backgroundImage: "url('https://iso.500px.com/wp-content/uploads/2015/08/travel_cover-1500x1000.jpeg')" }}
      >
        <div className="hero-text">
          <h2>Your Next Adventure Awaits</h2>
          <p>Discover the best places in the India and start your wonderful journey.</p>
          
        
        </div>
      </section>

      <section id="destinations" className="destinations">
        <h2 className="section-title" onClick={() => navigate("/destinations")} style={{ cursor: "pointer" }}>Featured Destinations</h2>
        <div className="destinations-flex">
          <div className="destination-card" onClick={() => navigate("/destinations")}>
            <img src="https://tcsg.in/uploads/places/850X450/kumarakom_1631933897-6470e.jpg" alt="Kerala Backwaters" />
            <h3>Kerala Backwaters</h3>
          </div>
          <div className="destination-card" onClick={() => navigate("/destinations")}>
            <img src="https://th.bing.com/th/id/R.05fe03705aac28bb0ef64d437a21fb0d?rik=fXPxtujzcEjwVw&riu=http%3a%2f%2ftraveltrip2rajasthan.com%2fwp-content%2fuploads%2f2020%2f01%2fMAHAL-1.jpg&ehk=qez9H0GXdwAMqm3FfkCfqKxG8%2fCIaZuO8NFrSfHjasM%3d&risl=&pid=ImgRaw&r=0" alt="Rajasthan" />
            <h3>Rajasthan</h3>
          </div>
          <div className="destination-card" onClick={() => navigate("/destinations")}>
            <img src="https://www.tourmyindia.com/states/goa/image/goa-home-banner.webp" alt="Goa Beaches"/>
            <h3>Goa Beaches</h3>
          </div>
          <div className="destination-card" onClick={() => navigate("/destinations")}>
            <img src="https://img.freepik.com/premium-photo/beautiful-taj-mahal-sunrise-its-reflection-india-agra_400112-861.jpg?w=2000" alt="Taj Mahal" />
            <h3>Uttar Pradesh</h3>
          </div>
        </div>
      </section>

      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }

        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero {
          background-size: cover;
          background-position: center;
          height: 50vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .hero-text h2 {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .hero-text p {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .cta-button {
          padding: 15px 30px;
          background-color: #f5a623;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: #ff8e00;
        }

        .destinations {
          padding: 50px 20px;
          text-align: center;
        }

        .section-title {
          font-size: 30px;
          margin-bottom: 30px;
          color: green;
        }

        .destinations-flex {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .destination-card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 300px;
          text-align: center;
        }

        .destination-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .destination-card h3 {
          padding: 15px;
          background-color: #2a3d55;
          color: white;
          margin: 0;
        }

       .footer {
          background-color: #2a3d55;
          color: white;
          text-align: center;
          padding: 30px 20px;
        }
        .footer-logos {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 20px;
        }
        .footer-info p {
          margin: 5px 0;
        }
        .footer-social {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }
        .footer-copyright {
          margin-top: 20px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Home;
