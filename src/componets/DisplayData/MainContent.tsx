import React from "react";
import { Card } from "primereact/card";
import Location from "../Location/Location";
import AnimalList from "../../Data/DataVisualisation/AnimalList";
//import { AnimalProvider } from "../../Data/StateManagement/animalContext";
interface Choice {
  name: string;
  code: string;
}

interface MainContentProps {
  selectedChoice: Choice | null;
}

const MainContent: React.FC<MainContentProps> = ({ selectedChoice }) => {
  let content: JSX.Element | null = null;

  if (selectedChoice) {
    switch (selectedChoice.code) {
      case "AU":
        content = <Location />;
        break;
      case "BR":
        content = (
          // <AnimalProvider>
          <AnimalList />
          // </AnimalProvider>
        );
        break;
      // Add more cases for other choices as needed
      default:
        content = null; // Render nothing if no match
    }
  }

  return (
    <div
      className="card flex justify-content-center"
      style={{ height: "100vh" }}
    >
      {selectedChoice && content && (
        <Card className="w-full" title={"My " + selectedChoice.name}>
          {content}
        </Card>
      )}
    </div>
  );
};

export default MainContent;
