/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Slot from '../slot/slot'
import "./styles.scss";

function Rack({ slots, debugMode }) {
  return (
    <div className="shelf">
      {slots.length > 0 &&
        slots.map((slot, index) =>
          <Slot key={index}
                slot={slot}
                debugMode={debugMode}
          />
        )
      }
    </div>
  );
}


Rack.propTypes = {
  slots: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Rack;
