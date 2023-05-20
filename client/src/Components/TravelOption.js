import className from "classnames";
import React from "react";

function TravelOption(props) {
  const travelOptionClasses = className({
    "py-4": true,
    "px-6": true,
    "rounded-lg": true,
    "shadow-lg": true,
    group: true,
    "hover:bg-gray-300": true,
    "cursor-pointer": true,
    "duration-500": true,
    "bg-gray-300": props.element.type === props.travelForm.type,
    "bg-gray-100": props.element.type !== props.travelForm.type,
  });

  return (
    <div
      className={travelOptionClasses}
      onClick={() => {
        props.setTravelForm(props.element);
      }}
    >
      {props.icon}
      <div className="text-md text-gray-500 group-hover:text-gray-700 duration-500">
        {props.value}
      </div>
    </div>
  );
}

export default TravelOption;
