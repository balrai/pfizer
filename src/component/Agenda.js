import React from "react";

import { day1, day2 } from "../data/agenda";
import AgendaDisplay from "./AgendaDisplay";

export default () => {
  const list1 = day1.map(agenda => (
    <AgendaDisplay agenda={agenda} key={agenda.id} />
  ));
  const list2 = day2.map(agenda => (
    <AgendaDisplay agenda={agenda} key={agenda.id} />
  ));

  return (
    <div className="agenda">
      <div className="agenda-top-box">
        <a href="./pdf/pfizer.pdf" target="_blank">
          <img src="./images/icon_pdf.png" id="pdf" target="_blank" /> View the
          agenda pdf here
        </a>
      </div>
      <div className="day1">Day 1</div>
      {list1}
      <div className="day2">Day 2</div>
      {list2}
    </div>
  );
};
