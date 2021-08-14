import styled from "styled-components";

export const Modal = styled.form`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow: hidden;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  .site-page-header {
    border: 1px solid rgb(235, 237, 240);
  }

  .actions {
    border-bottom: 1px solid rgb(235, 237, 240);
    padding: 20px 14px;

    .modal-actions-container {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 14px;
  flex-grow: 1;
  overflow: scroll;
`;

export const Footer = styled.div`
  border: 1px solid rgb(235, 237, 240);

  .footer-content {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 14px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
