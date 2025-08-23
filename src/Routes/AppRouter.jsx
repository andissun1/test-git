import { ProfessionProvider } from '../Provider/ProfessionProvider';
import { AuthProvider } from '../Provider/AuthProvider';
import { QualitiesProvider } from '../Provider/QualitiesProvider';
import { UserProvider } from '../Provider/UserProvider';
import { Navbar } from '../components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/Forms/Login';
import { CreateUserForm } from '../components/Forms/CreateUserForm';
import { AuthForm } from '../components/Forms/AuthForm';
import Table from '../components/Table/Table';
import { UsersLayouts } from '../Layouts/UsersLayouts';
import { ToastProvider } from '../Provider/NotificationProvider';
import { Toast } from '../components/Notifications/Toast';

export const AppRouter = () => {
  return (
    <ToastProvider>
      <ProfessionProvider>
        <AuthProvider>
          <QualitiesProvider>
            <UserProvider>
              <Navbar />
              {/* <Toast /> */}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forms" element={<CreateUserForm />} />
                <Route path="/auth" element={<AuthForm />} />
                <Route path="/table" element={<Table />} />
                <Route path="/users/:id?/:edit?" element={<UsersLayouts />} />
              </Routes>
            </UserProvider>
          </QualitiesProvider>
        </AuthProvider>
      </ProfessionProvider>
    </ToastProvider>
  );
};
