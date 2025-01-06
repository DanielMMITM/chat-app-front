import { LoginForm } from '@/features/auth/login/LoginForm';
import { Tabs } from '../tabs/Tabs';
import { useOutsideLayout } from './useOutsideLayout';

export const OutsideLayout = () => {
  const { currentTab, handleCurrentTab } = useOutsideLayout();
  console.log(currentTab);
  return (
    <main className="outside-container">
      <Tabs currentTab={currentTab} handleCurrentTab={handleCurrentTab} />
      <div className="outside-card">
        {currentTab === 1 ? <LoginForm /> : <h1>HOLA</h1>}
      </div>
    </main>
  );
};
