import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import './Profile.css';
// // Destructuring state variables in the parameters
const ProfileCard = ({ fullName, bio, imgSrc, profession } ) => {
//declaring style for the card to pass it as an inline style
  const displayInfo = {display: "flex", justifyContent: "space-around", alignItems: "center"};


  return (
    <>
    {/* Card component */}
    <Card style={{ width: '18rem' }}>
      <Card.Img className='imgg' variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <Card.Text>
          {bio}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={displayInfo}><b>Profession: </b> {profession}</ListGroup.Item>

      </ListGroup>

    </Card>
    {/* End of the card */}
    </>

    )
}

export default ProfileCard
