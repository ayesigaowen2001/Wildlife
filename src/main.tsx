import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
declare namespace Microsoft {
  namespace Maps {
    class Location {
      constructor(latitude: number, longitude: number);
    }
    class LocationRect {
      extend(location: Location): void;
    }
    class Map {
      setView(options: { bounds: LocationRect }): void;
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
