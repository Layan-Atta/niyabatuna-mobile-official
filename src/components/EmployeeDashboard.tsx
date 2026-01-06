import { useState } from "react";
import { 
  ArrowRight, 
  Calendar, 
  FileText, 
  GraduationCap, 
  ClipboardList, 
  Mail, 
  Search,
  Palmtree,
  Clock,
  Stethoscope,
  MoreHorizontal,
  Receipt,
  Shield,
  Briefcase,
  BadgeDollarSign,
  Building,
  BookOpen,
  Globe,
  Award,
  IdCard,
  Send,
  Inbox,
  Megaphone,
  Car,
  Users,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import logoSymbol from "@/assets/logo-symbol.png";

interface EmployeeDashboardProps {
  onBack: () => void;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  items: { title: string; icon: React.ElementType }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'leaves',
    title: 'الإجازات',
    icon: Calendar,
    color: 'bg-green-500',
    items: [
      { title: 'إجازة اعتيادية', icon: Palmtree },
      { title: 'إجازة تعويضية', icon: Clock },
      { title: 'إجازة منفردة', icon: Calendar },
      { title: 'إجازة مرضية', icon: Stethoscope },
      { title: 'إجازات أخرى', icon: MoreHorizontal },
    ]
  },
  {
    id: 'certificates',
    title: 'المشاهد',
    icon: FileText,
    color: 'bg-blue-500',
    items: [
      { title: 'مشهد الراتب', icon: Receipt },
      { title: 'مشهد قوى الأمن', icon: Shield },
      { title: 'مشهد على رأس العمل', icon: Briefcase },
      { title: 'مشهد بدون راتب', icon: BadgeDollarSign },
    ]
  },
  {
    id: 'courses',
    title: 'الدورات',
    icon: GraduationCap,
    color: 'bg-purple-500',
    items: [
      { title: 'طلب التحاق بمعهد الإدارة', icon: Building },
      { title: 'برنامج داخلي', icon: BookOpen },
      { title: 'برنامج خارجي', icon: Globe },
      { title: 'دورة جهات حكومية', icon: Award },
      { title: 'تسجيل دورة في البطاقة', icon: IdCard },
    ]
  },
  {
    id: 'forms',
    title: 'النماذج',
    icon: ClipboardList,
    color: 'bg-orange-500',
    items: [
      { title: 'نموذج انتداب', icon: Send },
      { title: 'عضوية نادي الضباط', icon: Users },
      { title: 'بطاقة موظف', icon: IdCard },
      { title: 'طلب سيارة', icon: Car },
      { title: 'نماذج أخرى', icon: MoreHorizontal },
    ]
  },
  {
    id: 'communications',
    title: 'الاتصالات الإدارية',
    icon: Mail,
    color: 'bg-teal-500',
    items: [
      { title: 'الوارد الموحد', icon: Inbox },
      { title: 'الصادر الموحد', icon: Send },
      { title: 'التعاميم الموحدة', icon: Megaphone },
      { title: 'الوارد العام', icon: Inbox },
      { title: 'الصادر العام', icon: Send },
      { title: 'التعاميم العامة', icon: Megaphone },
    ]
  },
  {
    id: 'inquiries',
    title: 'استعلامات',
    icon: Search,
    color: 'bg-indigo-500',
    items: [
      { title: 'استعلامات عامة', icon: Search },
      { title: 'استعلامات وظيفية', icon: Briefcase },
    ]
  },
];

export const EmployeeDashboard = ({ onBack }: EmployeeDashboardProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const { toast } = useToast();

  const handleServiceClick = (serviceTitle: string) => {
    toast({
      title: "تم رفع الطلب بنجاح",
      description: `تم إرسال طلب "${serviceTitle}" وسيتم معالجته قريباً`,
    });
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-muted pb-6">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button size="sm" variant="ghost" onClick={onBack} className="gap-2">
              <ArrowRight className="h-4 w-4" />
              <span>خروج</span>
            </Button>
            <div className="flex items-center gap-2">
              <img src={logoSymbol} alt="شعار النيابة" className="h-8 w-8 object-contain" />
              <h1 className="font-bold text-lg text-primary">بوابة الموظفين</h1>
            </div>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Employee Info Card */}
      <section className="max-w-md mx-auto px-4 mt-4">
        <Card className="p-4 border-2 border-accent bg-gradient-to-br from-card to-accent/5">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  أ
                </div>
                <div>
                  <h2 className="font-bold text-lg text-foreground">أحمد عطاء</h2>
                  <p className="text-sm text-muted-foreground">الرقم الوظيفي: 102938</p>
                </div>
              </div>
              <div className="text-left">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  المرتبة: السابعة
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">الخدمة:</span>
                <span className="font-semibold text-foreground">5 سنوات</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">القطاع:</span>
                <span className="font-semibold text-foreground">التحقيق</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">الدرجة:</span>
                <span className="font-semibold text-foreground">الثالثة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">الفرع:</span>
                <span className="font-semibold text-foreground">منطقة عسير</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Services Grid */}
      <section className="max-w-md mx-auto px-4 mt-6">
        <h3 className="text-xl font-bold text-foreground mb-4">الخدمات الذاتية</h3>
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.map((category) => (
            <Card 
              key={category.id}
              className="p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-accent"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`p-4 ${category.color} rounded-xl`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-bold text-foreground">{category.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 mt-8 text-center">
        <p className="text-sm text-accent font-medium">
          تم تطوير النموذج الأولي بواسطة: أ. أحمد عطاء
        </p>
      </footer>

      {/* Service Items Modal */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedCategory && (
                <>
                  <div className={`p-2 ${selectedCategory.color} rounded-lg`}>
                    <selectedCategory.icon className="h-5 w-5 text-white" />
                  </div>
                  <span>{selectedCategory.title}</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-2 mt-4">
            {selectedCategory?.items.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start gap-3 h-12"
                onClick={() => handleServiceClick(item.title)}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.title}</span>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
