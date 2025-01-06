import { useState } from 'react';

export const useOutsideLayout = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleCurrentTab = (currentTab: number) => {
    setCurrentTab(currentTab);
  };

  return {
    currentTab,
    handleCurrentTab,
  };
};
