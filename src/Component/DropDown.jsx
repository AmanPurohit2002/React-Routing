import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import Panel from "./Panel";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedElement = options.map((val, indx) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(val)}
        key={indx}
      >
        {val.label}
      </div>
    );
  });

  //updating the title
  // let content="Heading";
  // if(selectedOption) content=selectedOption.label;
   const icon=(
    <span>
      {isOpen ? <GoChevronDown className="text-lg"/> : <GoChevronRight className="text-lg"/>}
    </span>
   )

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Heading"}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedElement}</Panel>}
    </div>
  );
};

export default DropDown;
