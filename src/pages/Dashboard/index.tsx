import React from "react";
import moment from "moment";
import { useAsync } from "react-use";
import { Table } from "antd";

import PageWrapper from "../../components/PageWrapper";
import { columns } from "./components/Table";
import DashHeader from "./components/DashHeader";
import useUrlState from "../../hooks/useUrlState";
import Api from "../../api";
import TableFilters from "./components/TableFilters";
import { FiltrosBoletos, FiltrosDatas } from "../../api/types";

const Dashboard: React.FC = () => {
  const monthStart = moment().startOf("month").format("YYYY-MM-DD");
  const monthEnd = moment().endOf("month").format("YYYY-MM-DD");
  const [currentPage, setCurrentPage] = useUrlState("page", "1");
  const [currentSize, setCurrentSize] = useUrlState("size", "10");
  const [dataInicial, setDataInicial] = useUrlState("dataInicial", monthStart);
  const [dataFinal, setDataFinal] = useUrlState("dataFinal", monthEnd);
  const [filtrarPor, setFiltrarPor] = useUrlState("filtrarPor", "TODOS");
  const [filtrarDataPor, setFiltrarDataPor] = useUrlState(
    "filtrarDataPor",
    "VENCIMENTO"
  );

  const state = useAsync(async () => {
    const data = await Api.listarBoletos({
      dataInicial,
      dataFinal,
      filtrarPor: filtrarPor as FiltrosBoletos,
      filtrarDataPor: filtrarDataPor as FiltrosDatas,
      page: Number(currentPage) || 1,
      size: Number(currentSize) || 10,
    });

    return data;
  }, [
    currentPage,
    currentSize,
    dataInicial,
    dataFinal,
    filtrarPor,
    filtrarDataPor,
  ]);

  if (state.error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <DashHeader
        baixados={state.value?.summary.baixados}
        expirados={state.value?.summary.expirados}
        previstos={state.value?.summary.previstos}
        recebidos={state.value?.summary.recebidos}
      />

      <PageWrapper>
        <TableFilters
          setDataFinal={setDataFinal}
          setDataInicial={setDataInicial}
          setFiltrarPor={setFiltrarPor}
          setFiltrarDataPor={setFiltrarDataPor}
          dataInicial={dataInicial}
          dataFinal={dataFinal}
          filtrarPor={filtrarPor}
          filtrarDataPor={filtrarDataPor}
        />

        <Table
          columns={columns}
          dataSource={(state.value?.content || []).map(
            ({ nossoNumero, ...data }) => ({
              key: nossoNumero,
              nossoNumero,
              ...data,
            })
          )}
          loading={state.loading}
          pagination={{
            responsive: true,
            current: Number(currentPage) || 1,
            total: state.value?.totalElements,
            defaultCurrent: 1,
            defaultPageSize: 10,
            pageSize: Number(currentSize) || 10,
            onChange: (nextPage, nextSize) => {
              setCurrentPage(`${nextPage}`);
              setCurrentSize(`${nextSize}`);
            },
          }}
        />
      </PageWrapper>
    </div>
  );
};

export default Dashboard;
