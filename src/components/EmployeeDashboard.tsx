import { useState } from "react";
import { ArrowRight, Calendar, FileText, GraduationCap, Briefcase, Mail, HelpCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { LeaveRequestScreen } from "@/components/LeaveRequestScreen";
import { CertificateScreen } from "@/components/CertificateScreen";
import { TrainingScreen } from "@/components/TrainingScreen";
import { FormsRepositoryScreen } from "@/components/FormsRepositoryScreen";
import { AdminInboxScreen } from "@/components/AdminInboxScreen";
import logoSymbol from "@/assets/logo-symbol.png";
type Screen = 'home' | 'leave' | 'certificate' | 'training' | 'forms' | 'inbox' | 'inquiries';
interface EmployeeDashboardProps {
  onBack: () => void;
}
export const EmployeeDashboard = ({
  onBack
}: EmployeeDashboardProps) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const serviceCategories = [{
    icon: Calendar,
    title: "الإجازات",
    description: "طلبات الإجازات بأنواعها",
    color: "bg-blue-500",
    onClick: () => setCurrentScreen('leave')
  }, {
    icon: FileText,
    title: "المشاهد",
    description: "إصدار المشاهد والشهادات",
    color: "bg-emerald-500",
    onClick: () => setCurrentScreen('certificate')
  }, {
    icon: GraduationCap,
    title: "الدورات",
    description: "طلبات التدريب والتطوير",
    color: "bg-purple-500",
    onClick: () => setCurrentScreen('training')
  }, {
    icon: Briefcase,
    title: "النماذج",
    description: "مركز النماذج الإدارية",
    color: "bg-orange-500",
    onClick: () => setCurrentScreen('forms')
  }, {
    icon: Mail,
    title: "الاتصالات الإدارية",
    description: "الوارد والصادر والتعاميم",
    color: "bg-rose-500",
    onClick: () => setCurrentScreen('inbox')
  }, {
    icon: HelpCircle,
    title: "استعلامات",
    description: "استعلامات عامة ووظيفية",
    color: "bg-cyan-500",
    onClick: () => {}
  }];
  const handleBackToHome = () => setCurrentScreen('home');

  // Render sub-screens
  if (currentScreen === 'leave') {
    return <LeaveRequestScreen onBack={handleBackToHome} />;
  }
  if (currentScreen === 'certificate') {
    return <CertificateScreen onBack={handleBackToHome} />;
  }
  if (currentScreen === 'training') {
    return <TrainingScreen onBack={handleBackToHome} />;
  }
  if (currentScreen === 'forms') {
    return <FormsRepositoryScreen onBack={handleBackToHome} />;
  }
  if (currentScreen === 'inbox') {
    return <AdminInboxScreen onBack={handleBackToHome} />;
  }
  return <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button size="sm" variant="ghost" onClick={onBack} className="gap-2">
              <ArrowRight className="h-4 w-4" />
              <span>خروج</span>
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="border-2 border-accent rounded-lg p-1.5 bg-accent/5">
                <img src={logoSymbol} alt="شعار النيابة" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="font-bold text-primary">بوابة الموظف</h1>
            </div>

            <Button size="icon" variant="ghost">
              <Eye className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </header>

      {/* Employee Info Card */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm p-5 border-2 border-accent/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">أ.ع</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">أحمد عطاء</h2>
              <p className="text-sm text-muted-foreground">الرقم الوظيفي: 000000</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-muted/50 rounded-lg p-2.5">
              <span className="text-muted-foreground block text-xs">المرتبة</span>
              <span className="font-medium text-foreground">العاشرة</span>
            </div>
            <div className="bg-muted/50 rounded-lg p-2.5">
              <span className="text-muted-foreground block text-xs">الدرجة</span>
              <span className="font-medium text-foreground">الثانية عشرة   

 </span>
            </div>
            <div className="bg-muted/50 rounded-lg p-2.5">
              <span className="text-muted-foreground block text-xs">القطاع</span>
              <span className="font-medium text-foreground">التحقيق</span>
            </div>
            <div className="bg-muted/50 rounded-lg p-2.5">
              <span className="text-muted-foreground block text-xs">الفرع</span>
              <span className="font-medium text-foreground">منطقة عسير</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t text-center">
            <span className="text-sm text-accent font-medium">الخدمة: ثلاثة وعشرون عاماً              </span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="max-w-md mx-auto px-4 mt-6">
        <h3 className="text-lg font-bold text-foreground mb-4">الخدمات الذاتية</h3>
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.map((service, index) => <button key={index} onClick={service.onClick} className="bg-card rounded-xl shadow-sm p-4 text-right hover:shadow-md hover:border-accent border-2 border-transparent transition-all group">
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{service.title}</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{service.description}</p>
            </button>)}
        </div>
      </section>

      {/* Footer Credits */}
      <footer className="max-w-md mx-auto px-4 mt-10 mb-6 text-center">
        <p className="text-sm text-accent font-medium">
          تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء
        </p>
      </footer>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>;
};