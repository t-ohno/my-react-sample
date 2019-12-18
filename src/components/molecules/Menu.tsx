import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { MenuItem } from 'app/types';

const ShowSubMenu = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgba(4, 176, 238, 1);

    li {
      position: relative;
      list-style-type: none;
      padding: 5px 0;
      width: 200px;

      p {
        position: relative;
        margin: 0;
        padding: 0 5px;
        border-right: 1px dotted white;
        height: 32px;
        line-height: 32px;
        text-align: center;

        span,
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: white;
          text-decoration: none;
          font-weight: bold;

          :hover {
            background-color: rgba(102, 185, 237, 1);
          }
        }
      }

      ul {
        display: none;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));

        li {
          box-sizing: border-box;
          padding: 5px;
          background: rgba(240, 250, 255, 1);
          color: rgba(5, 130, 220, 1);

          a {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            padding: 0 5px 0 25px;
            background: rgba(161, 211, 247, 1);
            border-radius: 5px;
            width: 100%;
            height: 100%;

            &::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
              left: 13px;
              background: rgba(4, 107, 181, 1);
              border: 1px solid transparent;
              border-radius: 50%;
              width: 12px;
              height: 12px;
            }

            &::after {
              content: '';
              position: absolute;
              top: 50%;
              transform: translate(-50%, -50%);
              left: 14px;
              border-style: solid;
              border-width: 4px 0 4px 6px;
              border-color: transparent transparent transparent rgba(255, 255, 255, 1);
            }

            &:hover {
              background-color: rgba(4, 176, 238, 1);
              color: rgba(255, 255, 255, 1);

              &::before {
                background-color: rgba(255, 255, 255, 1);
              }

              &::after {
                border-color: transparent transparent transparent rgba(4, 176, 238, 1);
              }
            }
          }
        }
      }

      &:hover {
        ul {
          display: inline-block;
          opacity: 1;
          animation: ${ShowSubMenu} 300ms linear 0s;
        }
      }
    }
  }
`;

interface Props {
  menuItems: MenuItem[];
}

const Menu: React.FunctionComponent<Props> = ({ menuItems }) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map(item => {
          return (
            <li>
              <p>
                <span>{item.label}</span>
              </p>
              <ul>
                {item.children &&
                  item.children.map(child => {
                    return (
                      <li>
                        <Link to={child.to}>{child.label}</Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
