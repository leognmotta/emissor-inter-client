import React from "react";
import { Statistic, Card, Col } from "antd";
import * as S from "./styles";
import { SummaryItem } from "../../../api/types";
import formatPrice from "../../../utils/formatPrice";

interface Props {
  recebidos?: SummaryItem;
  previstos?: SummaryItem;
  baixados?: SummaryItem;
  expirados?: SummaryItem;
}

const DashHeader: React.FC<Props> = ({
  baixados,
  expirados,
  previstos,
  recebidos,
}) => {
  return (
    <S.Row>
      <Col className="col" span={6}>
        <Card>
          <Statistic
            title="Recebidos"
            value={
              typeof recebidos?.valor === "number"
                ? formatPrice(recebidos.valor)
                : "--"
            }
          />
        </Card>
      </Col>

      <Col className="col" span={6}>
        <Card>
          <Statistic
            title="Previstos"
            value={
              typeof previstos?.valor === "number"
                ? formatPrice(previstos.valor)
                : "--"
            }
          />
        </Card>
      </Col>

      <Col className="col" span={6}>
        <Card>
          <Statistic
            title="Baixados"
            value={
              typeof baixados?.valor === "number"
                ? formatPrice(baixados.valor)
                : "--"
            }
          />
        </Card>
      </Col>

      <Col className="col" span={6}>
        <Card>
          <Statistic
            title="Expirados"
            value={
              typeof expirados?.valor === "number"
                ? formatPrice(expirados.valor)
                : "--"
            }
          />
        </Card>
      </Col>
    </S.Row>
  );
};

export default DashHeader;
