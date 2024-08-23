import Cards from "./compenents/Cards";
import { useState } from "react";

function App() {
  const [isAnnual, setIsAnnual] = useState(false); // Track toggle state

  // Handler for toggle change
  const handleToggleChange = () => {
    setIsAnnual((prevState) => !prevState);
  };

  return (
    <div className="wrapper">
      <div className="header-section">
        <p className="title">Our Pricing</p>
        <div className="pricing-toggle">
          <span>Annually</span>
          <input
            type="checkbox"
            id="toggle"
            className="toggle-checkbox"
            checked={isAnnual}
            onChange={handleToggleChange}
          />
          <label htmlFor="toggle" className="toggle-label">
            <span className="toggle-slider"></span>
          </label>
          <span>Monthly</span>
        </div>
      </div>

      {/* PRICING CARDS */}
      <Cards isAnnual={isAnnual} />
    </div>
  );
}

export default App;
