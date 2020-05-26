import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';
import Icon from 'modules/components/Shared/ui/Icon';
import { mq } from 'styles/_global.style';

interface IDashboardSideBarProps {
  sideBarExpanded: boolean;
  currentRoute: string;
  changePagehandler: Function;
  toggleSidebar: Function;
  logOut: Function;
}

const DashboardSidebar = (props: IDashboardSideBarProps): React.ReactElement => {
  const { sideBarExpanded, changePagehandler, toggleSidebar, currentRoute, logOut } = props;
  const sidebarMenuItems = [
    {
      title: 'Overview',
      route: 'overview',
      icon: 'apps',
      active: currentRoute === 'overview',
    },
    {
      title: 'Profile',
      route: 'profile',
      icon: 'person',
      active: currentRoute === 'profile',
    },
    {
      title: 'Session',
      route: 'sessions',
      icon: 'people',
      active: currentRoute === 'sessions',
    },
    {
      title: 'Settings',
      route: 'settings',
      icon: 'settings',
      active: currentRoute === 'settings',
    },
  ];

  return (
    <>
      <DashboardSidebar.Sidebar sideBarExpanded={sideBarExpanded}>
        <DashboardSidebar.SidebarList role="tree">
          {sidebarMenuItems.map((item, i) => (
            <DashboardSidebar.SidebarListItem
              key={i}
              role="treeitem"
              active={item.active}
              sideBarExpanded={sideBarExpanded}
            >
              <div
                role="row"
                tabIndex={0}
                onClick={(): void => changePagehandler(item.route)}
                onKeyPress={(): void => changePagehandler(item.route)}
              >
                <span>
                  <Icon iconType={`ios-${item.icon}`} iconSize="md" />
                </span>
                <span>{item.title}</span>
              </div>
            </DashboardSidebar.SidebarListItem>
          ))}
        </DashboardSidebar.SidebarList>
        <DashboardSidebar.ExpandWrapper>
          <span>
            <Icon
              iconType={`ios-${sideBarExpanded ? `arrow-dropleft-circle` : 'arrow-dropright-circle'}`}
              iconSize="md"
              hoverColor={colors.PRIMARY_HOVER}
              handleClick={(): void => toggleSidebar()}
            />
          </span>
        </DashboardSidebar.ExpandWrapper>
        <DashboardSidebar.FooterWrapper>
          <DashboardSidebar.SidebarList role="tree">
            <DashboardSidebar.SidebarListItem role="treeitem" active={false} sideBarExpanded={sideBarExpanded}>
              <div role="row" tabIndex={0} onClick={(): void => logOut()} onKeyPress={(): void => logOut()}>
                <span>
                  <Icon iconType={`ios-log-out`} iconSize="md" />
                </span>
                <span>Logout</span>
              </div>
            </DashboardSidebar.SidebarListItem>
          </DashboardSidebar.SidebarList>
        </DashboardSidebar.FooterWrapper>
      </DashboardSidebar.Sidebar>
    </>
  );
};

DashboardSidebar.ExpandWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: -8px;

  span {
    cursor: pointer;
  }
`;

DashboardSidebar.FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

DashboardSidebar.SidebarList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

DashboardSidebar.SidebarListItem = styled.li<{ active: boolean; sideBarExpanded: boolean }>`
  border-bottom: 1px solid ${colors.DARKER_GRAY};

  div {
    border-left: ${({ active }): string => (active ? '4px solid red' : 'unset')};
    border-radius: 3px;
    padding: 1em;
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: ${colors.DARKER_GRAY};
      border-left: 2px solid ${colors.PRIMARY_HOVER};
    }

    span {
      width: 100%;
      text-align: center;
      display: block;
      transition: all 300ms ease-in-out;

      &:first-of-type {
        width: 20%;
      }

      &:last-of-type {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

DashboardSidebar.Sidebar = styled.aside<{ sideBarExpanded: boolean }>`
  border-top: 1px solid ${colors.DARKER_GRAY};
  text-align: center;
  padding: 2em 0;
  position: relative;
  transition: all 300ms ease-in-out;

  &:hover {
    width: 15em;
    padding: 4em 0;

    ul > li > div > span {
      ${mq[1]} {
        text-align: center;
      }

      &:last-of-type {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  ${({ sideBarExpanded }): string => {
    if (sideBarExpanded) {
      return `
        width: 15em;
        padding: 4em 0;
        ul > li > div > span {
          ${mq[1]} {
            text-align: center;
          }

          &:last-of-type {
            visibility: visible;
            opacity: 1;
          }
        }`;
    }
    return `width: 3em`;
  }};
`;

export default DashboardSidebar;
