import React, { Component } from "react";

import "./App.css";
import Tab from "./component/Tab";
import Interactive from "./component/Interactive";
import Agenda from "./component/Agenda";
import Speaker from "./component/Speaker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "agenda"
    };
  }

  handleChange(attr, val) {
    return this.setState({ [attr]: val });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div id="header-box">
            <img
              src="./images/banner_lg.jpg"
              alt="medium banner"
              id="top_banner"
            />
            <img
              src="./images/banner_app.jpg"
              alt="Small banner"
              id="small_banner"
            />
          </div>
        </header>
        <div id="top_bar">
          <div id="top_box">
            {/* <a
              href="https://novacast.nova.hk/events/ncds_201908/index"
              className="back-btn"
            > */}
            <a href="./index" className="back-btn">
              {"<"} Back
            </a>
            {/* <div id="date">Date: 3 August (Saturday)</div> */}
          </div>
        </div>
        <div className="tab_bar">
          <Tab
            active={this.state.tab === "interactive"}
            tab={"interactive"}
            changeTab={tab => this.handleChange("tab", tab)}
          >
            <div className="off interactive">
              <img src="./images/interaction_off.png" alt="interactive icon" />{" "}
              Interaction
            </div>
            <div className="on interactive">
              <img src="./images/interaction_on.png" alt="interactive icon" />{" "}
              Interaction
            </div>
          </Tab>
          <Tab
            active={this.state.tab === "agenda"}
            tab={"agenda"}
            changeTab={tab => this.handleChange("tab", tab)}
          >
            <div className="off agenda-tab">
              <img src="./images/agenda_off.png" alt="agenda icon" />
              <div className="tab-text">Agenda</div>
            </div>
            <div className="on agenda-tab">
              <img src="./images/agenda_on.png" alt="agenda icon" /> Agenda
            </div>
          </Tab>
          <Tab
            active={this.state.tab === "speaker"}
            tab={"speaker"}
            changeTab={tab => this.handleChange("tab", tab)}
          >
            <div className="off bio">
              <img src="./images/bio_off.png" alt="bio icon" /> Biographic
            </div>
            <div className="on bio">
              <img src="./images/bio_on.png" alt="bio icon" /> Biographic
            </div>
          </Tab>
        </div>

        <div className="content" id="holder">
          <div className="main-content">
            <Interactive
              show={
                this.state.tab === "interactive" ? "ask-question" : "hideQnA"
              }
            />
            {this.state.tab === "agenda" && <Agenda />}
            {this.state.tab === "speaker" && <Speaker />}
          </div>

          <div
            id="slidescreen"
            data-nc-comp="screen-asset"
            data-screen-asset-type="slidescreen"
            style={{ height: 100 + "%" }}
          >
            <div
              data-nc-comp="polling"
              data-question-display
              data-screen-content
              remote-dismiss="true"
              id="polling-display"
            />
            <div
              data-nc-comp="questionnaire"
              data-question-display
              data-screen-content
              remote-dismiss="true"
              id="questionnaire-display"
            />
          </div>
        </div>
        <div className="footbar" />
      </div>
    );
  }
}
