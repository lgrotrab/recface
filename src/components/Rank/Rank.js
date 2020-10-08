import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <>
      <div className="white f3">{`${name}, sua pontuação é:`}</div>
      <div className="white f1">{entries}</div>
    </>
  );
};

export default Rank;
