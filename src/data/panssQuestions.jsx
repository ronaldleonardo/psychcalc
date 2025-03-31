// src/data.js
export const panssQuestions = {
  icon: "😮",
  colorScheme: {
    primary: "#262626b8", // grey
    secondary: "#262626",
  },
  questions: [
    {
      id: 1,
      tab: "panss-remisi",
      tag: "positif",
      question: "P1. WAHAM",
      description:
        "Keyakinan yang tidak mempunyai dasar, tidak realistik, dan aneh (idiosinkratik). Dasar penilaian: Isi pikiran yang diekspresikan dalam wawancara dan pengaruhnya terhadap relasi dan perilaku.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Ada satu atau dua waham yang samar-samar, tidak terkristalisasi, dan tidak bertahan. Waham tidak mempengaruhi proses pikir, relasi sosial, atau perilaku.",
        },
        {
          score: 4,
          text: "Sedang — Adanya rangkaian waham yang bentuknya kurang jelas dan tidak stabil atau beberapa waham yang bentuknya jelas, yang kadang-kadang mempengaruhi proses pikir, relasi sosial, atau perilaku.",
        },
        {
          score: 5,
          text: "Agak berat — Adanya beberapa waham yang berbentuk jelas, yang dipertahankan dan kadang-kadang mempengaruhi proses pikir, relasi sosial, atau perilaku.",
        },
        {
          score: 6,
          text: "Berat — Adanya suatu susunan waham yang stabil, yang terkristalisasi, mungkin sistematik, dipertahankan, dan jelas mempengaruhi proses pikir, relasi sosial, atau perilaku.",
        },
        {
          score: 7,
          text: "Sangat berat — Adanya suatu susunan waham yang stabil, sangat sistematik, atau sangat banyak, dan yang mendominasi bidang (facet) utama kehidupan pasien. Sering kali mengakibatkan tindakan yang tidak serasi dan tidak bertanggung jawab, yang bahkan membahayakan keamanan pasien atau orang lain.",
        },
      ],
    },
    {
      id: 2,
      tab: "panss-remisi",
      tag: "positif",
      question: "P2. KEKACAUAN PROSES PIKIR (CONCEPTUAL DISORGANIZATION)",
      description:
        "Kekacauan proses pikir ditandai oleh putusnya tahapan penyampaian maksud, misalnya sirkumstansial, tangensial, asosiasi longgar, tidak berurutan, ketidaklogisan yang parah, atau putusnya arus pikir. Dasar penilaian: Proses pikir kognitif verbal yang diamati selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Proses pikir sirkumstansial, tangensial, atau paralogikal. Adanya kesulitan dalam mengarahkan pikiran ke tujuan dan kadang-kadang asosiasi longgar dapat dijumpai di bawah tekanan.",
        },
        {
          score: 4,
          text: "Sedang — Mampu memusatkan pikiran bila komunikasi singkat dan terstruktur, tetapi menjadi longgar atau tidak relevan bila menghadapi komunikasi yang lebih kompleks atau bila di bawah tekanan minimal.",
        },
        {
          score: 5,
          text: "Agak berat — Secara umum mengalami kesulitan dalam menata pikiran yang terbukti dalam bentuk sering tidak relevan, tidak ada hubungan, atau asosiasi longgar bahkan walaupun tanpa tekanan.",
        },
        {
          score: 6,
          text: "Berat — Proses pikir (thinking) sangat menyimpang dan pada dasarnya (internally) tidak konsisten, mengakibatkan tidak relevan yang parah dan kacau proses pikir, yang hampir terjadi terus menerus.",
        },
        {
          score: 7,
          text: "Sangat berat — Pikiran (thought) sangat kacau sehingga menjadi inkoheren. Asosiasi longgar yang sangat jelas, yang mengakibatkan kegagalan total dalam komunikasi, misalnya: “word-salad” atau mutisme.",
        },
      ],
    },
    {
      id: 3,
      tab: "panss-remisi",
      tag: "positif",
      question: "P3. PERILAKU HALUSINASI",
      description:
        "Laporan secara verbal atau perilaku yang menunjukkan persepsi yang tidak dirangsang oleh stimuli luar. Dapat terjadi halusinasi pendengaran, penglihatan, penciuman, atau somatik. Dasar penilaian: Laporan verbal dan manifestasi fisik selama wawancara, dan juga perilaku yang dilaporkan oleh perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Satu atau dua halusinasi yang jelas tetapi jarang timbul, atau beberapa abnormalisasi persepsi yang samar-samar lainnya yang tidak mengakibatkan penyimpangan (distorsi) proses pikir atau perilaku.",
        },
        {
          score: 4,
          text: "Sedang — Sering ada halusinasi tetapi tidak terus menerus, dan proses pikir serta perilaku pasien hanya sedikit terpengaruh.",
        },
        {
          score: 5,
          text: "Agak berat — Halusinasi sering, dapat meliputi lebih dari satu organ sensoris dan cenderung menyimpangkan proses pikir dan/atau mengacaukan perilaku. Pasien dapat memiliki interpretasi bersifat waham atas pengalamannya ini dan bereaksi terhadapnya secara emosional, serta kadang-kadang secara verbal.",
        },
        {
          score: 6,
          text: "Berat — Halusinasi hampir terus menerus ada, mengakibatkan kekacauan berat pada proses pikir dan perilaku. Pasien menganggapnya sebagai persepsi nyata dan fungsinya terganggu oleh seringnya bereaksi secara emosional dan verbal terhadapnya.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien hampir secara total mengalami preokupasi dengan halusinasi, yang jelas mendominasi proses pikir dan perilaku. Halusinasi diikuti oleh interpretasi bersifat waham yang kaku dan memacu timbulnya respons verbal dan perilaku, termasuk kepatuhan terhadap halusinasi perintah.",
        },
      ],
    },
    {
      id: 4,
      tab: "panss-ec",
      tag: "positif",
      question: "P4. GADUH GELISAH (EXCITEMENT)",
      description:
        "Hiperaktivitas perilaku, labilitas alam perasaan (mood), dan respons berlebihan terhadap stimuli yang diterima selama wawancara, juga waspada berlebihan (hypervigilance). Dasar penilaian: Manifestasi motorik, alam perasaan, dan perilaku yang diamati selama wawancara, serta laporan dari perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Cenderung sedikit terangsang (overaroused) atau gelisah, labilitas alam perasaan, waspada berlebihan, atau sedikit agitasi selama wawancara, tetapi tanpa episode yang mencolok.",
        },
        {
          score: 4,
          text: "Sedang — Agitasi yang jelas atau mudah terangsang selama wawancara, mungkin sedikit mempengaruhi pembicaraan atau mobilitas.",
        },
        {
          score: 5,
          text: "Agak berat — Tampak hiperaktif, episodik ledakan-ledakan terjadi secara sporadik.",
        },
        {
          score: 6,
          text: "Berat — Gaduh gelisah yang mencolok sehingga mempengaruhi fungsi sehari-hari seperti makan, tidur, dan kegiatan interpersonal.",
        },
        {
          score: 7,
          text: "Sangat berat — Gaduh gelisah yang jelas mencolok, tidak memungkinkan interaksi dan dapat menimbulkan inkoherensi serta kelelahan.",
        },
      ],
    },
    {
      id: 5,
      tab: "total",
      tag: "positif",
      question: "P5. WAHAM KEBESARAN",
      description:
        "Keyakinan yang tidak realistik tentang diri sendiri, termasuk kekayaan, pengetahuan, kemashyuran, kekuasaan, atau kemampuan moral yang luar biasa. Dasar penilaian: Isi pikiran yang diekspresikan selama wawancara dan pengaruhnya terhadap perilaku.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Terdapat luapan-luapan atau kesombongan tetapi tanpa waham kebesaran yang jelas.",
        },
        {
          score: 4,
          text: "Sedang — Terdapat waham yang berbentuk jelas tetapi tidak bertindak sesuai, tentang kekhususan status diri, kemampuan, kekuasaan, dll.",
        },
        {
          score: 5,
          text: "Agak berat — Waham-waham jelas dan diekspresikan, tetapi tidak mempengaruhi sikap atau perilaku.",
        },
        {
          score: 6,
          text: "Berat — Waham-waham jelas yang mempengaruhi interaksi, khususnya meliputi lebih dari satu parameter (kekayaan, pengetahuan, kemashyuran, kekuasaan, dll).",
        },
        {
          score: 7,
          text: "Sangat berat — Proses pikir, interaksi, dan perilaku didominasi oleh waham kebesaran yang aneh (bizarre).",
        },
      ],
    },
    {
      id: 6,
      tab: "total",
      tag: "positif",
      question: "P6. KECURIGAAN/KEJARAN",
      description:
        "Ide-ide kejaran, kecurigaan, atau sikap tidak percaya yang tidak jelas, tidak realistis, atau berlebihan. Dasar penilaian: Isi pikiran yang diekspresikan dalam wawancara dan pengaruhnya terhadap perilaku.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Adanya sikap berjaga-jaga atau bahkan sikap tidak percaya yang samar-samar.",
        },
        {
          score: 4,
          text: "Sedang — Terdapat pikiran, perilaku, atau interaksi yang tampaknya dipengaruhi oleh kecurigaan atau kejaran, tetapi tidak jelas.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien memperlihatkan ketidakpercayaan yang mencolok, atau jelas ada waham kejaran yang sedikit berdampak terhadap relasi interpersonal dan perilaku.",
        },
        {
          score: 6,
          text: "Berat — Waham-waham kejaran pervasif yang nyata, yang mungkin sistematik dan secara bermakna mempengaruhi relasi interpersonal.",
        },
        {
          score: 7,
          text: "Sangat berat — Rangkaian waham-waham kejaran yang sistematik mendominasi proses pikir pasien, relasi sosial, dan perilaku.",
        },
      ],
    },
    {
      id: 7,
      tab: "panss-ec",
      tag: "positif",
      question: "P7. PERMUSUHAN",
      description:
        "Ekspresi verbal dan nonverbal tentang kemarahan dan kebencian, termasuk sarkasme, caci maki, dan penyerangan. Dasar penilaian: Perilaku interpersonal yang diamati selama wawancara dan laporan oleh perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Melampiaskan kemarahan secara tidak langsung atau ditahan, seperti sarkasme, sikap tidak sopan, ekspresi bermusuhan, dan kadang-kadang iritabilitas.",
        },
        {
          score: 4,
          text: "Sedang — Adanya sikap bermusuhan yang nyata, sering memperlihatkan iritabilitas dan ekspresi kemarahan atau kebencian yang langsung.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien sangat mudah marah dan kadang-kadang memaki dengan kata-kata kasar atau mengancam.",
        },
        {
          score: 6,
          text: "Berat — Tidak kooperatif dan mencaci maki dengan kasar atau mengancam, khususnya mempengaruhi wawancara, dan berdampak serius terhadap relasi sosial. Pasien dapat beringas dan merusak tetapi tidak menyerang orang lain secara fisik.",
        },
        {
          score: 7,
          text: "Sangat berat — Kemarahan yang hebat sangat berakibat tidak kooperatif, menghalangi interaksi, atau secara episodik melakukan penyerangan fisik terhadap orang lain.",
        },
      ],
    },
    {
      id: 8,
      tab: "panss-remisi",
      tag: "negatif",
      question: "N1. AFEK TUMPUL",
      description:
        "Berkurangnya respons emosional yang ditandai oleh berkurangnya ekspresi wajah, gelombang (modulation) perasaan, dan gerak-gerik komunikatif. Dasar penilaian: Observasi manifestasi fisik suasana afek dan respons emosional selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologis diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Perubahan ekspresi wajah dan gerak-gerik komunikatif tampak kaku, dipaksakan, dibuat-buat, atau kurangnya gelombang.",
        },
        {
          score: 4,
          text: "Sedang — Berkurangnya corak ekspresi wajah dan sedikitnya gerak-gerik ekspresif yang tampak dalam penampilan yang tumpul (dull).",
        },
        {
          score: 5,
          text: "Agak berat — Afek umumnya datar, hanya sekali-kali tampak perubahan ekspresi wajah dan gerak-gerik komunikatif sedikit.",
        },
        {
          score: 6,
          text: "Berat — Pendataran dan defisiensi emosi yang mencolok yang tampak hampir sepanjang waktu. Kemungkinan terdapat pelepasan afek ekstrim yang tidak bergelombang seperti ‘excitement’, kemarahan, atau tertawa yang tidak terkendali yang tidak serasi.",
        },
        {
          score: 7,
          text: "Sangat berat — Jelas tidak tampak ekspresi perubahan wajah dan adanya gerak-gerik komunikatif. Pasien terus-menerus menampakkan ekspresi yang ‘tidak hidup’ atau berwajah 'kayu'.",
        },
      ],
    },
    {
      id: 9,
      tab: "total",
      tag: "negatif",
      question: "N2. PENARIKAN EMOSIONAL (EMOTIONAL WITHDRAWAL)",
      description:
        "Berkurangnya minat dan keterlibatan, serta curahan perasaan terhadap peristiwa kehidupan. Dasar penilaian: Laporan-laporan tentang fungsi dari perawat atau keluarga dan observasi perilaku interpersonal selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Biasanya kurang inisiatif dan sekali-kali mungkin menunjukkan minat yang kurang terhadap peristiwa-peristiwa di sekitarnya.",
        },
        {
          score: 4,
          text: "Sedang — Pasien umumnya mengambil jarak emosional dengan lingkungannya, tetapi masih dapat dilibatkan dengan usaha.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien secara nyata memutuskan kontak emosional dengan orang lain, tampak mengambil jarak, patuh, dan tanpa tujuan.",
        },
        {
          score: 6,
          text: "Berat — Berkurangnya minat dan keterlibatan emosional secara mencolok, mengakibatkan pasien mengabaikan kebutuhan pribadi dan perawatan diri.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien hampir sepenuhnya menarik diri dari lingkungan, mengabaikan kebutuhan pribadi, dan memerlukan bantuan.",
        },
      ],
    },
    {
      id: 10,
      tab: "total",
      tag: "negatif",
      question: "N3. KEMISKINAN RAPPORT",
      description:
        "Berkurangnya keakraban, empati, dan keterbukaan dalam komunikasi interpersonal. Dasar penilaian: Perilaku interpersonal selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Percakapan ditandai dengan kekakuan, ketegangan, atau nada yang dibuat-buat.",
        },
        {
          score: 4,
          text: "Sedang — Pasien tampak cukup menjauhkan diri, menjawab pertanyaan secara mekanis, dan menunjukkan tidak berminat.",
        },
        {
          score: 5,
          text: "Agak berat — Ketidakterlibatan nyata dan jelas menghambat produktivitas wawancara.",
        },
        {
          score: 6,
          text: "Berat — Pasien sangat tidak peduli, jawaban-jawabannya asal ada, dan sedikit bukti keterlibatan nonverbal.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien secara total tidak terlibat dengan pewawancara, tampak sepenuhnya tidak peduli, dan terus-menerus menghindari interaksi verbal dan nonverbal selama wawancara.",
        },
      ],
    },
    {
      id: 11,
      tab: "panss-remisi",
      tag: "negatif",
      question: "N4. PENARIKAN DIRI DARI HUBUNGAN SOSIAL SECARA PASIF/APATIS",
      description:
        "Berkurangnya minat dan inisiatif dalam interaksi sosial, yang disebabkan oleh pasivitas, apatis, anergi, atau tidak ada dorongan kehendak. Dasar penilaian: Laporan perilaku sosial dari perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Sekali-sekali menunjukkan minat dalam aktivitas sosial, tetapi inisiatif sangat kurang.",
        },
        {
          score: 4,
          text: "Sedang — Secara pasif ikut dalam sebagian besar aktivitas sosial tetapi dengan cara ogah-ogahan atau secara mekanis.",
        },
        {
          score: 5,
          text: "Agak berat — Secara pasif berpartisipasi dalam hanya sedikit aktivitas sosial dan menunjukkan jelas tidak ada minat atau inisiatif.",
        },
        {
          score: 6,
          text: "Berat — Cenderung menjadi apatis dan terisolasi, sangat jarang berpartisipasi dalam aktivitas sosial.",
        },
        {
          score: 7,
          text: "Sangat berat — Sangat apatis, terisolasi secara sosial, dan sangat mengabaikan perawatan diri.",
        },
      ],
    },
    {
      id: 12,
      tab: "total",
      tag: "negatif",
      question: "N5. KESULITAN DALAM PEMIKIRAN ABSTRAK",
      description:
        "Hendaya dalam penggunaan cara berpikir abstrak atau simbolik, yang dibuktikan dalam kesulitan mengklarifikasikan, membentuk generalisasi, dan berpikir secara konkrit atau egosentrik dalam memecahkan masalah. Dasar penilaian: Respons terhadap pertanyaan mengenai interpretasi persamaan dan pribahasa, dan penggunaan cara berpikir konkrit vs abstrak selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Cenderung menginterpretasikan secara harafiah atau semaunya sendiri tentang pribahasa yang lebih sulit dan mungkin mendapat kesulitan dengan konsep yang agak abstrak atau yang mirip.",
        },
        {
          score: 4,
          text: "Sedang — Sering menggunakan cara berpikir konkrit. Sulit mengartikan sebagian besar pribahasa dan beberapa pengelompokan.",
        },
        {
          score: 5,
          text: "Agak berat — Berpikir terutama dengan cara konkrit, memperlihatkan kesulitan dalam sebagian besar pribahasa dan banyak pengelompokan.",
        },
        {
          score: 6,
          text: "Berat — Tidak mampu mengartikan pribahasa atau ekspresi figuratif apa pun dan hanya dapat mengelompokkan persamaan yang sangat sederhana.",
        },
        {
          score: 7,
          text: "Sangat berat — Hanya dapat berpikir konkrit. Tidak ada pemahaman pribahasa, persamaan-persamaan, atau kisaran-kisaran yang umum.",
        },
      ],
    },
    {
      id: 13,
      tab: "panss-remisi",
      tag: "negatif",
      question: "N6. KURANGNYA SPONTANITAS DAN ARUS PERCAKAPAN",
      description:
        "Berkurangnya arus normal percakapan yang disertai dengan apatis, avolisi (tidak ada dorongan kehendak), defensif, atau defisit kognitif. Dasar penilaian: Proses kognitif verbal yang dapat diobservasi selama interaksi verbal.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Menunjukkan sedikit inisiatif dalam percakapan. Jawaban pasien cenderung singkat dan tanpa tambahan, membutuhkan pertanyaan langsung dan pengarahan dari wawancara.",
        },
        {
          score: 4,
          text: "Sedang — Arus percakapan kurang bebas dan tidak lancar atau terhenti-henti. Pertanyaan terarah sering dibutuhkan untuk mendapatkan respons yang adekuat untuk melanjutkan percakapan.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien menunjukkan kurangnya spontanitas dan keterbukaan yang mencolok, menjawab pertanyaan pewawancara dengan hanya 1 atau 2 kalimat singkat.",
        },
        {
          score: 6,
          text: "Berat — Respons pasien hanya terbatas terutama pada beberapa kata atau kalimat pendek untuk menghindari atau mempersingkat komunikasi.",
        },
        {
          score: 7,
          text: "Sangat berat — Kata-kata yang diungkapkan sangat terbatas, sekali-sekali ada ungkapan tetapi percakapan tidak mungkin terjadi.",
        },
      ],
    },
    {
      id: 14,
      tab: "total",
      tag: "negatif",
      question: "N7. PEMIKIRAN STEREOTIPIK",
      description:
        "Berkurangnya kelancaran, spontanitas, dan fleksibilitas proses pikir yang terbukti dari kekakuan, pengulangan, atau isi pikir yang miskin. Dasar penilaian: Proses kognitif verbal yang diobservasi selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi diragukan; mungkin suatu ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Adanya kekakuan yang ditunjukkan dalam sikap dan keyakinan. Pasien mungkin menolak untuk mempertimbangkan alternatif atau sulit untuk mengalihkan ke topik baru.",
        },
        {
          score: 4,
          text: "Sedang — Percakapan berkisar tema yang itu-itu saja, yang berakibat kesulitan untuk mengalihkan ke topik baru.",
        },
        {
          score: 5,
          text: "Agak berat — Proses pikir kaku dan berulang-ulang sedemikian rupa sehingga percakapan hanya terbatas pada 2 atau 3 topik yang mendominasi.",
        },
        {
          score: 6,
          text: "Berat — Pengulangan yang tidak terkendali tentang tuntunan-tuntunan, pernyataan-pernyataan, ide-ide, atau pertanyaan-pertanyaan yang sangat mengganggu percakapan.",
        },
        {
          score: 7,
          text: "Sangat berat — Proses pikir, perilaku, dan percakapan didominasi oleh pengulangan yang terus-menerus dari ide yang terpaku atau kalimat-kalimat pendek yang itu-itu saja sehingga komunikasi pasien menjadi sangat kaku, tidak serasi, dan terbatas.",
        },
      ],
    },

    {
      id: 15,
      tab: "total",
      tag: "general",
      question: "G1. KEKHAWATIRAN SOMATIK",
      description:
        "Keluhan-keluhan fisik atau keyakinan tentang penyakit atau malfungsi tubuh. Dasar penilaian: Isi pikiran yang diekspresikan dalam wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Kekhawatiran yang nyata mengenai kesehatan atau hal ikhwal somatik.",
        },
        {
          score: 4,
          text: "Sedang — Keluhan mengenai kesehatan yang buruk atau malfungsi tubuh, tetapi tidak ada keyakinan yang bersifat waham.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien mengekspresikan berbagai keluhan atau sering mengeluh mengenai penyakit fisik atau malfungsi tubuh.",
        },
        {
          score: 6,
          text: "Berat — Pasien berpreokupasi dengan satu atau beberapa waham yang jelas tentang penyakit fisik atau malfungsi organik.",
        },
        {
          score: 7,
          text: "Sangat berat — Waham somatik yang dilaporkan banyak dan sering atau hanya beberapa waham somatik yang parah, yang sepenuhnya mendominasi afek dan pikiran pasien.",
        },
      ],
    },
    {
      id: 16,
      tab: "total",
      tag: "general",
      question: "G2. ANSIETAS",
      description:
        "Pengalaman subyektif tentang kegelisahan, kekhawatiran, ketakutan (apprehension), atau ketidaktenangan. Dasar penilaian: Laporan lisan selama wawancara dan manifestasi fisik yang terkait.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Mengekspresikan kecemasan, kekhawatiran yang berlebihan, atau ketidaktenangan yang bersifat subyektif.",
        },
        {
          score: 4,
          text: "Sedang — Pasien melaporkan gejala yang jelas tentang kegelisahan, yang tercermin dari manifestasi fisik ringan seperti tremor tangan yang halus dan keringat yang berlebihan.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien melaporkan problem serius tentang ansietas yang mempunyai konsekuensi fisik dan perilaku yang bermakna.",
        },
        {
          score: 6,
          text: "Berat — Pernyataan subyektif akan ketakutan yang hampir terus menerus yang disertai fobia, kegelisahan yang mencolok, atau pelbagai manifestasi somatik.",
        },
        {
          score: 7,
          text: "Sangat berat — Kehidupan pasien terganggu berat oleh ansietas, yang terjadi hampir terus menerus dan sewaktu-waktu mencapai derajat panik.",
        },
      ],
    },
    {
      id: 17,
      tab: "total",
      tag: "general",
      question: "G3. RASA BERSALAH",
      description:
        "Rasa penyesalan yang mendalam atau menyalahkan diri sendiri terhadap perbuatan salah atau bayangan kelakuan buruk pada masa lampau. Dasar penilaian: Laporan lisan mengenai perasaan bersalah selama wawancara dan pengaruhnya terhadap sikap dan pikiran.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Pertanyaan-pertanyaan mengungkapkan rasa bersalah yang samar atau menyalahkan diri sendiri untuk kejadian yang sepele.",
        },
        {
          score: 4,
          text: "Sedang — Pasien mengekspresikan rasa khawatir yang jelas atas tanggung jawabnya untuk suatu kejadian nyata dalam kehidupannya.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien mengekspresikan rasa bersalah yang kuat yang disertai dengan mencela diri atau keyakinan bahwa dirinya patut dihukum.",
        },
        {
          score: 6,
          text: "Berat — Ide bersalah kuat yang mempunyai waham dan mengarah pada sikap putus asa atau rasa tidak berharga.",
        },
        {
          score: 7,
          text: "Sangat berat — Kehidupan pasien didominasi oleh waham rasa bersalah yang tidak tergoyahkan.",
        },
      ],
    },
    {
      id: 18,
      tab: "panss-ec",
      tag: "general",
      question: "G4. KETEGANGAN",
      description:
        "Manifestasi fisik yang jelas tentang ketakutan, ansietas, dan agitasi. Dasar penilaian: Laporan lisan membuktikan adanya ansietas dan derajat keparahan manifestasi fisik ketegangan dapat dilihat selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Postur dan gerakan-gerakan menunjukkan kekhawatiran ringan.",
        },
        {
          score: 4,
          text: "Sedang — Suatu penampilan yang nyata-nyata gelisah yang terbukti dari adanya pelbagai manifestasi.",
        },
        {
          score: 5,
          text: "Agak berat — Ketegangan yang berat yang dibuktikan oleh pelbagai manifestasi.",
        },
        {
          score: 6,
          text: "Berat — Ketegangan berat sedemikian rupa sehingga taraf interaksi interpersonal terganggu.",
        },
        {
          score: 7,
          text: "Sangat berat — Ketegangan sangat mencolok yang dimanifestasikan oleh tanda-tanda panik atau percepatan gerakan motorik kasar.",
        },
      ],
    },
    {
      id: 19,
      tab: "panss-remisi",
      tag: "general",
      question: "G5. MANNERISME DAN SIKAP TUBUH",
      description:
        "Gerakan atau sikap tubuh yang tidak wajar seperti yang ditandai oleh kejanggalan, kaku, disorganisasi, atau penampilan yang aneh. Dasar penilaian: Observasi tentang manifestasi fisik selama wawancara dan laporan dari perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Kejanggalan ringan dalam pergerakan atau kekakuan sikap tubuh yang ringan.",
        },
        {
          score: 4,
          text: "Sedang — Gerakan janggal yang khusus atau terputus-putus, atau sikap tubuh tidak wajar yang dipertahankan untuk suatu periode yang singkat.",
        },
        {
          score: 5,
          text: "Agak berat — Sekali-kali tampak ritual aneh, atau sikap tubuh yang berubah-ubah, atau suatu posisi abnormal yang dipertahankan terus menerus untuk waktu yang agak lama.",
        },
        {
          score: 6,
          text: "Berat — Sering tampak pengulangan ritual aneh, manerisme, atau gerakan-gerakan stereotipik.",
        },
        {
          score: 7,
          text: "Sangat berat — Fungsi terganggu berat oleh keterlibatan terus-menerus yang jelas dalam ritual, manerisme, atau gerakan-gerakan stereotipik.",
        },
      ],
    },
    {
      id: 20,
      tab: "total",
      tag: "general",
      question: "G6. DEPRESI",
      description:
        "Perasaan sedih, putus asa, rasa tidak berdaya, dan pasifisme. Dasar penilaian: Laporan lisan tentang perasaan depresi selama wawancara dan pengaruhnya terhadap sikap dan perilaku.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Mengekspresikan kesedihan atau putus asa yang tidak jelas.",
        },
        {
          score: 4,
          text: "Sedang — Perasaan depresi yang nyata, pasifisme, kehilangan minat sosial, retardasi psikomotor, dan sedikit pengaruhnya terhadap nafsu makan dan tidur.",
        },
        {
          score: 5,
          text: "Agak berat — Alam perasaan depresi yang jelas disertai oleh kesedihan, tidak ada harapan, dan rasa tidak berharga.",
        },
        {
          score: 6,
          text: "Berat — Perasaan depresi yang mencolok disertai dengan sering menangis, keluhan-keluhan somatik yang jelas, gangguan konsentrasi, retardasi psikomotor, tidak ada minat sosial, dan mengabaikan diri sendiri.",
        },
        {
          score: 7,
          text: "Sangat berat — Perasaan depresi yang sangat mengganggu sebagian besar fungsi utama.",
        },
      ],
    },
    {
      id: 21,
      tab: "total",
      tag: "general",
      question: "G7. RETARDASI MOTORIK",
      description:
        "Penurunan aktivitas motorik seperti tampak dalam perlambatan atau kurangnya gerakan dan pembicaraan, penurunan respons terhadap stimuli, dan pengurangan tonus tubuh. Dasar penilaian: Manifestasi selama wawancara dan juga laporan perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Pengurangan gerakan dan pembicaraan yang ringan namun nampak.",
        },
        {
          score: 4,
          text: "Sedang — Pasien jelas lambat dalam gerakan, pembicaraan mungkin ditandai oleh kurang produktif.",
        },
        {
          score: 5,
          text: "Agak berat — Pengurangan aktivitas motorik mencolok, mengakibatkan komunikasi sangat tidak produktif.",
        },
        {
          score: 6,
          text: "Berat — Gerakan-gerakan sangat lambat berakibat aktivitas dan pembicaraan yang minim.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien hampir tidak dapat bergerak sama sekali dan benar-benar tidak bereaksi terhadap stimuli dari luar.",
        },
      ],
    },
    {
      id: 22,
      tab: "panss-ec",
      tag: "general",
      question: "G8. KETIDAKKOOPERATIFAN",
      description:
        "Aktif menolak untuk patuh terhadap keinginan tokoh bermakna termasuk pewawancara, staf rumah sakit, atau keluarga. Dasar penilaian: Perilaku selama wawancara dan laporan dari perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Patuh tetapi disertai sikap marah, tidak sabar, atau sarkasme.",
        },
        {
          score: 4,
          text: "Sedang — Kadang-kadang terdapat penolakan langsung untuk patuh terhadap tuntunan-tuntunan sosial yang normal.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien seringkali tidak patuh terhadap tuntutan lingkungannya.",
        },
        {
          score: 6,
          text: "Berat — Pasien sangat tidak kooperatif, negativistik, dan mungkin juga suka melawan.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien menolak sama sekali untuk patuh terhadap tuntunan-tuntunan sosial yang normal.",
        },
      ],
    },
    {
      id: 23,
      tab: "panss-remisi",
      tag: "general",
      question: "G9. ISI PIKIRAN YANG TIDAK BIASA",
      description:
        "Proses pikir ditandai oleh ide-ide yang asing, tidak logis, atau sangat aneh. Dasar penilaian: Isi pikiran yang diekspresikan selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Isi pikiran ganjil atau idiosinkratik.",
        },
        {
          score: 4,
          text: "Sedang — Ide-ide seringkali mengalami distorsi dan sekali-kali cukup bizar.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien banyak mengekspresikan pikiran-pikiran asing dan aneh.",
        },
        {
          score: 6,
          text: "Berat — Proses pikir dipenuhi oleh ide-ide yang tidak masuk akal (absurd).",
        },
        {
          score: 7,
          text: "Sangat berat — Proses pikir dipenuhi oleh ide-ide yang jelas tidak masuk akal atau aneh.",
        },
      ],
    },
    {
      id: 24,
      tab: "total",
      tag: "general",
      question: "G10. DISORIENTASI",
      description:
        "Kurang menyadari diri, tempat, dan waktu. Dasar penilaian: Respons terhadap pertanyaan tentang orientasi.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Orientasi umum adekuat, tetapi ada kesulitan tentang hal-hal yang spesifik.",
        },
        {
          score: 4,
          text: "Sedang — Hanya mengenal sebagian orang, tempat, dan waktu.",
        },
        {
          score: 5,
          text: "Agak berat — Jelas terdapat kegagalan dalam mengenal orang, tempat, dan waktu.",
        },
        {
          score: 6,
          text: "Berat — Kegagalan yang mencolok dalam mengenal orang, tempat, dan waktu.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien tampak mengalami disorientasi menyeluruh tentang orang, tempat, dan waktu.",
        },
      ],
    },
    {
      id: 25,
      tab: "total",
      tag: "general",
      question: "G11. PERHATIAN BURUK",
      description:
        "Gagal dalam memusatkan perhatian yang ditandai oleh konsentrasi yang buruk. Dasar penilaian: Manifestasi-manifestasi selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Konsentrasi terbatas yang dibuktikan dengan sekali-sekali peka terhadap gangguan.",
        },
        {
          score: 4,
          text: "Sedang — Percakapan dipengaruhi oleh kecenderungan untuk mudah teralih.",
        },
        {
          score: 5,
          text: "Agak berat — Percakapan sangat terganggu oleh konsentrasi yang buruk.",
        },
        {
          score: 6,
          text: "Berat — Pasien hanya dapat dikendalikan untuk waktu yang singkat.",
        },
        {
          score: 7,
          text: "Sangat berat — Perhatian sangat terganggu bahkan percakapan yang singkat pun tidak mungkin.",
        },
      ],
    },
    {
      id: 26,
      tab: "total",
      tag: "general",
      question: "G12. KURANGNYA DAYA NILAI DAN TILIKAN",
      description:
        "Hendaya kesadaran (awareness) atau pemahaman atas kondisi psikiatri dan situasi kehidupan dirinya. Dasar penilaian: Isi pikiran yang diekspresikan selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Mengetahui gangguan psikiatrik tetapi dengan jelas meremehkan keseriusannya.",
        },
        {
          score: 4,
          text: "Sedang — Pasien hanya menunjukkan pengenalan yang samar-samar atau dangkal tentang penyakitnya.",
        },
        {
          score: 5,
          text: "Agak berat — Mengakui gangguan psikiatri yang lampau tetapi menyangkal seperti sekarang.",
        },
        {
          score: 6,
          text: "Berat — Pasien menyangkal telah mengalami gangguan psikiatrik.",
        },
        {
          score: 7,
          text: "Sangat berat — Tegas-tegas menyangkal adanya penyakit psikiatrik di masa lampau dan sekarang.",
        },
      ],
    },
    {
      id: 27,
      tab: "total",
      tag: "general",
      question: "G13. GANGGUAN DORONGAN KEHENDAK",
      description:
        "Gangguan dalam dorongan kehendak, makan dan minum, dan pengendalian pikiran, perilaku, gerakan-gerakan, serta pembicaraan. Dasar penilaian: Isi pikiran dan perilaku yang dimanifestasikan selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Terdapat bukti keraguan-raguan dalam percakapan dan berpikir.",
        },
        {
          score: 4,
          text: "Sedang — Pasien seringkali ambivalen dan menunjukkan kesulitan yang nyata dalam mengambil keputusan.",
        },
        {
          score: 5,
          text: "Agak berat — Gangguan dorongan kehendak mempengaruhi proses pikir dan juga perilaku.",
        },
        {
          score: 6,
          text: "Berat — Gangguan dorongan kehendak mempengaruhi pelaksanaan fungsi motorik otomatis yang sederhana.",
        },
        {
          score: 7,
          text: "Sangat berat — Kegagalan kehendak yang hampir menyeluruh yang dimanifestasikan dalam inhibisi nyata pada gerakan dan pembicaraan.",
        },
      ],
    },
    {
      id: 28,
      tab: "panss-ec",
      tag: "general",
      question: "G14. PENGENDALIAN IMPULS YANG BURUK",
      description:
        "Gangguan pengaturan dan pengendalian impuls yang mengakibatkan pelepasan ketegangan dan emosi yang tiba-tiba, tidak teratur, sewenang-wenang, atau tidak terarah tanpa merisaukan konsekuensinya. Dasar penilaian: Perilaku selama wawancara dan yang dilaporkan oleh perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Pasien cenderung mudah marah dan frustrasi bila menghadapi stres.",
        },
        {
          score: 4,
          text: "Sedang — Dengan provokasi yang minimal pasien menjadi marah dan mencaci maki.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien memperlihatkan episode impulsif yang berulang-ulang.",
        },
        {
          score: 6,
          text: "Berat — Pasien sering agresif secara impulsif, mengancam, menuntut, dan merusak.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien memperlihatkan serangan yang dapat membunuh orang, penyerangan seksual, kebrutalan yang berulang, atau perilaku merusak diri sendiri.",
        },
      ],
    },
    {
      id: 29,
      tab: "total",
      tag: "general",
      question: "G15. PREOKUPASI",
      description:
        "Terpaku pada pikiran dan perasaan yang timbul dari dalam diri dan disertai pengalaman autistik. Dasar penilaian: Perilaku interpersonal yang tampak selama wawancara.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Keterlibatan yang berlebihan dalam kebutuhan-kebutuhan atau masalah-masalah pribadi.",
        },
        {
          score: 4,
          text: "Sedang — Pasien sekali-sekali terlihat terpaku sendiri seolah-olah melamun.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien sering terlihat terikat dalam pengalaman autistik.",
        },
        {
          score: 6,
          text: "Berat — Preokupasi yang mencolok dengan pengalaman autistik, yang secara serius membatasi konsentrasi.",
        },
        {
          score: 7,
          text: "Sangat berat — Keterpakuan yang parah dengan pengalaman autistik, yang sangat mempengaruhi seluruh bidang utama perilaku pasien.",
        },
      ],
    },
    {
      id: 30,
      tab: "total",
      tag: "general",
      question: "G16. PENGHINDARAN SOSIAL SECARA AKTIF",
      description:
        "Penurunan keterlibatan sosial yang disertai adanya ketakutan yang tidak beralasan, permusuhan, atau ketidakpercayaan. Dasar penilaian: Laporan fungsi sosial oleh perawat atau keluarga.",
      options: [
        {
          score: 1,
          text: "Tidak ada — Definisi tidak dipenuhi.",
        },
        {
          score: 2,
          text: "Minimal — Patologi meragukan; mungkin pada ujung ekstrim dari batasan normal.",
        },
        {
          score: 3,
          text: "Ringan — Pasien tampak tidak enak dengan kehadiran orang lain dan lebih suka menghabiskan waktu sendirian.",
        },
        {
          score: 4,
          text: "Sedang — Pasien dengan malas mengikuti semua atau sebagian besar aktivitas sosial.",
        },
        {
          score: 5,
          text: "Agak berat — Pasien dengan ketakutan atau marah, menjauhi banyak interaksi sosial.",
        },
        {
          score: 6,
          text: "Berat — Pasien mengambil bagian dalam sangat sedikit aktivitas sosial karena rasa takut, permusuhan, atau tidak percaya.",
        },
        {
          score: 7,
          text: "Sangat berat — Pasien tidak dapat dilibatkan dalam aktivitas sosial karena adanya ketakutan yang hebat.",
        },
      ],
    },
  ],
};
