// Web Media Pembelajaran Bahasa Arab Kelas 11 - Bab 2 & Bab 3
// Kurikulum Berbasis Cinta (Kemenag) • MAN 4 Aceh Besar

// ==================== DATASET BAB 2: الصحة والرعاية الصحية ====================
const bab2Mufrodat = [
  { arabic: "الغِذَاء الطَّيِّب", translation: "Makanan yang baik / sehat", category: "Ungkapan", example: "الغِذَاءُ الطَّيِّبُ يُعْطِي الجِسْمَ الطَّاقَةَ" },
  { arabic: "المَوَاد الضَّرُورِيَّة", translation: "Bahan-bahan pokok / penting", category: "Ungkapan", example: "يَحْتَوِي الطَّعَامُ عَلَى المَوَادِ الضَّرُورِيَّةِ" },
  { arabic: "حَدِيد", translation: "Besi / Zat besi", category: "Kata Benda", example: "الحَدِيدُ مُهِمٌّ لِصِحَّةِ الدَّمِ" },
  { arabic: "البُرُوتِينَات", translation: "Protein-protein", category: "Kata Benda", example: "البُرُوتِينَاتُ تَبْنِي العَضَلَاتِ" },
  { arabic: "فِيْتَامِيْنَات", translation: "Vitamin-vitamin", category: "Kata Benda", example: "الفِيْتَامِيْنَاتُ تُقَوِّي المَنَاعَةَ" },
  { arabic: "رِيَاضَةُ النَّفْس", translation: "Olah jiwa / Ketenangan mental", category: "Ungkapan", example: "الذِّكْرُ هُوَ رِيَاضَةُ النَّفْسِ" },
  { arabic: "نَوَافِل الصَّلَوَات", translation: "Shalat-shalat sunnah", category: "Ungkapan", example: "نَوَافِلُ الصَّلَوَاتِ تُقَرِّبُنَا إِلَى اللهِ" },
  { arabic: "تِلَاوَةُ الأَذْكَار", translation: "Membaca dzikir-dzikir", category: "Ungkapan", example: "تِلَاوَةُ الأَذْكَارِ تَطْمَئِنُّ بِهَا القُلُوبُ" },
  { arabic: "الرَّاحَة الكَافِيَة", translation: "Istirahat yang cukup", category: "Ungkapan", example: "الرَّاحَةُ الكَافِيَةُ ضَرُورِيَّةٌ لِلنَّمَاءِ" },
  { arabic: "ضَرُورِي", translation: "Penting / Sangat dibutuhkan", category: "Kata Sifat", example: "النَّوْمُ المُبَكِّرُ ضَرُورِيٌّ لِلصِّحَّةِ" },
  { arabic: "الطَّاقَة", translation: "Energi / Tenaga", category: "Kata Benda", example: "الأَكْلُ الصَّحِيُّ يَمْنَحُ الطَّاقَةَ" },
  { arabic: "العَضَلَات", translation: "Otot-otot", category: "Kata Benda", example: "الرِّيَاضَةُ تُقَوِّي العَضَلَاتِ" },
  { arabic: "الجَرْي", translation: "Lari", category: "Olahraga", example: "الجَرْيُ رِيَاضَةٌ مُفِيدَةٌ لِلْقَلْبِ" },
  { arabic: "السِّبَاحَة", translation: "Berenang", category: "Olahraga", example: "السِّبَاحَةُ تُنَشِّطُ الجِسْمَ كُلَّهُ" },
  { arabic: "أَوْقَات مُنَاسِبَة", translation: "Waktu-waktu yang tepat", category: "Ungkapan", example: "نَتَنَاوَلُ الوَجَبَاتِ فِي أَوْقَاتٍ مُنَاسِبَةٍ" },
  { arabic: "العَادَات المُفِيدَة", translation: "Kebiasaan-kebiasaan bermanfaat", category: "Ungkapan", example: "مُمَارَسَةُ الرِّيَاضَةِ مِنَ العَادَاتِ المُفِيدَةِ" },
  { arabic: "مُبَكِّرًا", translation: "Lebih awal / Pagi-pagi", category: "Keterangan", example: "أَسْتَيْقِظُ مِنَ النَّوْمِ مُبَكِّرًا" }
];

const bab2Afal = [
  { madhi: "نَشَّطَ", mudhari: "يُنَشِّطُ", masdar: "تَنْشِيْط", meaning: "memberi semangat, merangsang" },
  { madhi: "بَعَثَ", mudhari: "يَبْعَثُ", masdar: "بَعْثًا", meaning: "membangkitkan" },
  { madhi: "مَارَسَ", mudhari: "يُمَارِسُ", masdar: "مُمَارَسَة", meaning: "membiasakan, melatih" },
  { madhi: "نَصَحَ", mudhari: "يَنْصَحُ", masdar: "نَصِيْحَة", meaning: "menasihati" },
  { madhi: "اِحْتَوَى", mudhari: "يَحْتَوِي", masdar: "اِحْتِوَاء", meaning: "mencakup, mengandung" },
  { madhi: "نَهَضَ", mudhari: "يَنْهَضُ", masdar: "نُهُوْض", meaning: "bangkit" },
  { madhi: "اِرْتَاحَ", mudhari: "يَرْتَاحُ", masdar: "اِرْتِيَاح", meaning: "merasa tenang, rileks" },
  { madhi: "أَنْعَمَ", mudhari: "يُنْعِمُ", masdar: "إِنْعَام", meaning: "memberi nikmat" }
];

const bab2IstimaInti = {
  headerQuestion: {
    ar: "مَاذَا نَفْعَلُ لِيَكُوْنَ جِسْمُنَا صَحِيْحًا ؟",
    id: "Apa yang kita lakukan agar tubuh kita menjadi sehat?"
  },
  points: [
    {
      num: "أَوَّلًا",
      title: "Poin 1: Mengonsumsi Makanan Sehat (الغِذَاء الطَّيِّب)",
      ar: "أَوَّلًا - نَتَنَاوَلُ الغِذَاءَ الطَّيِّبَ. وَالغِذَاءُ الطَّيِّبُ هُوَ الَّذِي يَحْتَوِي عَلَى المَوَادِّ الضَّرُورِيَّةِ لِلصِّحَّةِ مِثْلِ البُرُوتِينَاتِ وَالفِيْتَامِيْنَاتِ.",
      id: "Pertama - Kita mengonsumsi makanan yang baik/sehat. Dan makanan yang baik adalah makanan yang mengandung bahan-bahan penting untuk kesehatan seperti protein dan vitamin."
    },
    {
      num: "ثَانِيًا",
      title: "Poin 2: Olahraga Fisik & Olahraga Jiwa (الرِّيَاضَة البَدَنِيَّة وَرِيَاضَة النَّفْس)",
      ar: "ثَانِيًا - نُمَارِسُ الرِّيَاضَةَ البَدَنِيَّةَ، مِثْلِ الجَرْيِ وَالسِّبَاحَةِ وَلَعْبِ الكُرَةِ. وَلَا نَنْسَى أَنْ نُمَارِسَ أَيْضًا رِيَاضَةَ النَّفْسِ، كَقِرَاءَةِ القُرْآنِ، وَتِلَاوَةِ الأَذْكَارِ.",
      id: "Kedua - Kita melatih olahraga fisik, seperti lari, berenang, dan bermain bola. Dan jangan kita lupa untuk melatih juga olahraga jiwa, seperti membaca Al-Qur'an dan membaca dzikir-dzikir."
    },
    {
      num: "ثَالِثًا",
      title: "Poin 3: Istirahat Cukup & Tidak Bergadang (الرَّاحَة الكَافِيَة)",
      ar: "ثَالِثًا - نَنَالُ الرَّاحَةَ الكَافِيَةَ. وَمِنْ أَهَمِّ الرَّاحَةِ النَّوْمُ، وَلَا نُمَارِسُ طُوْلَ السَّهَرِ !",
      id: "Ketiga - Kita memperoleh istirahat yang cukup. Dan di antara istirahat yang paling penting adalah tidur, dan kita tidak membiasakan bergadang terus menerus!"
    }
  ]
};

const bab2IstimaDialog = [
  { speaker: "الطَّبِيْبُ", text: "أَهْلًا وَسَهْلًا يَا عُمَر، مَاذَا تَشْكُو؟", translation: "Selamat datang Umar, apa yang kamu keluhkan?" },
  { speaker: "عُمَر", text: "أَشْعُرُ بِالتَّعَبِ وَالضَّعْفِ فِي جِسْمِي يَا طَبِيْبُ.", translation: "Saya merasa lelah dan lemah di tubuh saya, wahai dokter." },
  { speaker: "الطَّبِيْبُ", text: "هَلْ تُمَارِسُ الرِّيَاضَةَ وَتَتَنَاوَلُ الغِذَاءَ الطَّيِّبَ؟", translation: "Apakah kamu melatih diri berolahraga dan mengonsumsi makanan yang sehat?" },
  { speaker: "عُمَر", text: "لَا، أَنَا أَنَامُ مُتَأَخِّرًا وَلَا أُمَارِسُ الرِّيَاضَةَ.", translation: "Tidak, saya tidur terlambat dan tidak berolahraga." },
  { speaker: "الطَّبِيْبُ", text: "أَنْصَحُكَ بِالرَّاحَةِ الكَافِيَةِ، وَأَكْلِ الفِيْتَامِيْنَاتِ وَالبُرُوتِينَاتِ، وَمُمَارَسَةِ الجَرْيِ أَوْ السِّبَاحَةِ لِتَنْشِيْطِ الجِسْمِ.", translation: "Saya menasihatimu untuk istirahat yang cukup, makan vitamin dan protein, serta membiasakan lari atau berenang untuk menyegarkan tubuh." }
];

const bab2QiroahText = {
  title: "الحَيَاةُ الصِّحِّيَّةُ",
  sections: [
    {
      code: "( أ )",
      title: "Bagian A: Makanan Sehat Sebagai Sumber Energi (نَأْكُلُ الغِذَاءَ الطَّيِّبَ)",
      ar: "لِكَيْ يَكُوْنَ جِسْمُنَا صَحِيْحًا، يَنْبَغِي أَنْ نُمَارِسَ مَا يَلِي :\n١- نَأْكُلَ الغِذَاءَ الطَّيِّبَ\n٢- نُمَارِسَ الرِّيَاضَةَ البَدَنِيَّةَ\n٣- نَنَالَ الرَّاحَةَ الكَافِيَةَ\n\nنَأْكُلُ الغِذَاءَ الطَّيِّبَ، لِأَنَّ الغِذَاءَ مَصْدَرُ الطَّاقَةِ اللَّازِمَةِ لِلْعَمَلِ. وَالغِذَاءُ الطَّيِّبُ هُوَ الَّذِي يَحْتَوِي عَلَى المَوَادِّ الضَّرُورِيَّةِ لِلصِّحَّةِ مِثْلِ البُرُوتِينَاتِ وَالفِيْتَامِيْنَاتِ.",
      id: "Agar tubuh kita menjadi sehat, hendaknya kita membiasakan hal-hal berikut:\n1. Kita makan makanan yang baik/sehat\n2. Kita melatih olahraga fisik\n3. Kita memperoleh istirahat yang cukup\n\nKita makan makanan yang baik, karena makanan adalah sumber energi yang dibutuhkan untuk bekerja/beraktivitas. Dan makanan yang baik adalah yang mengandung bahan-bahan penting untuk kesehatan seperti protein dan vitamin."
    },
    {
      code: "( ب )",
      title: "Bagian B: Olahraga Fisik, Olahraga Jiwa & Shalat (نُمَارِسُ الرِّيَاضَةَ وَرِيَاضَةَ الرُّوْحِ وَالنَّفْسِ)",
      ar: "نُمَارِسُ الرِّيَاضَةَ، لِأَنَّ الرِّيَاضَةَ تُسَاعِدُ العَضَلَاتِ عَلَى النُّمُوِّ وَتَجْعَلُ الجِسْمَ يَعْمَلُ بِلِيَاقَةٍ. وَيَنْصَحُ الأَطِبَّاءُ بِمُمَارَسَةِ الرِّيَاضِيَّةِ البَدَنِيَّةِ فِي أَوْقَاتٍ مُنَاسِبَةٍ. وَمِنْ أَهَمِّ أَنْوَاعِ الرِّيَاضَةِ الجَرْيُ وَالسِّبَاحَةُ وَلَعْبُ الكُرَةِ.\n\nوَيَنْبَغِي كَذَلِكَ أَنْ نَهْتَمَّ بِرِيَاضَةِ الرُّوْحِ وَالنَّفْسِ، كَقِرَاءَةِ القُرْآنِ، وَنَوَافِلِ الصَّلَوَاتِ، وَتِلَاوَةِ الأَذْكَارِ. وَالصَّلَاةُ أَيْضًا تَسْتَطِيْعُ أَنْ تُنَشِّطَ الجِسْمَ وَتَبْعَثَ الرَّاحَةَ فِي نَفْسِ الإِنْسَانِ. وَكَانَ النَّبِيُّ ﷺ يَرْتَاحُ بِالصَّلَاةِ، وَيَقُوْلُ لِبِلَالٍ: (يَا بِلَالُ أَرِحْنَا بِالصَّلَاةِ) أخرجه أحمد في مسنده.",
      id: "Kita melatih olahraga, karena olahraga membantu otot-otot untuk tumbuh dan menjadikan tubuh bekerja dengan bugar. Para dokter menasihati untuk membiasakan olahraga fisik pada waktu-waktu yang tepat. Dan di antara jenis olahraga yang paling penting adalah lari, berenang, dan bermain bola.\n\nDan hendaknya kita juga memperhatikan olahraga ruh dan jiwa, seperti membaca Al-Qur'an, shalat-shalat sunnah, dan membaca dzikir. Shalat juga dapat merangsang/menyegarkan tubuh dan membangkitkan ketenangan dalam jiwa manusia. Dan Nabi ﷺ dahulu merasa tenang/rileks dengan shalat, dan beliau bersabda kepada Bilal: \"(Wahai Bilal, istirahatkanlah kami dengan shalat)\" (HR. Ahmad dalam Musnadnya)."
    },
    {
      code: "( ج )",
      title: "Bagian C: Istirahat Cukup & Tidur Pagi (نَهْتَمَّ بِالرَّاحَةِ وَالنَّوْمِ المُبَكِّرِ)",
      ar: "وَيَنْبَغِي كَذَلِكَ أَنْ نَهْتَمَّ بِالرَّاحَةِ، فَالرَّاحَةُ ضَرُورِيَّةٌ لِلصِّحَّةِ كَالغِذَاءِ وَالشَّرَابِ. وَيَكُوْنُ النَّوْمُ أَهَمَّ رَاحَةٍ لِلْإِنْسَانِ وَمِنَ العَادَاتِ المُفِيدَةِ أَنْ يَنَامَ الإِنْسَانُ مُبَكِّرًا وَأَنْ يَسْتَيْقِظَ مُبَكِّرًا.",
      id: "Dan hendaknya kita juga memperhatikan istirahat, maka istirahat sangat penting untuk kesehatan seperti makanan dan minuman. Dan tidur merupakan istirahat yang paling penting bagi manusia, dan termasuk kebiasaan yang bermanfaat adalah seseorang tidur lebih awal dan bangun lebih awal."
    }
  ]
};

const bab2QiroahTadrib1 = [
  { id: 1, statement: "نَسْتَطِيْعُ العَمَلَ إِذَا لَمْ نَأْكُلِ الغِذَاءَ", translation: "Kita dapat bekerja jika tidak makan.", answer: "khata", explanation: "خَطَأ (Salah)! Pembetulan: لا نَسْتَطِيْعُ العَمَلَ بِدُوْنِ الغِذَاءِ، لِأَنَّ الغِذَاءَ مَصْدَرُ الطَّاقَةِ." },
  { id: 2, statement: "نَأْكُلُ المَوَادَّ الضَّرُورِيَّةَ لِلصِّحَّةِ مِثْلَ البُرُوتِينَاتِ وَالفِيْتَامِيْنَاتِ", translation: "Kita makan bahan penting seperti protein & vitamin.", answer: "sahih", explanation: "صَحِيْح (Benar)! Makanan sehat mengandung bahan-bahan penting bagi tubuh." },
  { id: 3, statement: "تَجْعَلُ الرِّيَاضَةُ البَدَنِيَّةُ الجِسْمَ يَنْمُو وَيَعْمَلُ جَيِّدًا", translation: "Olahraga membuat tubuh bugar.", answer: "sahih", explanation: "صَحِيْح (Benar)! Olahraga membantu kebugaran tubuh." },
  { id: 4, statement: "النَّوْمُ أَهَمُّ شَيْءٍ فِي حَيَاةِ الإِنْسَانِ", translation: "Tidur hal paling penting dalam hidup.", answer: "khata", explanation: "خَطَأ (Salah)! Tidur adalah istirahat terpenting, namun kesehatan dan ibadah adalah nikmat utama." },
  { id: 5, statement: "الرِّيَاضَةُ لَازِمَةٌ فِي جَمِيْعِ المُنَاسَبَاتِ", translation: "Olahraga dilakukan tanpa batas.", answer: "khata", explanation: "خَطَأ (Salah)! Olahraga sebaiknya pada waktu-waktu yang sesuai." },
  { id: 6, statement: "قِرَاءَةُ القُرْآنِ مِنَ الرِّيَاضَةِ الرُّوْحِيَّةِ", translation: "Membaca Qur'an bagian olahraga jiwa.", answer: "sahih", explanation: "صَحِيْح (Benar)! Membaca Qur'an dan dzikir merupakan olahraga jiwa." },
  { id: 7, statement: "الصَّلَاةُ تُسَاعِدُ كَثِيْرًا عَلَى تَنْشِيْطِ الجِسْمِ", translation: "Shalat menyegarkan tubuh.", answer: "sahih", explanation: "صَحِيْح (Benar)! Gerakan shalat merangsang kesegaran fisik dan ketenangan batin." }
];

