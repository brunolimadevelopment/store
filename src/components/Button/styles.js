import styled from "styled-components";

export const BuyButton = styled.button`
  background-color: #0F52BA;
  color: #ffffff;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  border: none;
  
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;

  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  transition: all 0.5s ease;
  height: 50px;
  
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }

  svg {
    font-size: 22px;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
