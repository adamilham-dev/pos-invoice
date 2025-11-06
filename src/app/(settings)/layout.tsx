import Navbar from "@/components/layout/Navbar";
import SidebarSetting from "@/components/layout/SidebarSetting";

export default function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1 overflow-hidden bg-neutral-20">
        <aside className="w-[280px] px-4 overflow-y-auto">
          <SidebarSetting />
        </aside>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
