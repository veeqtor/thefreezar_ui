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
          <TabTitle.ListItem key={i}>
            <TabTitle.ListItemSpan
              onClick={tabContext.context.onClick(tab)}
              onKeyDown={tabContext.context.onClick(tab)}
              role="button"
              tabIndex={-1}
            >
              {tab.title}
            </TabTitle.ListItemSpan>
            <TabTitle.ListItemBorder isActive={tabContext.context.activeTab.id === tab.id} />
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
TabTitle.ListItem = styled.li`
  padding: 1em 1em 1em 0;
  cursor: pointer;
`;

TabTitle.ListItemBorder = styled.div<IListItemProps>`
  height: 2px;
  width: 0;
  margin-top: 0.7em;
  background: ${colors.PRIMARY};
  transition: all 300ms ease-in;
  ${({ isActive }): string | false => isActive && `width: 120%;`};
`;

TabTitle.ListItemSpan = styled.span`
  display: block;
  width: 100%;
  outline: none;
`;

export default TabTitle;
