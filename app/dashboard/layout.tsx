// Панели мониторинга имеют общую навигацию, которая используется на нескольких страницах.
// В Next.js можно использовать специальный layout.tsxфайл для создания пользовательского
// интерфейса, общего для нескольких страниц. Давайте создадим макет для страниц панели мониторинга!
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}