import { useState } from "react";

// building components
import NavBar from "./components/navigation/NavBar";
import Container from "./components/bootstrap/Container";
import Row from "./components/bootstrap/Row";


// page components
import Home from "./components/pages/Home";
import Films from "./components/pages/Films";
import People from "./components/pages/People";

export default function App() {
  
  const [key, setKey] = useState("home");

  const displayPage = () => {
    if (key === "home") return <Home />;
    else if (key === "films") return <Films />;
    else if (key === "people") return <People />;
  };

  return (
    <>
      <NavBar>
        <button onClick={() => setKey("home")} className="btn btn-link">
          Home Page
        </button>
        <button onClick={() => setKey("films")} className="btn btn-link">
          Films
        </button>
        <button onClick={() => setKey("people")} className="btn btn-link">
          People
        </button>
      </NavBar>
      <Container>
        <Row className="justify-content-center">{displayPage()}</Row>
      </Container>
    </>
  );
}

