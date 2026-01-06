import { useState } from "react";
import { ArrowRight, Mail, Send, Megaphone, X, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface AdminInboxScreenProps {
  onBack: () => void;
}

const inboxMessages = [
  {
    id: 1,
    recordNumber: "1445/أ/102",
    subject: "تعميم تحديث البيانات الوظيفية",
    date: "2024/11/01",
    priority: "urgent",
    from: "إدارة الموارد البشرية",
    content: "يرجى من جميع الموظفين تحديث بياناتهم الوظيفية في النظام خلال أسبوعين من تاريخه."
  },
  {
    id: 2,
    recordNumber: "1445/أ/98",
    subject: "إشعار بموعد الاجتماع الدوري",
    date: "2024/10/28",
    priority: "normal",
    from: "مكتب رئيس الدائرة",
    content: "نفيدكم بأن الاجتماع الدوري سيعقد يوم الأحد القادم الساعة 10 صباحاً."
  },
];

const outboxMessages = [
  {
    id: 1,
    recordNumber: "1445/ص/55",
    subject: "طلب إجازة اعتيادية",
    date: "2024/10/25",
    priority: "normal",
    to: "إدارة الموارد البشرية",
    status: "delivered"
  },
];

const circulars = [
  {
    id: 1,
    recordNumber: "1445/ت/12",
    subject: "تعميم بشأن الحضور والانصراف",
    date: "2024/11/05",
    priority: "urgent",
    from: "إدارة الشؤون الإدارية",
    content: "بناءً على التوجيهات الصادرة، يرجى الالتزام بمواعيد الحضور والانصراف المحددة."
  },
];

export const AdminInboxScreen = ({ onBack }: AdminInboxScreenProps) => {
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const getPriorityBadge = (priority: string) => {
    if (priority === "urgent") {
      return <Badge className="bg-destructive text-destructive-foreground">عاجل</Badge>;
    }
    return <Badge variant="secondary">عادي</Badge>;
  };

  const MessageCard = ({ message, onClick }: { message: any; onClick: () => void }) => (
    <div 
      className="p-4 border-b hover:bg-muted/30 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-medium text-foreground line-clamp-1 flex-1">{message.subject}</h3>
        {getPriorityBadge(message.priority)}
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>رقم القيد: {message.recordNumber}</span>
        <span>{message.date}</span>
      </div>
    </div>
  );

  const EmptyState = ({ icon: Icon, text }: { icon: any; text: string }) => (
    <div className="py-12 text-center">
      <Icon className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
      <p className="text-muted-foreground">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted pb-6">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost" onClick={onBack} className="text-primary-foreground hover:bg-primary/80">
              <ArrowRight className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold text-primary-foreground">الاتصالات الإدارية</h1>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <Tabs defaultValue="inbox" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="inbox" className="gap-2">
              <Mail className="h-4 w-4" />
              الوارد
            </TabsTrigger>
            <TabsTrigger value="outbox" className="gap-2">
              <Send className="h-4 w-4" />
              الصادر
            </TabsTrigger>
            <TabsTrigger value="circulars" className="gap-2">
              <Megaphone className="h-4 w-4" />
              التعاميم
            </TabsTrigger>
          </TabsList>

          <div className="bg-card rounded-xl shadow-sm overflow-hidden">
            <TabsContent value="inbox" className="m-0">
              {inboxMessages.length > 0 ? (
                <div className="divide-y">
                  {inboxMessages.map((msg) => (
                    <MessageCard key={msg.id} message={msg} onClick={() => setSelectedMessage(msg)} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Inbox} text="لا توجد رسائل واردة" />
              )}
            </TabsContent>

            <TabsContent value="outbox" className="m-0">
              {outboxMessages.length > 0 ? (
                <div className="divide-y">
                  {outboxMessages.map((msg) => (
                    <MessageCard key={msg.id} message={msg} onClick={() => setSelectedMessage(msg)} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Send} text="لا توجد رسائل صادرة" />
              )}
            </TabsContent>

            <TabsContent value="circulars" className="m-0">
              {circulars.length > 0 ? (
                <div className="divide-y">
                  {circulars.map((msg) => (
                    <MessageCard key={msg.id} message={msg} onClick={() => setSelectedMessage(msg)} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Megaphone} text="لا توجد تعاميم" />
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl w-full max-w-md max-h-[80vh] overflow-auto">
            <div className="sticky top-0 bg-card border-b p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-foreground">تفاصيل المراسلة</h2>
                {getPriorityBadge(selectedMessage.priority)}
              </div>
              <Button size="icon" variant="ghost" onClick={() => setSelectedMessage(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">رقم القيد:</span>
                  <span className="font-medium text-foreground">{selectedMessage.recordNumber}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">التاريخ:</span>
                  <span className="font-medium text-foreground">{selectedMessage.date}</span>
                </div>
                {selectedMessage.from && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">من:</span>
                    <span className="font-medium text-foreground">{selectedMessage.from}</span>
                  </div>
                )}
                {selectedMessage.to && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">إلى:</span>
                    <span className="font-medium text-foreground">{selectedMessage.to}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-bold text-foreground mb-2">{selectedMessage.subject}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedMessage.content || "محتوى المراسلة غير متاح للعرض."}
                </p>
              </div>
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
