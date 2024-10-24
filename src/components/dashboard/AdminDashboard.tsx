import React from 'react';
import { Users, Activity, Calendar, AlertCircle } from 'lucide-react';
import { Doctor, Appointment } from '../../types';

const AdminDashboard: React.FC = () => {
  // Mock statistics - In a real app, these would come from an API
  const stats = {
    totalDoctors: 15,
    totalPatients: 150,
    pendingAppointments: 25,
    totalAppointments: 89
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Doctors</p>
              <h3 className="text-2xl font-bold">{stats.totalDoctors}</h3>
            </div>
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Patients</p>
              <h3 className="text-2xl font-bold">{stats.totalPatients}</h3>
            </div>
            <Activity className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Pending Appointments</p>
              <h3 className="text-2xl font-bold">{stats.pendingAppointments}</h3>
            </div>
            <AlertCircle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Appointments</p>
              <h3 className="text-2xl font-bold">{stats.totalAppointments}</h3>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Appointments</h3>
          {/* Add appointment list here */}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Doctor Performance</h3>
          {/* Add performance metrics here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;