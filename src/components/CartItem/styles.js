import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: white;
  height: 98px;
  border-radius: 8px;
  padding: 25px;
  justify-content: space-between;
  position: relative;

  p {
    color: #222222;
  }

  svg {
    color: #222;
  }

  svg:hover {
    color: #b30000;
  }
`;

export const CartItemImage = styled.div`
  background-image: ${(props) => `url('${props.isValidProp}')`};
  height: 90px;
  width: 90px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
`;

export const ProductName = styled.div`
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  flex: 0.6;
`

export const ProductPrice = styled.div`
  font-size: 20px;
  line-height: 17px;
  font-weight: 700;
  flex: 0.6;
  text-align: right;
`
export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #BFBFBF;
  padding: 0 9px;
  border-radius: 6px;
  flex: 0.2;
  border-radius: 6px;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const CartQuantity = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 50px;

  ::before {
    content: '';
    width: 1px;
    height: 20px;
    background-color: #BFBFBF;
    display: flex;
    left: -7px;
    position: relative;
  }

  ::after {
    content: '';
    width: 1px;
    height: 20px;
    background-color: #BFBFBF;
    display: flex;
    right: -7px;
    position: relative;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 0 25px;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }
`;



export const RemoveButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -16px;
  right: -20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    width: 27px;
    height: 23px;
    display: flex;
    background-color: white;
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;