const bab2QiroahTadrib2 = [
  { id: 1, question: "هَلْ نَسْتَطِيْعُ أَنْ نَعْمَلَ بِدُوْنِ الغِذَاءِ ؟", answer: "لَا، لَا نَسْتَطِيْعُ أَنْ نَعْمَلَ بِدُوْنِ الغِذَاءِ، لِأَنَّ الغِذَاءَ مَصْدَرُ الطَّاقَةِ اللَّازِمَةِ لِلْعَمَلِ." },
  { id: 2, question: "لِمَاذَا نَحْتَاجُ إِلَى الرَّاحَةِ بَعْدَ العَمَلِ ؟", answer: "لِأَنَّ الرَّاحَةَ ضَرُورِيَّةٌ لِلصِّحَّةِ كَالغِذَاءِ وَالشَّرَابِ." },
  { id: 3, question: "أُذْكُرْ بَعْضَ الرِّيَاضَاتِ البَدَنِيَّةِ الَّتِي تُمَارِسُهَا فِي مَدْرَسَتِكَ ؟", answer: "الرِّيَاضَاتُ البَدَنِيَّةُ الَّتِي أُمَارِسُهَا فِي مَدْرَسَتِي هِيَ الجَرْيُ، وَالسِّبَاحَةُ، وَلَعْبُ الكُرَةِ." },
  { id: 4, question: "مَاذَا طَلَبَ الرَّسُوْلُ ﷺ مِنْ بِلَالٍ ؟", answer: "طَلَبَ الرَّسُوْلُ ﷺ مِنْ بِلَالٍ أَنْ يُنَادِيَ لِلصَّلَاةِ لِيَرْتَاحَ بِهَا، فَقَالَ: (يَا بِلَالُ أَرِحْنَا بِالصَّلَاةِ)." },
  { id: 5, question: "مَا أَهَمُّ شَيْءٍ يَتَذَكَّرُهُ المَرْءُ عِنْدَ مَرَضِهِ ؟", answer: "أَهَمُّ شَيْءٍ يَتَذَكَّرُهُ المَرْءُ عِنْدَ مَرَضِهِ هُوَ نِعْمَةُ الصِّحَّةِ وَعَافِيَةُ البَدَنِ." }
];

const bab2QowaidQuestions = [
  { id: 1, word: "قَرَأَ الطَّالِبُ القُرْآنَ", options: ["أ - الطَّالِبُ", "ب - القُرْآنَ", "ج - قَرَأَ"], answer: 1, explanation: "القُرْآنَ adalah Objek / Maf'ul Bihi (مفعول به) ber-harakat fathah." },
  { id: 2, word: "يَتَنَاوَلُ عُمَرُ الغِذَاءَ الطَّيِّبَ", options: ["أ - الغِذَاءَ", "ب - عُمَرُ", "ج - يَتَنَاوَلُ"], answer: 0, explanation: "الغِذَاءَ adalah Maf'ul Bihi manshub dengan tanda fathah." },
  { id: 3, word: "نَصَحَ الطَّبِيْبُ المَرِيْضَيْنِ", options: ["أ - الطَّبِيْبُ", "ب - المَرِيْضَيْنِ", "ج - نَصَحَ"], answer: 1, explanation: "المَرِيْضَيْنِ adalah Maf'ul Bihi (Mutsanna) ber-tanda Ya (ـَيْنِ)." },
  { id: 4, word: "يَدْعُوْ الإِسْلَامُ المُسْلِمِيْنَ إِلَى الصِّحَّةِ", options: ["أ - المُسْلِمِيْنَ", "ب - الإِسْلَامُ", "ج - الصِّحَّةِ"], answer: 0, explanation: "المُسْلِمِيْنَ adalah Maf'ul Bihi (Jama' Mudzakkar Salim) ber-tanda Ya (ـِيْنَ)." },
  { id: 5, word: "شَرِبَ المَرِيْضُ الدَّوَاءَ", options: ["أ - المَرِيْضُ", "ب - الدَّوَاءَ", "ج - شَرِبَ"], answer: 1, explanation: "الدَّوَاءَ adalah Maf'ul Bihi (Isim Mufrad) manshub dengan fathah." },
  { id: 6, word: "يُحِبُّ اللهُ المُحْسِنِيْنَ", options: ["أ - اللهُ", "ب - المُحْسِنِيْنَ", "ج - يُحِبُّ"], answer: 1, explanation: "المُحْسِنِيْنَ adalah Maf'ul Bihi manshub dengan Ya (ـِيْنَ)." },
  { id: 7, word: "تَنَاوَلَتْ عَائِشَةُ الفِيْتَامِيْنَاتِ", options: ["أ - الفِيْتَامِيْنَاتِ", "ب - عَائِشَةُ", "ج - تَنَاوَلَتْ"], answer: 0, explanation: "الفِيْتَامِيْنَاتِ adalah Maf'ul Bihi manshub." },
  { id: 8, word: "يُمَارِسُ الطُّلَّابُ الرِّيَاضَةَ", options: ["أ - الطُّلَّابُ", "ب - الرِّيَاضَةَ", "ج - يُمَارِسُ"], answer: 1, explanation: "الرِّيَاضَةَ adalah Maf'ul Bihi manshub dengan fathah." },
  { id: 9, word: "كَتَبَ التِّلْمِيْذُ الدَّرْسَيْنِ", options: ["أ - التِّلْمِيْذُ", "ب - الدَّرْسَيْنِ", "ج - كَتَبَ"], answer: 1, explanation: "الدَّرْسَيْنِ adalah Maf'ul Bihi mutsanna ber-tanda Ya (ـَيْنِ)." },
  { id: 10, word: "يُشَاهِدُ الأَطْفَالُ التِّلْفَازَ", options: ["أ - الأَطْفَالُ", "ب - التِّلْفَازَ", "ج - يُشَاهِدُ"], answer: 1, explanation: "التِّلْفَازَ adalah Maf'ul Bihi manshub dengan fathah." },
  { id: 11, word: "مَا هِيَ العَلَامَةُ الأَصْلِيَّةُ لِلْمَفْعُوْلِ بِهِ فِي الإِسْمِ المُفْرَدِ ؟", options: ["أ - الفَتْحَة ( َ )", "ب - الضَّمَّة ( ُ )", "ج - الكَسْرَة ( ِ )"], answer: 0, explanation: "Tanda asli i'rab manshub untuk Isim Mufrad adalah Fathah." },
  { id: 12, word: "تَكُوْنُ عَلَامَةُ نَصْبِ المَفْعُوْلِ بِهِ فِي المُنَثَّى هِيَ .....", options: ["أ - الأَلِف", "ب - اليَاء (ـَيْنِ)", "ج - النُّوْن"], answer: 1, explanation: "Tanda manshub untuk Isim Mutsanna/Tasniyah adalah Ya (ـَيْنِ)." },
  { id: 13, word: "تَكُوْنُ عَلَامَةُ نَصْبِ المَفْعُوْلِ بِهِ فِي جَمْعِ المُنَذَكَّرِ السَّالِمِ هِيَ .....", options: ["أ - الوَاو", "ب - اليَاء (ـِيْنَ)", "ج - الضَّمَّة"], answer: 1, explanation: "Tanda manshub untuk Jama' Mudzakkar Salim adalah Ya (ـِيْنَ)." },
  { id: 14, word: "فِي الجُمْلَةِ \"الطَّبِيْبُ يُعَالِجُ المَرِيْضَ\"، أَيْن المَفْعُوْلُ بِهِ ؟", options: ["أ - الطَّبِيْبُ", "ب - يُعَالِجُ", "ج - المَرِيْضَ"], answer: 2, explanation: "المَرِيْضَ adalah Maf'ul Bihi dalam susunan Jumlah Ismiyyah." },
  { id: 15, word: "فِي الجُمْلَةِ \"اللهُ يُحِبُّ التَّوَّابِيْنَ\"، كَلِمَةُ \"التَّوَّابِيْنَ\" مَفْعُوْلٌ بِهِ مَنْصُوْبٌ بِـ .....", options: ["أ - الفَتْحَة", "ب - اليَاء", "ج - الأَلِف"], answer: 1, explanation: "التَّوَّابِيْنَ adalah Jama' Mudzakkar Salim, manshub dengan Ya." },
  { id: 16, word: "تَرْكِيْبُ الجُمْلَةِ الفِعْلِيَّةِ الَّتِي فِيْهَا مَفْعُوْلٌ بِهِ هُوَ .....", options: ["أ - فِعْل + فَاعِل + مَفْعُوْل بِهِ", "ب - مُبْتَدَأ + خَبَر", "ج - حَرْف + إِسْم"], answer: 0, explanation: "Susunan dasar Jumlah Fi'liyyah berpola Fi'il + Fa'il + Maf'ul Bihi." },
  { id: 17, word: "تَرْكِيْبُ الجُمْلَةِ الإِسْمِيَّةِ مَعَ المَفْعُوْلِ بِهِ هُوَ .....", options: ["أ - فِعْل + فَاعِل", "ب - مُبْتَدَأ + (فِعْل + فَاعِل + مَفْعُوْل بِهِ)", "ج - إِسْم + حَرْف"], answer: 1, explanation: "Dalam Jumlah Ismiyyah, khabar dapat berupa jumlah fi'liyyah yang memuat Maf'ul Bihi." },
  { id: 18, word: "أَيْنَ المَفْعُوْلُ بِهِ فِي \"أَكَرَمَ الأُسْتَاذُ المَدْعُوِّيْنَ أَمَامَ الفَصْلِ\"؟", options: ["أ - الأُسْتَاذُ", "ب - المَدْعُوِّيْنَ", "ج - أَمَامَ"], answer: 1, explanation: "المَدْعُوِّيْنَ adalah Objek (Maf'ul Bihi), sedangkan أَمَامَ adalah Zharaf." },
  { id: 19, word: "مَا هِيَ الحَرَكَةُ الصَّحِيْحَةُ لِلْمَفْعُوْلِ بِهِ فِي \"يَأْكُلُ المُرَاهِقُوْنَ الغِذَاء...\"؟", options: ["أ - الغِذَاءُ (ضَمَّة)", "ب - الغِذَاءَ (فَتْحَة)", "ج - الغِذَاءِ (كَسْرَة)"], answer: 1, explanation: "Karena merupakan Isim Mufrad, Maf'ul Bihi diberi harakat Fathah (الغِذَاءَ)." },
  { id: 20, word: "الْفَرْقُ بَيْنَ الجُمْلَةِ الفِعْلِيَّةِ وَالجُمْلَةِ الإِسْمِيَّةِ عِنْدَ وُجُوْدِ المَفْعُوْلِ بِهِ هُوَ .....", options: ["أ - الجُمْلَةُ الفِعْلِيَّةُ تَبْدَأُ بِالفِعْلِ، وَالإِسْمِيَّةُ تَبْدَأُ بِالإِسْمِ", "ب - المَفْعُوْلُ بِهِ يَكُوْنُ مَرْفُوْعًا فِي الإِسْمِيَّةِ", "ج - لَا يُوْجَدُ مَفْعُوْلٌ بِهِ فِي الجُمْلَةِ الإِسْمِيَّةِ"], answer: 0, explanation: "Perbedaan utamanya adalah kata pembuka kalimat: Jumlah Fi'liyyah diawali Fi'il, Jumlah Ismiyyah diawali Isim." }
];

