import React, { useState } from "react";
import TemplateDemo from "../../componets/DisplayData/Content";
import MainContent from "../../componets/DisplayData/MainContent";

interface Choice {
  name: string;
  code: string;
}

const App: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  return (
    <div>
      <TemplateDemo onChoiceSelect={setSelectedChoice} />
      <MainContent selectedChoice={selectedChoice} />
    </div>
  );
};

export default App;
