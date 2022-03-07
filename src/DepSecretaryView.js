import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DepsecretaryJson from "./data/dep-sec.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function DeputySecretaryView() {
  let [Deputysecretary, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(DepsecretaryJson);
  }, []);

  function incrementVoteCount(DepSecID) {
    Deputysecretary = Deputysecretary.map((DepSec) => {
      if (DepSec._id === DepSecID) {
        DepSec.votes = DepSec.votes + 1;
      }
      return DepSec;
    });
    setCandidates(Deputysecretary);
  }

  return (
    <div id="depsec">
    <h1>DEPUTY SECRETARY CANDIDATES</h1>
      <Container className="app">
        <Row>
          {Deputysecretary.map((DepSec) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={DepSec}
                      incrementVoteCount={(DepSecID) => incrementVoteCount(DepSecID)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
      </div>
  );
}
export default DeputySecretaryView;