export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  availability: string[];
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'patient' | 'doctor' | 'admin';
  image?: string;
}

export interface Appointment {
  id: number;
  doctorId: number;
  patientId: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  reason: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}