import { useState } from "react";
import { ArrowRight, FileSearch, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CaseDetailsScreen } from "@/components/CaseDetailsScreen";

interface TrackingScreenProps {
  onBack: () => void;
}

const cases = [
  {
    id: 1,
    number: "402",
    title: "قضية رقم 402",
    description: "اعتداء على النفس",
    status: "investigating",
    statusLabel: "قيد التحقيق",
    date: "1445/04/15",
  },
  {
    id: 2,
    number: "119",
    title: "بلاغ رقم 119",
    description: "مخالفة مرورية",
    status: "archived",
    statusLabel: "محفوظة",
    date: "1445/03/20",
  },
  {
    id: 3,
    number: "205",
    title: "معاملة إدارية",
    description: "طلب تعويض",
    status: "completed",
    statusLabel: "مكتملة",
    date: "1445/02/10",
  },
];

export const TrackingScreen = ({ onBack }: TrackingScreenProps) => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const getStatusBadge = (status: string, label: string) => {
    const styles: Record<string, string> = {
      investigating: "bg-primary/10 text-primary border-primary/30",
      archived: "bg-muted text-muted-foreground border-muted-foreground/30",
      completed: "bg-accent/10 text-accent border-accent/30",
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {label}
      </Badge>
    );
  };

  // Show case details if selected
  if (selectedCase) {
    return (
      <CaseDetailsScreen 
        onBack={() => setSelectedCase(null)} 
        caseNumber={selectedCase} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-muted pb-6">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost" onClick={onBack} className="text-primary-foreground hover:bg-primary/80">
              <ArrowRight className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold text-primary-foreground">قضاياي</h1>
          </div>
        </div>
      </header>

      {/* Info Banner */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
          <FileSearch className="h-8 w-8 text-primary shrink-0" />
          <p className="text-sm text-foreground">
            يمكنك متابعة حالة قضاياك والاطلاع على تفاصيل كل قضية بالضغط عليها
          </p>
        </div>
      </div>

      {/* Cases List */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y">
            {cases.map((caseItem) => (
              <button
                key={caseItem.id}
                onClick={() => setSelectedCase(caseItem.number)}
                className="w-full p-4 text-right hover:bg-muted/30 transition-colors flex items-center gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-foreground">{caseItem.title}</h3>
                    {getStatusBadge(caseItem.status, caseItem.statusLabel)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{caseItem.description}</p>
                  <p className="text-xs text-muted-foreground">{caseItem.date}</p>
                </div>
                <ChevronLeft className="h-5 w-5 text-muted-foreground shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State Message */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
          <p className="text-sm text-accent">
            للإبلاغ عن قضية جديدة، يرجى استخدام خدمة "تقديم بلاغ" من الصفحة الرئيسية
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 mt-8 text-center">
        <p className="text-sm text-accent font-medium">تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء</p>
      </footer>
    </div>
  );
};
