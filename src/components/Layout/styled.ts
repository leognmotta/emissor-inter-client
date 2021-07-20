import { Layout as ALayout, Menu as AMenu } from "antd";
import styled from "styled-components";

export const Layout = styled(ALayout)`
  height: 100%;
`;

export const SiteLayout = styled(Layout)`
  margin-left: 200px;
`;

export const Content = styled(Layout.Content)`
  margin: 24px 16px 0;
  overflow: initial;
  margin-top: 80px;
`;

export const Menu = styled(AMenu).attrs(() => ({
  theme: "dark",
  mode: "inline",
}))``;

export const MenuItem = styled(Menu.Item)``;

export const Sider = styled(Layout.Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Header = styled(Layout.Header)`
  padding: 0;
  background: #fff;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const Footer = styled(Layout.Footer)`
  text-align: center;
`;
