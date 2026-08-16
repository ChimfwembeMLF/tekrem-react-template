import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppQueryProvider } from './lib/query/provider';
import { ThemeProvider } from './components/common/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppQueryProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AppQueryProvider>
    </ThemeProvider>
  );
}
