import { useState } from "react";

const DropDown = ({ options,selectedOption,onChange }) => {
    const [isOpen,setIsOpen]=useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen);
    }

    const handleOptionClick=(option)=>{
        setIsOpen(false);
        onChange(option);
    }

    const renderedElement = options.map((val, indx) => {
        return( 
            <div onClick={()=> handleOptionClick(val)} key={indx}>{val.label}</div>
        )
    });


    //updating the title
    let content="Heading";
    if(selectedOption) content=selectedOption.label;

  return (
    <div>
      <div onClick={handleClick}>
        {content}
      </div>
      {isOpen && <div>{renderedElement}</div>}
    </div>
  );
};

export default DropDown;
