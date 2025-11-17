import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export const ActionCard = ({ icon: Icon, title, description, onClick }: ActionCardProps) => {
  return (
    <Card 
      className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-accent group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
