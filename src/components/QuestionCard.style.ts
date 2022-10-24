import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  border-radius: 3px;
  border: 2px solid #0085a3;
  border: 0;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  outline: none;

  p {
    font-size: 1rem;
    color: white;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.2s ease;
  :hover {
    opacity: 0.5;
  }

  button {
    margin-top: 30px;
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'green'
        : !correct && userClicked
        ? 'red'
        : '#2F445C'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;