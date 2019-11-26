import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    background-color: rgba(4, 176, 238, 1);
    margin: 0;
    padding: 5px 0;

    li {
      position: relative;
      list-style-type: none;
      padding: 0 5px;
      width: 200px;
      height: 32px;
      line-height: 35px;
      text-align: center;
      border-right: 1px dotted white;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: white;
        text-decoration: none;
        font-weight: bold;

        ::after {
          position: absolute;
          top: 0;
          right: 0;
          border-right: 1px dotted yellow;
        }

        :hover {
          background-color: rgba(102, 185, 237, 1);
        }
      }
    }
  }
`;

const Menu: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/Page1">{t('molecules.menu.menu1.title')}</Link>
        </li>
        <li>
          <Link to="/Page2">{t('molecules.menu.menu2.title')}</Link>
        </li>
        <li>
          <Link to="/Page3">{t('molecules.menu.menu3.title')}</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
