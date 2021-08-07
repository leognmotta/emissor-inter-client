import styled from "styled-components";
import { Row as ARow } from "antd";

export const Row = styled(ARow)`
  margin-bottom: 28px;

  .col {
    :not(:last-child) {
      padding-right: 36px;
    }
  }
`;

export const FiltersContainer = styled(ARow)`
  margin: 16px 0;

  .filtros {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .ant-form-item-label {
    width: 100%;
    text-align: left;
  }
`;
