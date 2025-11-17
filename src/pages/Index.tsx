import { useState } from "react";
import { FileWarning, Search, BookOpen, Calendar, Shield, Activity, Eye, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionCard } from "@/components/ActionCard";
import { RightsCard } from "@/components/RightsCard";
import { BottomNav } from "@/components/BottomNav";
import { ReportScreen } from "@/components/ReportScreen";
import { TrackingScreen } from "@/components/TrackingScreen";
import { GuideScreen } from "@/components/GuideScreen";
import logoSymbol from "@/assets/logo-symbol.png";
import logoText from "@/assets/logo-text.png";

type Screen = 'home' | 'report' | 'tracking' | 'guide';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const mainActions = [
    {
      icon: FileWarning,
      title: "تقديم بلاغ",
      description: "الإبلاغ عن جريمة أو مخالفة",
      onClick: () => setCurrentScreen('report'),
    },
    {
      icon: Search,
      title: "متابعة القضايا",
      description: "الاستعلام عن حالة القضايا والتحقيقات",
      onClick: () => setCurrentScreen('tracking'),
    },
    {
      icon: BookOpen,
      title: "دليل الإجراءات",
      description: "شرح مبسط للحقوق والخطوات القانونية",
      onClick: () => setCurrentScreen('guide'),
    },
    {
      icon: Calendar,
      title: "حجز موعد",
      description: "طلب زيارة لمقر النيابة",
    },
  ];

  const rightsItems = [
    { icon: Shield, title: "حقوق المتهم" },
    { icon: Activity, title: "آلية التحقيق" },
  ];

  const handleBackToHome = () => setCurrentScreen('home');

  // Render different screens based on state
  if (currentScreen === 'report') {
    return <ReportScreen onBack={handleBackToHome} />;
  }

  if (currentScreen === 'tracking') {
    return <TrackingScreen onBack={handleBackToHome} />;
  }

  if (currentScreen === 'guide') {
    return <GuideScreen onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button size="sm" variant="ghost" className="gap-2">
              <LogIn className="h-4 w-4" />
              <span className="font-semibold">تسجيل الدخول</span>
            </Button>
            
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 border-2 border-accent rounded-lg p-2 bg-accent/5">
                <img src={logoSymbol} alt="شعار النيابة" className="h-12 w-12 object-contain" />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-sm text-primary">نيابتنا .. مرجعك وإجراءاتك</h1>
              </div>
            </div>

            <Button size="icon" variant="ghost">
              <Eye className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-gradient py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-3">
            مرحباً بك في النيابة العامة
          </h2>
          <p className="text-lg text-primary-foreground/90">
            خدماتنا الرقمية في خدمتك
          </p>
        </div>
      </section>

      {/* Main Actions Grid */}
      <section className="max-w-md mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 gap-4">
          {mainActions.map((action, index) => (
            <ActionCard key={index} {...action} />
          ))}
        </div>
      </section>

      {/* Rights Section */}
      <section className="max-w-md mx-auto px-4 mt-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground">اعرف حقوقك</h3>
          <div className="h-1 w-20 bg-accent rounded-full mt-2"></div>
        </div>
        <div className="space-y-3">
          {rightsItems.map((item, index) => (
            <RightsCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Footer Credits */}
      <footer className="max-w-md mx-auto px-4 mt-12 mb-6 text-center">
        <p className="text-sm text-accent font-medium">
          تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء
        </p>
      </footer>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
