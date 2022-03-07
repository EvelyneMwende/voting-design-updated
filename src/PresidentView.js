import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import presidentsJson from "./data/president.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function PresidentView() {
  let [presidents, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(presidentsJson);
  }, []);

  function incrementVoteCount(presidentId) {
    presidents = presidents.map((president) => {
      if (president._id === presidentId) {
        president.votes = president.votes + 1;
      }
      return president;
    });
    setCandidates(presidents);
  }

  return (
    <div id="president">
        <h1>PRESIDENTIAL CANDIDATES</h1>
      <Container className="app">
        <Row>
          {presidents.map((president) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={president}
                      incrementVoteCount={(presidentId) => incrementVoteCount(presidentId)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
      </div>
  );
}
export default PresidentView;