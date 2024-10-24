import React from 'react';
import { Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react';
import { Appointment } from '../../types';

// Mock data - In a real app, this would come from an API
const appointments: Appointment[] = [
  {
    id: 1,
    doctorId: 1,
    patientId: 1,
    date: '2024-03-20',
    time: '10:00',
    status: 'pending',
    reason: 'Annual checkup',
    patientName: 'John Doe',
    patientEmail: 'john@example.com',
    patientPhone: '123-456-7890'
  },
  // Add more mock appointments as needed
];

const DoctorDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Appointments</h2>
      
      <div className="grid gap-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <User className="h-10 w-10 text-gray-400 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">{appointment.patientName}</h3>
                  <p className="text-gray-600">{appointment.patientEmail}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                  <CheckCircle className="h-6 w-6" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {appointment.date}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                {appointment.time}
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Reason for Visit</h4>
              <p className="text-gray-600">{appointment.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;