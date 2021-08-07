import { Button, Dropdown, Menu, Tag } from "antd";
import { FaEllipsisV, FaEye } from "react-icons/fa";

import formatPrice from "../../../utils/formatPrice";
import history from "../../../history";
import { Boleto } from "../../../api/types";

const actions = [
  {
    title: "Baixar boleto",
    action: () => {},
  },
  {
    title: "Download .pdf",
    action: () => {},
  },
];

const menu = (
  <Menu>
    {actions.map(({ title, action }) => (
      <Menu.Item key={title}>
        <Button onClick={action} type="text">
          {title}
        </Button>
      </Menu.Item>
    ))}
  </Menu>
);

const renderTag = (text: string) => {
  switch (text) {
    case "PAGO":
      return <Tag color="success">Pago</Tag>;

    case "BAIXADO":
      return <Tag color="warning">Baixado</Tag>;

    case "EMABERTO":
      return <Tag color="processing">Em Aberto</Tag>;

    case "VENCIDO":
      return <Tag color="error">Vencido</Tag>;

    case "EXPIRADO":
      return <Tag color="orange">Expirado</Tag>;

    default:
      return <Tag color="default">{text}</Tag>;
  }
};

export const columns = [
  {
    title: "Nome Sacado",
    dataIndex: "nomeSacado",
    key: "nomeSacado",
  },
  {
    title: "Emissão",
    dataIndex: "dataEmissao",
    key: "dataEmissao",
  },
  {
    title: "Vencimento",
    dataIndex: "dataVencimento",
    key: "dataVencimento",
  },
  {
    title: "Valor Nominal",
    dataIndex: "valorNominal",
    key: "valorNominal",
    render: (text: string) => formatPrice(Number(text)),
  },
  {
    title: "Valor Recebido",
    dataIndex: "valorTotalRecebimento",
    key: "valorTotalRecebimento",
    render: (text: string) => formatPrice(Number(text) || 0),
  },
  {
    title: "Situação",
    dataIndex: "situacao",
    key: "situacao",
    render: renderTag,
  },
  {
    title: "Ações",
    dataIndex: "acoes",
    key: "acoes",
    render: (_: string, { nossoNumero }: Boleto) => (
      <Button.Group>
        <Button
          onClick={() => history.push(`/dashboard/boleto/${nossoNumero}`)}
          type="text"
        >
          <FaEye />
        </Button>

        <Dropdown overlay={menu} trigger={["click"]}>
          <Button type="text">
            <FaEllipsisV />
          </Button>
        </Dropdown>
      </Button.Group>
    ),
  },
];
