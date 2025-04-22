import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { LayoutDashboard, List, User, Settings } from "lucide-react";

// Cambia los ítems aquí si necesitas más adelante
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Mis Gastos",
    url: "/gastos",
    icon: List,
  },
  {
    title: "Perfil",
    url: "/perfil",
    icon: User,
  },
  {
    title: "Ajustes",
    url: "/ajustes",
    icon: Settings,
  },
];

function AppSideBar() {
  const { state } = useSidebar();

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className={`
          bg-gradient-to-b from-[#1A1F2C] via-[#6E59A5]/80 to-[#7E69AB]/90 border-r border-[#403E43] shadow-2xl animate-slide-in-right
          transition-all duration-300 ease-in-out
        `}
    >
      {/* Rail visible para que siempre haya forma de expandir/colapsar */}
      <SidebarRail />
      <SidebarHeader>
        <div className="flex items-center gap-3 p-3">
          <span
            className={`
                transition-all duration-300
                flex items-center justify-center rounded-lg
                bg-[#8B5CF6]/70 shadow-lg
                ${state === "collapsed" ? "w-10 h-10 mx-auto" : "w-14 h-14"}
                animate-scale-in
              `}
          >

          </span>
          {state !== "collapsed" && (
            <span className="text-xl font-extrabold text-[#8B5CF6] tracking-tight animate-fade-in">
              Gastos Personales
            </span>
          )}
        </div>
        {/* Botón para minimizar/expandir, visible en desktop */}
        <div className="px-3 my-2 flex justify-end">
          <SidebarTrigger className="transition-transform hover:scale-110" />
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="transition-all hover-scale animate-fade-in text-[#8B5CF6]"
                >
                  <SidebarMenuButton
                    asChild
                    size="lg"
                    className={`
                        rounded-xl
                        ${state === "collapsed" ? "justify-center" : ""}
                        ${
                          window.location.pathname === item.url
                            ? "bg-[#8B5CF6] text-white shadow-lg"
                            : "hover:bg-[#8B5CF6] hover:text-[#ffffff]"
                        }
                        transition-all duration-200
                      `}
                  >
                    <a href={item.url}>
                      <item.icon size={state === "collapsed" ? 26 : 22}
                      />
                      {state !== "collapsed" && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-col items-center justify-center py-4 bg-transparent animate-fade-in">
        {state !== "collapsed" && (
          <span className="text-xs text-[#bbb] opacity-70 transition-opacity">
            © {new Date().getFullYear()} Gastos Personales
          </span>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSideBar;
