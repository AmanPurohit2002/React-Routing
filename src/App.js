import { useState } from "react";
import DropDown from "./Component/DropDown";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <DropDown
        options={options}
        value={selectedOption}
        onChange={handleOptionClick}
      />
    </div>
  );
};

export default App;
