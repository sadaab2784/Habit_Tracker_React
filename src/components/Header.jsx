import { Nav, Container } from "react-bootstrap";

const Header = () => {
  const date = new Date();
  return (
    <Nav className="p-2 background">
      <Container className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold  title">Habit Tracker</h3>
        <span className="currDate">{date.toDateString()}</span>
      </Container>
    </Nav>
  );
};

export default Header;
