import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 70%;
  margin: 90px auto 180px;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 23.2%);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;