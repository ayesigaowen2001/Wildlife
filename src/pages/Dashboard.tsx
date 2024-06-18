import React, { useState } from "react";
import Navbar from "../componets/Menubars/Menubar";
import TemplateDemo from "../componets/DisplayData/Content";
import "../App.css";
import MainContent from "../componets/DisplayData/MainContent";
import Notifications from "../componets/Notifications/Notifications";

interface Choice {
  name: string;
  code: string;
}

const Basic: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid">
        <div className="col-2">
          <div className="text-center p-3 border-round-sm bg-gray-800 font-bold">
            <TemplateDemo onChoiceSelect={setSelectedChoice} />
          </div>
        </div>
        <div className="grid">
          <div className="col-8" style={{ width: "800px", height: "500px" }}>
            <div className="text-center p-2 border-round-sm bg-blue-100 font-bold">
              <MainContent selectedChoice={selectedChoice} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="text-center p-2 border-round-sm primary-reverse font-bold">
            <Notifications />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
