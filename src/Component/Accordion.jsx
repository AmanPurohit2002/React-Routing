import { useState } from "react";
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';

const Accordion=({item})=>{
    const [expandedIndex,setExpandedIndex]=useState(-1);

    const handleClick=(nextIndex)=>{
        expandedIndex===nextIndex ? setExpandedIndex(-1) :setExpandedIndex(nextIndex);
    }
    

    const renderedElement=item.map((val,indx)=>{
        const isExpanded=indx===expandedIndex;

        const icon=<span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return (
            <div key={indx}>
            <h1 className="flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer" onClick={()=> (handleClick(indx))}>
            {val.label}
            {icon}
            </h1>
            {isExpanded && <div className="p-5 border-b">{val.content}</div>}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">
            {renderedElement}
        </div>
    )
}

export default Accordion;