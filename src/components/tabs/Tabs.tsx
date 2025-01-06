import { useOutsideLayout } from '../outside-layout/useOutsideLayout';
import '@/components/tabs/tabs.css';

export const Tabs = () => {
  const { handleCurrentTab, currentTab } = useOutsideLayout();
  return (
    <section className="tabs">
      <button
        className={`tabs__btn ${currentTab === 1 && 'tabs--selected-tab'}`}
        role="tab"
        type="button"
        onClick={() => handleCurrentTab(1)}
      >
        Login
      </button>
      <button
        className={`tabs__btn ${currentTab === 2 && 'tabs--selected-tab'}`}
        role="tab"
        type="button"
        onClick={() => handleCurrentTab(2)}
      >
        Signup
      </button>
    </section>
  );
};
