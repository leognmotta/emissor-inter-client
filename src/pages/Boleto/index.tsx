import React from "react";
import { useParams } from "react-router-dom";
import { PageHeader, Spin, Descriptions } from "antd";
import { useAsync } from "react-use";

import Card from "../../components/Card";
import history from "../../history";
import { Container } from "./styles";
import Api from "../../api";
import formatPrice from "../../utils/formatPrice";

const Boleto: React.FC = () => {
  const { nossoNumero } = useParams<{ nossoNumero: string }>();

  const { loading, value, error } = useAsync(async () => {
    const data = await Api.recuperarBoleto(nossoNumero);

    return data;
  }, [nossoNumero]);

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Spin spinning={loading}>
      <PageHeader onBack={() => history.goBack()} title="Detalhes do Boleto" />

      <Container>
        <Card title="Boleto">
          <Descriptions>
            {value?.seuNumero && (
              <Descriptions.Item label="Seu número">
                {value?.seuNumero}
              </Descriptions.Item>
            )}

            {nossoNumero && (
              <Descriptions.Item label="Nosso número">
                {nossoNumero}
              </Descriptions.Item>
            )}

            {value?.situacao && (
              <Descriptions.Item label="Situação">
                {value?.situacao}
              </Descriptions.Item>
            )}

            {value?.nomePagador && (
              <Descriptions.Item label="Nome pagador">
                {value?.nomePagador}
              </Descriptions.Item>
            )}

            {value?.cnpjCpfPagador && (
              <Descriptions.Item label="Cnpj pagador">
                {value?.cnpjCpfPagador}
              </Descriptions.Item>
            )}

            {value?.emailPagador && (
              <Descriptions.Item label="E-mail pagador">
                {value?.emailPagador}
              </Descriptions.Item>
            )}

            {value?.telefonePagador && (
              <Descriptions.Item label="Telefone pagador">
                {`(${value?.dddPagador}) ${value?.telefonePagador}`}
              </Descriptions.Item>
            )}

            {value?.tipoPessoaPagador && (
              <Descriptions.Item label="Tipo pessoa pagador">
                {value?.tipoPessoaPagador}
              </Descriptions.Item>
            )}

            {value?.dataEmissao && (
              <Descriptions.Item label="Data emissão">
                {value?.dataEmissao}
              </Descriptions.Item>
            )}

            {value?.dataLimite && (
              <Descriptions.Item label="Data limite">
                {value?.dataLimite}
              </Descriptions.Item>
            )}

            {value?.dataLimitePagamento && (
              <Descriptions.Item label="Data limite de pagamento">
                {value?.dataLimitePagamento}
              </Descriptions.Item>
            )}

            {value?.dataPagtoBaixa && (
              <Descriptions.Item label="Data baixa">
                {value?.dataPagtoBaixa}
              </Descriptions.Item>
            )}

            {value?.dataVencimento && (
              <Descriptions.Item label="Data vencimento">
                {value?.dataVencimento}
              </Descriptions.Item>
            )}

            {value?.valorNominal && (
              <Descriptions.Item label="Valor Nominal">
                {formatPrice(value.valorNominal)}
              </Descriptions.Item>
            )}

            {value?.valorTotalRecebimento && (
              <Descriptions.Item label="Valor total de recebimentos">
                {formatPrice(value.valorTotalRecebimento)}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>

        {value?.desconto1 && (
          <Card title="Desconto 1">
            <Descriptions>
              <Descriptions.Item label="Código">
                {value.desconto1.codigo}
              </Descriptions.Item>

              <Descriptions.Item label="Taxa">
                {value.desconto1.taxa}
              </Descriptions.Item>

              <Descriptions.Item label="Valor">
                {formatPrice(Number(value.desconto1?.valor))}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {value?.desconto2 && (
          <Card title="Desconto 2">
            <Descriptions>
              <Descriptions.Item label="Código">
                {value.desconto2.codigo}
              </Descriptions.Item>

              <Descriptions.Item label="Taxa">
                {value.desconto2.taxa}
              </Descriptions.Item>

              <Descriptions.Item label="Valor">
                {formatPrice(Number(value.desconto2?.valor))}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {value?.desconto3 && (
          <Card title="Desconto 3">
            <Descriptions>
              <Descriptions.Item label="Código">
                {value.desconto3.codigo}
              </Descriptions.Item>

              <Descriptions.Item label="Taxa">
                {value.desconto3.taxa}
              </Descriptions.Item>

              <Descriptions.Item label="Valor">
                {formatPrice(Number(value.desconto3?.valor))}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {value?.mensagem && (
          <Card title="Mensagem">
            <Descriptions>
              {value.mensagem?.linha1 && (
                <Descriptions.Item label="Linha 1">
                  {value.mensagem?.linha1}
                </Descriptions.Item>
              )}

              {value.mensagem?.linha2 && (
                <Descriptions.Item label="Linha 2">
                  {value.mensagem?.linha1}
                </Descriptions.Item>
              )}

              {value.mensagem?.linha3 && (
                <Descriptions.Item label="Linha 3">
                  {value.mensagem?.linha1}
                </Descriptions.Item>
              )}

              {value.mensagem?.linha4 && (
                <Descriptions.Item label="Linha 4">
                  {value.mensagem?.linha1}
                </Descriptions.Item>
              )}

              {value.mensagem?.linha5 && (
                <Descriptions.Item label="Linha 5">
                  {value.mensagem?.linha1}
                </Descriptions.Item>
              )}
            </Descriptions>
          </Card>
        )}

        {value?.multa && (
          <Card title="Multa">
            <Descriptions>
              <Descriptions.Item label="Código">
                {value.multa.codigo}
              </Descriptions.Item>

              <Descriptions.Item label="Data">
                {value.multa.data}
              </Descriptions.Item>

              <Descriptions.Item label="Taxa">
                {value.multa.taxa}
              </Descriptions.Item>

              <Descriptions.Item label="Valor">
                {formatPrice(Number(value.multa?.valor))}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {value?.mora && (
          <Card title="Mora">
            <Descriptions>
              <Descriptions.Item label="Código">
                {value.mora.codigo}
              </Descriptions.Item>

              <Descriptions.Item label="Data">
                {value.mora.data}
              </Descriptions.Item>

              <Descriptions.Item label="Taxa">
                {value.mora.taxa}
              </Descriptions.Item>

              <Descriptions.Item label="Valor">
                {formatPrice(Number(value.mora?.valor))}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}
      </Container>
    </Spin>
  );
};

export default Boleto;
