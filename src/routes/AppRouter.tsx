import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRouter from '@/routes/PrivateRouter';
import { OutsideHome } from '@/pages/OutsideHome';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<OutsideHome />} />

        <Route element={<PrivateRouter />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
