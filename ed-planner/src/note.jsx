// import PropTypes from 'prop-types';
// import React from 'react';

const Note = ({ text, val, setVal }) => {
  const add = () => {
    setVal(val++);
  };
  const del = () => {
    setVal(val--);
  };
  return (
    <div className="note">
      <span>{text} -</span>
      <span>{val} HOURS</span>
      <button onClick={add}>ADD</button>
      <button onClick={del}>DEL</button>
    </div>
  );
};

export default Note;
