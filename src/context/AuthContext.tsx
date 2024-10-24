import React, { createContext, useContext, useState } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: 1,
      email,
      name: 'John Doe',
      role: 'patient',
    };
    setAuthState({ user: mockUser, isAuthenticated: true });
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false });
  };

  const register = async (email: string, password: string, name: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: 1,
      email,
      name,
      role: 'patient',
    };
    setAuthState({ user: mockUser, isAuthenticated: true });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};