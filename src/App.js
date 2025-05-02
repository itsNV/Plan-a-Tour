import React, { useState } from "react";
import data from "./data.js";
import Tours from "./components/Tours.js";
import { AnimatedBackground } from "animated-backgrounds";


const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => {
      return tour.id !== id;
    });

    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Available</h2>
        <button className="refresh-btn" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="bg-transparent text-white">
      <AnimatedBackground animationName="particleNetwork" blendMode="difference" />
      
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
