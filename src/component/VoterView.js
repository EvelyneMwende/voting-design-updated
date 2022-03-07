import React from "react";
import { Card, Button } from "react-bootstrap";

function VoterView(props) {
   
    let { candidate, incrementVoteCount } = props;
    console.log("prop", props)

    return (
        
        <div key={candidate._id}>
            
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`/assets/img/${candidate.image}`} />
            <Card.Body>
                <Card.Title>{candidate.name}</Card.Title>
                <Button variant="success" onClick={() => incrementVoteCount(candidate._id)}>
                    Vote
                </Button>
            </Card.Body>
            <Card.Footer>Vote count: {candidate.votes}</Card.Footer>
        </Card>

        </div>
        
    );
}
export default VoterView;