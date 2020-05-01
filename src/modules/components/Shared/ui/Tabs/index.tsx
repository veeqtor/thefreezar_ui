/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import * as TabContext from 'modules/components/Shared/ui/Tabs/TabContext';
import styled from '@emotion/styled';
import TabPanel from 'modules/components/Shared/ui/Tabs/TabPanel';
import TabTitle from 'modules/components/Shared/ui/Tabs/TabTitle';

const TabComponent = (props: any): React.ReactElement => {
  const { activeTab, children } = props;
  return (
    <>
      <TabContext.Tabs activeTab={activeTab}>
        <TabComponent.TabTitleWrapper>
          <TabTitle></TabTitle>
        </TabComponent.TabTitleWrapper>
        <TabComponent.TabPanelWrapper>{children}</TabComponent.TabPanelWrapper>
      </TabContext.Tabs>
    </>
  );
};

TabComponent.TabTitleWrapper = styled.div`
  padding: 1em;
`;
TabComponent.TabPanelWrapper = styled.div`
  padding: 1em;
  min-height: 40vh;
  overflow: hidden;
`;

export { TabComponent as Tabs, TabPanel };
