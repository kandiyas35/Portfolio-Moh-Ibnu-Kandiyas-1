import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project20 from "@/assets/project-20.jpg";
import project21 from "@/assets/project-21.jpg";

const Projects = () => {
  const projects = [
    {
      title: "🔗 Website Penanggungan Summit Explore",
      description:
        "Website destinasi wisata yang menampilkan keindahan Gunung Penanggungan dengan pengalaman pengguna yang imersif.",
      imageUrl: project1,
      projectUrl: "https://kandiyas35.github.io/Penanggung-Summit-Explore/",
      isExternal: true,
    },
    {
      title: "🎓 Website Persiapan UTBK - S2TU",
      description:
        "Platform pembelajaran online untuk persiapan UTBK dengan fitur lengkap dan antarmuka yang user-friendly.",
      imageUrl: project2,
      projectUrl: "https://github.com/kandiyas35/Website-Persiapan-UTBK-S2TU",
      isExternal: true,
    },
    {
      title: "🚗 Remote Controller Robot Car (ESP32)",
      description:
        "Sistem kontrol robot mobil berbasis ESP32 dengan antarmuka web yang responsif dan real-time.",
      imageUrl: project3,
      projectUrl: "https://kandiyas35.github.io/Smar-Robot-Car-ESP-32/",
      isExternal: true,
    },
    {
      title: "🏠 Website Informasi Masjid Agung Darussalam Mojokerto",
      description:
        "Website ini merupakan platform informasi resmi Masjid Desa Gemekan, Kecamatan Sooko, Kabupaten Mojokerto. Situs ini dirancang sebagai media penyebaran informasi keseharian masjid kepada masyarakat. Masih Dalam Proses Pengembangan (On Progres)",
      imageUrl: project4,
      projectUrl:
        "https://github.com/kandiyas35/Website-Masjid-Agung-Darussalam",
      isExternal: true,
    },
    {
      title: '📱 Mobile UI/UX App "One UNESA"',
      description:
        "Desain aplikasi mobile untuk Mahasiswa kwirausahaan yang kebingungan memperjual-belikan produk mereka.",
      imageUrl: project5,
      projectUrl:
        "https://www.figma.com/proto/7NBj52f5WRfuJI6JgagLOp/NCast---Podcast-App--Community-?page-id=&node-id=2184-199&starting-point-node-id=2099%3A94&t=5Vm7MHIaFtaVeG7b-1",
      isExternal: true,
    },
    {
      title: "🍅 Deteksi Kematangan Tomat",
      description:
        "Proyek berbasis Python dan Computer Vision untuk mengklasifikasikan tingkat kematangan tomat menggunakan citra digital tanpa antarmuka pengguna grafis.",
      imageUrl: project20, // atau ganti jika ada gambar khusus
      projectUrl: "https://github.com/kandiyas35/Deteksi-Kematangan-Tomat",
      isExternal: true,
    },
    {
      title: '📱 Mobile UI/UX App "SPARRING"',
      description:
        "Desain aplikasi mobile untuk Mahasiswa yang kesusahan untuk mencari teman untuk bermain olahraga.",
      imageUrl: project21,
      projectUrl:
        "https://www.figma.com/proto/GQlFNBOKHWkQq1hWxMFxlQ/Sparring-Project?page-id=0%3A1&node-id=27-2066&viewport=294%2C107%2C0.68&t=TPBcHTc3nSYfXHrZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A921",
      isExternal: true,
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="projects" />

      {/* Projects Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              PROYEK SAYA
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Proyek-proyek UI/UX dan pengembangan yang telah saya kerjakan,
              dibuat dengan penekanan kuat pada kepuasan pengguna,
              aksesibilitas, dan prinsip desain modern yang memberikan
              pengalaman digital yang luar biasa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                isExternal={project.isExternal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Jelajahi Wawasan dan Blog Saya"
        description="Selami proyek-proyek UI/UX yang menarik dan temukan bagaimana keahlian saya dalam desain yang berpusat pada pengguna menciptakan pengalaman digital yang mulus dan menyenangkan."
        buttonText="Lihat Blog"
        buttonUrl="/blogs"
      />

      <Footer />
    </div>
  );
};

export default Projects;
