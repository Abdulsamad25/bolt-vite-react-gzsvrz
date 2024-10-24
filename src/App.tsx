import React from 'react';
import { Users } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import DoctorDashboard from './components/dashboard/DoctorDashboard';
import PatientDashboard from './components/dashboard/PatientDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import AppointmentBooking from './components/AppointmentBooking';

function App() {
  const { isAuthenticated, user, logout } = useAuth();
  const [showRegister, setShowRegister] = React.useState(false);

  const renderDashboard = () => {
    if (!user) return null;

    switch (user.role) {
      case 'doctor':
        return <DoctorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'patient':
        return <PatientDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">HealthCare Plus</span>
            </div>
            {isAuthenticated && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{user?.name}</span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!isAuthenticated ? (
          <div>
            {showRegister ? (
              <div>
                <RegisterForm />
                <p className="text-center mt-4">
                  Already have an account?{' '}
                  <button
                    onClick={() => setShowRegister(false)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Login
                  </button>
                </p>
              </div>
            ) : (
              <div>
                <LoginForm />
                <p className="text-center mt-4">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setShowRegister(true)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Register
                  </button>
                </p>
              </div>
            )}
          </div>
        ) : (
          renderDashboard()
        )}
      </main>
    </div>
  );
}

export default App;