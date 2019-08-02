import React, { Component } from "react";

import { speakers } from "../data/speakers";
import SpeakerDisplay from "./SpeakerDisplay";
import "./speaker.css";

export default class Speaker extends Component {
  state = {
    showModal: false,
    speakerName: "",
    img: "",
    position: "",
    details: "",
    role: "",
    country: ""
  };
  toggleModal = speaker => {
    this.setState({
      showModal: !this.state.showModal,
      speakerName: speaker.name,
      img: speaker.img,
      position: speaker.position,
      details: speaker.details,
      role: speaker.role,
      country: speaker.country
    });
  };
  list = speakers.map(speaker =>
    speaker.noImg ? null : (
      <SpeakerDisplay
        speaker={speaker}
        toggleModal={this.toggleModal}
        key={speaker.id}
      />
    )
  );
  noImg_list = speakers.map(
    speaker =>
      speaker.noImg && (
        <div className="noImg">
          <div className="noImg-name">{speaker.name}</div>
          <div className="noImg-details">{speaker.details}</div>
        </div>
      )
  );
  render() {
    return (
      <div className="speakers-full">
        <div className="speakers">{this.list}</div>
        <div className="noImg-box">{this.noImg_list}</div>
        {this.state.showModal && (
          <div className="speaker-modal-container">
            <div
              onClick={() => this.setState({ showModal: false })}
              className="close-modal-btn"
            >
              Back
            </div>
            <div className="speaker-modal-box">
              <div className="speaker-modal-head">
                <img src={this.state.img} alt="Speaker Image" />
                <div className="modal-details-box">
                  <div className="role">{this.state.role}</div>
                  <div className="speaker-name">
                    {this.state.speakerName} ({this.state.country})
                  </div>
                  <div className="short-line" />
                  <div
                    className="speaker-details"
                    dangerouslySetInnerHTML={{ __html: this.state.position }}
                  />
                </div>
              </div>
              <div
                className="speaker-modal-text"
                dangerouslySetInnerHTML={{ __html: this.state.details }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
