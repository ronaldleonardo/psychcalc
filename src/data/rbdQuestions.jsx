export const rbdQuestions = {
  icon: "😵",
  colorScheme: {
    primary: "#f26666", // Light Red
    secondary: "#cc0000", // Dark Red
  },
  questions: [
    {
      id: 1,
      question:
        "Apakah PERAWATAN SAAT INI diakibatkan karena percobaan bunuh diri?",
      description: "",
      options: [
        { score: 1, text: "Tidak" },
        { score: 2, text: "Ya" },
      ],
    },
    {
      id: 2,
      question: "Kontrak keamanan",
      description: "",
      options: [
        { score: 0, text: "Kemampuan penuh untuk membuat kontrak" },
        {
          score: 1,
          text: "Membuat kontrak tetapi ambivalen atau dengan perhatian khusus",
        },
        {
          score: 2,
          text: "Tidak mau membuat kontrak ATAU tidak mampu membuat kontrak karena ketidakmampuan menilai realitas (halusinasi, delusi, demensia, delirium, disosiasi)",
        },
      ],
    },
    {
      id: 3,
      question: "Rencana bunuh diri",
      description: "",
      options: [
        { score: 0, text: "Tidak ada rencana" },
        {
          score: 1,
          text: "Memiliki rencana tanpa akses pada metode yang dilaksanakan",
        },
        {
          score: 2,
          text: "Memiliki rencana dengan akses nyata atau potensial pada metode yang direncanakan",
        },
      ],
    },
    {
      id: 4,
      question: "Letalitas rencana",
      description: "",
      options: [
        {
          score: 0,
          text: "Tidak ada",
        },
        {
          score: 1,
          text: "Letalitas rencana rendah (irisan superfisial, membenturkan kepala, menutup muka dengan bantal, menggigit, menahan napas)",
        },
        {
          score: 2,
          text: "Letalitas rencana tinggi (senjata, gantung diri, lompat dari ketinggian, karbon monoksida)",
        },
      ],
    },
    {
      id: 5,
      question: "Risiko kabur",
      description: "",
      options: [
        { score: 0, text: "Tidak ada risiko kabur" },
        { score: 1, text: "Risiko kabur rendah" },
        { score: 2, text: "Risiko kabur tinggi" },
      ],
    },
    {
      id: 6,
      question: "Ide bunuh diri",
      description: "",
      options: [
        { score: 0, text: "Tidak ada pikiran bunuh diri saat ini" },
        { score: 1, text: "Pikiran bunuh diri sesekali atau singkat" },
        { score: 2, text: "Risiko bunuh diri terus-menerus" },
      ],
    },
    {
      id: 7,
      question: "Riwayat percobaan bunuh diri",
      description: "",
      options: [
        { score: 0, text: "Tidak ada riwayat percobaan" },
        { score: 1, text: "Riwayat percobaan dengan letalitas rendah" },
        { score: 2, text: "Riwayat percobaan dengan letalitas tinggi" },
      ],
    },
    {
      id: 8,
      question:
        "Gejala-gejala: a. Keputusasaan, b. Ketidakberdayaan, c. Anhedonia, d. Rasa salah/malu, e. Kemarahan, f. Impulsivitas",
      description: "",
      options: [
        { score: 0, text: "Tidak ada gejala ATAU terdapat 1-2 gejala" },
        { score: 1, text: "Terdapat 3-4 gejala" },
        { score: 2, text: "Terdapat 5-6 gejala" },
      ],
    },
    {
      id: 9,
      question:
        "Pikiran kematian saat ini (fantasi, reuni, preokupasi dengan kematian)",
      description: "",
      options: [
        { score: 0, text: "Jarang" },
        { score: 1, text: "Terjadi cukup sering" },
        { score: 2, text: "Terus-menerus" },
      ],
    },
    {
      id: 10,
      question: "Persepsi pemeriksa terhadap keandalan pasien",
      description: "",
      options: [
        { score: 0, text: "Jawaban pasien dapat dipercaya" },
        {
          score: 3,
          text: "Jawaban pasien perlu dipertanyakan, tetapi dapat dipercaya; setidaknya 1 tanda nonverbal ditunjukkan",
        },
        {
          score: 4,
          text: "Jawaban pasien tidak dapat dipercaya, beberapa tanda nonverbal ditunjukkan",
        },
      ],
    },
  ],
  severityLevels: [
    { minScore: 0, maxScore: 3, level: "Tidak perlu perhatian khusus" },
    {
      minScore: 4,
      maxScore: 9,
      level: "Perhatian untuk risiko sedang (observasi setiap 2 jam)",
    },
    {
      minScore: 10,
      maxScore: Infinity,
      level: "Perhatian untuk risiko tinggi (observasi setiap 1 jam)",
    },
  ],
};
