import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Headers = styled.header`
  max-width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
  //
`;
// export const H2 = styled.h2`
//   color: #111;
//   text-align: center;
//   width: 250px;
//   height: 35px;
//   font-size: 15px;
//   font-weight: 700;
//   text-transform: uppercase;
//   margin: 0 0 5px 0;
// `;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 40px;
  border-radius: 10px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  /* background-color: blueviolet; */
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
export const Input = styled.input`
  display: inline-block;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
export const Span = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Obgrate = styled.div`
  padding: 0 15px 15px 15px;
`;

export const Grate = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const P = styled.p`
  color: #111;
  text-align: center;
  width: 250px;
  height: 35px;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 5px 0;
`;

export const Back = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  background-color: blueviolet;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 15px;
`;
