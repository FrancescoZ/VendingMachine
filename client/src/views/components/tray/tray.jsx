/* eslint-disable */
import React from "react";
import classNames from "classnames";
import "./styles.scss";


function Tray() {

  const cssClass = classNames({
    'tray': true,
  });

  return (
    <div className={cssClass}>
    </div>
  );
}


Tray.propTypes = {
  onClick: React.PropTypes.func
};

export default Tray;
