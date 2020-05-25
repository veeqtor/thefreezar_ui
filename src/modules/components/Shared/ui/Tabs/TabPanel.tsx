/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';
import * as TabContext from 'modules/components/Shared/ui/Tabs/TabContext';
import { CSSTransition } from 'react-transition-group';

const TabPanel = (props: any): React.ReactElement => {
  const { id, title, children, ...restProps } = props;
  const tabContext = React.useContext(TabContext.TabContext);
  const isActive = tabContext.context.activeTab.id === id;

  React.useEffect(() => {
    tabContext.context.addTab({ id, title });
  });

  return (
    <CSSTransition classNames="fade" in={isActive} timeout={1000}>
      {(): React.ReactNode => isActive && <TabPanel.Wrapper {...restProps}>{children}</TabPanel.Wrapper>}
    </CSSTransition>
  );
};

TabPanel.Wrapper = styled.div``;

export default TabPanel;
