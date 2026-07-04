import type { Locale } from "@/lib/i18n/translations";

export type DemoMessage = {
  id: string;
  kind: "incoming" | "outgoing" | "system";
  text: string;
  dir?: "ltr" | "rtl";
  time: string;
  status?: "sent" | "delivered" | "read";
  timelineKey?: "bookingIntent" | "appointmentBooked";
  timelineVariant?: "gold" | "success";
  tagKey?: "qualify" | "book";
  tagIcon?: "qualify" | "book";
};

export const DEMO_CONVERSATIONS: Record<Locale, DemoMessage[]> = {
  en: [
    {
      id: "m1",
      kind: "incoming",
      text: "Hi, I'd like to book a teeth cleaning appointment 🦷",
      dir: "ltr",
      time: "10:02",
    },
    {
      id: "m2",
      kind: "outgoing",
      text: "Hello! Welcome to Wa-Agents Dental 🌟\nWould you prefer our Al Mouj or Al Khuwair branch?",
      dir: "ltr",
      time: "10:02",
      status: "read",
      timelineKey: "bookingIntent",
      timelineVariant: "gold",
    },
    {
      id: "m3",
      kind: "incoming",
      text: "Al Mouj please. Do you have something tomorrow afternoon?",
      dir: "ltr",
      time: "10:03",
    },
    {
      id: "m4",
      kind: "outgoing",
      text: "Yes! Tomorrow (Thu 24 May) available slots:\n• 2:00 PM with Dr. Sara\n• 4:30 PM with Dr. Ahmed\n\nWhich time works for you?",
      dir: "ltr",
      time: "10:03",
      status: "read",
      tagKey: "qualify",
      tagIcon: "qualify",
    },
    {
      id: "m5",
      kind: "incoming",
      text: "2 PM is perfect. My name is Fatima Al Mansoori, +968 9123 4567",
      dir: "ltr",
      time: "10:04",
    },
    {
      id: "m6",
      kind: "outgoing",
      text: "Perfect, Fatima ✓\n\n📅 Thu 24 May · 2:00 PM\n📍 Al Mouj Waterfront, Clinic 4\n🦷 Teeth cleaning (45 min)\n\nI'll send a reminder on WhatsApp the day before.",
      dir: "ltr",
      time: "10:04",
      status: "read",
      timelineKey: "appointmentBooked",
      timelineVariant: "success",
      tagKey: "book",
      tagIcon: "book",
    },
    {
      id: "m7",
      kind: "system",
      text: "Booking synced to clinic calendar · CRM contact created",
      time: "10:04",
    },
  ],
  ar: [
    {
      id: "m1",
      kind: "incoming",
      text: "السلام عليكم، أبي أحجز موعد تنظيف أسنان 🦷",
      dir: "rtl",
      time: "10:02",
    },
    {
      id: "m2",
      kind: "outgoing",
      text: "وعليكم السلام! أهلاً في عيادة قنطرة 🌟\nتفضل فرع الموج ولا الخوير؟",
      dir: "rtl",
      time: "10:02",
      status: "read",
      timelineKey: "bookingIntent",
      timelineVariant: "gold",
    },
    {
      id: "m3",
      kind: "incoming",
      text: "الموج لو سمحت. عندكم موعد بكرة بعد الظهر؟",
      dir: "rtl",
      time: "10:03",
    },
    {
      id: "m4",
      kind: "outgoing",
      text: "أكيد! بكرة (الخميس ٢٤ مايو):\n• ٢:٠٠ م مع د. سارة\n• ٤:٣٠ م مع د. أحمد\n\nأي وقت يناسبك؟",
      dir: "rtl",
      time: "10:03",
      status: "read",
      tagKey: "qualify",
      tagIcon: "qualify",
    },
    {
      id: "m5",
      kind: "incoming",
      text: "٢ الظهر ممتاز. اسمي فاطمة المنصوري، +968 9123 4567",
      dir: "rtl",
      time: "10:04",
    },
    {
      id: "m6",
      kind: "outgoing",
      text: "تمام يا فاطمة ✓\n\n📅 الخميس ٢٤ مايو · ٢:٠٠ م\n📍 فرع الموج، عيادة ٤\n🦷 تنظيف أسنان (٤٥ دقيقة)\n\nبرسلك تذكير على واتساب قبل بيوم.",
      dir: "rtl",
      time: "10:04",
      status: "read",
      timelineKey: "appointmentBooked",
      timelineVariant: "success",
      tagKey: "book",
      tagIcon: "book",
    },
    {
      id: "m7",
      kind: "system",
      text: "تم مزامنة الحجز مع تقويم العيادة · إنشاء جهة اتصال في CRM",
      time: "10:04",
    },
  ],
};
