import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
// import { dataActions } from "../../store/data";

const Header = ({setModalShow, setChangeType}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const createCardHandler =()=>{
    setModalShow(true)
    setChangeType('add')
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className="flex-row">
            {!isAuthenticated && <Nav.Link className="me-3" onClick={createCardHandler}>Add Card</Nav.Link>}
            {!isAuthenticated &&<Nav.Link onClick={logoutHandler}>Logout</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
