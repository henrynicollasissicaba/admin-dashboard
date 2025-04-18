import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="grid gap-4 p-4 grid-cols-1 md:grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
