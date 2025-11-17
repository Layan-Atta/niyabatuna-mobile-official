import { Home, Bell, User, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "الرئيسية", id: "home" },
  { icon: Bell, label: "التنبيهات", id: "notifications" },
  { icon: User, label: "ملفي الشخصي", id: "profile" },
  { icon: Settings, label: "الإعدادات", id: "settings" },
];

export const BottomNav = () => {
  const [activeId, setActiveId] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="max-w-md mx-auto grid grid-cols-4 h-16">
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => setActiveId(id)}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeId === id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
