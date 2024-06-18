//import React from "react";
import BingMapsReact from "bingmaps-react";

function Location() {
  const pushPin = {
    center: {
      latitude: 27.98785,
      longitude: 86.925026,
    },
    options: {
      title: "Mt. Everest",
    },
  };

  const pushPins = [pushPin];
  return (
    <BingMapsReact
      bingMapsKey="AsenBeLdZXYrSqHN-CZ5Je_Omm7MFw4yn0gTcwiceG8CyfVWRzjXuC7teKjFSdEZ"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="700px"
      // viewOptions={{
      //   center: { latitude: 42.360081, longitude: -71.058884 },
      //   mapTypeId: "grayscale",
      // }}pushPins={pushPins}
      pushPins={pushPins}
      viewOptions={{ center: { latitude: 27.98785, longitude: 86.925026 } }}
    />
  );
}
export default Location;
