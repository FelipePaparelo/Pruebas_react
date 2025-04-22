import AppSidebar from "@/components/AppSideBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex items-center justify-center">
          {/* El contenido va acá */}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default App;
