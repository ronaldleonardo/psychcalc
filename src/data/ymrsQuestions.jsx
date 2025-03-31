// src/data.js
export const ymrsQuestions = {
  icon: "🤯",
  colorScheme: {
    primary: "#f8b72bc7", // Yellow Opacity
    secondary: "#ffae00", // Strong yellow
  },
  questions: [
    {
      id: 1,
      question: "Peningkatan Alam Perasaan",
      options: [
        {
          score: 0,
          text: "Tidak ada",
          description: "Tidak ada peningkatan alam perasaan.",
        },
        {
          score: 1,
          text: "Sedikit meningkat atau kemungkinan ada peningkatan, saat ditanya",
          description:
            "Sedikit peningkatan atau kemungkinan peningkatan saat ditanya.",
        },
        {
          score: 2,
          text: "Jelas terjadi peningkatan subjektif; rasa optimis, percaya diri, ceria, sesuai dengan isi/topik pembicaraan",
          description:
            "Peningkatan subjektif yang jelas; optimis, percaya diri, ceria, sesuai dengan topik pembicaraan.",
        },
        {
          score: 3,
          text: "Meningkat, tidak sesuai dengan isi/topik, penuh humor atau melucu",
          description:
            "Peningkatan yang tidak sesuai dengan topik, penuh humor atau melucu.",
        },
        {
          score: 4,
          text: "Eforia; tertawa-tawa yang tak serasi, menyanyi-nyanyi",
          description: "Eforia; tertawa tidak serasi atau menyanyi-nyanyi.",
        },
      ],
    },
    {
      id: 2,
      question: "Peningkatan Aktivitas Motorik/Energi",
      options: [
        {
          score: 0,
          text: "Tidak ada",
          description: "Tidak ada peningkatan aktivitas motorik atau energi.",
        },
        {
          score: 1,
          text: "Secara subjektif terasa ada peningkatan",
          description: "Peningkatan subjektif dalam aktivitas atau energi.",
        },
        {
          score: 2,
          text: "Gerakan-gerakan motorik meningkat",
          description: "Gerakan motorik yang meningkat secara objektif.",
        },
        {
          score: 3,
          text: "Energi berlebihan; kadang-kadang hiperaktif; gelisah (dapat ditenangkan)",
          description:
            "Energi berlebihan, kadang hiperaktif, gelisah, tetapi masih dapat ditenangkan.",
        },
        {
          score: 4,
          text: "Gaduh gelisah motorik; hiperaktivitas terus-menerus (tidak dapat ditenangkan)",
          description: "Hiperaktivitas terus-menerus, tidak dapat ditenangkan.",
        },
      ],
    },
    {
      id: 3,
      question: "Minat Seksual",
      options: [
        {
          score: 0,
          text: "Normal",
          description: "Minat seksual dalam batas normal.",
        },
        {
          score: 1,
          text: "Ringan atau kemungkinan meningkat",
          description:
            "Minat seksual sedikit meningkat atau kemungkinan meningkat.",
        },
        {
          score: 2,
          text: "Jelas meningkat secara subjektif saat ditanya",
          description: "Minat seksual jelas meningkat saat ditanya.",
        },
        {
          score: 3,
          text: "Bicara topik seksual secara spontan; mengelaborasi masalah-masalah seksual; laporan spontan tentang hiperseksual",
          description:
            "Bicara topik seksual secara spontan, mengelaborasi masalah seksual, atau melaporkan hiperseksual.",
        },
        {
          score: 4,
          text: "Tindakan seksual secara terbuka (terhadap pasien lainnya, staf, atau pewawancara)",
          description: "Tindakan seksual terbuka terhadap orang lain.",
        },
      ],
    },
    {
      id: 4,
      question: "Tidur",
      options: [
        {
          score: 0,
          text: "Tidak ada penurunan kebutuhan tidur",
          description: "Tidak ada perubahan dalam kebutuhan tidur.",
        },
        {
          score: 1,
          text: "Tidur berkurang dari biasanya hingga 1 jam",
          description: "Tidur berkurang hingga 1 jam dari biasanya.",
        },
        {
          score: 2,
          text: "Tidur berkurang dari biasanya hingga lebih dari satu jam",
          description: "Tidur berkurang lebih dari satu jam dari biasanya.",
        },
        {
          score: 3,
          text: "Melaporkan berkurangnya kebutuhan tidur",
          description: "Pasien melaporkan berkurangnya kebutuhan tidur.",
        },
        {
          score: 4,
          text: "Menyangkal memerlukan tidur",
          description: "Pasien menyangkal memerlukan tidur.",
        },
      ],
    },
    {
      id: 5,
      question: "Iritabilitas",
      options: [
        { score: 0, text: "Tidak ada", description: "Tidak ada iritabilitas." },
        {
          score: 2,
          text: "Secara subjektif meningkat",
          description: "Iritabilitas meningkat secara subjektif.",
        },
        {
          score: 4,
          text: "Sekali-sekali iritabel selama wawancara, baru saja memperlihatkan episode kemarahan, menjengkelkan di bangsal, atau di lingkungan yang sudah biasa",
          description:
            "Iritabilitas sesekali selama wawancara atau di lingkungan.",
        },
        {
          score: 6,
          text: "Sering iritabel selama wawancara, ketus, kasar",
          description: "Iritabilitas sering terjadi, ketus, atau kasar.",
        },
        {
          score: 8,
          text: "Bermusuhan, tidak kooperatif; wawancara tidak bisa dilakukan",
          description:
            "Bermusuhan, tidak kooperatif, wawancara tidak mungkin dilakukan.",
        },
      ],
    },
    {
      id: 6,
      question: "Pembicaraan (Kecepatan dan Jumlah)",
      options: [
        {
          score: 0,
          text: "Tidak ada peningkatan",
          description:
            "Tidak ada peningkatan kecepatan atau jumlah pembicaraan.",
        },
        {
          score: 2,
          text: "Merasa banyak bicara",
          description: "Merasa banyak bicara secara subjektif.",
        },
        {
          score: 4,
          text: "Sesekali terdapat peningkatan kecepatan atau jumlah pembicaraan, sekali-sekali bertele-tele",
          description:
            "Peningkatan kecepatan atau jumlah pembicaraan sesekali.",
        },
        {
          score: 6,
          text: "Mendesak; peningkatan kecepatan atau jumlah pembicaraan secara terus-menerus, sulit untuk disela",
          description:
            "Peningkatan kecepatan atau jumlah pembicaraan terus-menerus, sulit disela.",
        },
        {
          score: 8,
          text: "Memaksa; tidak dapat disela, terus-menerus berbicara",
          description: "Pembicaraan memaksa, tidak dapat disela.",
        },
      ],
    },
    {
      id: 7,
      question: "Bahasa – Gangguan Pikiran",
      options: [
        {
          score: 0,
          text: "Tidak ada",
          description: "Tidak ada gangguan pikiran.",
        },
        {
          score: 1,
          text: "Sirkumstansial; distraktibilitas ringan; berfikir cepat",
          description:
            "Gangguan pikiran ringan, seperti sirkumstansial atau distraktibilitas.",
        },
        {
          score: 2,
          text: "Perhatian mudah teralih, hilangnya tujuan pikiran, sering berganti topik pembicaraan, arus pikiran berlomba",
          description:
            "Perhatian mudah teralih, sering berganti topik, arus pikiran berlomba.",
        },
        {
          score: 3,
          text: "Lompat gagasan, tangensial, pembicaraan sulit diikuti, bersajak, ekolalia",
          description:
            "Lompat gagasan, tangensial, sulit diikuti, bersajak, atau ekolalia.",
        },
        {
          score: 4,
          text: "Inkoheren; komunikasi tidak mungkin dilakukan",
          description: "Inkoheren, komunikasi tidak mungkin dilakukan.",
        },
      ],
    },
    {
      id: 8,
      question: "Isi Pikir",
      options: [
        {
          score: 0,
          text: "Normal",
          description: "Isi pikir dalam batas normal.",
        },
        {
          score: 2,
          text: "Rencana-rencana yang diragukan, minat-minat baru",
          description: "Rencana yang diragukan atau minat baru.",
        },
        {
          score: 4,
          text: "Rancangan-rancangan khusus, perhatian keagamaan berlebihan",
          description: "Rancangan khusus atau perhatian keagamaan berlebihan.",
        },
        {
          score: 6,
          text: "Grandiositas atau ide-ide paranoid; ide-ide rujukan",
          description: "Grandiositas, ide paranoid, atau ide rujukan.",
        },
        {
          score: 8,
          text: "Waham, halusinasi",
          description: "Waham atau halusinasi.",
        },
      ],
    },
    {
      id: 9,
      question: "Perilaku Agresif - Mengganggu",
      options: [
        {
          score: 0,
          text: "Tidak ada, kooperatif",
          description: "Tidak ada perilaku agresif atau mengganggu.",
        },
        {
          score: 2,
          text: "Sarkastik, sekali-sekali berbicara keras, berjaga-jaga",
          description: "Sarkastik, berbicara keras, atau berjaga-jaga.",
        },
        {
          score: 4,
          text: "Menuntut, mengancam di bangsal",
          description: "Menuntut atau mengancam di bangsal.",
        },
        {
          score: 6,
          text: "Mengancam pewawancara, berteriak, sulit diwawancarai",
          description:
            "Mengancam pewawancara, berteriak, atau sulit diwawancarai.",
        },
        {
          score: 8,
          text: "Menyerang, destruktif, wawancara tidak mungkin dilakukan",
          description:
            "Menyerang, destruktif, wawancara tidak mungkin dilakukan.",
        },
      ],
    },
    {
      id: 10,
      question: "Penampilan",
      options: [
        {
          score: 0,
          text: "Berpakaian sesuai dan rapi",
          description: "Penampilan sesuai dan rapi.",
        },
        {
          score: 1,
          text: "Sedikit tidak rapi",
          description: "Penampilan sedikit tidak rapi.",
        },
        {
          score: 2,
          text: "Kurang rapi, agak kusut atau tidak rapi, berpakaian secara berlebihan",
          description: "Penampilan kurang rapi, kusut, atau berlebihan.",
        },
        {
          score: 3,
          text: "Tidak rapi/kusut, berpakaian terbuka, dandanan berkilauan/menor",
          description: "Penampilan tidak rapi, terbuka, atau berkilauan.",
        },
        {
          score: 4,
          text: "Sangat kusut, mencolok, penuh hiasan, pakaian aneh",
          description: "Penampilan sangat kusut, mencolok, atau aneh.",
        },
      ],
    },
    {
      id: 11,
      question: "Tilikan",
      options: [
        {
          score: 0,
          text: "Baik, mengakui sakit, menyetujui perlunya pengobatan",
          description: "Tilikan baik, mengakui sakit dan perlunya pengobatan.",
        },
        {
          score: 1,
          text: "Mengakui bahwa dirinya kemungkinan sakit",
          description: "Mengakui kemungkinan sakit.",
        },
        {
          score: 2,
          text: "Mengakui adanya perubahan perilaku tetapi menyangkal sakit",
          description: "Mengakui perubahan perilaku tetapi menyangkal sakit.",
        },
        {
          score: 3,
          text: "Mengakui kemungkinan ada perubahan perilaku tetapi menyangkal sakit",
          description:
            "Mengakui kemungkinan perubahan perilaku tetapi menyangkal sakit.",
        },
        {
          score: 4,
          text: "Menyangkal setiap perubahan perilaku",
          description: "Menyangkal setiap perubahan perilaku.",
        },
      ],
    },
  ],
  severityLevels: [
    { minScore: 0, maxScore: 12, level: "Not likely or minimal severity" },
    { minScore: 13, maxScore: 20, level: "Minimal severity" },
    { minScore: 21, maxScore: 26, level: "Mild severity" },
    { minScore: 27, maxScore: 38, level: "Moderate illness" },
    { minScore: 39, maxScore: Infinity, level: "Very severe illness" },
  ],
};
