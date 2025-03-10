import React from "react";
import audiophile from "/images/client-audiophile.svg";
import databiz from "/images/client-databiz.svg";
import maker from "/images/client-maker.svg";
import meet from "/images/client-meet.svg";

function Sponsors() {
  return (
    <div className=" flex items-center gap-8 mt-8">
      <div>
        <img src={databiz} alt="databiz icon" />
      </div>
      <div>
        <img src={audiophile} alt="audiophile icon" />
      </div>
      <div>
        <img src={meet} alt="meet icon" />
      </div>
      <div>
        <img src={maker} alt="maker icon" />
      </div>
    </div>
  );
}

export default Sponsors;
