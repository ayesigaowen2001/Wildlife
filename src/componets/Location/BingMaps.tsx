import React, { useEffect, useRef } from "react";
import { Map, Pushpin } from "bingmaps-react";
//import { Microsoft } from "bingmaps-react/dist/types";

interface CoordinatesProps {
  longitudes: number[];
  latitudes: number[];
}

const CoordinatesDisplay: React.FC<CoordinatesProps> = ({
  longitudes,
  latitudes,
}) => {
  const mapRef = useRef<React.RefObject<Microsoft.Maps.Map>>(null);

  useEffect(() => {
    if (mapRef.current?.current) {
      // Fit the map view to include all the coordinates
      let bounds = Microsoft.Maps.LocationRect.fromLocations(
        longitudes.map(
          (lng, i) => new Microsoft.Maps.Location(latitudes[i], lng)
        )
      );
      mapRef.current.current.setView({ bounds: bounds });
    }
  }, [longitudes, latitudes]);

  return (
    <Map
      ref={mapRef}
      bingmapKey="AsenBeLdZXYrSqHN-CZ5Je_Omm7MFw4yn0gTcwiceG8CyfVWRzjXuC7teKjFSdEZ"
      center={{ latitude: 0, longitude: 0 }}
      zoom={2}
      style={{ height: "500px", width: "100%", position: "relative" }}
    >
      {longitudes.map((longitude, index) => (
        <Pushpin
          key={index}
          location={{ latitude: latitudes[index], longitude: longitude }}
          color="red"
          text={`${index + 1}`}
        />
      ))}
    </Map>
  );
};

export default CoordinatesDisplay;
