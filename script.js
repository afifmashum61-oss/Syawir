// Web Media Pembelajaran Bahasa Arab Kelas 11 - Bab الصحة والرعاية الصحية
// Kurikulum Berbasis Cinta (Kemenag)

// Data Mufrodat (Ungkapan & Kosa Kata dari Gambar)
const mufrodatData = [
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

// Data Tabel Af'al (Kata Kerja dari Gambar)
const afalData = [
  { madhi: "نَشَّطَ", mudhari: "يُنَشِّطُ", masdar: "تَنْشِيْط", meaning: "memberi semangat, merangsang" },
  { madhi: "بَعَثَ", mudhari: "يَبْعَثُ", masdar: "بَعْثًا", meaning: "membangkitkan" },
  { madhi: "مَارَسَ", mudhari: "يُمَارِسُ", masdar: "مُمَارَسَة", meaning: "membiasakan, melatih" },
  { madhi: "نَصَحَ", mudhari: "يَنْصَحُ", masdar: "نَصِيْحَة", meaning: "menasihati" },
  { madhi: "اِحْتَوَى", mudhari: "يَحْتَوِي", masdar: "اِحْتِوَاء", meaning: "mencakup, mengandung" },
  { madhi: "نَهَضَ", mudhari: "يَنْهَضُ", masdar: "نُهُوْض", meaning: "bangkit" },
  { madhi: "اِرْتَاحَ", mudhari: "يَرْتَاحُ", masdar: "اِرْتِيَاح", meaning: "merasa tenang, rileks" },
  { madhi: "أَنْعَمَ", mudhari: "يُنْعِمُ", masdar: "إِنْعَام", meaning: "memberi nikmat" }
];

// Teks Istima' Materi Inti (Berdasarkan Buku Paket Kemenag Terbaru)
const istimaMateriInti = {
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

// Teks Istima' Percakapan Tambahan (Di Klinik)
const istimaDialog = [
  { speaker: "الطَّبِيْبُ", text: "أَهْلًا وَسَهْلًا يَا عُمَر، مَاذَا تَشْكُو؟", translation: "Selamat datang Umar, apa yang kamu keluhkan?" },
  { speaker: "عُمَر", text: "أَشْعُرُ بِالتَّعَبِ وَالضَّعْفِ فِي جِسْمِي يَا طَبِيْبُ.", translation: "Saya merasa lelah dan lemah di tubuh saya, wahai dokter." },
  { speaker: "الطَّبِيْبُ", text: "هَلْ تُمَارِسُ الرِّيَاضَةَ وَتَتَنَاوَلُ الغِذَاءَ الطَّيِّبَ؟", translation: "Apakah kamu melatih diri berolahraga dan mengonsumsi makanan yang sehat?" },
  { speaker: "عُمَر", text: "لَا، أَنَا أَنَامُ مُتَأَخِّرًا وَلَا أُمَارِسُ الرِّيَاضَةَ.", translation: "Tidak, saya tidur terlambat dan tidak berolahraga." },
  { speaker: "الطَّبِيْبُ", text: "أَنْصَحُكَ بِالرَّاحَةِ الكَافِيَةِ، وَأَكْلِ الفِيْتَامِيْنَاتِ وَالبُرُوتِينَاتِ، وَمُمَارَسَةِ الجَرْيِ أَوْ السِّبَاحَةِ لِتَنْشِيْطِ الجِسْمِ.", translation: "Saya menasihatimu untuk istirahat yang cukup, makan vitamin dan protein, serta membiasakan lari atau berenang untuk menyegarkan tubuh." }
];

// Teks Qiroah (Membaca dari Buku Paket Kemenag Terbaru - الحياة الصحية)
const qiroahText = {
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
    }
  ]
};

