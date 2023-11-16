import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  //background: red;


  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1352);
  justify-content: space-between;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.isValidProp}')`};
  height: 190px;
  background-size: 180px;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 19px 10px;
`;

export const ProductName = styled.h4`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  color: #2C2C2C;
  margin-right: 10px;
  width: 190px;
`;

export const ProductPrice = styled.p`
  padding: 10px;
  width: max-content;
  height: min-content;
  border-radius: 6px;
  background-color: #000;
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;

`;

export const ProductDescription = styled.p`
  color: #2C2C2C;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  padding: 0 19px 15px;
  color: #2C2C2C;
`;