import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Appointment } from '../../types';
import AppointmentBooking from '../AppointmentBooking';

const PatientDashboard: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);
  
  // Mock appointments - In a real app, these would come from an API
  const appointments: Appointment[] = [
    {
      id: 1,
      doctorId: 1,
      patientId: 1,
      date: '2024-03-20',
      time: '10:00',
      status: 'confirmed',
      reason: 'Annual checkup',
      patientName: 'John Doe',
      patientEmail: 'john@example.com',
      patientPhone: '123-456-7890'
    }
  ];

  if (showBooking) {
    return (
      <div>
        <button
          onClick={() => setShowBooking(false)}
          className="mb-6 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
        >
          ← Back to Dashboard
        </button>
        <AppointmentBooking />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Appointments</h2>
        <button
          onClick={() => setShowBooking(true)}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Book New Appointment
        </button>
      </div>
      
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
                  <h3 className="font-semibold text-lg">Dr. Sarah Wilson</h3>
                  <p className="text-gray-600">Cardiologist</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'confirmed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
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

            <button className="mt-4 text-red-600 hover:text-red-700 text-sm font-medium">
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;