// Data Tadrib 1 Qiroah (Benar / Salah - صَحِيْح / خَطَأ dari Buku Teks Kemenag)
const qiroahTadrib1 = [
  {
    id: 1,
    statement: "نَسْتَطِيْعُ العَمَلَ إِذَا لَمْ نَأْكُلِ الغِذَاءَ",
    translation: "Kita dapat bekerja jika kita tidak makan makanan.",
    answer: "khata",
    explanation: "خَطَأ (Salah)! Pembetulan yang benar: لا نَسْتَطِيْعُ العَمَلَ بِدُوْنِ الغِذَاءِ، لِأَنَّ الغِذَاءَ مَصْدَرُ الطَّاقَةِ اللَّازِمَةِ لِلْعَمَلِ."
  },
  {
    id: 2,
    statement: "نَأْكُلُ المَوَادَّ الضَّرُورِيَّةَ لِلصِّحَّةِ مِثْلَ البُرُوتِينَاتِ وَالفِيْتَامِيْنَاتِ",
    translation: "Kita makan bahan-bahan yang penting untuk kesehatan seperti protein dan vitamin.",
    answer: "sahih",
    explanation: "صَحِيْح (Benar)! Sesuai dengan paragraf ( أ ), makanan sehat mengandung bahan-bahan penting bagi tubuh."
  },
  {
    id: 3,
    statement: "تَجْعَلُ الرِّيَاضَةُ البَدَنِيَّةُ الجِسْمَ يَنْمُو وَيَعْمَلُ جَيِّدًا",
    translation: "Olahraga fisik menjadikan tubuh tumbuh dan bekerja dengan baik/bugar.",
    answer: "sahih",
    explanation: "صَحِيْح (Benar)! Sesuai dengan paragraf ( ب ), olahraga membantu pertumbuhan otot dan menjaga kebugaran."
  },
  {
    id: 4,
    statement: "النَّوْمُ أَهَمُّ شَيْءٍ فِي حَيَاةِ الإِنْسَانِ",
    translation: "Tidur adalah hal yang paling penting dalam kehidupan manusia.",
    answer: "khata",
    explanation: "خَطَأ (Salah)! Pembetulan yang benar: النَّوْمُ أَهَمُّ رَاحَةٍ لِلْإِنْسَانِ، وَلَكِنَّ الصِّحَّةَ هِيَ النِّعْمَةُ الأَهَمُّ."
  },
  {
    id: 5,
    statement: "الرِّيَاضَةُ لَازِمَةٌ فِي جَمِيْعِ المُنَاسَبَاتِ",
    translation: "Olahraga dibutuhkan di semua kesempatan tanpa batas.",
    answer: "khata",
    explanation: "خَطَأ (Salah)! Pembetulan yang benar: يَنْصَحُ الأَطِبَّاءُ بِمُمَارَسَةِ الرِّيَاضِيَّةِ فِي أَوْقَاتٍ مُنَاسِبَةٍ."
  },
  {
    id: 6,
    statement: "قِرَاءَةُ القُرْآنِ مِنَ الرِّيَاضَةِ الرُّوْحِيَّةِ",
    translation: "Membaca Al-Qur'an termasuk bagian dari olahraga ruh/jiwa.",
    answer: "sahih",
    explanation: "صَحِيْح (Benar)! Sesuai dengan paragraf ( ب ), membaca Qur'an dan dzikir merupakan olahraga jiwa (رِيَاضَةُ النَّفْسِ)."
  },
  {
    id: 7,
    statement: "الصَّلَاةُ تُسَاعِدُ كَثِيْرًا عَلَى تَنْشِيْطِ الجِسْمِ",
    translation: "Shalat sangat membantu menyegarkan kebugaran tubuh.",
    answer: "sahih",
    explanation: "صَحِيْح (Benar)! Sesuai dengan paragraf ( ب ), gerakan shalat merangsang kesegaran fisik dan ketenangan jiwa."
  }
];

