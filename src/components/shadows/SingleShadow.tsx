import React from "react";

const SingleShadow = ({ shadowSize }: { shadowSize: string }) => {
  const shadow = `shadow-${shadowSize}`;
  return (
    <div className="h-[224px] flex flex-col justify-between">
      <div>{shadowSize}</div>
      <div className={`rounded-[8px] w-[160px] h-[160px] ` + shadow}></div>
    </div>
  );
};

export default SingleShadow;
