import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Header = styled.header`
  max-width: auto;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  &.active {
    color: blueviolet;
  }
`;
