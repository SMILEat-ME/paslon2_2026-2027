export interface Candidate {
  id: string;
  name: string;
  role: string;
  age: number;
  grade: string;
  bio: string;
  tags: string[];
  experience: string;
  image: string;
  imageAlt: string;
  windowTitle: string;
  isPinkHeader?: boolean;
}

export interface ProgramKerja {
  id: string;
  title: string;
  tagline: string;
  description: string;
  windowTitle: string;
  isPinkHeader?: boolean;
}

export const siteConfig = {
  title: "Born 02 Lead — Calon Ketua & Wakil Ketua OSIS HS Pewaris Bangsa 2026-2027",
  description: "Website resmi kampanye Paslon 02 Jeanne Felicia Angelique & Raden Nadya Herawati Asmara (Eden) untuk Pemilihan Ketua & Wakil Ketua OSIS Homeschooling Pewaris Bangsa 2026-2027.",
  period: "2026-2027",
  school: "Homeschooling Pewaris Bangsa",
  slogan: "Born 02 Lead",
  subSlogan: "OSIS Homeschooling Pewaris Bangsa yang aspiratif, kolaboratif, dan inovatif.",
  marqueeText: "✦ PEMILIHAN OSIS 2026-2027 ✦ HOMESCHOOLING PEWARIS BANGSA ✦ BORN 02 LEAD ✦ SUARAMU PENTING ✦ PEMILIHAN OSIS 2026-2027 ✦ HOMESCHOOLING PEWARIS BANGSA ✦ BORN 02 LEAD ✦ SUARAMU PENTING ✦ PEMILIHAN OSIS 2026-2027 ✦ HOMESCHOOLING PEWARIS BANGSA ✦ BORN 02 LEAD ✦ SUARAMU PENTING ✦ PEMILIHAN OSIS 2026-2027 ✦ HOMESCHOOLING PEWARIS BANGSA ✦ BORN 02 LEAD ✦ SUARAMU PENTING ✦",
  heroImage: {
    src: "/media/duo.webp",
    alt: "Jeanne Felicia Angelique dan Raden Nadya Herawati Asmara (Eden) - Paslon 02",
    windowTitle: "paslon_02.png",
    sticker: "pilih nomor 02!"
  },
  video: {
    src: "/media/video-kampanye.mp4",
    poster: "/media/video-poster.jpg",
    windowTitle: "video_kampanye_paslon_2.mp4"
  }
};

export const candidates: Candidate[] = [
  {
    id: "jeanne",
    name: "Jeanne Felicia Angelique",
    role: "Calon Ketua OSIS",
    age: 16,
    grade: "11 IPS",
    bio: "Halo semua! Saya Jeanne, berusia 16 tahun. Saya menduduki kelas 11 IPS. Saya memiliki ketertarikan di bidang teknologi, desain grafis & sastra.",
    tags: ["teknologi", "desain grafis", "sastra"],
    experience: "Wakil ketua divisi KOMSOS OSIS (Des 2025 - Jul 2026) dan Ketua divisi KOMSOS OSIS (Juli 2026 - Nov 2026).",
    image: "/media/jeanne.webp",
    imageAlt: "Jeanne Felicia Angelique",
    windowTitle: "jeanne.exe",
    isPinkHeader: false
  },
  {
    id: "eden",
    name: "Raden Nadya Herawati Asmara (Eden)",
    role: "Calon Wakil Ketua OSIS",
    age: 18,
    grade: "11 IPS",
    bio: "Halo semua! Saya Eden, berusia 18 tahun. Saya menduduki kelas 11 IPS. Saya memiliki ketertarikan di bidang sosiologi, geografi, & seni budaya.",
    tags: ["sosiologi", "geografi", "seni budaya"],
    experience: "Ketua divisi Art & Sports (2025-2026).",
    image: "/media/eden.webp",
    imageAlt: "Raden Nadya Herawati Asmara (Eden)",
    windowTitle: "eden.exe",
    isPinkHeader: true
  }
];

export const visi = "Mewujudkan OSIS Homeschooling Pewaris Bangsa yang aspiratif, kolaboratif, dan inovatif sebagai wadah bagi siswa untuk berkembang, berkarya, serta membangun lingkungan belajar yang aktif, inklusif, dan menyenangkan.";

export const misi = [
  {
    number: 1,
    title: "misi_1",
    isPink: false,
    text: "Meningkatkan partisipasi siswa dengan menyediakan ruang bagi seluruh siswa untuk menyampaikan aspirasi, ide, dan usulan kegiatan yang dapat direalisasikan bersama OSIS."
  },
  {
    number: 2,
    title: "misi_2",
    isPink: true,
    text: "Mendorong gaya hidup sehat dan kebersamaan melalui kegiatan yang mendukung kebugaran jasmani serta mempererat hubungan antarsiswa. Selain kesehatan, mengembangkan potensi dan sportivitas siswa melalui kegiatan kompetitif yang positif juga penting, termasuk kompetisi antarkelas yang mendorong kerja sama tim dan sikap saling menghargai."
  },
  {
    number: 3,
    title: "misi_3",
    isPink: true,
    text: "Memfasilitasi pengembangan keterampilan dan kreativitas melalui kegiatan edukatif dan praktik secara berkala yang memberikan kesempatan kepada siswa untuk mempelajari hal-hal baru di luar pembelajaran akademik."
  },
  {
    number: 4,
    title: "misi_4",
    isPink: false,
    text: "Membangun OSIS yang responsif dan bertanggung jawab dengan mengutamakan komunikasi yang terbuka, pelaksanaan program kerja yang terencana, serta evaluasi berkala terhadap kegiatan yang diselenggarakan."
  }
];

