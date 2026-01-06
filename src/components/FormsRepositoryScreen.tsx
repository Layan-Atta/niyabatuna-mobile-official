import { useState } from "react";
import { ArrowRight, FileText, Eye, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FormsRepositoryScreenProps {
  onBack: () => void;
}

const forms = [
  { id: 1, name: "نموذج انتداب", code: "HR-001", description: "نموذج طلب انتداب للمهام الرسمية" },
  { id: 2, name: "بطاقة موظف", code: "HR-002", description: "نموذج طلب إصدار أو تجديد بطاقة موظف" },
  { id: 3, name: "طلب سيارة", code: "TR-001", description: "نموذج طلب استخدام سيارة رسمية" },
  { id: 4, name: "عضوية نادي الضباط", code: "HR-003", description: "نموذج طلب عضوية نادي الضباط" },
  { id: 5, name: "نموذج تظلم", code: "LG-001", description: "نموذج تقديم تظلم إداري" },
];

export const FormsRepositoryScreen = ({ onBack }: FormsRepositoryScreenProps) => {
  const { toast } = useToast();
  const [previewForm, setPreviewForm] = useState<typeof forms[0] | null>(null);

  const handleDownload = (formName: string) => {
    toast({
      title: "جاري التحميل",
      description: `يتم تحميل ${formName}...`,
    });
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
            <h1 className="text-lg font-bold text-primary-foreground">مركز النماذج</h1>
          </div>
        </div>
      </header>

      {/* Forms List */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-muted/50">
            <p className="text-sm text-muted-foreground">جميع النماذج الإدارية المتاحة</p>
          </div>
          
          <div className="divide-y">
            {forms.map((form) => (
              <div key={form.id} className="p-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground">{form.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{form.code}</p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{form.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="h-9 w-9"
                      onClick={() => setPreviewForm(form)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="h-9 w-9 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleDownload(form.name)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl w-full max-w-md max-h-[80vh] overflow-auto">
            <div className="sticky top-0 bg-card border-b p-4 flex items-center justify-between">
              <h2 className="font-bold text-foreground">معاينة: {previewForm.name}</h2>
              <Button size="icon" variant="ghost" onClick={() => setPreviewForm(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              {/* Mock Form Preview */}
              <div className="border-2 border-accent rounded-lg p-6 bg-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-primary">النيابة العامة</h3>
                  <p className="text-sm text-muted-foreground">المملكة العربية السعودية</p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-center text-foreground mb-4">{previewForm.name}</h4>
                  <p className="text-sm text-muted-foreground text-center">{previewForm.description}</p>
                  <div className="mt-6 space-y-4">
                    <div className="border-b border-dashed pb-2">
                      <span className="text-sm text-muted-foreground">الاسم: ________________________</span>
                    </div>
                    <div className="border-b border-dashed pb-2">
                      <span className="text-sm text-muted-foreground">الرقم الوظيفي: ________________________</span>
                    </div>
                    <div className="border-b border-dashed pb-2">
                      <span className="text-sm text-muted-foreground">التاريخ: ________________________</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t text-center">
                  <p className="text-xs text-muted-foreground">رقم النموذج: {previewForm.code}</p>
                </div>
              </div>
              <Button 
                onClick={() => {
                  handleDownload(previewForm.name);
                  setPreviewForm(null);
                }} 
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="h-4 w-4 ml-2" />
                تحميل النموذج
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
