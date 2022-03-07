import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import treasurerJson from "./data/tresurer.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function TreasurerView() {
  let [treasurers, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(treasurerJson);
  }, []);

  function incrementVoteCount(treasurerId) {
    treasurers = treasurers.map((treasurer) => {
      if (treasurer._id === treasurerId) {
        treasurer.votes = treasurer.votes + 1;
      }
      return treasurer;
    });
    setCandidates(treasurers);
  }

  return (
    <div id="treasurer">
    <h1> TREASURER CANDIDATES</h1>
      <Container className="app">
        <Row>
          {treasurers.map((treasurer) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={treasurer}
                      incrementVoteCount={(treasurerId) => incrementVoteCount(treasurerId)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
      </div>
  );
}
export default TreasurerView;