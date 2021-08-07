import styled from "styled-components";
import { Space } from "antd";

export const Container = styled(Space).attrs(() => ({
  direction: "vertical",
}))`
  width: 100%;
`;
