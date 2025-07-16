import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import project11 from "@/assets/project-11.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";
import project10 from "@/assets/project-10.jpg";
import project6 from "@/assets/project-6.jpg";

const About = () => {
  const experiences = [
    {
      title: "BEM FT 2025",
      subtitle: "Wakil Kepala Departemen Luar Negeri",
      duration: "Januari 2025 - Sekarang",
      responsibilities: [
        "Menginisiasi program kerja Job Fair untuk menjembatani kebutuhan mahasiswa terhadap informasi karier dan peluang kerja, yang sebelumnya belum pernah diadakan di Fakultas Teknik UNESA. Program ini dilaksanakan melalui kolaborasi antar departemen dan kerja sama strategis dengan Career Center UNESA (CCU). Kegiatan berhasil menghadirkan lebih dari 40 perusahaan dan menarik 2.000+ pengunjung, membuka akses langsung ke peluang kerja, magang dan rekrutmen bagi mahasiswa.",
        "Mengarahkan dan bertanggung jawab atas program kerja studi banding BEM FT UNESA ke BEM FT UM sebagai Wakil Kepala Departemen; sukses melibatkan 150+ peserta dan memperkuat relasi antar BEM Fakultas Teknik.",
      ],
    },
    {
      title: "BEM FT 2024",
      subtitle: "Anggota Departemen Penalaran Riset & Teknologi",
      duration: "January 2024 - Desember 2024",
      responsibilities: [
        "Memimpin sebagai Ketua Pelaksana LKTI tingkat Jawa-Bali, berhasil menyukseskan kompetisi dengan 25+ tim peserta, sekaligus menciptakan wadah untuk mengembangkan minat mahasiswa dalam menulis ilmiah.",
        "Mengelola rangkaian acara EFASCO selama 4 hari sebagai Anggota Divisi Acara, dengan tanggung jawab menyusun rangkuman kegiatan, mengatur jalannya acara, serta berkoordinasi lintas tim. Kegiatan ini melibatkan 5 departemen dan meraih tingkat kepuasan peserta sebesar 8,5 dari 10.",
        "Mengoordinasikan Divisi Acara pada Bootcamp Karya Tulis Ilmiah, bertanggung jawab atas perencanaan teknis, alur kegiatan, dan pengelolaan tim selama acara berlangsung. Kegiatan ini dihadiri oleh 300+ peserta dan memperoleh tingkat kepuasan sebesar 8 dari 10.",
        "Berkolaborasi dalam menyelenggarakan seminar, lokakarya, dan pelatihan berbasis riset.",
      ],
    },
  ];

  const galleryImages = [
    project10,
    project7,
    project6,
    project8,
    project11,
    project9,
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="about" />

      {/* About Me Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              TENTANG SAYA
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Seorang Junior Web Developer & Desainer UI/UX yang bersemangat
              dalam menciptakan pengalaman pengguna, antarmuka menawan, dan
              solusi digital yang membangun hubungan bermakna antara pengguna
              dan produk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-portfolio-orange/20 rounded-full blur-3xl"></div>
                <img
                  src={project11}
                  alt="Moh. Ibnu Kandiyas"
                  className="relative rounded-2xl shadow-2xl w-80 h-96 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-justify">
              <h2 className="text-2xl lg:text-3xl font-bold text-portfolio-white">
                UI/UX Designer & Junior Web Developer, menciptakan solusi
                digital yang inovatif dan terintegrasi.
              </h2>
              <p className="text-portfolio-gray leading-relaxed">
                Dengan fondasi yang kuat dalam prinsip-prinsip desain yang
                berpusat pada pengguna, saya mengkhususkan diri dalam
                menciptakan pengalaman digital yang tidak hanya menarik secara
                visual, tetapi juga sangat fungsional, responsif, dan mudah
                diakses.
              </p>
              <p className="text-portfolio-gray leading-relaxed">
                Saya memadukan kreativitas visual, kemampuan teknis, dan
                pemikiran analitis untuk menyelesaikan tantangan desain dan
                pengembangan front-end. Bagi saya, desain yang baik tidak hanya
                enak dilihat, tetapi juga terasa alami, intuitif, dan selaras
                dengan tujuan pengguna. Melalui pembelajaran berkelanjutan dan
                adaptasi terhadap tren teknologi terkini, saya berkomitmen
                menciptakan solusi digital yang bernilai, berdampak, dan siap
                diterapkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-portfolio-navy-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-white mb-4">
              PENGALAMAN
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-orange"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-portfolio-orange rounded-full border-4 border-portfolio-navy-light"></div>

                    <div className="bg-portfolio-navy rounded-xl p-6 shadow-portfolio-card">
                      <h3 className="text-xl font-bold text-portfolio-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-portfolio-orange font-medium mb-2">
                        {exp.subtitle}
                      </p>
                      <p className="text-portfolio-gray text-sm mb-4">
                        {exp.duration}
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="text-portfolio-gray text-sm flex items-start"
                          >
                            <span className="text-portfolio-orange mr-2 mt-1">
                              •
                            </span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-white mb-4">
              DOKUMENTASI KEGIATAN
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ingin tahu lebih lanjut? Baca selengkapnya di blog!"
        description="Jelajahi pemikiran saya! Klik tombol di bawah ini untuk melihat beberapa karya saya, atau Anda dapat melihat ide dan pemikiran yang telah saya tulis di blog saya."
        buttonText="Jelajahi Sekarang"
        buttonUrl="/blogs"
      />

      <Footer />
    </div>
  );
};

export default About;
