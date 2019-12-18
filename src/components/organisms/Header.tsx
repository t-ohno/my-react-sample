import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MenuItem } from 'app/types';
import Logo from 'components/atoms/Logo';
import Menu from 'components/molecules/Menu';
import ChangeLanguage from 'components/molecules/ChangeLanguage';
import LoginUserName from 'components/atoms/LoginUserName';
import LogoutButton, { LogoutButtonProps } from 'components/atoms/LogoutButton';

const StyledHeader = styled.header`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 1);

  padding: 0 5px;
`;

const HeaderRow = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0 5px;
  height: 75px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  span {
    padding-right: 10px;
    border-right: 1px dotted;
  }

  button {
    margin-left: 10px;
  }
`;

export interface HeaderProps {
  logoutButton: LogoutButtonProps;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const [t] = useTranslation();

  const menuItems: MenuItem[] = [
    {
      label: t('molecules.menu.menu1.title'),
      subtitle: 'subtitle1',
      children: [{ label: t('molecules.menu.menu1.subMenu1.title'), enabled: true, to: '/Page1' }]
    },
    {
      label: t('molecules.menu.menu2.title'),
      subtitle: 'subtitle2',
      children: [
        { label: t('molecules.menu.menu2.subMenu1.title'), enabled: true, to: '/Page1' },
        { label: t('molecules.menu.menu2.subMenu2.title'), enabled: true, to: '/Page2' }
      ]
    },
    {
      label: t('molecules.menu.menu3.title'),
      subtitle: 'subtitle3',
      children: [
        { label: t('molecules.menu.menu3.subMenu1.title'), enabled: true, to: '/Page1' },
        { label: t('molecules.menu.menu3.subMenu2.title'), enabled: true, to: '/Page2' },
        { label: t('molecules.menu.menu3.subMenu3.title'), enabled: true, to: '/Page3' }
      ]
    },
    {
      label: t('molecules.menu.menu4.title'),
      subtitle: 'subtitle4',
      children: [
        { label: t('molecules.menu.menu4.subMenu1.title'), enabled: true, to: '/Page1' },
        { label: t('molecules.menu.menu4.subMenu2.title'), enabled: true, to: '/Page2' },
        { label: t('molecules.menu.menu4.subMenu3.title'), enabled: true, to: '/Page3' },
        { label: t('molecules.menu.menu4.subMenu4.title'), enabled: true, to: '/Page4' }
      ]
    }
  ];

  return (
    <StyledHeader>
      <HeaderRow>
        <HeaderLeft>
          <Logo />
          <ChangeLanguage />
        </HeaderLeft>
        <HeaderRight>
          <LoginUserName name={t('organisms.header.loginUserName', { name: 'TestUser' })} />
          <LogoutButton {...props.logoutButton} />
        </HeaderRight>
      </HeaderRow>
      <Menu menuItems={menuItems} />
    </StyledHeader>
  );
};

export default Header;
