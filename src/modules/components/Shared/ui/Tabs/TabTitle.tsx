/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as TabContext from 'modules/components/Shared/ui/Tabs/TabContext';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

interface IListItemProps {
  isActive: boolean;
}

const TabTitle = (): React.ReactElement => {
  const tabContext = React.useContext(TabContext.TabContext);
  return (
    <>
      <TabTitle.List>
        {tabContext.context.tabs.map((tab: { id: number; title: React.ReactNode }, i: string | number | undefined) => (
          <TabTitle.ListItem key={i} isActive={tabContext.context.activeTab.id === tab.id}>
            <TabTitle.ListItemSpan
              onClick={tabContext.context.onClick(tab)}
              onKeyDown={tabContext.context.onClick(tab)}
              role="button"
              tabIndex={-1}
            >
              {tab.title}
            </TabTitle.ListItemSpan>
          </TabTitle.ListItem>
        ))}
      </TabTitle.List>
    </>
  );
};

TabTitle.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  border-bottom: 1px solid ${colors.DARKER_GRAY};
  font-family: Futura;
  text-transform: uppercase;
  font-size: small;
`;
TabTitle.ListItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: all 500ms ease-in-out;
  ${({ isActive }): string =>
    isActive ? `border-bottom: 3px solid ${colors.PRIMARY}` : `border-bottom: 3px solid ${colors.DARKER_GRAY}`};
`;

TabTitle.ListItemBorder = styled.div<IListItemProps>`
  height: 2px;
  width: 0;
  margin-top: 0.7em;
  background: ${colors.PRIMARY};
`;

TabTitle.ListItemSpan = styled.span`
  width: 100%;
  outline: none;
  display: block;
  padding: 1em;
  font-family: Futura;
  text-transform: capitalize;
`;

export default TabTitle;
