import styled from "styled-components";

export const HeaderContainer = styled.header`

    width: 100%;
    height: 90px;
    //background-color: ${({ theme }) => theme.colors.primary};
    background-color: #0F52BA;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderWrapper = styled.div`
    //background-color: red;
    width: 80%;
    height: 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Brand = styled.div`
    color: white;
    font-size:40px;
    font-weight: 600;
    line-height: 19px;
    display: flex;
    align-items: baseline;
`;
export const Smallbrand = styled.div`
    color: white;
    font-size:20px;
    font-weight: 100;
    line-height: 19px;
    margin-left: 5px;
`;

export const CartComp = styled.div`
    background-color: white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 45px;
    font-size: 20px;
    cursor: pointer;

    :hover {
        background-color: #d1d1d1;
    }

    .cartIcon {
        width: 24px;
        margin-right: 8px;
    }
`