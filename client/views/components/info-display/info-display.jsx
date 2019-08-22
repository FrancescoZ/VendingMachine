/* eslint-disable */
import React from "react";
import classNames from "classnames";
import "./styles.scss";


function InfoDisplay({ message }) {

  const cssClass = classNames({
    'display': true,
  });

  return (
    <div className={cssClass}>
      { message }
    </div>
  );
}


InfoDisplay.propTypes = {
  message: React.PropTypes.string
};

export default InfoDisplay;
