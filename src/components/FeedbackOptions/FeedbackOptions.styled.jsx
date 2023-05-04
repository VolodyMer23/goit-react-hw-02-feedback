import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const Button = styled.button`
  width: 200px;
  height: 70px;
  background-color: #acacac;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 24px;
  &:hover,
  &:focus {
    background-color: #ff6600;
  }
`;