// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: "Asmaa🦋",                                     // اسم مستلم الهدية
    senderName: "Ali",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: `Happy Birthday Asmaa 😍!! The someone who has a very very special place in my heart. ❤️

I’m so grateful you came into my life. You’ve been the most beautiful and wonderful person to enter this chapter of my life. Meeting you was one of the sweetest things life has given me, and somehow, you became someone I care about more than I ever expected.
Having you in my life is something I never expected, but now I can’t imagine this chapter without you in it. You’re truly special to me, and you hold a place in my heart that no one else could ever take.

I wish you always be here , and that I get to keep caring for you, being there for you, and having you in my life for many years to come.

There’s something about you that makes your presence feel different. You make ordinary moments feel special, and somehow, just having you around makes my days a little brighter

If I could wish for one thing, it would be to always have you as a beautiful part of my life. ❤️

Happy Birthday, beautiful. You deserve all the happiness in the world , I wish you enjoy these day and i hope all your years be better and better , and  i will be there for you anytime .❤️`,
  },

};

export default giftData;