import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onSelect: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-indigo-600 font-medium">{doctor.specialty}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Available on:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {doctor.availability.map((day) => (
              <span
                key={day}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={onSelect}
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;