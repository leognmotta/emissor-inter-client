import React from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { joiResolver } from "@hookform/resolvers/joi";
import { PageHeader, Space, Button, Collapse, Badge } from "antd";

import BoletosForm from "./Form";
import { schema } from "./schema";
import { hashMapToArray } from "./util";
import { Modal, Content, Footer } from "./styles";

const { Panel } = Collapse;

interface Props {
  visible: boolean;
  setVisible: (val: boolean) => void;
}

const CriarBoletos: React.FC<Props> = ({ visible, setVisible }) => {
  const onCancel = () => setVisible(false);
  const [boletos, setBoletos] = React.useState([uuid()]);
  const {
    control,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });
  const onSubmit = handleSubmit(({ boletos }) =>
    console.log(hashMapToArray(boletos))
  );

  if (!visible) {
    return null;
  }

  return (
    <Modal onSubmit={onSubmit}>
      <PageHeader
        className="site-page-header"
        onBack={() => setVisible(false)}
        title="Adicionar Boletos"
      />
      <div className="actions">
        <div className="modal-actions-container">
          <Button
            type="primary"
            onClick={() => {
              setBoletos((prev) => [...prev, uuid()]);
            }}
          >
            Adicionar boleto
          </Button>
        </div>
      </div>

      <Content>
        <Collapse accordion defaultActiveKey={boletos[0]}>
          {boletos.map((boleto, index) => {
            const fieldName = `boletos[${boleto}]`;
            const hasError = (errors?.boletos || {})[boleto];

            return (
              <Panel
                forceRender
                key={boleto}
                header={`Boleto ${index + 1} ${boleto}`}
                extra={
                  <Space size="large">
                    {hasError && <Badge color="red" text="Error" />}
                    <Button
                      type="primary"
                      shape="circle"
                      danger
                      disabled={boletos.length === 1}
                      onClick={() => {
                        setBoletos((prev) =>
                          prev.filter((current) => current !== boleto)
                        );
                        unregister(`${fieldName}.cnpjCPFBeneficiario`);
                      }}
                    >
                      <AiFillDelete color="white" />
                    </Button>
                  </Space>
                }
              >
                <BoletosForm control={control} fieldName={fieldName} />
              </Panel>
            );
          })}
        </Collapse>
      </Content>

      <Footer>
        <div className="footer-content">
          <Space>
            <Button onClick={onCancel}>Cancelar</Button>
            <Button type="primary" htmlType="submit">
              Emitir
            </Button>
          </Space>
        </div>
      </Footer>
    </Modal>
  );
};

export default CriarBoletos;
