/* =========================================================
   Deen in Bits — the content library
   Data only (no DOM code). main.js renders it.
   Rules for adding a bit:
   - Every ayah carries its surah name + ayah number (`ref`).
   - Every hadith carries its collection + number (`ref`).
   - Arabic text is KFGQPC Uthmani (shown in the Hafs font); English is Sahih International.
   - Keep each bit to one idea: read it in a minute, act on it today.
   track: "faith" | "quran" | "growth" | "knowledge"
   ========================================================= */
window.RH_BITS = [
  {
    id: "the-reminder",
    track: "quran",
    title: "Why we remind",
    kind: "ayah",
    ar: "وَذَكِّرۡ فَإِنَّ ٱلذِّكۡرَىٰ تَنفَعُ ٱلۡمُؤۡمِنِينَ",
    text: "And remind, for indeed, the reminder benefits the believers.",
    ref: "Surah Adh-Dhariyat 51:55",
    reflect: "Which reminder has changed you the most, and who gave it to you?",
    apply: "Send one beneficial reminder to one person today. Keep it short and kind."
  },
  {
    id: "small-but-constant",
    track: "knowledge",
    title: "Small, but constant",
    kind: "hadith",
    text: "The most beloved of deeds to Allah are those done consistently, even if they are small.",
    ref: "Sahih al-Bukhari 6464 · Sahih Muslim 783",
    reflect: "What good deed did you start with energy and then drop? What made it too big to keep?",
    apply: "Pick one deed small enough to do every day for 30 days, and attach it to a prayer you already pray."
  },
  {
    id: "hearts-at-rest",
    track: "faith",
    title: "Where the heart rests",
    kind: "ayah",
    ar: "أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ",
    text: "Unquestionably, by the remembrance of Allah hearts are assured.",
    ref: "Surah Ar-Ra'd 13:28",
    reflect: "When you feel anxious, what do you reach for first?",
    apply: "The next time worry rises, pause for one minute of dhikr before you reach for your phone."
  },
  {
    id: "ease-with-hardship",
    track: "faith",
    title: "Ease travels with hardship",
    kind: "ayah",
    ar: "فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ٥ إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرٗا ٦",
    text: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
    ref: "Surah Ash-Sharh 94:5–6",
    reflect: "The verse says ease is ‘with’ the hardship, not only after it. Where is the ease inside what you're carrying now?",
    apply: "Write down one ease you can already see in a current difficulty, and thank Allah for it by name."
  },
  {
    id: "within-capacity",
    track: "growth",
    title: "Built for your capacity",
    kind: "ayah",
    ar: "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَا",
    text: "Allah does not charge a soul except [with that within] its capacity.",
    ref: "Surah Al-Baqarah 2:286",
    reflect: "Which load are you carrying that was never yours to carry?",
    apply: "List what is on your plate. Circle only what is yours to do today, and make du'a for the rest."
  },
  {
    id: "strive-and-be-guided",
    track: "growth",
    title: "Strive, and the path opens",
    kind: "ayah",
    ar: "وَٱلَّذِينَ جَٰهَدُواْ فِينَا لَنَهۡدِيَنَّهُمۡ سُبُلَنَا",
    text: "And those who strive for Us - We will surely guide them to Our ways.",
    ref: "Surah Al-'Ankabut 29:69",
    reflect: "Where are you waiting for clarity before you take the first step?",
    apply: "Take the smallest first step on one good goal today. Guidance follows striving."
  },
  {
    id: "intention-first",
    track: "knowledge",
    title: "Intention is the root",
    kind: "hadith",
    text: "Actions are only by intentions, and every person will have only what they intended.",
    ref: "Sahih al-Bukhari 1 · Sahih Muslim 1907",
    reflect: "Pick one routine thing you do daily. What would change if you did it for Allah?",
    apply: "Before your next task, say your intention quietly to yourself."
  },
  {
    id: "path-of-knowledge",
    track: "quran",
    title: "The road of knowledge",
    kind: "hadith",
    text: "Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.",
    ref: "Sahih Muslim 2699",
    reflect: "What is one thing about your deen you've always meant to learn properly?",
    apply: "Give that topic ten focused minutes today: one lesson, one note, one question."
  },
  {
    id: "a-way-out",
    track: "faith",
    title: "A way out you can't see yet",
    kind: "ayah",
    ar: "وَمَن يَتَّقِ ٱللَّهَ يَجۡعَل لَّهُۥ مَخۡرَجٗا ٢ وَيَرۡزُقۡهُ مِنۡ حَيۡثُ لَا يَحۡتَسِبُ",
    text: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
    ref: "Surah At-Talaq 65:2–3",
    reflect: "Think of a time a door opened that you never planned. What did it teach you about Allah?",
    apply: "In one decision today, choose what pleases Allah even if it costs you something small."
  }
];

window.RH_TRACKS = {
  faith: "Faith & Life",
  quran: "Qur'an & Sunnah",
  growth: "Personal Growth",
  knowledge: "Knowledge Bits"
};
