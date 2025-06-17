import { SidebarHeader } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, FileText, MessageSquare, Video, Map, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Currículo Automatizado",
    url: "/curriculo",
    icon: FileText,
  },
  {
    title: "Entrevista Simulada",
    url: "/entrevista",
    icon: MessageSquare,
  },
  {
    title: "Entrevista com Mentor",
    url: "/entrevista-mentor",
    icon: Video,
  },
  {
    title: "Roadmap Personalizado",
    url: "/roadmap",
    icon: Map,
  },
  {
    title: "Mentoria LinkedIn",
    url: "/mentoria",
    icon: Linkedin,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <Code2 className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg">Carreira360</span>
        </div>
      </SidebarHeader>
    </Sidebar>
  )
}
