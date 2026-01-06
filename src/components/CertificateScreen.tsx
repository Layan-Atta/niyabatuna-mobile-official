import { useState } from "react";
import { ArrowRight, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CertificateScreenProps {
  onBack: () => void;
}

export const CertificateScreen = ({ onBack }: CertificateScreenProps) => {
  const [recipient, setRecipient] = useState("");
  const [includeSalary, setIncludeSalary] = useState(false);
  const [language, setLanguage] = useState("arabic");
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = () => {
    setShowPreview(true);
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
            <h1 className="text-lg font-bold text-primary-foreground">طلب مشهد</h1>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm p-6 space-y-5">
          {/* Recipient */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">الجهة الموجه إليها المشهد</Label>
            <Input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="مثال: البنك الأهلي السعودي"
              className="text-right"
            />
          </div>

          {/* Include Salary Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <Label className="text-foreground font-medium cursor-pointer">تضمين تفاصيل الراتب</Label>
            <Switch checked={includeSalary} onCheckedChange={setIncludeSalary} />
          </div>

          {/* Language Selection */}
          <div className="space-y-3">
            <Label className="text-foreground font-medium">لغة المشهد</Label>
            <RadioGroup value={language} onValueChange={setLanguage} className="flex gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="arabic" id="arabic" />
                <Label htmlFor="arabic" className="cursor-pointer">العربية</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="english" id="english" />
                <Label htmlFor="english" className="cursor-pointer">الإنجليزية</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Generate Button */}
          <Button onClick={handleGenerate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
            <FileText className="h-4 w-4 ml-2" />
            توليد المشهد
          </Button>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl w-full max-w-md max-h-[80vh] overflow-auto">
            <div className="sticky top-0 bg-card border-b p-4 flex items-center justify-between">
              <h2 className="font-bold text-foreground">معاينة المشهد</h2>
              <Button size="icon" variant="ghost" onClick={() => setShowPreview(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              {/* Mock PDF Content */}
              <div className="border-2 border-accent rounded-lg p-6 bg-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-primary">النيابة العامة</h3>
                  <p className="text-sm text-muted-foreground">المملكة العربية السعودية</p>
                </div>
                <div className="border-t pt-4 space-y-3 text-sm">
                  <p className="text-foreground"><strong>إلى:</strong> {recipient || "الجهة المعنية"}</p>
                  <p className="text-foreground"><strong>الموضوع:</strong> مشهد {language === "arabic" ? "عربي" : "إنجليزي"}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    نفيد بأن الموظف / أحمد عطاء يعمل لدى النيابة العامة منذ تاريخ 1440/01/01هـ وحتى تاريخه.
                  </p>
                  {includeSalary && (
                    <p className="text-muted-foreground">
                      <strong>الراتب الإجمالي:</strong> 15,000 ريال سعودي
                    </p>
                  )}
                </div>
                <div className="mt-6 pt-4 border-t text-center">
                  <p className="text-xs text-muted-foreground">رقم المشهد: {Math.floor(Math.random() * 9000) + 1000}/1445</p>
                </div>
              </div>
              <Button onClick={() => setShowPreview(false)} className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                تنزيل المشهد
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 mt-8 text-center">
        <p className="text-sm text-accent font-medium">تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء</p>
      </footer>
    </div>
  );
};
