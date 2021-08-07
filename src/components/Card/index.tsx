import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
}

const Card: React.FC<Props> = ({ children, title }) => {
  return <Container title={title}>{children}</Container>;
};

export default Card;