// Data Tadrib 2 Qiroah (Tanya Jawab Pemahaman Teks Qiroah)
const qiroahTadrib2 = [
  {
    id: 1,
    question: "هَلْ نَسْتَطِيْعُ أَنْ نَعْمَلَ بِدُوْنِ الغِذَاءِ ؟",
    answer: "لَا، لَا نَسْتَطِيْعُ أَنْ نَعْمَلَ بِدُوْنِ الغِذَاءِ، لِأَنَّ الغِذَاءَ مَصْدَرُ الطَّاقَةِ اللَّازِمَةِ لِلْعَمَلِ."
  },
  {
    id: 2,
    question: "لِمَاذَا نَحْتَاجُ إِلَى الرَّاحَةِ بَعْدَ العَمَلِ ؟",
    answer: "لِأَنَّ الرَّاحَةَ ضَرُورِيَّةٌ لِلصِّحَّةِ كَالغِذَاءِ وَالشَّرَابِ."
  },
  {
    id: 3,
    question: "أُذْكُرْ بَعْضَ الرِّيَاضَاتِ البَدَنِيَّةِ الَّتِي تُمَارِسُهَا فِي مَدْرَسَتِكَ ؟",
    answer: "الرِّيَاضَاتُ البَدَنِيَّةُ الَّتِي أُمَارِسُهَا فِي مَدْرَسَتِي هِيَ الجَرْيُ، وَالسِّبَاحَةُ، وَلَعْبُ الكُرَةِ."
  },
  {
    id: 4,
    question: "مَاذَا طَلَبَ الرَّسُوْلُ ﷺ مِنْ بِلَالٍ ؟",
    answer: "طَلَبَ الرَّسُوْلُ ﷺ مِنْ بِلَالٍ أَنْ يُنَادِيَ لِلصَّلَاةِ لِيَرْتَاحَ بِهَا، فَقَالَ: (يَا بِلَالُ أَرِحْنَا بِالصَّلَاةِ)."
  },
  {
    id: 5,
    question: "مَا أَهَمُّ شَيْءٍ يَتَذَكَّرُهُ المَرْءُ عِنْدَ مَرَضِهِ ؟",
    answer: "أَهَمُّ شَيْءٍ يَتَذَكَّرُهُ المَرْءُ عِنْدَ مَرَضِهِ هُوَ نِعْمَةُ الصِّحَّةِ وَعَافِيَةُ البَدَنِ."
  }
];

// Data Latihan Soal Interaktif (تدريبات على الاستماع / المفردات - إِخْتَرِ أَصَحَّ الكَلِمَاتِ الآتِيَةِ!)
const quizQuestions = [
  {
    id: 1,
    question: "الغِذَاءُ الطَّيِّبُ يَحْتَوِي عَلَى .....",
    options: ["أ - الفِيْتَامِيْنَات", "ب - الشَّرَاب", "ج - الطَّعَام", "د - المَوَادِّ الضَّرُورِيَّةِ", "هـ - المَدَارِس"],
    answer: 3, // د
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (د): المَوَادِّ الضَّرُورِيَّةِ."
  },
  {
    id: 2,
    question: "..... مَصْدَرُ الطَّاقَةِ اللَّازِمَةِ لِلْعَمَلِ",
    options: ["أ - الأَكْل", "ب - الدَّرْس", "ج - الغِذَاء", "د - الرِّيَاضَة", "هـ - التَّعْلِيْم"],
    answer: 2, // ج
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): الغِذَاء."
  },
  {
    id: 3,
    question: "الرَّاحَةُ الكَافِيَةُ ضَرُورِيَّةٌ. وَمِنْ أَهَمِّ الرَّاحَةِ .....",
    options: ["أ - القِرَاءَة", "ب - النَّوْم", "ج - الأَذْكَار", "د - الدَّرْس", "هـ - الرَّسْم"],
    answer: 1, // ب
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): النَّوْم."
  },
  {
    id: 4,
    question: "الرِّيَاضَةُ البَدَنِيَّةُ تُسَاعِدُ عَلَى نُمُوِّ .....",
    options: ["أ - العَقْل", "ب - النَّفْس", "ج - الرَّأْس", "د - الرِّجْل", "هـ - العَضَلَات"],
    answer: 4, // هـ
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (هـ): العَضَلَات."
  },
  {
    id: 5,
    question: "مِنْ الرِّيَاضَةِ الرُّوْحِيَّةِ .....",
    options: ["أ - الجَرْيُ السَّرِيْع", "ب - السِّبَاحَةُ المُنْتَظَمَة", "ج - قِرَاءَةُ الأَذْكَار", "د - رَسْمُ المَنَاظِر", "هـ - لَعْبُ كُرَةِ القَدَم"],
    answer: 2, // ج
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ج): قِرَاءَةُ الأَذْكَار."
  },
  {
    id: 6,
    question: "وَلِصِحَّةِ الجِسْمِ ..... أَنْ يَتَنَاوَلَ الإِنْسَانُ الغِذَاءَ الطَّيِّبَ.",
    options: ["أ - يَجِبُ", "ب - يُمْكِنُ", "ج - يُحِبُّ", "د - يَكْرَهُ", "هـ - يُغْضِبُ"],
    answer: 0, // أ
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): يَجِبُ."
  },
  {
    id: 7,
    question: "الصَّلَاةُ تَسْتَطِيْعُ أَنْ ..... الرَّاحَةَ فِي نَفْسِ الإِنْسَانِ.",
    options: ["أ - تَبْعَثَ", "ب - تَجْعَلَ", "ج - تَصُدَّ", "د - تُمَارِسَ", "هـ - تُبْعِدَ"],
    answer: 0, // أ
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): تَبْعَثَ."
  },
  {
    id: 8,
    question: "يَجِبُ عَلَى المُسْلِمِ أَنْ ..... عَلَى الصَّلَوَاتِ الخَمْسِ.",
    options: ["أ - يُحَافِظَ", "ب - يَحْتَوِيَ", "ج - يُنْعِمَ", "د - يَتْرُكَ", "هـ - يَكْرَهَ"],
    answer: 0, // أ
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (أ): يُحَافِظَ."
  },
  {
    id: 9,
    question: "..... الرِّيَاضَةَ إِلَى الرِّيَاضَةِ البَدَنِيَّةِ وَالرِّيَاضَةِ النَّفْسِيَّةِ.",
    options: ["أ - تُحَافِظُ", "ب - نُفَضِّلُ", "ج - نَعْمَلُ", "د - نُقَسِّمُ", "هـ - تَجْلِسُ"],
    answer: 3, // د
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (د): نُقَسِّمُ."
  },
  {
    id: 10,
    question: "الطَّبِيْبُ ..... المَرِيْضَ أَنْ يُمَارِسَ رِيَاضَةَ النَّفْسِ.",
    options: ["أ - يَنْهَى", "ب - يَنْصَحُ", "ج - يَصُدُّ", "د - يَكْرَهُ", "هـ - يُغْضِبُ"],
    answer: 1, // ب
    explanation: "الِاخْتِيَارُ الصَّحِيْحُ هُوَ (ب): يَنْصَحُ."
  }
];

