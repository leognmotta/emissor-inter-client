import styled from "styled-components";
import { Card } from "antd";

export const Container = styled(Card).attrs(() => ({
  bordered: false,
}))`
  width: 100%;
`;
