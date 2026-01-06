import { useState } from "react";
import { ArrowRight, Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface LeaveRequestScreenProps {
  onBack: () => void;
}

export const LeaveRequestScreen = ({ onBack }: LeaveRequestScreenProps) => {
  const { toast } = useToast();
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [replacement, setReplacement] = useState("");

  const handleSubmit = () => {
    const requestNumber = Math.floor(Math.random() * 900) + 100;
    toast({
      title: "تم إرسال الطلب بنجاح",
      description: `تم إرسال طلبك برقم #${requestNumber}`,
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
            <h1 className="text-lg font-bold text-primary-foreground">طلب إجازة</h1>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-xl shadow-sm p-6 space-y-5">
          {/* Leave Type */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">نوع الإجازة</Label>
            <Select value={leaveType} onValueChange={setLeaveType}>
              <SelectTrigger className="w-full text-right">
                <SelectValue placeholder="اختر نوع الإجازة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">إجازة اعتيادية</SelectItem>
                <SelectItem value="compensatory">إجازة تعويضية</SelectItem>
                <SelectItem value="single">إجازة منفردة</SelectItem>
                <SelectItem value="sick">إجازة مرضية</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-foreground font-medium">تاريخ البداية</Label>
              <div className="relative">
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="text-right pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground font-medium">تاريخ النهاية</Label>
              <div className="relative">
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="text-right pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Replacement */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">اسم الموظف البديل</Label>
            <Input
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
              placeholder="أدخل اسم الموظف البديل"
              className="text-right"
            />
          </div>

          {/* Medical Report Upload - Only for Sick Leave */}
          {leaveType === "sick" && (
            <div className="space-y-2">
              <Label className="text-foreground font-medium">إرفاق التقارير الطبية</Label>
              <div className="border-2 border-dashed border-accent/50 rounded-lg p-6 text-center bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto text-accent mb-2" />
                <p className="text-sm text-muted-foreground">اضغط لرفع الملفات</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (حد أقصى 5 ميجا)</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
            إرسال الطلب
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
