import { Users, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import logoSymbol from "@/assets/logo-symbol.png";

interface UserSelectionScreenProps {
  onSelectBeneficiary: () => void;
  onSelectEmployee: () => void;
}

export const UserSelectionScreen = ({ onSelectBeneficiary, onSelectEmployee }: UserSelectionScreenProps) => {
  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Header */}
      <header className="bg-card shadow-sm py-6">
        <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 border-2 border-accent rounded-lg p-3 bg-accent/5">
            <img src={logoSymbol} alt="شعار النيابة" className="h-16 w-16 object-contain" />
          </div>
          <h1 className="font-bold text-xl text-primary text-center">نيابتنا .. مرجعك وإجراءاتك</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-foreground mb-2">اختر نوع الخدمة</h2>
          <p className="text-muted-foreground text-center mb-8">حدد البوابة المناسبة للوصول إلى خدماتك</p>
          
          <div className="grid gap-6">
            {/* Beneficiary Card */}
            <Card 
              className="p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-accent group border-2"
              onClick={onSelectBeneficiary}
            >
              <div className="flex items-center gap-6">
                <div className="p-5 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-foreground mb-1">بوابة المستفيدين</h3>
                  <p className="text-muted-foreground">للمراجعين والمحامين</p>
                </div>
              </div>
            </Card>

            {/* Employee Card */}
            <Card 
              className="p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-accent group border-2"
              onClick={onSelectEmployee}
            >
              <div className="flex items-center gap-6">
                <div className="p-5 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-12 w-12 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-foreground mb-1">بوابة الموظفين</h3>
                  <p className="text-muted-foreground">الخدمات الذاتية لمنسوبي النيابة</p>
                </div>
              </div>
            </Card>
          </div>
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
