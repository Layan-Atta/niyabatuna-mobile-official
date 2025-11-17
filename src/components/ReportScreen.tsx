import { useState } from "react";
import { ArrowRight, Upload, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ReportScreenProps {
  onBack: () => void;
}

export const ReportScreen = ({ onBack }: ReportScreenProps) => {
  const [reportType, setReportType] = useState("");
  const [details, setDetails] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reportNumber = Math.floor(Math.random() * 900) + 100;
    
    toast({
      title: "تم إرسال البلاغ بنجاح",
      description: `رقم البلاغ: ${reportNumber}`,
    });

    setTimeout(() => {
      onBack();
    }, 2000);
  };

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
            <h1 className="text-xl font-bold text-foreground">بلاغ جديد</h1>
          </div>
        </div>
      </header>

      {/* Form */}
      <section className="max-w-md mx-auto px-4 py-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">تقديم بلاغ جديد</h2>
              <p className="text-sm text-muted-foreground">املأ البيانات المطلوبة</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reportType">نوع البلاغ</Label>
              <Select value={reportType} onValueChange={setReportType} required>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع البلاغ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drugs">المخدرات</SelectItem>
                  <SelectItem value="assault">الاعتداء على النفس</SelectItem>
                  <SelectItem value="theft">السرقة</SelectItem>
                  <SelectItem value="fraud">الاحتيال</SelectItem>
                  <SelectItem value="other">أخرى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">تفاصيل الواقعة</Label>
              <Textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="اكتب تفاصيل البلاغ هنا..."
                className="min-h-[150px] resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>إرفاق الأدلة (اختياري)</Label>
              <Button 
                type="button"
                variant="outline" 
                className="w-full gap-2"
              >
                <Upload className="h-4 w-4" />
                اختر الملفات
              </Button>
              <p className="text-xs text-muted-foreground">
                يمكنك إرفاق صور أو مستندات داعمة للبلاغ
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              إرسال البلاغ
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
};
