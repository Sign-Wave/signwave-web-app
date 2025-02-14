import React, { useState, useEffect } from "react";

const Translate = () => {
  const [sensorValues, setSensorValues] = useState({});
  const [translatedLetter, setTranslatedLetter] = useState("...");

  // Function to fetch flex sensor values from Flask backend
  const fetchSensorData = async () => {
    try {
      const response = await fetch("http://172.20.10.6:5000/sensor"); // Replace with your Raspberry Pi's IP
      const data = await response.json();
      setSensorValues(data);
      translateSign(data);
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  };

  // Function to map flex sensor values to ASL letters
  const translateSign = (data) => {
    // Define min and max ranges for each letter
    const thresholds = {
      A: [
        [0, 200], // Flex 1
        [800, 1200], // Flex 2
        [800, 1200], // Flex 3
        [800, 1200], // Flex 4
        [800, 1200], // Flex 5
      ],
      B: [
        [0, 200], // Flex 1
        [0, 200], // Flex 2
        [0, 200], // Flex 3
        [0, 200], // Flex 4
        [800, 1200], // Flex 5
      ],
      C: [
        [800, 1200], // Flex 1
        [800, 1200], // Flex 2
        [800, 1200], // Flex 3
        [800, 1200], // Flex 4
        [800, 1200], // Flex 5
      ],
      // Add more letters as needed
    };

    let detectedLetter = "?"; // Default if no match
    for (const [letter, ranges] of Object.entries(thresholds)) {
      const isMatch = ranges.every(([min, max], index) => {
        const sensorValue = data[`flex_value_${index}`];
        return sensorValue >= min && sensorValue <= max;
      });

      if (isMatch) {
        detectedLetter = letter;
        break;
      }
    }

    setTranslatedLetter(detectedLetter);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await fetchSensorData();
      console.log("Fetching sensor data..."); // Log fetch attempts
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    console.log("Updated sensor values:", sensorValues); // Log the values when they update
  }, [sensorValues]);

  return (
    <div>
      <h1>ASL Translator</h1>
      <h2>Detected Letter: {translatedLetter}</h2>
      <pre>{JSON.stringify(sensorValues, null, 2)}</pre>{" "}
      {/* Display raw data for debugging */}
    </div>
  );
};

export default Translate;
