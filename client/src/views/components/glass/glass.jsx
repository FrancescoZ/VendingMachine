/* eslint-disable */
import React from "react";
import classNames from "classnames";
import "./styles.scss";


function Glass() {

  const cssClass = classNames({
    'glass': true,
  });

  return (
    <div className={cssClass}>
    </div>
  );
}

export default Glass;
