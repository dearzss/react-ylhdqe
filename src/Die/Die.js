import React from 'react';

export default function (props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };

  return (
    <div
      className="die-face"
      style={styles}
      onClick={(e) => {
        props.onClick();
      }}
    >
      <h2 className="die-number">{props.value}</h2>
    </div>
  );
}
