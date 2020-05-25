/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

const TabContext = React.createContext<Record<string, any>>({ context: {} });

const Tabs = (props: Record<string, any>): React.ReactElement => {
  const { children, activeTab } = props;
  const [tabs, setTabs] = React.useState<Record<string, any>[]>([]);
  const [activeTabState, setActiveTab] = React.useState(activeTab);
  const [prevActiveTab, setPrevActiveTab] = React.useState({});

  const addNewTab = (newTab: Record<string, any>): void => {
    const foundTab = tabs.filter(tab => tab.id === newTab.id);
    foundTab.length === 0 && setTabs(prevState => prevState.concat(newTab));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (tab: Record<string, any>) => (_event: React.SyntheticEvent): void => {
    setActiveTab(tab);
    setPrevActiveTab(activeTabState);
  };

  const tabProviderValue = {
    context: {
      tabs,
      activeTab: activeTabState,
      prevActiveTab,
      addTab: addNewTab,
      onClick: handleClick,
    },
  };
  return <TabContext.Provider value={tabProviderValue}>{children}</TabContext.Provider>;
};

export { TabContext, Tabs };
