import React from "react";

export default ({ agenda }) => {
  function renderAgenda() {
    if (agenda.table) {
      return (
        <div className="agenda-box">
          <div className="wrapper">
            <div className="left-box">
              <div className="title">{agenda.title1}</div>
              {agenda.speaker1 &&
                agenda.speaker1.map(speaker => (
                  <div
                    key={speaker}
                    className="speaker"
                    dangerouslySetInnerHTML={{ __html: speaker }}
                  />
                ))}
            </div>
            <div className="right-box">
              <div className="title">{agenda.title2}</div>
              {agenda.speaker2 &&
                agenda.speaker2.map(speaker => (
                  <div
                    key={speaker}
                    className="speaker"
                    dangerouslySetInnerHTML={{ __html: speaker }}
                  />
                ))}
            </div>
          </div>
          <div className="time">{agenda.time}</div>
        </div>
      );
    } else if (agenda.bar) {
      return (
        <div
          className="status-bar"
          dangerouslySetInnerHTML={{ __html: agenda.text }}
        />
      );
    } else {
      return (
        <div className="agenda-box">
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: agenda.title }}
          />
          {agenda.facility && (
            <div className="facilitator">{agenda.facility}</div>
          )}
          {agenda.speaker &&
            agenda.speaker.map(speaker => (
              <div
                key={speaker}
                className="speaker"
                dangerouslySetInnerHTML={{ __html: speaker }}
              />
            ))}
          <div className="time">{agenda.time}</div>
          {agenda.group && (
            <div className="groups">
              {agenda.group.map(group => (
                <div className="group">
                  <div className="group-title">{group.title}</div>
                  <div dangerouslySetInnerHTML={{ __html: group.content }} />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
  }
  return renderAgenda();
};