const bab2QuizQuestions = [
  { id: 1, question: "الغِذَاءُ الطَّيِّبُ يَحْتَوِي عَلَى .....", options: ["أ - الفِيْتَامِيْنَات", "ب - الشَّرَاب", "ج - الطَّعَام", "د - المَوَادِّ الضَّرُورِيَّةِ", "هـ - المَدَارِس"], answer: 3, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (د): المَوَادِّ الضَّرُورِيَّةِ." },
  { id: 2, question: "..... مَصْدَرُ الطَّاقَةِ اللَّازِمَةِ لِلْعَمَلِ", options: ["أ - الأَكْل", "ب - الدَّرْس", "ج - الغِذَاء", "د - الرِّيَاضَة", "هـ - التَّعْلِيْم"], answer: 2, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): الغِذَاء." },
  { id: 3, question: "الرَّاحَةُ الكَافِيَةُ ضَرُورِيَّةٌ. وَمِنْ أَهَمِّ الرَّاحَةِ .....", options: ["أ - القِرَاءَة", "ب - النَّوْم", "ج - الأَذْكَار", "د - الدَّرْس", "هـ - الرَّسْم"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): النَّوْم." },
  { id: 4, question: "الرِّيَاضَةُ البَدَنِيَّةُ تُسَاعِدُ عَلَى نُمُوِّ .....", options: ["أ - العَقْل", "ب - النَّفْس", "ج - الرَّأْس", "د - الرِّجْل", "هـ - العَضَلَات"], answer: 4, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (هـ): العَضَلَات." },
  { id: 5, question: "مِنْ الرِّيَاضَةِ الرُّوْحِيَّةِ .....", options: ["أ - الجَرْيُ السَّرِيْع", "ب - السِّبَاحَةُ المُنْتَظَمَة", "ج - قِرَاءَةُ الأَذْكَار", "د - رَسْمُ المَنَاظِر", "هـ - لَعْبُ كُرَةِ القَدَم"], answer: 2, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): قِرَاءَةُ الأَذْكَار." },
  { id: 6, question: "وَلِصِحَّةِ الجِسْمِ ..... أَنْ يَتَنَاوَلَ الإِنْسَانُ الغِذَاءَ الطَّيِّبَ.", options: ["أ - يَجِبُ", "ب - يُمْكِنُ", "ج - يُحِبُّ", "د - يَكْرَهُ", "هـ - يُغْضِبُ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): يَجِبُ." },
  { id: 7, question: "الصَّلَاةُ تَسْتَطِيْعُ أَنْ ..... الرَّاحَةَ فِي نَفْسِ الإِنْسَانِ.", options: ["أ - تَبْعَثَ", "ب - تَجْعَلَ", "ج - تَصُدَّ", "د - تُمَارِسَ", "هـ - تُبْعِدَ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): تَبْعَثَ." },
  { id: 8, question: "يَجِبُ عَلَى المُسْلِمِ أَنْ ..... عَلَى الصَّلَوَاتِ الخَمْسِ.", options: ["أ - يُحَافِظَ", "ب - يَحْتَوِيَ", "ج - يُنْعِمَ", "د - يَتْرُكَ", "هـ - يَكْرَهَ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): يُحَافِظَ." },
  { id: 9, question: "..... الرِّيَاضَةَ إِلَى الرِّيَاضَةِ البَدَنِيَّةِ وَالرِّيَاضَةِ النَّفْسِيَّةِ.", options: ["أ - تُحَافِظُ", "ب - نُفَضِّلُ", "ج - نَعْمَلُ", "د - نُقَسِّمُ", "هـ - تَجْلِسُ"], answer: 3, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (د): نُقَسِّمُ." },
  { id: 10, question: "الطَّبِيْبُ ..... المَرِيْضَ أَنْ يُمَارِسَ رِيَاضَةَ النَّفْسِ.", options: ["أ - يَنْهَى", "ب - يَنْصَحُ", "ج - يَصُدُّ", "د - يَكْرَهُ", "هـ - يُغْضِبُ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): يَنْصَحُ." },
  { id: 11, question: "تُنَشِّطُ السِّبَاحَةُ وَالجَرْيُ ..... الإِنْسَانِ.", options: ["أ - عَقْلَ", "ب - جِسْمَ", "ج - كِتَابَ", "د - بَيْتَ", "هـ - مَدْرَسَةَ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): جِسْمَ." },
  { id: 12, question: "كَلِمَةُ \"يَنْصَحُ\" فِي القَوَاعِدِ هِيَ فِعْلُ .....", options: ["أ - مَاضٍ", "ب - مُضَارِعٌ", "ج - أَمْرٌ", "د - مَصْدَرٌ", "هـ - حَرْفٌ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): مُضَارِعٌ." },
  { id: 13, question: "مِنَ العَادَاتِ المُفِيْدَةِ أَنْ يَنَامَ الإِنْسَانُ ..... وَأَنْ يَسْتَيْقِظَ مُبَكِّرًا.", options: ["أ - مُتَأَخِّرًا", "ب - مُبَكِّرًا", "ج - كَثِيْرًا", "د - قَلِيْلًا", "هـ - طَوِيْلًا"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): مُبَكِّرًا." },
  { id: 14, question: "كَانَ النَّبِيُّ ﷺ يَرْتَاحُ بِـ ..... وَيَقُوْلُ: (أَرِحْنَا بِالصَّلَاةِ يَا بِلَالُ).", options: ["أ - النَّوْمِ", "ب - الأَكْلِ", "ج - الصَّلَاةِ", "د - الجَرْيِ", "هـ - السَّفَرِ"], answer: 2, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): الصَّلَاةِ." },
  { id: 15, question: "كَلِمَةُ \"الكُرْسِيُّ\" فِي القَوَاعِدِ تَدُلُّ عَلَى .....", options: ["أ - الفِعْلِ", "ب - الإِسْمِ", "ج - الحَرْفِ", "د - الظَّرْفِ", "هـ - الأَمْرِ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): الإِسْمِ." },
  { id: 16, question: "مِنْ أَهَمِّ أَنْوَاعِ الرِّيَاضَةِ البَدَنِيَّةِ ..... وَالسِّبَاحَةُ.", options: ["أ - القِرَاءَةُ", "ب - الجَرْيُ", "ج - النَّوْمُ", "د - الأَكْلُ", "هـ - الشُّرْبُ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): الجَرْيُ." },
  { id: 17, question: "الأَطِبَّاءُ يَصُدُّونَ الإِنْسَانَ عَنْ طُوْلِ ..... لِلْمُحَافَظَةِ عَلَى الصِّحَّةِ.", options: ["أ - الرَّاحَةِ", "ب - السَّهَرِ", "ج - الرِّيَاضَةِ", "د - الصَّلَاةِ", "هـ - القِرَاءَةِ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): السَّهَرِ." },
  { id: 18, question: "كَلِمَةُ \"هَذِهِ\" تُعْتَبَرُ مِنْ .....", options: ["أ - أَفْعَالِ الأَمْرِ", "ب - أَسْمَاءِ الإِشَارَةِ", "ج - أَسْمَاءِ المَوْصُوْلِ", "د - الحُرُوْفِ", "هـ - الظُّرُوْفِ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): أَسْمَاءِ الإِشَارَةِ." },
  { id: 19, question: "المَصْدَرُ مِنْ الفِعْلِ \"نَشَّطَ - يُنَشِّطُ\" هُوَ .....", options: ["أ - نَشَاط", "ب - تَنْشِيْط", "ج - نَاشِط", "د - مَنْشُوْط", "هـ - مُنَشِّط"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): تَنْشِيْط." },
  { id: 20, question: "الصِّحَّةُ وَالعَافِيَةُ هِيَ ..... عَظِيْمَةٌ مِنْ اللهِ يَجِبُ الشُّكْرُ عَلَيْهَا.", options: ["أ - نِعْمَةٌ", "ب - مَرَضٌ", "ج - تَعَبٌ", "د - ضَعْفٌ", "هـ - كَسَلٌ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): نِعْمَةٌ." }
];


// ==================== DATASET BAB 3: النظافة في الإسلام ====================
const bab3Mufrodat = [
  { arabic: "النَّظَافَة", translation: "Kebersihan", category: "Kata Benda", example: "النَّظَافَةُ مِنَ الإِيْمَانِ وَتَحْفَظُ الصِّحَّةَ" },
  { arabic: "المَضْمَضَة", translation: "Berkumur-kumur", category: "Bersuci", example: "المَضْمَضَةُ مِنْ سُنَنِ الوُضُوءِ فِي الصَّبَاحِ" },
  { arabic: "السِّوَاك", translation: "Siwak / Sikat gigi", category: "Sunnah", example: "السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ" },
  { arabic: "إِنَاءُ الطَّعَام", translation: "Wadah / tempat makanan", category: "Ungkapan", example: "نُغَطِّي إِنَاءَ الطَّعَامِ لِلْمُحَافَظَةِ عَلَيْهِ" },
  { arabic: "مَكْشُوْف", translation: "Terbuka / Terdedah", category: "Kata Sifat", example: "لَا نَتْرُكُ الطَّعَامَ مَكْشُوْفًا لِلْحَشَرَاتِ" },
  { arabic: "مَاء (ج مِيَاه)", translation: "Air (Jamak: Air-air)", category: "Kata Benda", example: "نَشْرَبُ المِيَاهَ النَّظِيْفَةَ لِلصِّحَّةِ" },
  { arabic: "الغُبَار", translation: "Debu", category: "Kata Benda", example: "نُنَظِّفُ الغُبَارَ عَنِ الأَثَاثِ وَالفَصْلِ" },
  { arabic: "الحَشَرَات", translation: "Serangga-serangga / Hama", category: "Kata Benda", example: "الحَشَرَاتُ تَنْقُلُ الأَمْرَاضَ فِي المَكَانِ القَذِرِ" },
  { arabic: "مَاءٌ دَائِم", translation: "Air tenang / Genangan air", category: "Ungkapan", example: "لَا نَبُولُ فِي المَاءِ الدَّائِمِ الَّذِي لَا يَجْرِي" },
  { arabic: "قَذَارَة", translation: "Kotoran / Najis", category: "Kata Benda", example: "نُنَظِّفُ القَذَارَةَ عَنِ الثَّوْبِ وَالمَكَانِ" },
  { arabic: "بِئْر (ج آَبَار)", translation: "Sumur (Jamak: Sumur-sumur)", category: "Kata Benda", example: "نَسْتَخْرِجُ المَاءَ الطَّهُوْرَ مِنَ البِئْرِ" },
  { arabic: "فِنَاء (ج أَفْنِيَة)", translation: "Halaman (Jamak: Halaman-halaman)", category: "Kata Benda", example: "نُنَظِّفُ فِنَاءَ المَدْرَسَةِ كُلَّ صَبَاحٍ" },
  { arabic: "دَار (ج دُوْر)", translation: "Rumah / Tempat tinggal", category: "Kata Benda", example: "نُحَافِظُ عَلَى نَظَافَةِ الدَّارِ وَالفَصْلِ" },
  { arabic: "مَصْدَر (ج مَصَادِر)", translation: "Sumber (Jamak: Sumber-sumber)", category: "Kata Benda", example: "النَّظَافَةُ مَصْدَرٌ لِلصِّحَّةِ وَالعَافِيَةِ" },
  { arabic: "صُدَاع", translation: "Sakit kepala / Pusing", category: "Kesehatan", example: "أَشْعُرُ بِصُدَاعٍ فِي رَأْسِي عِنْدَ المَرَضِ" },
  { arabic: "تَنْظِيْفُ القَذَارَة", translation: "Membersihkan kotoran", category: "Ungkapan", example: "تَنْظِيْفُ القَذَارَةِ يَقِي المُجْتَمَعَ مِنَ الأَمْرَاضِ" },
  { arabic: "مَزْبَلَة", translation: "Tempat pembuangan sampah", category: "Kata Benda", example: "نَرْمِي القُمَامَةَ فِي المَزْبَلَةِ أَوْ السَّلَّةِ" },
  { arabic: "الحَبَّات", translation: "Obat pil / Tablet", category: "Kesehatan", example: "يَتَنَاوَلُ المَرِيْضُ الحَبَّاتِ بِإِذْنِ الطَّبِيْبِ" }
];

const bab3Afal = [
  { madhi: "أَمَرَ", mudhari: "يَأْمُرُ", masdar: "أَمْرًا", meaning: "memerintah" },
  { madhi: "نَهَى", mudhari: "يَنْهَى", masdar: "نَهْيًا", meaning: "melarang" },
  { madhi: "تَرَكَ", mudhari: "يَتْرُكُ", masdar: "تَرْكًا", meaning: "membiarkan, meninggalkan" },
  { madhi: "عَبَّرَ", mudhari: "يُعَبِّرُ", masdar: "تَعْبِيْرًا", meaning: "mengungkapkan" },
  { madhi: "بَصَقَ", mudhari: "يَبْصُقُ", masdar: "بَصْقًا", meaning: "meludah" },
  { madhi: "نَظَّفَ", mudhari: "يُنَظِّفُ", masdar: "تَنْظِيْفًا", meaning: "membersihkan" },
  { madhi: "كَشَفَ", mudhari: "يَكْشِفُ", masdar: "كَشْفًا", meaning: "membuka, memeriksa" },
  { madhi: "أَلْقَى", mudhari: "يُلْقِي", masdar: "إِلْقَاء", meaning: "membuang, melemparkan" },
  { madhi: "نَقَلَ", mudhari: "يَنْقُلُ", masdar: "نَقْلًا", meaning: "memindahkan" },
  { madhi: "إِهْتَمَّ", mudhari: "يَهْتَمُّ", masdar: "إِهْتِمَام", meaning: "memperhatikan" }
];

const bab3IstimaInti = {
  headerQuestion: {
    ar: "مَاذَا تَعْنِي النَّظَافَةُ فِي الإِسْلَامِ ؟",
    id: "Apa makna kebersihan dan bersuci dalam ajaran Islam?"
  },
  points: [
    {
      num: "أَوَّلًا",
      title: "Poin 1: Kebersihan Diri & Bersuci (نَظَافَةُ البَدَنِ وَالطَّهَارَةُ)",
      ar: "أَوَّلًا - نَظَافَةُ البَدَنِ وَالطَّهَارَةُ. الإِسْلَامُ يَأْمُرُنَا بِالطَّهَارَةِ فِي كُلِّ يَوْمٍ، مِثْلِ الوُضُوءِ لِلصَّلَاةِ وَالغُسْلِ.",
      id: "Pertama - Kebersihan badan & bersuci. Islam memerintahkan kita bersuci setiap hari, seperti berwudhu untuk shalat dan mandi."
    },
    {
      num: "ثَانِيًا",
      title: "Poin 2: Kebersihan Pakaian & Tempat (نَظَافَةُ الثِّيَابِ وَالمَكَانِ)",
      ar: "ثَانِيًا - نَظَافَةُ الثِّيَابِ وَالمَكَانِ. نُطَهِّرُ مَلَابِسَنَا وَمَسَاجِدَنَا وَبُيُوْتَنَا مِنَ النَّجَاسَةِ وَالأَقْذَارِ.",
      id: "Kedua - Kebersihan pakaian & tempat. Kita mensucikan pakaian, masjid, dan rumah kita dari najis dan kotoran."
    },
    {
      num: "ثَالِثًا",
      title: "Poin 3: Kebersihan Lingkungan & Menyingkirkan Sampah (نَظَافَةُ البِيْئَةِ)",
      ar: "ثَالِثًا - نَظَافَةُ البِيْئَةِ وَإِزَالَةُ الأَذَى. نَحْفَظُ بِيْئَتَنَا، وَنَرْمِي القُمَامَةَ فِي سَلَّةِ المُهْمَلَاتِ، وَنُزِيْلُ الأَذَى عَنِ الطَّرِيْقِ.",
      id: "Kedua - Kebersihan lingkungan & menyingkirkan kotoran/sampah. Kita merawat lingkungan, membuang sampah pada tempatnya, dan menyingkirkan kotoran dari jalan."
    }
  ]
};

const bab3IstimaDialog = [
  {
    title: "أ - عِنْدَ الطَّبِيْبَةِ (Di Dokter Wanita)",
    lines: [
      { speaker: "الطَّبِيْبَةُ", text: "مِمَّ تَشْكِيْنَ ؟", translation: "Apa yang kamu keluhkan?" },
      { speaker: "فَرِيْدَةُ", text: "عِنْدِي أَلَمٌ خَفِيْفٌ فِي الرَّأْسِ.", translation: "Saya merasakan sakit ringan di kepala (sakit kepala)." },
      { speaker: "الطَّبِيْبَةُ", text: "مَتَى شَعَرْتِ بِهَذَا الأَلَمِ ؟", translation: "Kapan kamu merasakan rasa sakit ini?" },
      { speaker: "فَرِيْدَةُ", text: "شَعَرْتُ بِهِ مُنْذُ أَرْبَعَةِ أَيَّامٍ.", translation: "Saya merasakannya sejak 4 hari yang lalu." },
      { speaker: "الطَّبِيْبَةُ", text: "هَلْ تَنَاوَلْتِ شَيْئًا ؟", translation: "Apakah kamu sudah meminum obat?" },
      { speaker: "فَرِيْدَةُ", text: "تَنَاوَلْتُ بَعْضَ الحَبَّاتِ، وَلَمْ تَنْفَعْ.", translation: "Saya meminum beberapa obat pil, tapi belum berkhasiat." },
      { speaker: "الطَّبِيْبَةُ", text: "تَفَضَّلِي ! وَتَسْتَلْقِيْنَ عَلَى السَّرِيْرِ لِلْفَحْصِ.", translation: "Silakan! Silakan berbaring di tempat tidur untuk pemeriksaan." }
    ],
    note: "بَعْدَ الفَحْصِ وَصَفَتِ الطَّبِيْبَةُ الدَّوَاءَ ثُمَّ قَالَتْ: (عِنْدَكِ إِنْفُلُوَيْنْزَا وَزُكَامٌ وَصُدَاعٌ وَالْتِهَابٌ فِي مَعِدَتِكِ وَهَذِهِ هِيَ الأَدْوِيَةُ لَكِ، إِنْ شَاءَ اللهُ سَيَزُوْلُ أَلَمُكِ بَعْدَ أَنْ تَتَنَاوَلِي الأَدْوِيَةَ.)"
  },
  {
    title: "ب - عِنْدَ الطَّبِيْبِ (Di Dokter Laki-laki / Dengan Ibu)",
    lines: [
      { speaker: "الأُمُّ", text: "مَاذَا بِكَ يَا سُلَيْمَانُ ؟", translation: "Ada apa denganmu wahai Sulaiman?" },
      { speaker: "سُلَيْمَانُ", text: "عِنْدِي أَلَمٌ شَدِيْدٌ فِي عَيْنِي اليُمْنَى.", translation: "Saya merasakan sakit yang hebat di mata kanan saya." },
      { speaker: "الأُمُّ", text: "مَاذَا حَدَثَ ؟", translation: "Apa yang terjadi?" },
      { speaker: "سُلَيْمَانُ", text: "كُنْتُ أَلْعَبُ كُرَةَ القَدَمِ مَعَ أَصْدِقَائِي، وَقَدْ أَصَابَتْنِي الكُرَةُ فِي عَيْنِي اليُمْنَى.", translation: "Tadi saya sedang bermain sepak bola dengan teman-teman, dan bola mengenai mata kanan saya." },
      { speaker: "الأُمُّ", text: "هَلْ ذَهَبْتَ إِلَى الطَّبِيْبِ ؟", translation: "Apakah kamu sudah pergi ke dokter?" },
      { speaker: "سُلَيْمَانُ", text: "نَعَمْ، ذَهَبْتُ إِلَيْهِ وَقَدْ فَحَصَنِي الطَّبِيْبُ وَوَصَفَ الدَّوَاءَ، وَطَلَبَ مِنِّي أَنْ أَشْتَرِيَهُ فِي الصَّيْدَلِيَّةِ.", translation: "Ya, saya sudah pergi ke dokter. Dokter telah memeriksa saya dan meresepkan obat, serta meminta saya membelinya di apotek." },
      { speaker: "الأُمُّ", text: "وَهَلْ تَشْعُرُ بِأَلَمٍ الآنَ ؟", translation: "Dan apakah kamu merasakan sakit sekarang?" },
      { speaker: "سُلَيْمَانُ", text: "الحَمْدُ للهِ لَا أَشْعُرُ بِأَيِّ أَلَمٍ، وَلَكِنْ عَيْنِي اليُسْرَى تَدْمَعُ قَلِيْلًا.", translation: "Alhamdulillah saya tidak merasa sakit lagi, tetapi mata kiri saya sedikit berair." },
      { speaker: "الأُمُّ", text: "شَفَاكَ اللهُ.", translation: "Semoga Allah menyembuhkanmu." }
    ]
  },
  {
    title: "ج - عِيَادَةُ المَرِيْضِ (Menjenguk Orang Sakit)",
    lines: [
      { speaker: "فَرِيْدُ", text: "عَبْدُ العَزِيْزِ فِي المُسْتَشْفَى اليَوْمَ.", translation: "Abdul Aziz ada di rumah sakit hari ini." },
      { speaker: "عُثْمَانُ", text: "لِمَاذَا ؟", translation: "Mengapa?" },
      { speaker: "فَرِيْدُ", text: "صَدَمَتْهُ الجَوَّالَةُ أَمْسِ مَسَاءً عِنْدَ مَا يُرِيْدُ الذَّهَابَ إِلَى البَيْتِ مِنَ الإِدَارَةِ.", translation: "Sepeda motor menabraknya kemarin sore saat ia ingin pulang ke rumah dari kantor." },
      { speaker: "عُثْمَانُ", text: "كَيْفَ حَالُهُ الآنَ ؟", translation: "Bagaimana keadaannya sekarang?" },
      { speaker: "فَرِيْدُ", text: "هُوَ الآنَ بِخَيْرٍ، الحَمْدُ للهِ.", translation: "Ia sekarang baik-baik saja, alhamdulillah." },
      { speaker: "عُثْمَانُ", text: "نَذْهَبُ الآنَ إِلَى المُسْتَشْفَى لِعِيَادَتِهِ.", translation: "Mari kita pergi sekarang ke rumah sakit untuk menjenguknya." },
      { speaker: "فَرِيْدُ", text: "هُوَ فِي غُرْفَةِ مَأْوَازَ، رَقْمُ 16 فِي الدَّوْرِ الرَّابِعِ.", translation: "Ia ada di kamar Ma'waz, nomor 16 di lantai 4." }
    ]
  }
];

const bab3QiroahText = {
  title: "صِحَّةُ الجِسْمِ فِي الإِسْلَامِ",
  sections: [
    {
      code: "( ١ )",
      title: "Point 1: Kebersihan Mulut & Gigi (نَظَافَةُ الْفَمِ وَالأَسْنَانِ)",
      ar: "١- نَظَافَةُ الْفَمِ وَالأَسْنَانِ، كَانَ النَّبِيُّ ﷺ يَحُثُّ عَلَى اسْتِعْمَالِ السِّوَاكِ وَمَضْمَضَةِ الْفَمِ. وَقَدْ قَالَ النَّبِيُّ ﷺ: (السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ) أخرجه النسائي وأحمد.",
      id: "1. Kebersihan mulut dan gigi: Nabi ﷺ menganjurkan penggunaan siwak dan berkumur-kumur. Beliau ﷺ bersabda: \"(Siwak itu mensucikan mulut dan meredhai Rabb)\" (HR. An-Nasa'i dan Ahmad)."
    },
    {
      code: "( ٢ )",
      title: "Point 2: Kebersihan Wadah Makanan & Minuman (نَظَافَةُ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ)",
      ar: "٢- نَظَافَةُ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ، أَمَرَ النَّبِيُّ ﷺ بِتَغْطِيَةِ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ حَتَّى لَا يَقَعَ فِيْهِ الْغُبَارُ وَالحَشَرَاتُ. وَقَالَ ﷺ: (أَوْكُؤُوا قِرَبَكُمْ وَاذْكُرُوا اللهَ).",
      id: "2. Kebersihan wadah makanan dan minuman: Nabi ﷺ memerintahkan untuk menutup tempat makanan dan minuman agar tidak kejatuhan debu dan serangga. Beliau ﷺ bersabda: \"(Tutuplah wadah air kalian dan sebutlah nama Allah)\"."
    },
    {
      code: "( ٣ )",
      title: "Point 3: Larangan Mencemari Sumber Air (النَّهْيُ عَنْ تَلْوِيْثِ مَصَادِرِ المِيَاهِ)",
      ar: "٣- النَّهْيُ عَنْ تَلْوِيْثِ مَصَادِرِ المِيَاهِ، فَلَا يَجُوْزُ التَّبَوُّلُ فِي المِيَاهِ الرَّاكِدَةِ أَوْ عِنْدَ مَصَادِرِ المِيَاهِ لِمَا فِيْهِ مِنْ نَشْرِ الأَمْرَاضِ. قَالَ ﷺ: (لَا يَبُوْلَنَّ أَحَدُكُمْ فِي المَاءِ الدَّائِمِ الَّذِي لَا يَجْرِي، ثُمَّ يَتَوَضَّأُ فِيْهِ) أخرجه الترمذي والنسائي.",
      id: "3. Larangan mencemari sumber air: Tidak boleh kencing di air tenang (genangan) atau dekat sumber air karena dapat menyebarkan penyakit. Beliau ﷺ bersabda: \"(Janganlah sekali-kali salah seorang dari kalian kencing di air tenang yang tidak mengalir, kemudian berwudhu di dalamnya)\" (HR. At-Tirmidzi dan An-Nasa'i)."
    },
    {
      code: "( ٤ )",
      title: "Point 4: Kebersihan Rumah & Jalanan (نَظَافَةُ الْبُيُوْتِ وَالشَّوَارِعِ)",
      ar: "٤- نَظَافَةُ الْبُيُوْتِ وَالشَّوَارِعِ، أَمَرَ الإِسْلَامُ بِنَظَافَةِ الْأَفْنِيَةِ وَالدُّوْرِ، وَنَهَى عَنِ الْبَصْقِ وَالتَّبَوُّلِ فِي الطُُّرُقَاتِ. قَالَ ﷺ: (إِنَّ اللهَ طَيِّبٌ يُحِبُّ الطَّيِّبَ، نَظِيْفٌ يُحِبُّ النَّظَافَةَ، فَنَظِّفُوْا أَفْنِيَتَكُمْ وَدُوْرَكُمْ) أخرجه الترمذي. وَقَالَ: (البَصْقُ عَلَى الأَرْضِ خَطِيْئَةٌ وَكَفَّارَتُهَا رَدْمُهَا).",
      id: "4. Kebersihan rumah dan jalanan: Islam memerintahkan kebersihan halaman dan rumah, serta melarang meludah dan kencing di jalanan. Beliau ﷺ bersabda: \"(Sesungguhnya Allah Mahabaik menyukai kebaikan, Mahabersih menyukai kebersihan, maka bersihkanlah halaman dan rumah kalian)\" (HR. At-Tirmidzi). Beliau juga bersabda: \"(Meludah di tanah adalah kesalahan dan penebusnya adalah menimbunnya)\"."
    },
    {
      code: "( ٥ )",
      title: "Point 5: Bersuci & Kebersihan Adalah Ibadah (الطَّهَارَةُ وَالنَّظَافَةُ عِبَادَةٌ)",
      ar: "٥- الطَّهَارَةُ وَالنَّظَافَةُ عِبَادَةٌ، الطَّهَارَةُ فِي الإِسْلَامِ تَشْمَلُ إِزَالَةَ النَّجَاسَاتِ (القَذَارَةِ) وَشَرْطٌ لِصِحَّةِ الصَّلَاةِ، كَمَا قَالَ اللهُ تَعَالَى: ﴿إِنَّ اللهَ يُحِبُّ التَّوَّابِيْنَ وَيُحِبُّ المُتَطَهِّرِيْنَ﴾.",
      id: "5. Bersuci dan kebersihan adalah ibadah: Thaharah dalam Islam mencakup menghilangkan najis/kotoran dan merupakan syarat sah shalat, sebagaimana firman Allah Ta'ala: \"Sesungguhnya Allah menyukai orang-orang yang bertaubat dan menyukai orang-orang yang mensucikan diri\"."
    }
  ]
};

const bab3QiroahTadrib1 = [
  { id: 1, statement: "كَانَ النَّبِيُّ ﷺ يَحُثُّ عَلَى اسْتِعْمَالِ السِّوَاكِ وَمَضْمَضَةِ الْفَمِ", translation: "Nabi ﷺ menganjurkan penggunaan siwak dan berkumur-kumur.", answer: "sahih", explanation: "صَحِيْح (Benar)! Sesuai dengan hadits: (السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ)." },
  { id: 2, statement: "يَجُوْزُ تَرْكُ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ مَكْشُوْفَةً", translation: "Boleh membiarkan wadah makanan dan minuman terbuka.", answer: "khata", explanation: "خَطَأ (Salah)! Pembetulan: أَمَرَ النَّبِيُّ ﷺ بِتَغْطِيَةِ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ حَتَّى لَا يَقَعَ فِيْهِ الْغُبَارُ." },
  { id: 3, statement: "نَهَى النَّبِيُّ ﷺ عَنِ التَّبَوُّلِ فِي المَاءِ الدَّائِمِ الَّذِي لَا يَجْرِي", translation: "Nabi ﷺ melarang kencing di air tenang yang tidak mengalir.", answer: "sahih", explanation: "صَحِيْح (Benar)! Sesuai hadits HR. At-Tirmidzi & An-Nasa'i." },
  { id: 4, statement: "إِنَّ اللهَ طَيِّبٌ يُحِبُّ الطَّيِّبَ، نَظِيْفٌ يُحِبُّ النَّظَافَةَ", translation: "Allah Mahabaik menyukai kebaikan, Mahabersih menyukai kebersihan.", answer: "sahih", explanation: "صَحِيْح (Benar)! Sesuai hadits HR. At-Tirmidzi pada poin 4." },
  { id: 5, statement: "البَصْقُ عَلَى الأَرْضِ فِي الطُُّرُقَاتِ لَيْسَ بِخَطِيْئَةٍ", translation: "Meludah di tanah di jalanan bukan kesalahan.", answer: "khata", explanation: "خَطَأ (Salah)! Pembetulan: (البَصْقُ عَلَى الأَرْضِ خَطِيْئَةٌ وَكَفَّارَتُهَا رَدْمُهَا)." },
  { id: 6, statement: "تَشْمَلُ الطَّهَارَةُ فِي الإِسْلَامِ إِزَالَةَ النَّجَاسَاتِ (القَذَارَةِ)", translation: "Bersuci dalam Islam mencakup menghilangkan najis/kotoran.", answer: "sahih", explanation: "صَحِيْح (Benar)! Sesuai penjelasan poin 5." },
  { id: 7, statement: "الطَّهَارَةُ شَرْطٌ لِصِحَّةِ الصَّلَاةِ فِي الإِسْلَامِ", translation: "Bersuci adalah syarat sah shalat dalam Islam.", answer: "sahih", explanation: "صَحِيْح (Benar)! Sebagaimana firman Allah ﴿إِنَّ اللهَ يُحِبُّ التَّوَّابِيْنَ وَيُحِبُّ المُتَطَهِّرِيْنَ﴾." }
];

const bab3QiroahTadrib2 = [
  { id: 1, question: "مَاذَا قَالَ النَّبِيُّ ﷺ عَنِ السِّوَاكِ ؟", answer: "قَالَ النَّبِيُّ ﷺ: (السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ)." },
  { id: 2, question: "لِمَاذَا أَمَرَ النَّبِيُّ ﷺ بِتَغْطِيَةِ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ ؟", answer: "أَمَرَ النَّبِيُّ ﷺ بِتَغْطِيَةِ أَوْعِيَةِ الطَّعَامِ وَالشَّرَابِ حَتَّى لَا يَقَعَ فِيْهِ الْغُبَارُ وَالحَشَرَاتُ." },
  { id: 3, question: "مَا حُكْمُ التَّبَوُّلِ فِي المَاءِ الدَّائِمِ الَّذِي لَا يَجْرِي ؟", answer: "لَا يَجُوْزُ التَّبَوُّلُ فِي المَاءِ الدَّائِمِ، لِمَا فِيْهِ مِنْ نَشْرِ الأَمْرَاضِ." },
  { id: 4, question: "مَا كَفَّارَةُ البَصْقِ عَلَى الأَرْضِ ؟", answer: "كَفَّارَةُ البَصْقِ عَلَى الأَرْضِ هِيَ رَدْمُهَا (تَغْطِيَتُهَا بِالتُّرَابِ)." },
  { id: 5, question: "مَاذَا تَشْمَلُ الطَّهَارَةُ فِي الإِسْلَامِ ؟", answer: "تَشْمَلُ الطَّهَارَةُ فِي الإِسْلَامِ إِزَالَةَ النَّجَاسَاتِ (القَذَارَةِ) وَهِيَ شَرْطٌ لِصِحَّةِ الصَّلَاةِ." }
];

const bab3QowaidQuestions = [
  { id: 1, word: "فَحَصَ الطَّبِيْبُ أَسْنَانَ عُثْمَانَ", options: ["أ - الطَّبِيْبُ", "ب - أَسْنَانَ (مُضَاف)", "ج - عُثْمَانَ"], answer: 1, explanation: "أَسْنَانَ adalah Mudhaf (مضاف) manshub dengan fathah." },
  { id: 2, word: "ذَهَبَ عُثْمَانُ إِلَى طَبِيْبِ الأَسْنَانِ", options: ["أ - عُثْمَانُ", "ب - طَبِيْبِ", "ج - الأَسْنَانِ (مُضَاف إِلَيْهِ)"], answer: 2, explanation: "الأَسْنَانِ adalah Mudhaf Ilaihi (مضاف إليه) majrur dengan kasrah." },
  { id: 3, word: "الْإِضَافَةُ تَتَكَّوَنُ مِنْ ..... وَ .....", options: ["أ - فِعْل + فَاعِل", "ب - مُضَاف + مُضَاف إِلَيْهِ", "ج - مُبْتَدَأ + خَبَر"], answer: 1, explanation: "Idhafah (الإضافة) terdiri dari Mudhaf dan Mudhaf Ilaihi." },
  { id: 4, word: "تَكْوِيْنُ الإِضَافَةِ مِنْ (شَجَرَةُ + النَّارَجِيْلُ) هُوَ .....", options: ["أ - الشَّجَرَةُ النَّارَجِيْلِ", "ب - شَجَرَةُ النَّارَجِيْلِ", "ج - شَجَرَةٌ النَّارَجِيْلُ"], answer: 1, explanation: "Mudhaf (شَجَرَةُ) harus dibuang 'ال'-nya saat di-idhafah-kan menjadi شَجَرَةُ النَّارَجِيْلِ." },
  { id: 5, word: "حُكْمُ المُنَافِ إِلَيْهِ فِي الإِعْرَابِ دَائِمًا .....", options: ["أ - مَرْفُوْعٌ", "ب - مَنْصُوْبٌ", "ج - مَجْرُوْرٌ أَبَدًا"], answer: 2, explanation: "Mudhaf Ilaihi selamanya berkedudukan Majrur (مجرور أبداً)." },
  { id: 6, word: "المُضَافُ يُعْرَبُ بِحَسَبِ ..... فِي الْجُمْلَةِ", options: ["أ - مَوْقِعِهِ فِي الجُمْلَةِ", "ب - الكَسْرَةِ دَائِمًا", "ج - التَّنْوِيْنِ"], answer: 0, explanation: "I'rab Mudhaf disesuaikan dengan kedudukannya dalam kalimat (bisa marfu', manshub, atau majrur)." },
  { id: 7, word: "تَكْوِيْنُ الإِضَافَةِ مِنْ (غُرْفَةٌ + أَوْلَادٌ) هُوَ .....", options: ["أ - غُرْفَةُ أَوْلَادٍ", "ب - غُرْفَةٌ أَوْلَادٌ", "ج - الغُرْفَةُ أَوْلَادٍ"], answer: 0, explanation: "Mudhaf dibuang tanwinnya, sehingga menjadi غُرْفَةُ أَوْلَادٍ." },
  { id: 8, word: "عِنْدَ الإِضَافَةِ، المُنَافُ يُحْذَفُ مِنْهُ .....", options: ["أ - \"الْـ\" (التَّعْرِيْف) وَالتَّنْوِيْن", "ب - الحُرُوْفُ الأَصْلِيَّة", "ج - السُّكُوْن"], answer: 0, explanation: "Apabila suatu isim di-idhafah-kan, maka Al-Lam (ال) dan Tanwin-nya wajib dibuang." },
  { id: 9, word: "فِي \"سَنَةُ دِرَاسَةٍ\"، كَلِمَةُ \"دِرَاسَةٍ\" تُعْرَبُ .....", options: ["أ - مُضَافًا", "ب - مُضَافًا إِلَيْهِ مَجْرُوْرًا", "ج - فَاعِلًا"], answer: 1, explanation: "دِرَاسَةٍ adalah Mudhaf Ilaihi yang majrur dengan tanda kasrah." },
  { id: 10, word: "فِي \"نَصَحَ الطَّبِيْبُ عُثْمَانَ بِتَنَاوُلِ الدَّوَاءِ\"، المُنَافُ هُوَ .....", options: ["أ - الطَّبِيْبُ", "ب - تَنَاوُلِ", "ج - الدَّوَاءِ"], answer: 1, explanation: "تَنَاوُلِ adalah Mudhaf yang majrur karena huruf jar (بِـ)." },
  { id: 11, word: "تَكْوِيْنُ الإِضَافَةِ مِنْ (حَافِظٌ + القُرْآنُ) هُوَ .....", options: ["أ - حَافِظُ القُرْآنِ", "ب - حَافِظٌ القُرْآنَ", "ج - الحَافِظُ القُرْآنِ"], answer: 0, explanation: "Tanwin dibuang dari حَافِظٌ dan القُرْآنُ di-kasrah-kan menjadi حَافِظُ القُرْآنِ." },
  { id: 12, word: "فِي \"صِحَّةُ البَدَنِ\"، المُنَافُ فِي هَذِهِ الإِضَافَةِ هُوَ .....", options: ["أ - صِحَّةُ", "ب - البَدَنِ", "ج - صِحَّةُ البَدَنِ"], answer: 0, explanation: "صِحَّةُ adalah kata pertama yang disandarkan (Mudhaf)." },
  { id: 13, word: "فِي \"طَابِعُ البَرِيْدِ\"، كَلِمَةُ \"طَابِعُ\" يُعْرَبُ مُضَافًا وَعَلَامَةُ إِعْرَابِهِ .....", options: ["أ - بِحَسَبِ مَوْقِعِهِ فِي الجُمْلَةِ", "ب - الكَسْرَةُ دَائِمًا", "ج - الفَتْحَةُ دَائِمًا"], answer: 0, explanation: "Kedudukan i'rab Mudhaf bebas sesuai fungsi kalimatnya." },
  { id: 14, word: "فِي \"ثَمَرَةُ الفُؤَادِ\"، المُنَافُ إِلَيْهِ هُوَ .....", options: ["أ - ثَمَرَةُ", "ب - الفُؤَادِ", "ج - ثَمَرَةُ الفُؤَادِ"], answer: 1, explanation: "الفُؤَادِ adalah kata kedua yang berfungsi sebagai Mudhaf Ilaihi." },
  { id: 15, word: "تَكْوِيْنُ الإِضَافَةِ مِنْ (بَابٌ + فَصْلٌ) هُوَ .....", options: ["أ - بَابُ فَصْلٍ", "ب - البَابُ فَصْلٍ", "ج - بَابٌ فَصْلٌ"], answer: 0, explanation: "Tanwin dibuang dari بَابٌ menjadi بَابُ فَصْلٍ." },
  { id: 16, word: "فِي \"رَأْسُ مَالٍ\"، كَلِمَةُ \"مَالٍ\" مَجْرُوْرَةٌ بِـ .....", options: ["أ - الكَسْرَةِ", "ب - الفَتْحَةِ", "ج - الضَّمَّةِ"], answer: 0, explanation: "مَالٍ adalah Mudhaf Ilaihi majrur dengan kasrah." },
  { id: 17, word: "فِي \"مَرْحَلَةُ الشُّيُوْخِ\"، المُنَافُ إِلَيْهِ هُوَ .....", options: ["أ - مَرْحَلَةُ", "ب - الشُّيُوْخِ", "ج - الشُّيُوْخُ"], answer: 1, explanation: "الشُّيُوْخِ adalah Mudhaf Ilaihi majrur dengan kasrah." },
  { id: 18, word: "هَلْ يَجُوْزُ دُخُوْلُ \"الْـ\" (التَّعْرِيْف) عَلَى المُنَافِ ؟", options: ["أ - نَعَمْ، يَجُوْزُ دَائِمًا", "ب - لَا يَجُوْزُ، بَلْ تُحْذَفُ \"الْـ\" عِنْدَ الإِضَافَةِ", "ج - يَجُوْزُ فِي الأَفْعَالِ"], answer: 1, explanation: "Mudhaf tidak boleh menggunakan Al-Lam (ال) saat di-idhafah-kan." },
  { id: 19, word: "هَلْ يَجُوْزُ التَّنْوِيْنُ عَلَى المُنَافِ ؟", options: ["أ - نَعَمْ، يَبْقَى التَّنْوِيْنُ", "ب - لَا، يُحْذَفُ التَّنْوِيْنُ عِنْدَ الإِضَافَةِ", "ج - يَجُوْزُ إِذَا كَانَ الإِسْمُ كَبِيْرًا"], answer: 1, explanation: "Mudhaf tidak boleh bertanwin (tanwin dibuang saat idhafah)." },
  { id: 20, word: "فِي \"ذَهَبَ الطَّالِبُ إِلَى مَدْرَسَةِ القَرِيَةِ\"، كَلِمَةُ \"مَدْرَسَةِ\" مَجْرُوْرَةٌ بِالكَسْرَةِ لِأَنَّهَا .....", options: ["أ - مُضَافٌ سَبَقَهُ حَرْفُ جَرٍّ (إِلَى)", "ب - مُضَافٌ إِلَيْهِ", "ج - فَاعِلٌ"], answer: 0, explanation: "مَدْرَسَةِ adalah Mudhaf yang majrur karena didahului huruf jar (إِلَى)." }
];

const bab3QuizQuestions = [
  { id: 1, question: "النَّظَافَةُ ..... الإِيْمَانِ", options: ["أ - مِنَ", "ب - فِي", "ج - عَلَى", "د - إِلَى", "هـ - عَنْ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): مِنَ." },
  { id: 2, question: "طَلَبَ الإِسْلَامُ مِنَ المُسْلِمِ أَنْ يَتَوَضَّأَ قَبْلَ كُلِّ .....", options: ["أ - نَوْمٍ", "ب - صَلَاةٍ", "ج - أَكْلٍ", "د - لَعِبٍ", "هـ - سَفَرٍ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): صَلَاةٍ." },
  { id: 3, question: "إِزَالَةُ الأَذَى عَنِ الطَّرِيْقِ .....", options: ["أ - صَدَقَةٌ", "ب - وَاجِبَةٌ", "ج - حَرَامٌ", "د - مَكْرُوْهٌ", "هـ - بَاطِلٌ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): صَدَقَةٌ." },
  { id: 4, question: "نَرْمِي القُمَامَةَ فِي .....", options: ["أ - الفَصْلِ", "ب - الشَّارِعِ", "ج - سَلَّةِ المُهْمَلَاتِ", "د - المَسْجِدِ", "هـ - المَاءِ"], answer: 2, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): سَلَّةِ المُهْمَلَاتِ." },
  { id: 5, question: "السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ وَمَرْضَاةٌ لِلـ.....", options: ["أ - نَّاسِ", "ب - رَّبِّ", "ج - طَّبِيْبِ", "د - أُسْتَاذِ", "هـ - صَدِيْقِ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): رَّبِّ." },
  { id: 6, question: "نَغْسِلُ الأَيْدِيَ بِالصَّابُوْنِ وَالمَاءِ لِتَنْظِيْفِ .....", options: ["أ - الأَبْدَانِ", "ب - المَلَابِسِ", "ج - الأَيْدِي", "د - الأَسْنَانِ", "هـ - الأَقْدَامِ"], answer: 2, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): الأَيْدِي." },
  { id: 7, question: "مِنْ سُنَنِ الفِطْرَةِ ..... الأَظْفَارِ", options: ["أ - قَصُّ", "ب - غَسْلُ", "ج - كَسْرُ", "د - تَرْكُ", "هـ - لَبْسُ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): قَصُّ." },
  { id: 8, question: "المَاءُ الَّذِي نَتَوَضَّأُ بِهِ هُوَ المَاءُ .....", options: ["أ - النَّجِسُ", "ب - الطَّهُوْرُ", "ج - الحَارُّ", "د - المَالِحُ", "هـ - الكَدِرُ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): الطَّهُوْرُ." },
  { id: 9, question: "التَّيَمُّمُ يَكُوْنُ بِـ ..... عِنْدَ فَقْدِ المَاءِ", options: ["أ - الصَّابُوْنِ", "ب - الـتُّرَابِ", "ج - الـزَّيْتِ", "د - الـثَّلْجِ", "هـ - الـشَّجَرِ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): الـتُّرَابِ." },
  { id: 10, question: "الفِعْلُ \"نَظَّفَ\" فِي المُضَارِعِ هُوَ .....", options: ["أ - يَتَنَظَّفُ", "ب - يُنَظِّفُ", "ج - تَنْظِيْفٌ", "د - اِنْتَظَفَ", "هـ - نَظِيْفٌ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): يُنَظِّفُ." },
  { id: 11, question: "الفِعْلُ \"تَوَضَّأَ\" فِي المُضَارِعِ هُوَ .....", options: ["أ - يَتَوَضَّأُ", "ب - يُوَضِّئُ", "ج - وَضُوْءٌ", "د - تَوَضَّأْ", "هـ - مَوَاضِئُ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): يَتَوَضَّأُ." },
  { id: 12, question: "مَا هُوَ المَصْدَرُ مِنْ الفِعْلِ \"اِغْتَسَلَ\" ؟", options: ["أ - غُسْلٌ", "ب - اِغْتِسَالٌ", "ج - يَغْتَسِلُ", "د - مَغْسَلَةٌ", "هـ - غَسَّالَةٌ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): اِغْتِسَالٌ." },
  { id: 13, question: "طَهَارَةُ البَدَنِ وَالثِّيَابِ تَمْنَعُ انْتِشَارَ .....", options: ["أ - الصِّحَّةِ", "ب - الأَمْرَاضِ", "ج - النِّعْمَةِ", "د - الرَّاحَةِ", "هـ - العَفْوِ"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): الأَمْرَاضِ." },
  { id: 14, question: "﴿إِنَّ اللهَ يُحِبُّ التَّوَّابِيْنَ وَيُحِبُّ .....﴾", options: ["أ - المُتَطَهِّرِيْنَ", "ب - الكَاذِبِيْنَ", "ج - الغَافِلِيْنَ", "د - الظَّالِمِيْنَ", "هـ - المَرِضِيْنَ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): المُتَطَهِّرِيْنَ." },
  { id: 15, question: "النَّظَافَةُ تَجْعَلُ بِيْئَةَ المَدْرَسَةِ ..... وَجَمِيْلَةً", options: ["أ - قَذِرَةً", "ب - نَظِيْفَةً", "ج - حَارَّةً", "د - صَعْبَةً", "هـ - مُظْلِمَةً"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): نَظِيْفَةً." },
  { id: 16, question: "كَلِمَةُ \"النَّظَافَةُ\" فِي كَلَامِ \"النَّظَافَةُ مِنَ الإِيْمَانِ\" تُمَثِّلُ .....", options: ["أ - فِعْلًا", "ب - إِسْمًا", "ج - حَرْفًا", "د - ظَرْفًا", "هـ - شَرْطًا"], answer: 1, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): إِسْمًا." },
  { id: 17, question: "غَسْلُ الوَجْهِ وَاليَدَيْنِ فِي الوُضُوْءِ مِنْ ..... الصَّلَاةِ", options: ["أ - فَرَائِضِ", "ب - مَكْرُوْهَاتِ", "ج - مُبْطِلَاتِ", "د - مَنَاهِي", "هـ - عُيُوْبِ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): فَرَائِضِ." },
  { id: 18, question: "نُطَهِّرُ الثَّوْبَ إِذَا أَصَابَتْهُ .....", options: ["أ - النَّجَاسَةُ", "ب - العَافِيَةُ", "ج - البَرَكَةُ", "د - الصِّحَّةُ", "هـ - الرَّاحَةُ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): النَّجَاسَةُ." },
  { id: 19, question: "يَنْبَغِي لِلطَّالِبِ أَنْ يُحَافِظَ عَلَى نَظَافَةِ ..... وَفِنَاءِ المَدْرَسَةِ", options: ["أ - الفَصْلِ", "ب - الشَّارِعِ", "ج - السُّوْقِ", "د - المَحَطَّةِ", "هـ - المُسْتَشْفَى"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): الفَصْلِ." },
  { id: 20, question: "حَثَّ النَّبِيُّ ﷺ عَلَى اسْتِعْمَالِ ..... لِتَنْظِيْفِ الأَسْنَانِ", options: ["أ - السِّوَاكِ", "ب - الصَّابُوْنِ", "ج - المَاءِ المَالِحِ", "د - الـمَنَادِيْلِ", "هـ - الـحَجَرِ"], answer: 0, explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): السِّوَاكِ." }
];

// ==================== STATE MANAGEMENT & ACTIVE DATA ====================
let currentChapter = 'bab2';

let activeMufrodatData = bab2Mufrodat;
let activeAfalData = bab2Afal;
let activeIstimaMateriInti = bab2IstimaInti;
let activeIstimaDialog = bab2IstimaDialog;
let activeQiroahText = bab2QiroahText;
let activeQiroahTadrib1 = bab2QiroahTadrib1;
let activeQiroahTadrib2 = bab2QiroahTadrib2;
let activeQowaidQuestions = bab2QowaidQuestions;
let activeQuizQuestions = bab2QuizQuestions;

// Hamburger Drawer Helper Functions
function toggleHamburgerMenu() {
  const drawer = document.getElementById('hamburger-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

function drawerNavigate(targetId) {
  toggleHamburgerMenu();
  switchTab(targetId);
}

function switchChapter(chapterId) {
  if (currentChapter === chapterId) {
    toggleHamburgerMenu();
    return;
  }

  currentChapter = chapterId;

  const btn2 = document.getElementById('btn-chapter-bab2');
  const btn3 = document.getElementById('btn-chapter-bab3');
  const badge2 = document.getElementById('badge-chapter-bab2');
  const badge3 = document.getElementById('badge-chapter-bab3');
  const topBadge = document.getElementById('top-bar-chapter-badge');

  if (chapterId === 'bab2') {
    if (btn2) btn2.className = 'w-full text-left p-4 rounded-2xl border-2 transition flex items-center justify-between gap-3 border-teal-600 bg-teal-50 shadow-sm';
    if (badge2) {
      badge2.textContent = 'Aktif ✓';
      badge2.className = 'text-xs font-bold text-teal-700 bg-teal-200 px-2.5 py-1 rounded-full';
    }
    if (btn3) btn3.className = 'w-full text-left p-4 rounded-2xl border-2 transition flex items-center justify-between gap-3 border-stone-200 bg-white hover:border-teal-400';
    if (badge3) {
      badge3.textContent = 'Pilih';
      badge3.className = 'text-xs font-bold text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full';
    }
    if (topBadge) topBadge.textContent = 'Bab 2: الصحة والرعاية الصحية';

    activeMufrodatData = bab2Mufrodat;
    activeAfalData = bab2Afal;
    activeIstimaMateriInti = bab2IstimaInti;
    activeIstimaDialog = bab2IstimaDialog;
    activeQiroahText = bab2QiroahText;
    activeQiroahTadrib1 = bab2QiroahTadrib1;
    activeQiroahTadrib2 = bab2QiroahTadrib2;
    activeQowaidQuestions = bab2QowaidQuestions;
    activeQuizQuestions = bab2QuizQuestions;

  } else if (chapterId === 'bab3') {
    if (btn3) btn3.className = 'w-full text-left p-4 rounded-2xl border-2 transition flex items-center justify-between gap-3 border-teal-600 bg-teal-50 shadow-sm';
    if (badge3) {
      badge3.textContent = 'Aktif ✓';
      badge3.className = 'text-xs font-bold text-teal-700 bg-teal-200 px-2.5 py-1 rounded-full';
    }
    if (btn2) btn2.className = 'w-full text-left p-4 rounded-2xl border-2 transition flex items-center justify-between gap-3 border-stone-200 bg-white hover:border-teal-400';
    if (badge2) {
      badge2.textContent = 'Pilih';
      badge2.className = 'text-xs font-bold text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full';
    }
    if (topBadge) topBadge.textContent = 'Bab 3: النظافة في الإسلام';

    activeMufrodatData = bab3Mufrodat;
    activeAfalData = bab3Afal;
    activeIstimaMateriInti = bab3IstimaInti;
    activeIstimaDialog = bab3IstimaDialog;
    activeQiroahText = bab3QiroahText;
    activeQiroahTadrib1 = bab3QiroahTadrib1;
    activeQiroahTadrib2 = bab3QiroahTadrib2;
    activeQowaidQuestions = bab3QowaidQuestions;
    activeQuizQuestions = bab3QuizQuestions;
  }

  userAnswers = {};
  renderMufrodatCards();
  renderAfalTable();
  renderIstimaSection();
  renderQiroahSection();
  renderQowaidSection();
  renderQuizSection();

  toggleHamburgerMenu();
}

// Sound Synth Helper (Web Speech API)
let playbackRate = 1.0;

function speakArabic(text, btnElement = null) {
  if (!('speechSynthesis' in window)) {
    alert("Browser Anda tidak mendukung fitur pemutar suara otomatis. Silakan gunakan Chrome/Edge.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  utterance.rate = playbackRate;
  utterance.pitch = 1.0;

  if (btnElement) {
    btnElement.classList.add('speaking-active');
    utterance.onend = () => btnElement.classList.remove('speaking-active');
    utterance.onerror = () => btnElement.classList.remove('speaking-active');
  }

  window.speechSynthesis.speak(utterance);
}

// Global Tab Switching Function
function switchTab(targetId, btnElement = null) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(s => s.classList.add('hidden'));

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.classList.remove('active', 'bg-teal-700', 'text-white', 'shadow-md');
    tab.classList.add('text-stone-600', 'hover:bg-stone-100');
  });

  const activeBtn = btnElement || document.querySelector(`.tab-btn[data-target="${targetId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-teal-700', 'text-white', 'shadow-md');
    activeBtn.classList.remove('text-stone-600', 'hover:bg-stone-100');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic Qowaid Section Renderer
function renderQowaidSection() {
  const container = document.getElementById('qowaid-section-container');
  if (!container) return;

  if (currentChapter === 'bab2') {
    container.innerHTML = `
      <div class="bg-gradient-to-br from-teal-900 via-teal-800 to-rose-900 text-white p-6 md:p-8 rounded-3xl shadow-lg space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="px-3 py-1 rounded-full bg-rose-500/30 text-rose-200 font-bold text-xs border border-rose-400/30">دُرُوْسُ القَوَاعِدِ • Tata Bahasa Arab Kelas 11 • Bab 2</span>
            <h2 class="text-3xl md:text-4xl font-extrabold font-arabic mt-2 text-yellow-300">المَفْعُوْلُ بِهِ (Maf'ul Bihi)</h2>
            <p class="text-xs md:text-sm text-stone-200 mt-1 leading-relaxed">
              Memahami konsep <span class="font-arabic text-lg font-bold text-yellow-200">المَفْعُوْلُ بِهِ</span> (Objek Penderita) dalam Kalimat Fi'liyyah (<span class="font-arabic text-yellow-100">جُمْلَةٌ فِعْلِيَّةٌ</span>) dan Kalimat Ismiyyah (<span class="font-arabic text-yellow-100">جُمْلَةٌ إِسْمِيَّةٌ</span>) beserta tanda-tanda i'rabnya.
            </p>
          </div>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-amber-50/90 border-2 border-amber-200/90 shadow-sm space-y-4 text-stone-900">
        <div class="flex items-center gap-3 border-b border-amber-200 pb-3">
          <span class="w-10 h-10 rounded-2xl bg-amber-600 text-white font-arabic text-2xl font-bold flex items-center justify-center shadow-md">💡</span>
          <div>
            <h3 class="font-arabic text-3xl font-bold text-amber-950 dir-rtl">مُلَاحَظَةٌ (Catatan & Kaidah Penting)</h3>
            <p class="text-xs text-amber-800 font-semibold">Pengertian Maf'ul Bihi dan Tanda Harakat / I'rabnya</p>
          </div>
        </div>

        <div class="space-y-3 text-sm md:text-base leading-relaxed">
          <div class="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-1">
            <p class="font-bold text-teal-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold">1</span>
              <span>Pengertian Maf'ul Bihi (المَفْعُوْلُ بِهِ):</span>
            </p>
            <p class="text-stone-700 text-xs md:text-sm pl-8">
              <span class="font-arabic text-xl font-bold text-teal-950">المَفْعُوْلُ بِهِ</span> adalah kata yang berfungsi sebagai <strong>'objek'</strong> penderita, baik dalam kalimat Fi'liyyah (<span class="font-arabic text-base font-bold text-teal-800">جُمْلَةٌ فِعْلِيَّةٌ</span>) maupun dalam kalimat Ismiyyah (<span class="font-arabic text-base font-bold text-teal-800">جُمْلَةٌ إِسْمِيَّةٌ</span>).
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-2">
            <p class="font-bold text-rose-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold">2</span>
              <span>Tanda I'rab / Harakat Maf'ul Bihi (المَفْعُوْلُ بِهِ):</span>
            </p>
            <ul class="list-disc list-inside space-y-2 text-xs md:text-sm text-stone-700 pl-4 font-medium">
              <li>Jika berupa <strong>Isim Mufrad</strong> (kata tunggal), diberi harakat <strong>Fathah</strong> (<span class="font-arabic text-base font-bold text-rose-800">فَتْحَة</span>). Contoh: <span class="font-arabic text-lg font-bold text-teal-900 dir-rtl">القُرْآنَ</span>, <span class="font-arabic text-lg font-bold text-teal-900 dir-rtl">مُحَمَّدًا</span>.</li>
              <li>Jika berupa <strong>Tasniyah / Mutsanna</strong>, diberi tanda <span class="font-arabic text-lg font-bold text-teal-900 dir-rtl">ـَيْنِ</span>.</li>
              <li>Jika berupa <strong>Jama' Mudzakkar As-Salim</strong>, diberi tanda <span class="font-arabic text-lg font-bold text-teal-900 dir-rtl">ـِيْنَ</span>. Contoh: <span class="font-arabic text-lg font-bold text-teal-900 dir-rtl">الظَّالِمِيْنَ</span>.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
        <div class="flex items-center justify-between border-b border-stone-100 pb-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-teal-700 text-white font-arabic text-2xl font-bold flex items-center justify-center shadow-md">أ</span>
            <div>
              <h3 class="font-arabic text-2xl md:text-3xl font-bold text-teal-900 dir-rtl">أ - المَفْعُوْلُ بِهِ فِي الجُمْلَةِ الفِعْلِيَّةِ</h3>
              <p class="text-xs text-stone-500 mt-0.5">Perhatikan pola Objek (مَفْعُوْلٌ بِهِ) dalam Kalimat Fi'liyyah</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-xs border border-teal-200">جُمْلَة فِعْلِيَّة</span>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-stone-200 shadow-xs">
          <table class="w-full text-center border-collapse">
            <thead>
              <tr class="bg-teal-900 text-white text-sm font-semibold">
                <th class="px-4 py-3.5 font-arabic text-xl w-1/3">فِعْل + فَاعِل</th>
                <th class="px-4 py-3.5 font-arabic text-xl bg-teal-800 w-1/3">مَفْعُوْل بِهِ (Objek)</th>
                <th class="px-4 py-3.5 font-arabic text-xl w-1/3">فَضْلَة (Pelengkap)</th>
                <th class="px-3 py-3 text-xs font-sans">Audio</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100 bg-white">
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">يَقْرَأُ الطَّالِبُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-rose-700 bg-rose-50/50 dir-rtl">القُرْآنَ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 dir-rtl">الكَرِيْمَ</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('يَقْرَأُ الطَّالِبُ القُرْآنَ الكَرِيْمَ')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">بَعَثَ اللهُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-rose-700 bg-rose-50/50 dir-rtl">مُحَمَّدًا</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 dir-rtl">نَبِيًّا وَرَسُوْلاً</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('بَعَثَ اللهُ مُحَمَّدًا نَبِيًّا وَرَسُوْلاً')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">يَأْكُلُ المُرَاهِقُوْنَ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-rose-700 bg-rose-50/50 dir-rtl">الغِذَاءَ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 dir-rtl">الطَّيِّبَ</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('يَأْكُلُ المُرَاهِقُوْنَ الغِذَاءَ الطَّيِّبَ')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-rose-900 text-white shadow-lg space-y-6 max-w-4xl mx-auto">
        <div>
          <span class="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 font-bold text-xs border border-yellow-400/30">اختبار سريع • 20 Soal Bab 2</span>
          <h3 class="text-2xl md:text-3xl font-bold font-arabic text-yellow-300 mt-2">تَدْرِيْبُ المَفْعُوْلِ بِهِ (Kuis Interaktif Maf'ul Bihi)</h3>
          <p class="text-xs text-stone-200 mt-1">Uji pemahamanmu dalam mengidentifikasi Objek (المَفْعُوْلُ بِهِ) dan tanda i'rabnya:</p>
        </div>
        <div id="qowaid-quiz-container" class="space-y-4 text-stone-900"></div>
      </div>
    `;
  } else if (currentChapter === 'bab3') {
    container.innerHTML = `
      <div class="bg-gradient-to-br from-teal-900 via-teal-800 to-rose-900 text-white p-6 md:p-8 rounded-3xl shadow-lg space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="px-3 py-1 rounded-full bg-rose-500/30 text-rose-200 font-bold text-xs border border-rose-400/30">دُرُوْسُ القَوَاعِدِ • Tata Bahasa Arab Kelas 11 • Bab 3</span>
            <h2 class="text-3xl md:text-4xl font-extrabold font-arabic mt-2 text-yellow-300">الْإِضَافَةُ (Al-Idhafah: Mudhaf & Mudhaf Ilaihi)</h2>
            <p class="text-xs md:text-sm text-stone-200 mt-1 leading-relaxed">
              Memahami konsep penyandaran dua kata benda (<span class="font-arabic text-yellow-200 font-bold">المُضَافُ وَالمُضَافُ إِلَيْهِ</span>) dalam Bahasa Arab beserta rumus, hukum harakat, dan contoh penerapannya.
            </p>
          </div>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-white border border-teal-200 shadow-md space-y-6">
        <div class="text-center space-y-2 border-b border-stone-100 pb-4">
          <span class="px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider">Formula Dasar Tata Bahasa</span>
          <h3 class="font-arabic text-3xl md:text-4xl font-extrabold text-teal-950 dir-rtl">كِتَابٌ + الْمُدَرِّسُ ➔ كِتَابُ الْمُدَرِّسِ</h3>
          <p class="text-xs md:text-sm text-stone-600 font-medium">Bermakna Kepemilikan/Penyandaran: <em>"Kitabnya Guru / Kitab Guru"</em></p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div class="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-2">
            <span class="px-3 py-1 rounded-full bg-teal-700 text-white font-bold text-xs">Isim Pertama (Kata Depan)</span>
            <h4 class="font-arabic text-3xl font-bold text-teal-900 dir-rtl">مُضَافٌ (Mudhaf)</h4>
            <p class="text-xs text-stone-700 leading-relaxed font-medium">
              Isim yang disandarkan kepada isim sesudahnya. 
              <br><strong class="text-rose-700">Syarat:</strong> Dibuang <span class="font-arabic font-bold text-sm">الْـ</span> (Alif-Lam) & dibuang <strong>Tanwin</strong>nya. I'rabnya sesuai kedudukan kalimat.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
            <span class="px-3 py-1 rounded-full bg-rose-700 text-white font-bold text-xs">Isim Kedua (Kata Belakang)</span>
            <h4 class="font-arabic text-3xl font-bold text-rose-950 dir-rtl">مُضَافٌ إِلَيْهِ (Mudhaf Ilaihi)</h4>
            <p class="text-xs text-stone-700 leading-relaxed font-medium">
              Isim yang terletak setelah Mudhaf. 
              <br><strong class="text-rose-700">Hukum I'rab:</strong> Selamanya <span class="font-bold text-rose-800">Majrur</span> (Harakat akhir Kasrah / Ya).
            </p>
          </div>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
        <div class="flex items-center justify-between border-b border-stone-100 pb-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-teal-700 text-white font-arabic text-2xl font-bold flex items-center justify-center shadow-md">أ</span>
            <div>
              <h3 class="font-arabic text-2xl md:text-3xl font-bold text-teal-900 dir-rtl">أ - الأَمْثِلَةُ فِي الجُمَلِ (Contoh dalam Kalimat)</h3>
              <p class="text-xs text-stone-500 mt-0.5">Analisis kedudukan Mudhaf & Mudhaf Ilaihi berdasarkan buku paket Kemenag</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-xs border border-teal-200">الْإِضَافَةُ</span>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-stone-200">
          <table class="w-full text-right border-collapse">
            <thead>
              <tr class="bg-teal-900 text-white text-sm font-semibold">
                <th class="px-4 py-3.5 text-center w-12">No</th>
                <th class="px-4 py-3.5 font-arabic text-xl text-center">الْجُمْلَةُ (Kalimat Bahasa Arab)</th>
                <th class="px-4 py-3.5 text-center">Terjemahan Indonesia</th>
                <th class="px-4 py-3.5 text-center">Analisis Idafah</th>
                <th class="px-3 py-3 text-center">Audio</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100 bg-white text-sm">
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 text-center font-bold text-stone-500">1</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-950 dir-rtl text-right">فَحَصَ الطَّبِيْبُ <span class="text-rose-600 underline decoration-rose-300 underline-offset-4">أَسْنَانَ عُثْمَانَ</span></td>
                <td class="px-4 py-3.5 text-stone-700 font-semibold text-center">Dokter memeriksa gigi Usman.</td>
                <td class="px-4 py-3.5 text-center text-xs font-semibold">
                  <span class="inline-block px-2 py-0.5 bg-teal-100 text-teal-800 rounded font-arabic text-base">أَسْنَانَ</span> (Mudhaf) <br>
                  <span class="inline-block px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-arabic text-base mt-1">عُثْمَانَ</span> (Mudhaf Ilaihi)
                </td>
                <td class="px-3 py-3.5 text-center">
                  <button onclick="speakArabic('فَحَصَ الطَّبِيْبُ أَسْنَانَ عُثْمَانَ')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button>
                </td>
              </tr>
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 text-center font-bold text-stone-500">2</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-950 dir-rtl text-right">نَصَحَ الطَّبِيْبُ عُثْمَانَ بِالرَّاحَةِ وَ<span class="text-rose-600 underline decoration-rose-300 underline-offset-4">تَنَاوُلِ الدَّوَاءِ</span></td>
                <td class="px-4 py-3.5 text-stone-700 font-semibold text-center">Usman dinasihati dokter agar beristirahat dan minum obat.</td>
                <td class="px-4 py-3.5 text-center text-xs font-semibold">
                  <span class="inline-block px-2 py-0.5 bg-teal-100 text-teal-800 rounded font-arabic text-base">تَنَاوُلِ</span> (Mudhaf) <br>
                  <span class="inline-block px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-arabic text-base mt-1">الدَّوَاءِ</span> (Mudhaf Ilaihi)
                </td>
                <td class="px-3 py-3.5 text-center">
                  <button onclick="speakArabic('نَصَحَ الطَّبِيْبُ عُثْمَانَ بِالرَّاحَةِ وَتَنَاوُلِ الدَّوَاءِ')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button>
                </td>
              </tr>
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 text-center font-bold text-stone-500">3</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-950 dir-rtl text-right">وَ<span class="text-rose-600 underline">سَبَبُ ذَلِكَ</span> <span class="text-rose-600 underline">زِيَادَةُ الْوَزْنِ</span></td>
                <td class="px-4 py-3.5 text-stone-700 font-semibold text-center">Hal itu disebabkan bertambahnya berat badan.</td>
                <td class="px-4 py-3.5 text-center text-xs font-semibold">
                  Mudhaf 1: <span class="font-arabic text-base">سَبَبُ</span>, Ilaihi: <span class="font-arabic text-base">ذَلِكَ</span> <br>
                  Mudhaf 2: <span class="font-arabic text-base">زِيَادَةُ</span>, Ilaihi: <span class="font-arabic text-base">الْوَزْنِ</span>
                </td>
                <td class="px-3 py-3.5 text-center">
                  <button onclick="speakArabic('وَسَبَبُ ذَلِكَ زِيَادَةُ الْوَزْنِ')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button>
                </td>
              </tr>
              <tr class="hover:bg-teal-50/50 transition">
                <td class="px-4 py-3.5 text-center font-bold text-stone-500">4</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-950 dir-rtl text-right">ذَهَبَ عُثْمَانُ إِلَى <span class="text-rose-600 underline decoration-rose-300 underline-offset-4">طَبِيْبِ الْأَسْنَانِ</span></td>
                <td class="px-4 py-3.5 text-stone-700 font-semibold text-center">Usman pergi ke dokter gigi.</td>
                <td class="px-4 py-3.5 text-center text-xs font-semibold">
                  <span class="inline-block px-2 py-0.5 bg-teal-100 text-teal-800 rounded font-arabic text-base">طَبِيْبِ</span> (Mudhaf) <br>
                  <span class="inline-block px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-arabic text-base mt-1">الْأَسْنَانِ</span> (Mudhaf Ilaihi)
                </td>
                <td class="px-3 py-3.5 text-center">
                  <button onclick="speakArabic('ذَهَبَ عُثْمَانُ إِلَى طَبِيْبِ الْأَسْنَانِ')" class="p-2 rounded-full bg-stone-100 hover:bg-teal-700 hover:text-white text-teal-700 text-xs transition">🔊</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-amber-50/90 border-2 border-amber-200/90 shadow-sm space-y-4 text-stone-900">
        <div class="flex items-center gap-3 border-b border-amber-200 pb-3">
          <span class="w-10 h-10 rounded-2xl bg-amber-600 text-white font-arabic text-2xl font-bold flex items-center justify-center shadow-md">💡</span>
          <div>
            <h3 class="font-arabic text-3xl font-bold text-amber-950 dir-rtl">مُلَاحَظَةٌ (Catatan & Kaidah Penting Idhafah)</h3>
            <p class="text-xs text-amber-800 font-semibold">Ringkasan 4 Hukum Utama Idhafah Sesuai Buku Paket Kemenag</p>
          </div>
        </div>

        <div class="space-y-3 text-sm md:text-base leading-relaxed">
          <div class="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-1">
            <p class="font-bold text-teal-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold">1</span>
              <span class="font-arabic text-xl font-bold text-teal-950 dir-rtl">أَلْإِضَافَةُ تَتَكَّوَنُ مِنَ الْمُضَافِ وَالْمُضَافِ إِلَيْهِ</span>
            </p>
            <p class="text-stone-700 text-xs md:text-sm pl-8">
              <em>Idâfah</em> terdiri atas <strong>mudhâf</strong> (kata benda pertama) dan <strong>mudhâf ilaihi</strong> (kata benda kedua).
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-1">
            <p class="font-bold text-teal-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold">2</span>
              <span class="font-arabic text-xl font-bold text-teal-950 dir-rtl">الْمُضَافُ إِسْمٌ نُسِبَ إِلَى إِسْمٍ بَعْدَهُ، الْمُضَافُ إِلَيْهِ يَأْتِي بَعْدَ الْمُضَافِ</span>
            </p>
            <p class="text-stone-700 text-xs md:text-sm pl-8">
              Mudhâf adalah isim yang disandarkan kepada isim sesudahnya. Mudhâf ilaihi adalah isim yang datang (terletak) tepat sesudah mudhâf.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-1">
            <p class="font-bold text-rose-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold">3</span>
              <span class="font-arabic text-xl font-bold text-rose-950 dir-rtl">الْمُضَافُ تُحْذَفُ مِنْهُ أَلِفٌ وَاللَّامُ عِنْدَ الإِضَافَةِ ، وَيُحْذَفُ تَنْوِيْنُهُ</span>
            </p>
            <p class="text-stone-700 text-xs md:text-sm pl-8">
              Jika mudhâf sebelumnya memuat Al (الـ), Al-nya <strong>wajib dibuang</strong> saat di-idâfah-kan. Dan jika mudhâf memiliki tanwin, tanwinnya juga <strong>wajib dibuang</strong> (hanya harakat tunggal <span class="font-arabic font-bold text-rose-800"> ُ /  َ /  ِ </span>).
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-1">
            <p class="font-bold text-rose-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold">4</span>
              <span class="font-arabic text-xl font-bold text-rose-950 dir-rtl">الْمُضَافُ يُعْرَبُ بِحَسَبِ مَوْقِعِهِ فِي الْجُمْلَةِ. الْمُضَافُ إِلَيْهِ مَجْرُوْرٌ أَبَدًا</span>
            </p>
            <p class="text-stone-700 text-xs md:text-sm pl-8">
              Mudhâf mendapat i'râb sesuai kedudukannya dalam kalimat (bisa marfu', manshub, atau majrur). Sedangkan Mudhâf Ilaihi <strong>selamanya Majrûr</strong> (ber-harakat akhir Kasrah).
            </p>
          </div>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
        <div class="flex items-center justify-between border-b border-stone-100 pb-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-rose-600 text-white font-arabic text-2xl font-bold flex items-center justify-center shadow-md">ب</span>
            <div>
              <h3 class="font-arabic text-2xl md:text-3xl font-bold text-rose-900 dir-rtl">ب - جَدْوَلُ تَكْوِيْنِ الإِضَافَةِ (Tabel Pembentukan Idhafah)</h3>
              <p class="text-xs text-stone-500 mt-0.5">Gabungan Dua Isim Menjadi Susunan Idhafah (Buku Paket Bab 3)</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold text-xs border border-rose-200">10 Baris Latihan</span>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-stone-200 shadow-xs">
          <table class="w-full text-center border-collapse">
            <thead>
              <tr class="bg-rose-900 text-white text-sm font-semibold">
                <th class="px-3 py-3 text-center w-12">No</th>
                <th class="px-4 py-3.5 font-arabic text-xl">الْكَلِمَاتُ (Isim 1)</th>
                <th class="px-4 py-3.5 font-arabic text-xl">الْكَلِمَاتُ (Isim 2)</th>
                <th class="px-4 py-3.5 font-arabic text-2xl bg-rose-800">الْإِضَافَةُ (Hasil Idhafah)</th>
                <th class="px-4 py-3.5 text-center text-xs font-sans">Arti / Makna</th>
                <th class="px-3 py-3 text-xs font-sans">Audio</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100 bg-white">
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">1</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">غُرْفَةٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">أَوْلَادٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">غُرْفَةُ أَوْلَادٍ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Kamar anak-anak</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('غُرْفَةُ أَوْلَادٍ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">2</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">طَابِعٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">الْبَرِيْدُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">طَابِعُ الْبَرِيْدِ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Prangko pos</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('طَابِعُ الْبَرِيْدِ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">3</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">الشَّجَرَةُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">النَّارَجِيْلُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">شَجَرَةُ النَّارَجِيْلِ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Pohon kelapa</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('شَجَرَةُ النَّارَجِيْلِ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">4</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">حَافِظٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">الْقُرْآنُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">حَافِظُ الْقُرْآنِ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Penghafal Al-Qur'an</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('حَافِظُ الْقُرْآنِ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">5</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">بَابٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">فَصْلٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">بَابُ فَصْلٍ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Pintu kelas</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('بَابُ فَصْلٍ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">6</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">مَرْحَلَةٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">الشُّيُوْخُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">مَرْحَلَةُ الشُّيُوْخِ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Fase usia lanjut</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('مَرْحَلَةُ الشُّيُوْخِ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">7</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">رَأْسٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">مَالٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">رَأْسُ مَالٍ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Modal usaha / Kapital</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('رَأْسُ مَالٍ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">8</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">سَنَةٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">دِرَاسَةٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">سَنَةُ دِرَاسَةٍ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Tahun ajaran / sekolah</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('سَنَةُ دِرَاسَةٍ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">9</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">صِحَّةٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">الْبَدَنُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">صِحَّةُ الْبَدَنِ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Kesehatan badan</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('صِحَّةُ الْبَدَنِ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
              <tr class="hover:bg-rose-50/50 transition">
                <td class="px-3 py-3.5 text-stone-500 font-bold">10</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">ثَمَرَةٌ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-stone-900 dir-rtl">الْفُؤَادُ</td>
                <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-800 bg-teal-50/70 dir-rtl">ثَمَرَةُ الْفُؤَادِ</td>
                <td class="px-4 py-3.5 text-xs md:text-sm font-semibold text-stone-700">Buah hati</td>
                <td class="px-3 py-3.5"><button onclick="speakArabic('ثَمَرَةُ الْفُؤَادِ')" class="p-2 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white text-rose-600 text-xs transition">🔊</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-rose-900 text-white shadow-lg space-y-6 max-w-4xl mx-auto">
        <div>
          <span class="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 font-bold text-xs border border-yellow-400/30">اختبار سريع • 20 Soal Bab 3</span>
          <h3 class="text-2xl md:text-3xl font-bold font-arabic text-yellow-300 mt-2">تَدْرِيْبُ الإِضَافَةِ (Kuis Interaktif Al-Idhafah)</h3>
          <p class="text-xs text-stone-200 mt-1">Uji pemahamanmu dalam mengidentifikasi Mudhaf, Mudhaf Ilaihi, dan hukum i'rabnya:</p>
        </div>
        <div id="qowaid-quiz-container" class="space-y-4 text-stone-900"></div>
      </div>
    `;
  }

  renderQowaidQuiz();
}

// Initializing Web Application Logic
document.addEventListener('DOMContentLoaded', () => {
  renderMufrodatCards();
  renderAfalTable();
  renderQowaidSection();
  renderIstimaSection();
  renderQiroahSection();
  renderQuizSection();

  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      const targetId = this.getAttribute('data-target');
      if (targetId) {
        switchTab(targetId, this);
      }
    });
  });

  const searchInput = document.getElementById('search-mufrodat');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      renderMufrodatCards(query);
    });
  }
});

// Render Mufrodat Cards
function renderMufrodatCards(filter = '') {
  const container = document.getElementById('mufrodat-cards-container');
  if (!container) return;

  const filtered = activeMufrodatData.filter(item => 
    item.arabic.includes(filter) || 
    item.translation.toLowerCase().includes(filter) ||
    item.category.toLowerCase().includes(filter)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-stone-500">Kosakata tidak ditemukan...</div>`;
    return;
  }

  container.innerHTML = filtered.map((item, index) => `
    <div class="flip-card cursor-pointer" onclick="toggleCardFlip(this)">
      <div class="flip-card-inner">
        <!-- Front -->
        <div class="flip-card-front shadow-sm">
          <div class="w-full flex justify-between items-center mb-1">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">${item.category}</span>
            <button onclick="event.stopPropagation(); speakArabic('${item.arabic}', this)" class="p-2 rounded-full hover:bg-stone-100 text-teal-700 transition" title="Dengarkan Lafal">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
              </svg>
            </button>
          </div>
          
          <div class="my-auto text-center space-y-1">
            <h3 class="font-arabic text-3xl font-bold text-teal-900 dir-rtl">${item.arabic}</h3>
            <p class="text-sm font-semibold text-rose-700 bg-rose-50/80 px-3 py-1 rounded-xl border border-rose-100 inline-block">${item.translation}</p>
          </div>

          <p class="text-xs text-teal-600 font-medium mt-auto flex items-center justify-center gap-1">
            <span>Klik untuk balik kartu (Contoh Kalimat)</span> ➔
          </p>
        </div>
        <!-- Back -->
        <div class="flip-card-back shadow-md">
          <span class="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">مِثَالٌ فِي جُمْلَةٍ (Contoh Kalimat)</span>
          <p class="text-xl text-teal-900 font-arabic text-center dir-rtl leading-[2.6] bg-white/80 p-3 rounded-xl border border-teal-100 my-auto w-full font-bold">
            "${item.example}"
          </p>
          <span class="text-[11px] text-teal-800 mt-auto">Klik lagi untuk kembali</span>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCardFlip(cardElement) {
  cardElement.classList.toggle('flipped');
}

// Render Table Af'al
function renderAfalTable() {
  const tableBody = document.getElementById('afal-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = activeAfalData.map((row, idx) => `
    <tr class="hover:bg-teal-50/50 transition border-b border-stone-100">
      <td class="px-4 py-3.5 text-center font-semibold text-stone-500">${idx + 1}</td>
      <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-teal-900 text-center dir-rtl">
        <span>${row.madhi}</span>
        <button onclick="speakArabic('${row.madhi}')" class="ml-2 inline-block text-teal-600 hover:text-teal-800 text-xs">🔊</button>
      </td>
      <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-emerald-800 text-center dir-rtl">
        <span>${row.mudhari}</span>
        <button onclick="speakArabic('${row.mudhari}')" class="ml-2 inline-block text-teal-600 hover:text-teal-800 text-xs">🔊</button>
      </td>
      <td class="px-4 py-3.5 font-arabic text-2xl font-bold text-rose-800 text-center dir-rtl">
        <span>${row.masdar}</span>
        <button onclick="speakArabic('${row.masdar}')" class="ml-2 inline-block text-teal-600 hover:text-teal-800 text-xs">🔊</button>
      </td>
      <td class="px-4 py-3.5 text-center text-xs md:text-sm text-stone-700 font-semibold bg-stone-50/50">
        ${row.meaning}
      </td>
    </tr>
  `).join('');
}

// Render Istima Section
function renderIstimaSection() {
  const materiContainer = document.getElementById('istima-materi-container');
  const dialogContainer = document.getElementById('istima-dialog-container');

  if (materiContainer) {
    materiContainer.innerHTML = `
      <div class="p-6 rounded-2xl bg-gradient-to-r from-teal-900 to-teal-800 text-white shadow-md mb-6">
        <div class="flex justify-between items-start gap-4">
          <div>
            <span class="px-3 py-1 rounded-full bg-rose-500 text-white font-bold text-xs">سُؤَالُ الِاسْتِمَاع</span>
            <h3 class="font-arabic text-3xl md:text-4xl font-bold my-3 dir-rtl text-yellow-300 leading-relaxed">
              ${activeIstimaMateriInti.headerQuestion.ar}
            </h3>
          </div>
          <button onclick="speakArabic('${activeIstimaMateriInti.headerQuestion.ar}', this)" class="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition flex-shrink-0" title="Dengarkan Pertanyaan">
            🔊
          </button>
        </div>
      </div>

      <div class="space-y-4">
        ${activeIstimaMateriInti.points.map((pt, idx) => `
          <div class="p-5 rounded-2xl bg-white border border-teal-100 shadow-sm hover:shadow-md transition">
            <div class="flex justify-between items-center mb-3">
              <span class="px-3 py-1 rounded-lg bg-teal-50 text-teal-800 font-bold text-xs border border-teal-200">${pt.num}</span>
              <button onclick="speakArabic('${pt.ar}', this)" class="text-xs px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold transition flex items-center gap-1">
                <span>🔊 Dengarkan Poin ${idx + 1}</span>
              </button>
            </div>
            <p class="font-arabic text-2xl md:text-3xl text-stone-900 leading-[2.8] text-right dir-rtl py-1">${pt.ar}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (dialogContainer) {
    if (activeIstimaDialog.length > 0 && activeIstimaDialog[0].lines) {
      dialogContainer.innerHTML = activeIstimaDialog.map((dialogGroup, groupIdx) => `
        <div class="mb-8 p-6 rounded-3xl bg-white border border-teal-100 shadow-sm space-y-4">
          <div class="flex items-center justify-between border-b border-stone-100 pb-3">
            <h4 class="font-bold text-teal-900 text-lg md:text-xl flex items-center gap-2">
              <span>💬</span> ${dialogGroup.title}
            </h4>
            <button onclick="speakArabic('${dialogGroup.lines.map(l => l.speaker + '. ' + l.text).join(' ')}', this)" class="text-xs px-3.5 py-1.5 rounded-xl bg-teal-700 text-white font-bold transition flex items-center gap-1 shadow-sm">
              <span>🔊 Putar Seluruh Dialog</span>
            </button>
          </div>

          <div class="space-y-3 pt-1">
            ${dialogGroup.lines.map((item, idx) => `
              <div class="p-4 rounded-2xl ${idx % 2 === 0 ? 'bg-teal-50/70 border-l-4 border-teal-600' : 'bg-rose-50/70 border-l-4 border-rose-500'} transition space-y-2">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xs md:text-sm ${idx % 2 === 0 ? 'text-teal-800' : 'text-rose-800'}">${item.speaker}</span>
                  <button onclick="speakArabic('${item.text}', this)" class="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white text-teal-700 font-semibold shadow-xs hover:bg-teal-600 hover:text-white transition">
                    <span>🔊 Putar</span>
                  </button>
                </div>
                <p class="font-arabic text-2xl text-stone-900 dir-rtl text-right leading-[2.6] py-1 font-bold">${item.text}</p>
                <p class="text-xs text-stone-600 font-semibold italic bg-white/60 p-2 rounded-xl border border-stone-100">${item.translation}</p>
              </div>
            `).join('')}
          </div>

          ${dialogGroup.note ? `
            <div class="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs md:text-sm space-y-1">
              <span class="font-bold text-amber-800">📌 Catatan Dokter (مُلَاحَظَةُ الطَّبِيْبَةِ):</span>
              <p class="font-arabic text-xl text-stone-900 dir-rtl text-right leading-[2.6] font-bold">${dialogGroup.note}</p>
            </div>
          ` : ''}
        </div>
      `).join('');
    } else {
      dialogContainer.innerHTML = activeIstimaDialog.map((item, index) => `
        <div class="p-5 rounded-2xl ${index % 2 === 0 ? 'bg-teal-50/70 border-l-4 border-teal-600' : 'bg-rose-50/70 border-l-4 border-rose-500'} transition space-y-3">
          <div class="flex justify-between items-center mb-1">
            <span class="font-bold text-sm ${index % 2 === 0 ? 'text-teal-800' : 'text-rose-800'}">${item.speaker}</span>
            <button onclick="speakArabic('${item.text}', this)" class="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white text-teal-700 font-semibold shadow-sm hover:bg-teal-600 hover:text-white transition">
              <span>🔊 Putar</span>
            </button>
          </div>
          <p class="font-arabic text-2xl text-stone-900 dir-rtl text-right leading-[2.8] py-1">${item.text}</p>
        </div>
      `).join('');
    }
  }
}

function setAudioRate(rate) {
  playbackRate = rate;
  document.getElementById('rate-1x').className = rate === 1.0 ? 'px-3 py-1 bg-teal-700 text-white rounded-lg text-xs font-bold' : 'px-3 py-1 bg-stone-200 text-stone-700 rounded-lg text-xs';
  document.getElementById('rate-08x').className = rate === 0.8 ? 'px-3 py-1 bg-teal-700 text-white rounded-lg text-xs font-bold' : 'px-3 py-1 bg-stone-200 text-stone-700 rounded-lg text-xs';
}

function playAllMateriInti() {
  const fullText = activeIstimaMateriInti.headerQuestion.ar + " " + activeIstimaMateriInti.points.map(p => p.ar).join(" ");
  speakArabic(fullText, document.getElementById('btn-play-materi-inti'));
}

function playAllIstima() {
  let fullText = "";
  if (activeIstimaDialog.length > 0 && activeIstimaDialog[0].lines) {
    fullText = activeIstimaDialog.map(g => g.lines.map(l => l.speaker + ". " + l.text).join(" ")).join(" ");
  } else {
    fullText = activeIstimaDialog.map(d => d.speaker + ". " + d.text).join(" ");
  }
  speakArabic(fullText, document.getElementById('btn-play-all-istima'));
}

function formatArabicParagraph(text) {
  if (!text) return '';
  const blocks = text.split('\n\n');
  return blocks.map(block => {
    const lines = block.split('\n');
    const formattedLines = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      if (trimmed.match(/^[١٢٣123]-/)) {
        return `<div class="bg-teal-50/70 border-r-4 border-teal-600 pr-5 py-2.5 my-3 rounded-l-2xl text-teal-950 font-bold leading-[2.8] text-right dir-rtl shadow-xs">${trimmed}</div>`;
      }
      return `<p class="mb-4 leading-[2.8] text-right dir-rtl">${trimmed}</p>`;
    }).join('');
    return `<div class="mb-5">${formattedLines}</div>`;
  }).join('');
}

function checkTadrib1(qId, choice, btnEl) {
  const q = activeQiroahTadrib1.find(item => item.id === qId);
  if (!q) return;

  const feedbackEl = document.getElementById(`tadrib1-feedback-${qId}`);
  if (!feedbackEl) return;

  const btns = document.querySelectorAll(`.tadrib1-btn-${qId}`);
  btns.forEach(b => {
    b.classList.remove('bg-emerald-600', 'bg-rose-600', 'text-white');
    if (b.innerText.includes('صَحِيْح')) {
      b.className = `tadrib1-btn-${qId} px-5 py-2 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-sm transition font-arabic flex items-center gap-1.5`;
    } else {
      b.className = `tadrib1-btn-${qId} px-5 py-2 rounded-xl border border-rose-600 text-rose-700 hover:bg-rose-600 hover:text-white font-bold text-sm transition font-arabic flex items-center gap-1.5`;
    }
  });

  feedbackEl.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-950', 'bg-rose-50', 'border-rose-200', 'text-rose-950');

  if (choice === q.answer) {
    btnEl.classList.remove('text-emerald-700', 'text-rose-700');
    btnEl.classList.add(choice === 'sahih' ? 'bg-emerald-600' : 'bg-rose-600', 'text-white');
    feedbackEl.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-950');
    feedbackEl.innerHTML = `
      <div class="flex items-start gap-2">
        <span class="text-emerald-600 text-lg">✅</span>
        <div>
          <p class="font-bold text-sm">Masya Allah! Jawaban Tepat (${choice === 'sahih' ? 'صَحِيْح' : 'خَطَأ'})</p>
          <p class="text-xs text-emerald-900 mt-1 font-arabic text-right dir-rtl leading-[2.4]">${q.explanation}</p>
        </div>
      </div>
    `;
  } else {
    btnEl.classList.remove('text-emerald-700', 'text-rose-700');
    btnEl.classList.add('bg-rose-600', 'text-white');
    feedbackEl.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-950');
    feedbackEl.innerHTML = `
      <div class="flex items-start gap-2">
        <span class="text-rose-600 text-lg">❤️</span>
        <div>
          <p class="font-bold text-sm">Hampir Tepat, Tetap Semangat!</p>
          <p class="text-xs text-rose-900 mt-1 font-arabic text-right dir-rtl leading-[2.4]">${q.explanation}</p>
        </div>
      </div>
    `;
  }
}

// Render Qiroah Section
function renderQiroahSection() {
  const mainTitleEl = document.getElementById('qiroah-main-title');
  if (mainTitleEl) {
    if (currentChapter === 'bab3') {
      mainTitleEl.innerHTML = `صِحَّةُ الجِسْمِ فِي الإِسْلَامِ <span class="text-base font-normal text-stone-600 font-sans">(Kesehatan Tubuh dalam Islam)</span>`;
    } else {
      mainTitleEl.innerHTML = `الحَيَاةُ الصِّحِّيَّةُ <span class="text-base font-normal text-stone-600 font-sans">(Kehidupan yang Sehat)</span>`;
    }
  }

  const container = document.getElementById('qiroah-paragraphs');
  const tadrib1Container = document.getElementById('qiroah-tadrib1-container');
  const tadrib2Container = document.getElementById('qiroah-tadrib2-container');

  if (container) {
    container.innerHTML = activeQiroahText.sections.map((sec, idx) => `
      <div class="mb-8 p-6 md:p-8 rounded-3xl bg-white border border-teal-100 shadow-sm hover:shadow-md transition space-y-6">
        <div class="flex justify-between items-center pb-4 border-b border-stone-100">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-teal-700 text-white font-arabic text-2xl font-bold flex items-center justify-center shadow-sm">${sec.code}</span>
            <h4 class="font-bold text-teal-900 text-base md:text-lg">${sec.title}</h4>
          </div>
          <button onclick="speakArabic('${sec.ar.replace(/\n/g, ' ')}', this)" class="text-xs px-4 py-2 rounded-xl bg-teal-50 text-teal-700 hover:bg-teal-700 hover:text-white font-bold transition flex items-center gap-1.5 shadow-sm">
            <span>🔊 Putar Suara Bacaan</span>
          </button>
        </div>
        
        <div class="font-arabic text-2xl md:text-3xl text-stone-900 leading-[2.8] text-right dir-rtl py-2">
          ${formatArabicParagraph(sec.ar)}
        </div>
      </div>
    `).join('');
  }

  if (tadrib1Container) {
    tadrib1Container.innerHTML = activeQiroahTadrib1.map((item, idx) => `
      <div class="p-5 md:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
        <div class="flex items-start justify-between gap-3">
          <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">${idx + 1}</span>
          <div class="flex-grow">
            <p class="font-arabic text-2xl md:text-3xl text-stone-900 leading-[2.8] text-right dir-rtl font-bold mb-1">${item.statement}</p>
          </div>
          <button onclick="speakArabic('${item.statement}', this)" class="p-2 text-teal-700 hover:bg-teal-50 rounded-full transition flex-shrink-0" title="Dengarkan Pernyataan">
            🔊
          </button>
        </div>

        <div class="flex items-center justify-end gap-3 pt-2 border-t border-stone-100">
          <button onclick="checkTadrib1(${item.id}, 'sahih', this)" class="tadrib1-btn-${item.id} px-6 py-2.5 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-base transition font-arabic flex items-center gap-1.5 shadow-sm">
            <span>صَحِيْح</span>
          </button>
          <button onclick="checkTadrib1(${item.id}, 'khata', this)" class="tadrib1-btn-${item.id} px-6 py-2.5 rounded-xl border border-rose-600 text-rose-700 hover:bg-rose-600 hover:text-white font-bold text-base transition font-arabic flex items-center gap-1.5 shadow-sm">
            <span>خَطَأ</span>
          </button>
        </div>

        <div id="tadrib1-feedback-${item.id}" class="hidden p-4 rounded-xl text-xs md:text-sm border mt-3"></div>
      </div>
    `).join('');
  }

  if (tadrib2Container) {
    tadrib2Container.innerHTML = activeQiroahTadrib2.map((item, idx) => `
      <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0">${idx + 1}</span>
            <h5 class="font-arabic text-2xl font-bold text-teal-900 text-right dir-rtl leading-[2.6]">${item.question}</h5>
          </div>
          <button onclick="speakArabic('${item.question}', this)" class="p-2 text-teal-700 hover:bg-teal-50 rounded-full transition flex-shrink-0">
            🔊
          </button>
        </div>

        <details class="group border-t border-stone-100 pt-3">
          <summary class="cursor-pointer font-semibold text-xs text-rose-600 hover:text-rose-700 flex items-center justify-between">
            <span>💡 Lihat Kunci Jawaban Lengkap</span>
            <span class="group-open:rotate-180 transition transform">▼</span>
          </summary>
          <div class="mt-3 p-4 rounded-xl bg-teal-50/70 border border-teal-100">
            <div class="flex justify-between items-start gap-2">
              <p class="font-arabic text-2xl text-stone-900 leading-[2.8] text-right dir-rtl font-bold">${item.answer}</p>
              <button onclick="speakArabic('${item.answer}', this)" class="p-2 text-teal-700 hover:bg-teal-100 rounded-full transition flex-shrink-0" title="Dengarkan Jawaban">
                🔊
              </button>
            </div>
          </div>
        </details>
      </div>
    `).join('');
  }
}

function toggleQiroahTranslation() {
  const translations = document.querySelectorAll('.qiroah-trans');
  const btn = document.getElementById('btn-toggle-trans');
  let isHidden = true;

  translations.forEach(el => {
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
      isHidden = false;
    } else {
      el.classList.add('hidden');
      isHidden = true;
    }
  });

  btn.innerHTML = isHidden ? '👁️ Tampilkan Terjemahan' : '🙈 Sembunyikan Terjemahan';
}

// Render Quiz Section
let userAnswers = {};

function renderQuizSection() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  container.innerHTML = activeQuizQuestions.map((q, idx) => `
    <div class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
      <div class="flex items-start justify-between gap-3 border-b border-stone-100 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center">${q.id}</span>
          <span class="text-xs text-stone-500 font-semibold">Pilihan Ganda Interaktif:</span>
        </div>
        <button onclick="speakArabic('${q.question}')" class="p-2 text-teal-700 hover:bg-teal-50 rounded-full transition" title="Dengarkan Soal">🔊</button>
      </div>

      <p class="font-arabic text-2xl md:text-3xl font-bold text-teal-950 dir-rtl text-right leading-[2.6] py-1">${q.question}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
        ${q.options.map((opt, optIdx) => `
          <button 
            type="button" 
            onclick="selectQuizAnswer(${q.id}, ${optIdx}, this)" 
            class="quiz-btn-${q.id} p-3.5 rounded-xl border border-stone-200 hover:bg-teal-50 hover:border-teal-400 transition text-sm font-bold text-stone-800 font-arabic text-right dir-rtl flex items-center justify-between">
            <span>${opt}</span>
            <span class="text-xs font-sans text-stone-400 font-normal">Pilih</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function selectQuizAnswer(qId, choiceIdx, btnEl) {
  userAnswers[qId] = choiceIdx;

  const btns = document.querySelectorAll(`.quiz-btn-${qId}`);
  btns.forEach(b => {
    b.classList.remove('bg-teal-700', 'text-white', 'border-teal-700');
    b.classList.add('border-stone-200', 'text-stone-800');
  });

  btnEl.classList.remove('border-stone-200', 'text-stone-800');
  btnEl.classList.add('bg-teal-700', 'text-white', 'border-teal-700');
}

function calculateQuizResult() {
  const resultContainer = document.getElementById('quiz-result');
  if (!resultContainer) return;

  let score = 0;
  let total = activeQuizQuestions.length;

  activeQuizQuestions.forEach(q => {
    if (userAnswers[q.id] === q.answer) {
      score += 5;
    }
  });

  resultContainer.classList.remove('hidden');
  resultContainer.scrollIntoView({ behavior: 'smooth' });

  const scoreEl = document.getElementById('quiz-score');
  const badgeEl = document.getElementById('quiz-badge');
  const noteEl = document.getElementById('quiz-note');

  if (scoreEl) scoreEl.textContent = score;

  if (score >= 80) {
    if (badgeEl) badgeEl.textContent = "🌟 Mumtaz! (ممتاز)";
    if (noteEl) noteEl.textContent = "Masya Allah! Pemahamanmu sangat luar biasa!";
  } else if (score >= 60) {
    if (badgeEl) badgeEl.textContent = "👍 Jayyid Jiddan (جيد جداً)";
    if (noteEl) noteEl.textContent = "Alhamdulillah! Pertahankan semangat belajarmu!";
  } else {
    if (badgeEl) badgeEl.textContent = "🌸 La Tahzan (لا تحزن)";
    if (noteEl) noteEl.textContent = "Tetap semangat! Cobalah membaca kembali materi mufrodat & qiroah.";
  }
}

// Render Qowaid Quiz Section
function renderQowaidQuiz() {
  const container = document.getElementById('qowaid-quiz-container');
  if (!container) return;

  container.innerHTML = activeQowaidQuestions.map((q, idx) => `
    <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
      <div class="flex items-center justify-between gap-3 border-b border-stone-100 pb-2">
        <div class="flex items-center gap-3">
          <span class="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">${q.id}</span>
          <span class="text-xs text-stone-500 font-semibold">Analisislah Kedudukan & Kaidah Tata Bahasa:</span>
        </div>
        <button onclick="speakArabic('${q.word}')" class="p-2 text-teal-700 hover:bg-teal-50 rounded-full transition" title="Lafalkan">🔊</button>
      </div>

      <div class="py-2 text-center bg-stone-50 rounded-xl border border-stone-100">
        <p class="font-arabic text-2xl md:text-3xl font-bold text-teal-950 dir-rtl leading-[2.6]">${q.word}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
        ${q.options.map((opt, optIdx) => `
          <button 
            type="button" 
            onclick="checkQowaidQuiz(${q.id}, ${optIdx}, this)" 
            class="qowaid-btn-${q.id} py-2.5 px-3 rounded-xl border border-stone-200 hover:bg-teal-50 hover:border-teal-400 transition text-xs font-bold text-stone-700 font-arabic text-center">
            ${opt}
          </button>
        `).join('')}
      </div>

      <div id="qowaid-feedback-${q.id}" class="hidden p-3 rounded-xl text-xs border mt-2"></div>
    </div>
  `).join('');
}

function checkQowaidQuiz(qId, choiceIdx, btnEl) {
  const q = activeQowaidQuestions.find(item => item.id === qId);
  if (!q) return;

  const feedbackEl = document.getElementById(`qowaid-feedback-${qId}`);
  if (!feedbackEl) return;

  const btns = document.querySelectorAll(`.qowaid-btn-${qId}`);
  btns.forEach(b => {
    b.classList.remove('bg-teal-700', 'bg-rose-600', 'text-white', 'border-teal-700', 'border-rose-600');
    b.classList.add('border-stone-200', 'text-stone-700');
  });

  feedbackEl.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-950', 'bg-rose-50', 'border-rose-200', 'text-rose-950');

  if (choiceIdx === q.answer) {
    btnEl.classList.remove('border-stone-200', 'text-stone-700');
    btnEl.classList.add('bg-teal-700', 'border-teal-700', 'text-white');
    feedbackEl.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-950');
    feedbackEl.innerHTML = `
      <div class="flex items-start gap-2">
        <span class="text-emerald-600 text-base">✅</span>
        <div>
          <p class="font-bold">Masya Allah, Tepat Sekali!</p>
          <p class="text-xs text-emerald-900 mt-0.5">${q.explanation}</p>
        </div>
      </div>
    `;
  } else {
    btnEl.classList.remove('border-stone-200', 'text-stone-700');
    btnEl.classList.add('bg-rose-600', 'border-rose-600', 'text-white');
    feedbackEl.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-950');
    feedbackEl.innerHTML = `
      <div class="flex items-start gap-2">
        <span class="text-rose-600 text-base">❤️</span>
        <div>
          <p class="font-bold">Hampir Tepat!</p>
          <p class="text-xs text-rose-900 mt-0.5">${q.explanation}</p>
        </div>
      </div>
    `;
  }
}
