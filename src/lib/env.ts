import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url().optional(), // Make optional so it doesn't crash if totally unset while we don't have a real backend
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  throw new Error('Invalid environment variables');
}

export const env = _env.data;
