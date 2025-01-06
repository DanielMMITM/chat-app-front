import { LoginForm } from '@/features/auth/login/LoginForm';
import { Tabs } from '../tabs/Tabs';
import { useOutsideLayout } from './useOutsideLayout';

export const OutsideLayout = () => {
  const { currentTab } = useOutsideLayout();
  return (
    <main className="outside-container">
      <Tabs />
      {currentTab === 1 ? <LoginForm /> : <LoginForm />}
    </main>
  );
};
