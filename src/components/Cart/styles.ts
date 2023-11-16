import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
`;

export const CartBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0F52BA;
  min-width: 580px;
  height: 100%;
  justify-content: space-between;
  z-index: 200;
`;

export const CartContentBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  padding: 30px;
  height: 100%;
  z-index: 200;
  overflow-y: scroll;


  @media (max-width: 768px) {
    min-width: 85%;
  }
`;
export const CartTitle = styled.div`
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
  }

  svg {
    color: black;
  }
`;

export const CartClose = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg:hover {
    color: #b30000;
  }

  ::before {
    content: '';
    background-color: white;
    border-radius: 25px;
    height: 30px;
    width: 30px;
    position: absolute;
    z-index: -1;
    right: 5px;
  }
`;

export const CartTotal = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  padding: 30px;
  font-size: 28px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  
`;

export const Purchase = styled.button`
  background-color: #000;
  color: #fff;
  border: 0;
  font-size: 28px;
  height: 97px;
  cursor: pointer;
  
  :hover {
    background-color: #2f2f2f;
  }
`;