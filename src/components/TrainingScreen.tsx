import { useState } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface TrainingScreenProps {
  onBack: () => void;
}

export const TrainingScreen = ({ onBack }: TrainingScreenProps) => {
  const { toast } = useToast();
  const [courseName, setCourseName] = useState("");
  const [entity, setEntity] = useState("");
  const [rationale, setRationale] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!courseName.trim()) newErrors.courseName = "يرجى إدخال اسم الدورة";
    if (!entity) newErrors.entity = "يرجى اختيار الجهة المنظمة";
    if (!rationale.trim()) newErrors.rationale = "يرجى إدخال مبررات الالتحاق";
    if (rationale.length < 20) newErrors.rationale = "يجب أن تكون المبررات 20 حرف على الأقل";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    
    const requestNumber = Math.floor(Math.random() * 900) + 100;
    toast({
      title: "تم تقديم الطلب بنجاح",
      description: `تم تسجيل طلبك برقم #${requestNumber}`,
    });
    setTimeout(() => onBack(), 2000);
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
            <h1 className="text-lg font-bold text-primary-foreground">طلب دورة تدريبية</h1>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm p-6 space-y-5">
          {/* Course Info Header */}
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-bold text-foreground">نموذج التسجيل</h3>
              <p className="text-sm text-muted-foreground">أدخل بيانات الدورة المطلوبة</p>
            </div>
          </div>

          {/* Course Name */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">اسم الدورة / البرنامج</Label>
            <Input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="مثال: إدارة المشاريع الاحترافية PMP"
              className={`text-right ${errors.courseName ? "border-destructive" : ""}`}
            />
            {errors.courseName && <p className="text-sm text-destructive">{errors.courseName}</p>}
          </div>

          {/* Entity */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">الجهة المنظمة</Label>
            <Select value={entity} onValueChange={setEntity}>
              <SelectTrigger className={`w-full text-right ${errors.entity ? "border-destructive" : ""}`}>
                <SelectValue placeholder="اختر الجهة المنظمة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ipa">معهد الإدارة العامة</SelectItem>
                <SelectItem value="internal">برنامج داخلي</SelectItem>
                <SelectItem value="external">برنامج خارجي</SelectItem>
                <SelectItem value="government">جهة حكومية أخرى</SelectItem>
              </SelectContent>
            </Select>
            {errors.entity && <p className="text-sm text-destructive">{errors.entity}</p>}
          </div>

          {/* Rationale */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">مبررات الالتحاق</Label>
            <Textarea
              value={rationale}
              onChange={(e) => setRationale(e.target.value)}
              placeholder="اشرح أسباب رغبتك في الالتحاق بهذه الدورة وكيف ستفيد في عملك..."
              className={`min-h-[100px] text-right ${errors.rationale ? "border-destructive" : ""}`}
            />
            {errors.rationale && <p className="text-sm text-destructive">{errors.rationale}</p>}
            <p className="text-xs text-muted-foreground">{rationale.length}/200 حرف</p>
          </div>

          {/* Submit Button */}
          <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
            تقديم الطلب
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 mt-8 text-center">
        <p className="text-sm text-accent font-medium">تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء</p>
      </footer>
    </div>
  );
};
