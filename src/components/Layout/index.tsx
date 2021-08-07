import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Context } from "../../contexts/AuthContext";
import * as S from "./styled";

const Layout: React.FC = ({ children }) => {
  const { user } = useContext(Context);
  const { pathname } = useLocation();

  if (!user) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <S.Layout>
      <S.Sider>
        <div className="logo" />
        <S.Menu defaultSelectedKeys={[pathname]}>
          <S.MenuItem key="/dashboard">
            <NavLink to="/dashboard">Boletos</NavLink>
          </S.MenuItem>
          <S.MenuItem key="/configuracoes">
            <NavLink to="/configuracoes">Configurações</NavLink>
          </S.MenuItem>
        </S.Menu>
      </S.Sider>
      <S.SiteLayout>
        <S.Header />

        <S.Content>{children}</S.Content>

        <S.Footer>Ant Design ©2021 Created by Ant UED</S.Footer>
      </S.SiteLayout>
    </S.Layout>
  );
};

export default Layout;
