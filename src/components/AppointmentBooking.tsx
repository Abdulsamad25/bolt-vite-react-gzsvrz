import React, { useState } from 'react';
import { Search } from 'lucide-react';
import DoctorCard from './DoctorCard';
import AppointmentForm from './AppointmentForm';
import { Doctor } from '../types';

// Mock doctors data - In a real app, this would come from an API
const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    availability: ["Monday", "Wednesday", "Friday"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
    availability: ["Tuesday", "Thursday", "Saturday"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
    availability: ["Monday", "Tuesday", "Thursday"]
  },
  {
    id: 4,
    name: "Dr. James Thompson",
    specialty: "Orthopedist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
    availability: ["Wednesday", "Friday", "Saturday"]
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
    availability: ["Monday", "Thursday", "Friday"]
  }
];

const specialties = [
  "All Specialties",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedist",
  "Neurologist"
];

const AppointmentBooking: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All Specialties" || 
                            doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleAppointmentSubmit = (formData: any) => {
    // In a real app, this would make an API call to book the appointment
    console.log('Appointment booked:', { doctor: selectedDoctor, ...formData });
    setSelectedDoctor(null);
  };

  if (selectedDoctor) {
    return (
      <AppointmentForm
        doctor={selectedDoctor}
        onSubmit={handleAppointmentSubmit}
        onBack={() => setSelectedDoctor(null)}
      />
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSpecialty === specialty
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onSelect={() => setSelectedDoctor(doctor)}
          />
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No doctors found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;