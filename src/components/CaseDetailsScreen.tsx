import { ArrowRight, CheckCircle2, Circle, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CaseDetailsScreenProps {
  onBack: () => void;
  caseNumber: string;
}

const timelineSteps = [
  {
    id: 1,
    title: "تم استلام البلاغ",
    description: "تم تسجيل البلاغ في النظام وإحالته للمراجعة",
    date: "1445/04/15",
    status: "completed"
  },
  {
    id: 2,
    title: "إحالة إلى دائرة الاعتداء على النفس",
    description: "تم تحويل الملف إلى الدائرة المختصة",
    date: "1445/04/18",
    status: "completed"
  },
  {
    id: 3,
    title: "قيد التحقيق الحالي",
    description: "جاري استكمال إجراءات التحقيق",
    date: "1445/04/22",
    status: "current"
  },
  {
    id: 4,
    title: "إصدار القرار",
    description: "في انتظار استكمال التحقيقات",
    date: "",
    status: "pending"
  },
];

export const CaseDetailsScreen = ({ onBack, caseNumber }: CaseDetailsScreenProps) => {
  const { toast } = useToast();

  const handlePrint = () => {
    toast({
      title: "جاري الطباعة",
      description: "يتم إعداد المستند للطباعة...",
    });
  };

  const getStepIcon = (status: string) => {
    if (status === "completed") {
      return <CheckCircle2 className="h-6 w-6 text-primary" />;
    }
    if (status === "current") {
      return (
        <div className="relative">
          <Circle className="h-6 w-6 text-accent fill-accent" />
          <div className="absolute inset-0 animate-ping">
            <Circle className="h-6 w-6 text-accent opacity-50" />
          </div>
        </div>
      );
    }
    return <Circle className="h-6 w-6 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen bg-muted pb-6">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost" onClick={onBack} className="text-primary-foreground hover:bg-primary/80">
              <ArrowRight className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold text-primary-foreground">تفاصيل القضية</h1>
          </div>
        </div>
      </header>

      {/* Case Info Header */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm p-5 border-2 border-accent/30">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-foreground">قضية رقم {caseNumber}</h2>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              قيد التحقيق
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-muted-foreground">نوع القضية:</span>
              <p className="font-medium text-foreground">اعتداء على النفس</p>
            </div>
            <div>
              <span className="text-muted-foreground">تاريخ التسجيل:</span>
              <p className="font-medium text-foreground">1445/04/15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm p-5">
          <h3 className="font-bold text-foreground mb-6">مسار القضية</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-3 top-3 bottom-3 w-0.5 bg-border"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative flex gap-4">
                  {/* Icon */}
                  <div className="relative z-10 bg-card">
                    {getStepIcon(step.status)}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 pb-6 ${index === timelineSteps.length - 1 ? 'pb-0' : ''}`}>
                    <div className={`p-4 rounded-lg ${
                      step.status === "current" 
                        ? "bg-accent/10 border border-accent/30" 
                        : step.status === "completed"
                        ? "bg-primary/5 border border-primary/20"
                        : "bg-muted border border-border"
                    }`}>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className={`font-medium ${
                          step.status === "pending" ? "text-muted-foreground" : "text-foreground"
                        }`}>
                          {step.title}
                        </h4>
                        {step.date && (
                          <span className="text-xs text-muted-foreground shrink-0">{step.date}</span>
                        )}
                      </div>
                      <p className={`text-sm ${
                        step.status === "pending" ? "text-muted-foreground/70" : "text-muted-foreground"
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Button */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <Button onClick={handlePrint} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Printer className="h-4 w-4 ml-2" />
          طباعة حالة القضية
        </Button>
      </div>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 mt-8 text-center">
        <p className="text-sm text-accent font-medium">تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء</p>
      </footer>
    </div>
  );
};
