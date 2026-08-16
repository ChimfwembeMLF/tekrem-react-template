import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '../components/common/ThemeToggle';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Frontend Template</h1>
        <ThemeToggle />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
