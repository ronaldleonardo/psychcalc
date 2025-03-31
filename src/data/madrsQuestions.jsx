export const madrsQuestions = {
  icon: "😔",
  colorScheme: {
    primary: "#73b7b7", // Light Blue
    secondary: "##3b6a6a;", // Dark Blue
  },
  questions: [
    {
      id: 1,
      question: "Kesedihan yang Tampak",
      description:
        "Memperlihatkan rasa tidak ada harapan, murung, dan putus asa, (lebih dari sekedar kehilangan semangat biasa yang bersifat sementara) yang tampak pada cara bicara, ekspresi wajah, dan postur. Nilailah berdasarkan beratnya kesedihan dan ketidakmampuan untuk kembali ceria",
      options: [
        {
          score: 0,
          text: "Tidak tampak sedih",
        },
        {
          score: 2,
          text: "Tampak kurang bersemangat namun dapat menjadi ceria kembali tanpa kesulitan",
        },
        {
          score: 4,
          text: "Tampak sedih dan kurang bahagia hampir setiap saat",
        },
        {
          score: 6,
          text: "Tampak tidak bahagia sepanjang waktu. Benar-benar patah semangat",
        },
      ],
    },
    {
      id: 2,
      question: "Kesedihan yang Dilaporkan",
      description:
        "Melaporkan suasana hati depresi, baik yang tercermin dalam penampilan maupun tidak.  Termasuk di dalamnya rasa kurang semangat, tidak ada harapan, atau merasa tidak dapat ditolong dan tidak ada harapan. Nilailah menurut intensitas, durasi, dan seberapa besar suasana hati dapat dipengaruhi oleh kejadian tertentu",
      options: [
        {
          score: 0,
          text: "Kadang-kadang sedih saat menghadapi keadaan sekitar",
        },
        {
          score: 2,
          text: "Rasa sedih atau kurang bersemangat namun dapat kembali ceria tanpa kesulitan",
        },
        {
          score: 4,
          text: "Perasaan sedih atau murung yang terus-menerus. Suasana hati masih dipengaruhi oleh keadaan sekitar",
        },
        {
          score: 6,
          text: "Kesedihan berlanjut atau tidak berubah-rubah, menderita atau tidak bersemangat",
        },
      ],
    },
    {
      id: 3,
      question: "Ketegangan Batin",
      description:
        "Memperlihatkan perasaan tidak nyaman yang samar-samar, mudah tersinggung, pergolakan batin, ketegangan mental yang mencapai panik, ketakutan atau kesedihan mendalam. Nilailah sesuai intensitas, frekuensi, durasi dan besarnya dukungan yang diperlukan",
      options: [
        {
          score: 0,
          text: "Tenang. Hanya ketegangan batin sesaat",
        },
        {
          score: 2,
          text: "Kadang-kadang muncul perasaan mudah tersinggung dan ketidaknyamanan yang samar-samar",
        },
        {
          score: 4,
          text: "Ketegangan yang terus-menerus atau panik yang terkadang muncul yang dapat diatasi pasien meskipun ada kesulitan",
        },
        {
          score: 6,
          text: "Ketakutan atau penderitaan berlanjut. Kepanikan yang sangat kuat",
        },
      ],
    },
    {
      id: 4,
      question: "Berkurangnya Tidur",
      description:
        "Menunjukkan pengalaman tidur yang berkurang baik dalam lamanya maupun kedalaman  tidur, dibandingkan dengan pola tidur normal subjek saat sehat",
      options: [
        {
          score: 0,
          text: "Tidur seperti biasa",
        },
        {
          score: 2,
          text: "Sedikit kesulitan untuk tertidur atau tidur yang sedikit berkurang, dangkal, atau sering terbangun",
        },
        {
          score: 4,
          text: "Tidur berkurang atau terputus selama sedikitnya dua jam",
        },
        {
          score: 6,
          text: "Tidur kurang dari dua atau tiga jam",
        },
      ],
    },
    {
      id: 5,
      question: "Berkurangnya Nafsu Makan",
      description:
        "Menunjukkan perasaan tentang hilangnya nafsu makan dibandingkan dengan saat sehat. Nilailah sesuai dengan hilangnya keinginan untuk makan atau perlunya memaksa diri untuk makan",
      options: [
        {
          score: 0,
          text: "Nafsu makan normal atau meningkat",
        },
        {
          score: 2,
          text: "Nafsu makan sedikit berkurang",
        },
        {
          score: 4,
          text: "Tidak ada nafsu makan. Makanan terasa hambar",
        },
        {
          score: 6,
          text: "Perlu bujukan agar mau makan",
        },
      ],
    },
    {
      id: 6,
      question: "Kesulitan Konsentrasi",
      description:
        "Memperlihatkan kesulitan  dalam menyatukan pikiran, sehingga terjadi penurunan  konsentrasi.  Nilailah sesuai dengan intensitas, frekuensi, dan derajat hendaya yang dihasilkan",
      options: [
        {
          score: 0,
          text: "Tidak ada kesulitan dalam berkonsentrasi",
        },
        {
          score: 2,
          text: "Terkadang sulit menyatukan pikiran",
        },
        {
          score: 4,
          text: "Kesulitan dalam berkonsentrasi dan mempertahankan pikiran, sehingga mengurangi kemampuan membaca atau mempertahankan pembicaraan",
        },
        {
          score: 6,
          text: "Tidak dapat membaca atau bercakap-cakap tanpa kesulitan besar",
        },
      ],
    },
    {
      id: 7,
      question: "Kelesuan",
      description:
        "Merasakan adanya kesulitan untuk memulai atau lambat untuk memulai dan melakukan aktivitas sehari-hari",

      options: [
        {
          score: 0,
          text: "Hampir tidak ada kesulitan saat memulai sesuatu. Tidak lambat",
        },
        {
          score: 2,
          text: "Kesulitan dalam memulai aktivitas-aktivitas",
        },
        {
          score: 4,
          text: "Kesulitan dalam memulai aktivitas-aktivitas rutin sederhana, yang dilakukan dengan upaya besar",
        },
        {
          score: 6,
          text: "Benar-benar lesu. Tidak dapat melakukan apa pun tanpa bantuan",
        },
      ],
    },
    {
      id: 8,
      question: "Ketidakmampuan Untuk Merasakan",
      description:
        "Menggambarkan pengalaman subjektif tentang berkurangnya minat terhadap lingkungan sekitar, atau aktivitas yang biasanya memberikan kesenangan.  Berkurangnya kemampuan untuk bereaksi dengan emosi yang memadai terhadap keadaan sekitar atau orang lain",
      options: [
        {
          score: 0,
          text: "Minat normal terhadap lingkungan sekitar dan pada orang lain",
        },
        {
          score: 2,
          text: "Berkurangnya kemampuan untuk menikmati minat sehari-hari",
        },
        {
          score: 4,
          text: "Hilangnya minat terhadap lingkungan sekitar. Hilangnya perasaan terhadap teman dan kenalan-kenalan",
        },
        {
          score: 6,
          text: "Pengalaman menjadi lumpuh secara emosional, tidak dapat merasakan rasa marah, sedih atau senang dan gagal total atau malah gagal untuk ikut merasakan perasaan saudara dekat dan teman akrab",
        },
      ],
    },
    {
      id: 9,
      question: "Pikiran-Pikiran Pesimis",
      description:
        "Menggambarkan pikiran bersalah, rendah diri, menyalahkan diri sendiri, penuh dosa, penyesalan dan merasa hancur berantakan",
      options: [
        {
          score: 0,
          text: "Tidak ada pikiran pesimis",
        },
        {
          score: 2,
          text: "Ide-ide tentang kegagalan yang berfluktuasi, atau menyalahkan diri sendiri, atau merasa diri kurang berharga",
        },
        {
          score: 4,
          text: "Tuduhan terhadap diri sendiri yang menetap, atau gagasan-gagasan yang pasti tapi masih rasional tentang kesalahan atau dosa. Meningkatnya rasa pesimis tentang masa depan",
        },
        {
          score: 6,
          text: "Waham mengenai kehancuran, penyesalan atau dosa yang tidak dapat diampuni. Menuduh diri sendiri dengan tuduhan yang tidak masuk akal dan tidak dapat digoyahkan",
        },
      ],
    },
    {
      id: 10,
      question: "Pikiran-Pikiran Bunuh Diri",
      description:
        "Menggambarkan perasaan bahwa hidup tidak berharga, bahwa kematian lebih baik, pikiran-pikiran ingin bunuh diri, dan persiapan-persiapan untuk bunuh diri. Percobaan-percobaan bunuh diri tidak boleh memengaruhi penilaian",
      options: [
        {
          score: 0,
          text: "Menikmati hidup atau menikmati apa adanya",
        },
        {
          score: 2,
          text: "Bosan hidup. Hanya pikiran-pikiran bunuh diri sesaat",
        },
        {
          score: 4,
          text: "Mungkin lebih baik mati. Pikiran-pikiran bunuh diri sering terjadi dan bunuh diri dianggap sebagai solusi yang baik, namun tanpa perencanaan atau niat khusus",
        },
        {
          score: 6,
          text: "Rencana-rencana terang-terangan untuk bunuh diri bilamana ada kesempatan. Persiapan-persiapan aktif untuk bunuh diri",
        },
      ],
    },
  ],
  severityLevels: [
    { minScore: 0, maxScore: 8, level: "Depressive symptoms absent" },
    { minScore: 9, maxScore: 17, level: "Mild Depression" },
    { minScore: 18, maxScore: 34, level: "Moderate Depression" },
    { minScore: 35, maxScore: Infinity, level: "Severe Depression" },
  ],
};
