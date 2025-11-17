import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RightsCardProps {
  icon: LucideIcon;
  title: string;
}

export const RightsCard = ({ icon: Icon, title }: RightsCardProps) => {
  return (
    <Card className="p-5 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow border-r-4 border-r-accent">
      <div className="p-3 bg-accent/10 rounded-full">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h4 className="font-semibold text-base">{title}</h4>
    </Card>
  );
};
