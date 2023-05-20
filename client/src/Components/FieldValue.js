import React from "react";

function FieldValue({ field, value }) {
  return (
    <div className="flex gap-4 h-fit w-full my-2">
      <div className="font-semibold text-lg text-gray-500 my-auto">{field}</div>
      <p className="my-auto text-lg font-semibold line-clamp-1">{value}</p>
    </div>
  );
}

export default FieldValue;
