import styled from '@emotion/styled';

export const Wrapper = styled.div`

`;

export const Form = styled.form`
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;

`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15px;
  padding: 20px;
  &:hover {
    background: cadetblue;
  }
`;

export const HomeTitle = styled.h1`
  text-align: center;
  font-style: italic;
  padding-top: 30px;
`;

// export const Input = styled.h1`
//   text-align: center;
//   font-style: italic;
//   padding-top: 30px;
// `;