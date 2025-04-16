import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2.5rem;
`;

const NavItem = styled.li`
  a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 50%;
      background-color: #3498db;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: #3498db;
      
      &:after {
        width: 100%;
      }
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo>MyApp</Logo>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/users">Users</Link>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;