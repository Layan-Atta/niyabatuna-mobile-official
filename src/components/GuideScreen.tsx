import { ArrowRight, Shield, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface GuideScreenProps {
  onBack: () => void;
}

export const GuideScreen = ({ onBack }: GuideScreenProps) => {
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
            <h1 className="text-xl font-bold text-foreground">اعرف حقوقك</h1>
          </div>
        </div>
      </header>

      {/* Guide Content */}
      <section className="max-w-md mx-auto px-4 py-6">
        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-right">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold">حقوق المتهم</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-right pt-4 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  للمتهم الحق في:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>الاستعانة بمحامٍ في جميع مراحل التحقيق والمحاكمة</li>
                  <li>معرفة التهمة الموجهة إليه بوضوح</li>
                  <li>عدم الإدلاء بأي تصريحات ذاتية تدينه</li>
                  <li>الطعن في الأحكام الصادرة بحقه</li>
                  <li>المعاملة الإنسانية والكريمة</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-right">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold">آلية التبليغ</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-right pt-4 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  خطوات تقديم البلاغ:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mr-4">
                  <li>اختيار نوع البلاغ المناسب</li>
                  <li>كتابة تفاصيل الواقعة بدقة</li>
                  <li>إرفاق الأدلة الداعمة إن وجدت</li>
                  <li>تقديم البلاغ إلكترونياً</li>
                  <li>الحصول على رقم مرجعي للمتابعة</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-4 p-3 bg-accent/10 rounded-lg">
                  💡 يمكنك متابعة حالة البلاغ من خلال صفحة "متابعة القضايا"
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-right">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold">التواصل والدعم</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-right pt-4 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  طرق التواصل مع النيابة العامة:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">الخط الساخن</p>
                    <p className="text-muted-foreground">1950</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">البريد الإلكتروني</p>
                    <p className="text-muted-foreground" dir="ltr">info@pp.gov.sa</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">ساعات العمل</p>
                    <p className="text-muted-foreground">الأحد - الخميس: 8:00 ص - 4:00 م</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </section>
    </div>
  );
};
