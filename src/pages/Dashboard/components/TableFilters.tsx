import React, { useState } from "react";
import moment from "moment";
import {
  DatePicker,
  Col,
  Button,
  Tooltip,
  Space,
  Row,
  Select,
  Form,
} from "antd";
import { FaFilter } from "react-icons/fa";
import locale from "antd/es/date-picker/locale/pt_BR";
import { FiltrosBoletos, FiltrosDatas } from "../../../api/types";

import * as S from "./styles";

const { RangePicker } = DatePicker;

interface Props {
  dataInicial?: string;
  dataFinal?: string;
  filtrarPor: string;
  filtrarDataPor: string;
  setDataInicial: (data: string) => void;
  setDataFinal: (data: string) => void;
  setFiltrarPor: (data: string) => void;
  setFiltrarDataPor: (data: string) => void;
}

const displayFormat = "DD-MM-YYYY";

const getFiltrarPorLabel = (value: string) => {
  switch (value) {
    case FiltrosBoletos.TODOS:
      return "Todos";

    case FiltrosBoletos.EXPIRADOS:
      return "Expirados";

    case FiltrosBoletos.PAGOS:
      return "Pagos";

    case FiltrosBoletos.TODOSBAIXADOS:
      return "Todos Baixados";

    case FiltrosBoletos.VENCIDOSAVENCER:
      return "Vencidos a vencer";

    default:
      return "TODOS";
  }
};

const getFiltrarDataPorLabel = (value: string) => {
  switch (value) {
    case FiltrosDatas.EMISSAO:
      return "Emissão";

    case FiltrosDatas.SITUACAO:
      return "Situação";

    case FiltrosDatas.VENCIMENTO:
      return "Vencimento";

    default:
      return "VENCIMENTO ";
  }
};

const TableFilters: React.FC<Props> = ({
  dataInicial,
  dataFinal,
  filtrarPor,
  filtrarDataPor,
  setDataInicial,
  setDataFinal,
  setFiltrarPor,
  setFiltrarDataPor,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const renderFiltrarPor = (
    <Form.Item label="Filtrar Por:">
      <Select
        value={filtrarPor}
        defaultValue="TODOS"
        onChange={(val) => setFiltrarPor(val)}
      >
        {Object.values(FiltrosBoletos).map((value) => (
          <Select.Option key={value} value={value}>
            {getFiltrarPorLabel(value)}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );

  const renderFiltrarDataPor = (
    <Form.Item label="Filtrar data por:">
      <Select
        value={filtrarDataPor}
        defaultValue="VENCIMENTO"
        onChange={(val) => setFiltrarDataPor(val)}
      >
        {Object.values(FiltrosDatas).map((value) => (
          <Select.Option key={value} value={value}>
            {getFiltrarDataPorLabel(value)}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <React.Fragment>
      <S.FiltersContainer>
        <Col span={12}>
          <RangePicker
            allowClear={false}
            defaultValue={[
              moment(dataInicial, "YYYY-MM-DD"),
              moment(dataFinal, "YYYY-MM-DD"),
            ]}
            locale={locale}
            format={displayFormat}
            value={[
              moment(dataInicial, "YYYY-MM-DD"),
              moment(dataFinal, "YYYY-MM-DD"),
            ]}
            secondStep={2}
            onChange={(values) => {
              const inicial = (values || [])[0]?.format("YYYY-MM-DD");
              const inicialAtual = moment(dataInicial).format("YYYY-MM-DD");
              const final = (values || [])[1]?.format("YYYY-MM-DD");
              const finalAtual = moment(dataFinal).format("YYYY-MM-DD");
              if (inicial && inicialAtual !== inicial) setDataInicial(inicial);
              if (final && finalAtual !== final) setDataFinal(final);
            }}
          />
        </Col>

        <Col className="filtros" span={12}>
          <Space>
            <Tooltip title="Filtros">
              <Button
                onClick={() => setShowFilters((prev) => !prev)}
                type="link"
                icon={<FaFilter />}
              />
            </Tooltip>

            <Button type="primary">Adicionar Boletos</Button>
          </Space>
        </Col>

        <Col style={{ marginTop: 18 }} span={24}>
          {showFilters && (
            <Row>
              <Col span={4}>{renderFiltrarPor}</Col>
              <Col span={4} offset={1}>
                {renderFiltrarDataPor}
              </Col>
            </Row>
          )}
        </Col>
      </S.FiltersContainer>
    </React.Fragment>
  );
};

export default TableFilters;