// Sound Synth Helper (Web Speech API)
let currentUtterance = null;
let playbackRate = 1.0;

function speakArabic(text, btnElement = null) {
  if (!('speechSynthesis' in window)) {
    alert("Browser Anda tidak mendukung fitur pemutar suara otomatis. Silakan gunakan Chrome/Edge.");
    return;
  }

  window.speechSynthesis.cancel(); // Stop current playing sound

  const cleanText = text.replace(/[\u0610-\u061A\u064C-\u0652]/g, function(char) {
    // Keep harakat for smooth TTS if supported
    return char;
  });

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
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(s => s.classList.add('hidden'));

  // Show target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  // Reset tab button states
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.classList.remove('active', 'bg-teal-700', 'text-white', 'shadow-md');
    tab.classList.add('text-stone-600', 'hover:bg-stone-100');
  });

  // Highlight active button
  const activeBtn = btnElement || document.querySelector(`.tab-btn[data-target="${targetId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-teal-700', 'text-white', 'shadow-md');
    activeBtn.classList.remove('text-stone-600', 'hover:bg-stone-100');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initializing Web Application Logic
document.addEventListener('DOMContentLoaded', () => {
  renderMufrodatCards();
  renderAfalTable();
  renderQowaidQuiz();
  renderIstimaSection();
  renderQiroahSection();
  renderQuizSection();

  // Attach event listener fallback for tabs
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      const targetId = this.getAttribute('data-target');
      if (targetId) {
        switchTab(targetId, this);
      }
    });
  });

  // Search Filter for Mufrodat
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

  const filtered = mufrodatData.filter(item => 
    item.arabic.includes(filter) || 
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
          <div class="w-full flex justify-between items-center mb-2">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">${item.category}</span>
            <button onclick="event.stopPropagation(); speakArabic('${item.arabic}', this)" class="p-2 rounded-full hover:bg-stone-100 text-teal-700 transition" title="Dengarkan Lafal">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
              </svg>
            </button>
          </div>
          <h3 class="font-arabic text-3xl font-bold text-teal-900 my-auto dir-rtl">${item.arabic}</h3>
          <p class="text-xs text-rose-500 font-medium mt-auto flex items-center gap-1">
            <span>Klik untuk balik kartu (مِثَال)</span> ➔
          </p>
        </div>
        <!-- Back (Pure Arabic Example) -->
        <div class="flip-card-back shadow-md">
          <span class="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">مِثَالٌ فِي جُمْلَةٍ</span>
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

// Render Table Af'al (Pure Arabic)
function renderAfalTable() {
  const tableBody = document.getElementById('afal-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = afalData.map((row, idx) => `
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
    </tr>
  `).join('');
}

// Render Istima Section (Pure Arabic)
function renderIstimaSection() {
  const materiContainer = document.getElementById('istima-materi-container');
  const dialogContainer = document.getElementById('istima-dialog-container');

  // Render Materi Inti (Buku Paket)
  if (materiContainer) {
    materiContainer.innerHTML = `
      <!-- Question Card -->
      <div class="p-6 rounded-2xl bg-gradient-to-r from-teal-900 to-teal-800 text-white shadow-md mb-6">
        <div class="flex justify-between items-start gap-4">
          <div>
            <span class="px-3 py-1 rounded-full bg-rose-500 text-white font-bold text-xs">سُؤَالُ الِاسْتِمَاع</span>
            <h3 class="font-arabic text-3xl md:text-4xl font-bold my-3 dir-rtl text-yellow-300 leading-relaxed">
              ${istimaMateriInti.headerQuestion.ar}
            </h3>
          </div>
          <button onclick="speakArabic('${istimaMateriInti.headerQuestion.ar}', this)" class="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition flex-shrink-0" title="Dengarkan Pertanyaan">
            🔊
          </button>
        </div>
      </div>

      <!-- 3 Key Points Cards -->
      <div class="space-y-4">
        ${istimaMateriInti.points.map((pt, idx) => `
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

  // Render Dialog Percakapan Tambahan (Pure Arabic)
  if (dialogContainer) {
    dialogContainer.innerHTML = istimaDialog.map((item, index) => `
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

function setAudioRate(rate) {
  playbackRate = rate;
  document.getElementById('rate-1x').className = rate === 1.0 ? 'px-3 py-1 bg-teal-700 text-white rounded-lg text-xs font-bold' : 'px-3 py-1 bg-stone-200 text-stone-700 rounded-lg text-xs';
  document.getElementById('rate-08x').className = rate === 0.8 ? 'px-3 py-1 bg-teal-700 text-white rounded-lg text-xs font-bold' : 'px-3 py-1 bg-stone-200 text-stone-700 rounded-lg text-xs';
}

function playAllMateriInti() {
  const fullText = istimaMateriInti.headerQuestion.ar + " " + istimaMateriInti.points.map(p => p.ar).join(" ");
  speakArabic(fullText, document.getElementById('btn-play-materi-inti'));
}

function playAllIstima() {
  const fullText = istimaDialog.map(d => d.speaker + ". " + d.text).join(" ");
  speakArabic(fullText, document.getElementById('btn-play-all-istima'));
}

// Helper format teks Arab agar spasi antarbaris & harakat sangat lega dan rapi
function formatArabicParagraph(text) {
  if (!text) return '';
  const blocks = text.split('\n\n');
  return blocks.map(block => {
    const lines = block.split('\n');
    const formattedLines = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      // Formatting untuk poin bernomor 1-, 2-, 3-
      if (trimmed.match(/^[١٢٣123]-/)) {
        return `<div class="bg-teal-50/70 border-r-4 border-teal-600 pr-5 py-2.5 my-3 rounded-l-2xl text-teal-950 font-bold leading-[2.8] text-right dir-rtl shadow-xs">${trimmed}</div>`;
      }
      return `<p class="mb-4 leading-[2.8] text-right dir-rtl">${trimmed}</p>`;
    }).join('');
    return `<div class="mb-5">${formattedLines}</div>`;
  }).join('');
}

// Function check Tadrib 1 (Sahih / Khata)
function checkTadrib1(qId, choice, btnEl) {
  const q = qiroahTadrib1.find(item => item.id === qId);
  if (!q) return;

  const feedbackEl = document.getElementById(`tadrib1-feedback-${qId}`);
  if (!feedbackEl) return;

  // Reset button styling for this question
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

// Render Qiroah Section (Pure Arabic)
function renderQiroahSection() {
  const container = document.getElementById('qiroah-paragraphs');
  const tadrib1Container = document.getElementById('qiroah-tadrib1-container');
  const tadrib2Container = document.getElementById('qiroah-tadrib2-container');

  // 1. Render Teks Qiroah (الحَيَاةُ الصِّحِّيَّةُ)
  if (container) {
    container.innerHTML = qiroahText.sections.map((sec, idx) => `
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
        
        <!-- Styled Paragraphs with spacious line height & clear list items -->
        <div class="font-arabic text-2xl md:text-3xl text-stone-900 leading-[2.8] text-right dir-rtl py-2">
          ${formatArabicParagraph(sec.ar)}
        </div>
      </div>
    `).join('');
  }

  // 2. Render Tadrib 1 (Soal Benar / Salah - صَحِيْح أَوْ خَطَأ - Pure Arabic)
  if (tadrib1Container) {
    tadrib1Container.innerHTML = qiroahTadrib1.map((item, idx) => `
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

  // 3. Render Tadrib 2 (Soal Tanya Jawab)
  if (tadrib2Container) {
    tadrib2Container.innerHTML = qiroahTadrib2.map((item, idx) => `
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

  container.innerHTML = quizQuestions.map((q, idx) => `
    <div class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm mb-6 space-y-4">
      <div class="flex items-start justify-between gap-3 border-b border-stone-100 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-9 h-9 rounded-2xl bg-rose-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-xs">${q.id}</span>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">إِخْتَرِ أَصَحَّ الكَلِمَاتِ</span>
        </div>
        <button onclick="speakArabic('${q.question}', this)" class="p-2 rounded-full bg-teal-50 hover:bg-teal-700 hover:text-white text-teal-700 transition flex-shrink-0" title="Dengarkan Soal">
          🔊
        </button>
      </div>

      <div class="py-2">
        <p class="font-arabic text-2xl md:text-3xl font-bold text-teal-950 text-right dir-rtl leading-[2.8]">${q.question}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        ${q.options.map((opt, optIdx) => `
          <button 
            type="button"
            onclick="selectOption(${q.id}, ${optIdx}, this)" 
            class="quiz-opt-btn-${q.id} p-4 rounded-2xl border border-stone-200 hover:border-teal-600 hover:bg-teal-50/70 transition text-right dir-rtl font-arabic text-xl md:text-2xl font-bold text-stone-800 leading-[2.6] flex items-center justify-between gap-3 shadow-xs">
            <span>${opt}</span>
            <span class="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-xs font-bold text-stone-500 option-indicator flex-shrink-0">⚪</span>
          </button>
        `).join('')}
      </div>

      <div id="quiz-feedback-${q.id}" class="hidden mt-3 p-4 rounded-xl text-sm border"></div>
    </div>
  `).join('');
}

function selectOption(qId, optIdx, btnEl) {
  userAnswers[qId] = optIdx;

  const buttons = document.querySelectorAll(`.quiz-opt-btn-${qId}`);
  buttons.forEach(b => {
    b.classList.remove('bg-teal-700', 'border-teal-700', 'text-white');
    b.classList.add('border-stone-200', 'text-stone-800');
    const indicator = b.querySelector('.option-indicator');
    if (indicator) {
      indicator.textContent = '⚪';
      indicator.className = 'w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-xs font-bold text-stone-500 option-indicator flex-shrink-0';
    }
  });

  btnEl.classList.remove('border-stone-200', 'text-stone-800');
  btnEl.classList.add('bg-teal-700', 'border-teal-700', 'text-white');
  const activeIndicator = btnEl.querySelector('.option-indicator');
  if (activeIndicator) {
    activeIndicator.textContent = '✓';
    activeIndicator.className = 'w-7 h-7 rounded-full bg-white text-teal-700 flex items-center justify-center text-xs font-bold option-indicator flex-shrink-0';
  }
}

function submitQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  quizQuestions.forEach(q => {
    const feedbackEl = document.getElementById(`quiz-feedback-${q.id}`);
    const selected = userAnswers[q.id];

    feedbackEl.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-900', 'bg-rose-50', 'border-rose-200', 'text-rose-900');

    if (selected === q.answer) {
      score += 10;
      feedbackEl.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-900');
      feedbackEl.innerHTML = `
        <div class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg">✅</span>
          <div>
            <p class="font-bold">Masya Allah, Jawaban Benar!</p>
            <p class="text-xs text-emerald-800 mt-1">${q.explanation}</p>
          </div>
        </div>
      `;
    } else {
      feedbackEl.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-900');
      feedbackEl.innerHTML = `
        <div class="flex items-start gap-2">
          <span class="text-rose-600 text-lg">❤️</span>
          <div>
            <p class="font-bold">Hampir Tepat! Tetap Semangat!</p>
            <p class="text-xs text-rose-800 mt-1">Jawaban yang tepat adalah: <strong>${q.options[q.answer]}</strong></p>
            <p class="text-xs text-stone-600 mt-1">${q.explanation}</p>
          </div>
        </div>
      `;
    }
  });

  // Display Score & Love-based Appreciation Card
  const resultCard = document.getElementById('quiz-result-card');
  const scoreEl = document.getElementById('final-score');
  const titleEl = document.getElementById('score-title');
  const messageEl = document.getElementById('score-message');

  scoreEl.textContent = score;
  resultCard.classList.remove('hidden');

  if (score === 100) {
    titleEl.textContent = "🌟 MUMTAZ! (Super Luar Biasa)";
    messageEl.textContent = "Masya Allah, prestasi yang sungguh membanggakan! Cintamu pada ilmu Bahasa Arab dan rasa syukur atas nikmat kesehatan dipancar dengan sangat indah. Pertahankan ya nak!";
  } else if (score >= 70) {
    titleEl.textContent = "👍 JAYYID JIDDAN! (Sangat Baik)";
    messageEl.textContent = "Alhamdulillah, hasil yang luar biasa! Kamu sudah memahami konsep kesehatan dalam Bahasa Arab dengan baik. Teruskan semangat belajarmu dengan penuh kasih sayang!";
  } else {
    titleEl.textContent = "💪 LA TAHZAN! (Tetap Semangat & Penuh Cinta)";
    messageEl.textContent = "Jangan berkecil hati ya! Setiap langkah dan usaha belajarmu bernilai pahala dan kebaikan di sisi Allah. Yuk pelajari kembali Mufrodat & Istima' lalu coba kuis ini lagi!";
  }

  resultCard.scrollIntoView({ behavior: 'smooth' });
}

// Habit / Refleksi Tracker
function toggleHabit(el) {
  el.classList.toggle('bg-teal-50');
  el.classList.toggle('border-teal-400');
}

// Data Tadrib Qowaid (20 Soal Klasifikasi Kata: Isim, Fi'il, Harf)
const qowaidQuestions = [
  {
    id: 1,
    word: "المَدْرَسَةُ",
    options: ["إِسْم (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "المَدْرَسَةُ adalah ISIM (إِسْم) karena diawali alif lam (الـ) dan menunjukkan nama benda/tempat."
  },
  {
    id: 2,
    word: "يَقْرَأُ",
    options: ["إِسْم (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 1,
    explanation: "يَقْرَأُ adalah FI'IL (فِعْل مُضَارِع) yang menunjukkan perbuatan membaca pada masa sekarang."
  },
  {
    id: 3,
    word: "وَ",
    options: ["إِسْم (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 2,
    explanation: "وَ adalah HARF (حَرْف) yaitu kata tugas/penghubung ('dan') yang tidak berdiri sendiri."
  },
  {
    id: 4,
    word: "ذَلِكَ",
    options: ["اسم الإِشَارَة (Isim)", "فِعْل أَمْر (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "ذَلِكَ adalah Isim Penunjuk / Isim Isyarah (اسم الإشارة) yang berarti 'itu'."
  },
  {
    id: 5,
    word: "اُكْتُبْ",
    options: ["فِعْل مَاضٍ", "فِعْل أَمْر", "إِسْم مَصْدَر"],
    answer: 1,
    explanation: "اُكْتُبْ adalah Fi'il Amar (فِعْل أَمْر) yaitu kata kerja perintah ('Tulislah!')."
  },
  {
    id: 6,
    word: "رَسُوْلٌ",
    options: ["إِسْم (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "رَسُوْلٌ adalah ISIM (إِسْم) karena ditandai dengan tanwin (ـٌ) dan menunjukkan nama perantara/benda."
  },
  {
    id: 7,
    word: "تَكَلَّمَ",
    options: ["فِعْل مَاضٍ", "فِعْل مُضَارِع", "فِعْل أَمْر"],
    answer: 0,
    explanation: "تَكَلَّمَ adalah FI'IL MADHI (فِعْل مَاضٍ) yang menunjukkan perbuatan berbicara di masa lampau."
  },
  {
    id: 8,
    word: "الَّذِي",
    options: ["اسم المَوْصُوْل (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "الَّذِي adalah Isim Penghubung / Isim Maushul (اسم الموصول) yang berarti 'yang'."
  },
  {
    id: 9,
    word: "فَ",
    options: ["إِسْم (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 2,
    explanation: "فَ adalah HARF (حَرْف) yaitu kata tugas/penghubung yang berarti 'maka/lalu'."
  },
  {
    id: 10,
    word: "كَبِيْرٌ",
    options: ["إِسْم صِفَة (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "كَبِيْرٌ adalah ISIM SIFAT (إِسْم صِفَة) yang menunjukkan sifat benda ('besar')."
  },
  {
    id: 11,
    word: "يُحْسِنُ",
    options: ["فِعْل مَاضٍ", "فِعْل مُضَارِع", "فِعْل أَمْر"],
    answer: 1,
    explanation: "يُحْسِنُ adalah FI'IL MUDHARI' (فِعْل مُضَارِع) yang menunjukkan perbuatan berbuat baik pada masa sekarang/kebiasaan."
  },
  {
    id: 12,
    word: "أَنَا",
    options: ["اسم الضَّمِيْر (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "أَنَا adalah Isim Kata Ganti Orang Pertama / Isim Dhomir (اسم الضمير) yang berarti 'saya'."
  },
  {
    id: 13,
    word: "قِرَاءَةٌ",
    options: ["إِسْم مَصْدَر (Isim)", "فِعْل أَمْر (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "قِرَاءَةٌ adalah ISIM MASDAR (إِسْم مَصْدَر) yaitu kata kerja yang dibendakan ('membaca/bacaan')."
  },
  {
    id: 14,
    word: "لِـ",
    options: ["إِسْم (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 2,
    explanation: "لِـ adalah HARF (حَرْف) yaitu kata tugas yang berarti 'untuk/bagi'."
  },
  {
    id: 15,
    word: "اُنْظُرْ",
    options: ["فِعْل مَاضٍ", "فِعْل مُضَارِع", "فِعْل أَمْر"],
    answer: 2,
    explanation: "اُنْظُرْ adalah FI'IL AMAR (فِعْل أَمْر) yaitu kata kerja perintah ('Lihatlah!')."
  },
  {
    id: 16,
    word: "هَذِهِ",
    options: ["اسم الإِشَارَة (Isim)", "اسم المَوْصُوْل (Isim)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "هَذِهِ adalah Isim Penunjuk Dekat untuk Muannats / Isim Isyarah (اسم الإشارة) yang berarti 'ini'."
  },
  {
    id: 17,
    word: "أَحْسَنَ",
    options: ["فِعْل مَاضٍ", "فِعْل مُضَارِع", "فِعْل أَمْر"],
    answer: 0,
    explanation: "أَحْسَنَ adalah FI'IL MADHI (فِعْل مَاضٍ) yang menunjukkan perbuatan berbuat baik di masa lampau."
  },
  {
    id: 18,
    word: "نَحْنُ",
    options: ["اسم الضَّمِيْر (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "نَحْنُ adalah Isim Dhomir Munfashil (اسم الضمير) yang berarti 'kami/kita'."
  },
  {
    id: 19,
    word: "نَظَرَ",
    options: ["فِعْل مَاضٍ", "فِعْل مُضَارِع", "فِعْل أَمْر"],
    answer: 0,
    explanation: "نَظَرَ adalah FI'IL MADHI (فِعْل مَاضٍ) yang berarti 'telah melihat'."
  },
  {
    id: 20,
    word: "مَنْ",
    options: ["اسم المَوْصُوْل (Isim)", "فِعْل (Fi'il)", "حَرْف (Harf)"],
    answer: 0,
    explanation: "مَنْ adalah Isim Penghubung / Penanya (اسم الموصول / الاستفهام) yang berarti 'siapa / barangsiapa'."
  }
];

function renderQowaidQuiz() {
  const container = document.getElementById('qowaid-quiz-container');
  if (!container) return;

  container.innerHTML = qowaidQuestions.map((q, idx) => `
    <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">${q.id}</span>
          <span class="text-xs text-stone-500 font-semibold">Tentukan jenis kata berikut:</span>
        </div>
        <button onclick="speakArabic('${q.word}')" class="p-2 text-teal-700 hover:bg-teal-50 rounded-full transition" title="Lafalkan">🔊</button>
      </div>

      <div class="py-1 text-center bg-stone-50 rounded-xl border border-stone-100">
        <p class="font-arabic text-3xl font-bold text-teal-900 dir-rtl">${q.word}</p>
      </div>

      <div class="grid grid-cols-3 gap-2 pt-1">
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
  const q = qowaidQuestions.find(item => item.id === qId);
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
