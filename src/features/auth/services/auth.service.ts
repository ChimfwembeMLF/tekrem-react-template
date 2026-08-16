import type { AuthResponse } from '../types';
import type {
  LoginCredentials,
  RegisterCredentials,
} from '../schemas/auth.schema';
import { APIError } from '@/lib/api/client';

// Mocking API since we don't have a real backend yet
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      credentials.email === 'test@example.com' &&
      credentials.password === 'password'
    ) {
      return {
        user: {
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
        },
        token: 'mock-jwt-token-xyz',
      };
    }

    throw new APIError(
      401,
      'Invalid credentials. Try test@example.com / password'
    );
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      user: {
        id: '2',
        name: credentials.name,
        email: credentials.email,
      },
      token: 'mock-jwt-token-register',
    };
  },
};
