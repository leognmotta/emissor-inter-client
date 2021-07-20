import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;

  h1 {
    font-size: 22px;
  }

  form {
    padding: 36px;
    max-width: 360px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 0 100px rgb(0 0 0 / 8%);
  }

  button {
    width: 100%;
  }

  .ant-form-item {
    margin-bottom: 28px;

    .ant-form-item-label {
      width: 100%;
      text-align: left;
    }
  }
`;
