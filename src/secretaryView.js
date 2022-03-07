import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import secretaryJson from "./data/sec.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function SecretaryView() {
  let [secretary, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(secretaryJson);
  }, []);

  function incrementVoteCount(secID) {
    secretary = secretary.map((sec) => {
      if (sec._id === secID) {
        sec.votes = sec.votes + 1;
      }
      return sec;
    });
    setCandidates(secretary);
  }

  return (
    <div id="sec">
    <h1>SECRETARIAL CANDIDATES</h1>
      <Container className="app">
        <Row>
          {secretary.map((sec) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={sec}
                      incrementVoteCount={(secID) => incrementVoteCount(secID)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
      </div>
  );
}
export default SecretaryView;