export const proker: ProgramKerja[] = [
  {
    id: "you_name_it",
    title: "You Name It, We Make It",
    tagline: "Ide kamu, kami wujudkan.",
    windowTitle: "you_name_it.exe",
    isPinkHeader: false,
    description: "Program yang memberikan kesempatan kepada seluruh siswa untuk menyampaikan ide, aspirasi, dan usulan kegiatan yang menarik, kreatif, serta bermanfaat bagi lingkungan sekolah. Melalui program ini, siswa dapat berpartisipasi secara aktif dalam menentukan kegiatan yang ingin diselenggarakan, baik melalui formulir aspirasi maupun media komunikasi yang disediakan oleh OSIS. Setiap usulan akan ditinjau berdasarkan minat siswa, manfaat kegiatan, serta ketersediaan sumber daya dan anggaran. OSIS kemudian akan mengupayakan realisasi ide-ide terpilih melalui perencanaan dan pelaksanaan kegiatan yang melibatkan siswa. Dengan demikian, program ini diharapkan dapat menciptakan lingkungan sekolah yang lebih partisipatif, inovatif, dan sesuai dengan kebutuhan serta minat para siswa."
  },
  {
    id: "miles_smiles",
    title: "Miles & Smiles",
    tagline: "Jogging bareng, makin kompak.",
    windowTitle: "miles_smiles.exe",
    isPinkHeader: true,
    description: "Program kegiatan olahraga bersama yang bertujuan untuk meningkatkan kebugaran jasmani sekaligus mempererat hubungan antarsiswa. Kegiatan ini akan dilaksanakan dalam bentuk jogging atau jalan santai bersama dengan mempertimbangkan kondisi fisik, kenyamanan, dan kemampuan masing-masing peserta. Selain menjadi sarana untuk menerapkan pola hidup sehat, program ini juga diharapkan dapat membangun interaksi sosial yang positif, meningkatkan rasa kebersamaan, serta menciptakan suasana sekolah yang lebih inklusif dan menyenangkan. Pelaksanaan kegiatan akan disesuaikan dengan ketersediaan waktu dan lokasi yang aman serta mudah dijangkau oleh siswa."
  },
  {
    id: "clash_of_classes",
    title: "Clash of Classes",
    tagline: "Esports antarkelas: Roblox & Mobile Legends.",
    windowTitle: "clash_of_classes.exe",
    isPinkHeader: true,
    description: "Program kompetisi esports antarkelas yang bertujuan untuk menyediakan wadah bagi siswa dalam menyalurkan minat dan bakat di bidang permainan digital secara positif, kompetitif, dan bertanggung jawab. Kompetisi ini direncanakan mencakup permainan populer seperti Roblox dan Mobile Legends, dengan format pertandingan yang disesuaikan dengan jumlah peserta serta minat siswa. Melalui kegiatan ini, siswa diharapkan dapat mengembangkan kemampuan kerja sama tim, komunikasi, strategi, sportivitas, dan sikap saling menghargai. Pelaksanaan kompetisi akan dilengkapi dengan peraturan yang jelas, sistem pertandingan yang terorganisasi, serta pengawasan yang diperlukan agar kegiatan berlangsung secara tertib, adil, dan menyenangkan bagi seluruh peserta."
  },
  {
    id: "bits_to_bliss",
    title: "Bits to Bliss",
    tagline: "Workshop kreatif tiap 1-2 bulan.",
    windowTitle: "bits_to_bliss.exe",
    isPinkHeader: false,
    description: "Program pengembangan keterampilan dan kreativitas siswa yang dilaksanakan secara berkala, dengan frekuensi sekitar satu hingga dua bulan sekali. Program ini akan menghadirkan kegiatan berupa lokakarya (workshop), webinar, atau sesi praktik yang memungkinkan siswa mempelajari keterampilan baru maupun mengembangkan kemampuan yang telah dimiliki. Topik kegiatan dapat mencakup berbagai bidang, seperti upcycling pakaian, pembuatan kerajinan clay, melukis, merajut, serta keterampilan kreatif dan praktis lainnya. Materi akan disesuaikan dengan minat siswa, ketersediaan narasumber, dan sumber daya yang dimiliki. Melalui program ini, siswa diharapkan dapat memperoleh pengalaman belajar yang aplikatif di luar pembelajaran akademik, mengeksplorasi potensi diri, serta menghasilkan karya yang dapat dibanggakan. Program ini juga diharapkan dapat mendorong budaya belajar sepanjang hayat, kreativitas, dan keberanian untuk mencoba hal-hal baru."
  }
];
