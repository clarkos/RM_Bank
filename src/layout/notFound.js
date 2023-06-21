import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img404 from "../assets/404.jpg";

export const NotFound = () => {
  return (
    <div className="container" bg='dark'>
      <Card className="bg-dark text-white">
      <Card.Img src={img404} alt="Page not Found" rounded='false'/>
        <Card.Body>
          The page you requested seems missing on this site. 
          Please visit our {<Link to="/"><strong>Home</strong></Link>} or check the address you typed on the search bar.
        </Card.Body>
    </Card>
    </div>
  );
};
