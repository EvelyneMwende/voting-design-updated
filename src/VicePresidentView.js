import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import vpJson from "./data/vc-president.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function VicePresidentView() {
  let [Vicepresidents, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(vpJson);
  }, []);

  function incrementVoteCount(vpID) {
    Vicepresidents = Vicepresidents.map((vp) => {
      if (vp._id === vpID) {
        vp.votes = vp.votes + 1;
      }
      return vp;
    });
    setCandidates(Vicepresidents);
  }

  return (
    <div id="vp">
    <h1>VICE PRESIDENT CANDIDATES</h1>
      <Container className="app">
        <Row>
          {Vicepresidents.map((vp) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={vp}
                      incrementVoteCount={(vpID) => incrementVoteCount(vpID)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
      </div>
  );
}
export default VicePresidentView;