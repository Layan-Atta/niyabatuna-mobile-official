import { ArrowRight, FileText, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TrackingScreenProps {
  onBack: () => void;
}

export const TrackingScreen = ({ onBack }: TrackingScreenProps) => {
  const cases = [
    {
      id: "402",
      title: "قضية رقم 402",
      description: "قضية احتيال مالي",
      status: "قيد التحقيق",
      statusColor: "bg-primary text-primary-foreground",
      icon: Clock,
      date: "2025-01-15",
    },
    {
      id: "119",
      title: "بلاغ رقم 119",
      description: "بلاغ سرقة",
      status: "محفوظة",
      statusColor: "bg-muted text-muted-foreground",
      icon: FileText,
      date: "2024-12-20",
    },
    {
      id: "301",
      title: "معاملة إدارية",
      description: "طلب استعلام",
      status: "مكتملة",
      statusColor: "bg-accent text-accent-foreground",
      icon: CheckCircle2,
      date: "2024-11-10",
    },
  ];

  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              size="icon" 
              variant="ghost"
              onClick={onBack}
              className="hover:bg-accent"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-foreground">قضاياي</h1>
          </div>
        </div>
      </header>

      {/* Cases List */}
      <section className="max-w-md mx-auto px-4 py-6 space-y-4">
        {cases.map((caseItem) => (
          <Card key={caseItem.id} className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <caseItem.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                  </div>
                  <Badge className={caseItem.statusColor}>
                    {caseItem.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  تاريخ: {caseItem.date}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Empty State Message */}
      <div className="max-w-md mx-auto px-4 mt-8">
        <Card className="p-6 text-center bg-accent/5 border-dashed">
          <p className="text-sm text-muted-foreground">
            لعرض المزيد من القضايا، قم بتسجيل الدخول إلى حسابك
          </p>
        </Card>
      </div>
    </div>
  );
};
