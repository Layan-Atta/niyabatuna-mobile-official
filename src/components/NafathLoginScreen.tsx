import { ArrowRight, Fingerprint, Smartphone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface NafathLoginScreenProps {
  portalType: 'beneficiary' | 'employee';
  onBack: () => void;
  onLogin: () => void;
}

export const NafathLoginScreen = ({ portalType, onBack, onLogin }: NafathLoginScreenProps) => {
  const portalTitle = portalType === 'beneficiary' ? 'بوابة المستفيدين' : 'بوابة الموظفين';

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button size="sm" variant="ghost" onClick={onBack} className="gap-2">
              <ArrowRight className="h-4 w-4" />
              <span>رجوع</span>
            </Button>
            <h1 className="font-bold text-lg text-primary">{portalTitle}</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          {/* Nafath Logo Card */}
          <Card className="p-8 mb-6 border-2 border-primary/20">
            <div className="flex flex-col items-center gap-4">
              {/* Nafath Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                <Fingerprint className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-primary">النفاذ الوطني الموحد</h2>
              <p className="text-muted-foreground text-center">تسجيل الدخول عبر بوابة النفاذ الوطني</p>
            </div>
          </Card>

          {/* Instructions Card */}
          <Card className="p-6 mb-6 bg-primary/5 border-primary/10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full shrink-0">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">قبول الطلب عبر التطبيق</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  سيتم إرسال طلب تأكيد إلى تطبيق نفاذ على جوالك. يرجى قبول الطلب للمتابعة.
                </p>
              </div>
            </div>
          </Card>

          {/* Visual Steps */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 bg-card rounded-lg border">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">١</div>
              <span className="text-foreground">افتح تطبيق نفاذ على جوالك</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-card rounded-lg border">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">٢</div>
              <span className="text-foreground">اضغط على "قبول" في الإشعار</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-card rounded-lg border">
              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-foreground">سيتم تحويلك تلقائياً</span>
            </div>
          </div>

          {/* Login Button */}
          <Button 
            className="w-full h-14 text-lg font-bold gap-3"
            onClick={onLogin}
          >
            <Fingerprint className="h-6 w-6" />
            تسجيل الدخول عبر النفاذ الوطني
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-sm text-accent font-medium">
          تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء
        </p>
      </footer>
    </div>
  );
};
