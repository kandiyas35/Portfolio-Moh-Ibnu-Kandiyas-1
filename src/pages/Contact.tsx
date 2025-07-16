import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="contact" />

      {/* Contact Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
                SAY HELLO
              </h1>
              <p className="text-xl text-portfolio-gray leading-relaxed">
                Saya selalu terbuka untuk peluang dan kolaborasi baru. Jangan
                ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-portfolio-navy-light rounded-2xl p-8 shadow-portfolio-card">
                <form
                  action="https://formspree.io/f/meozqpqy"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-portfolio-white font-medium mb-2"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-portfolio-navy border border-portfolio-gray-dark rounded-lg text-portfolio-white placeholder-portfolio-gray focus:outline-none focus:ring-2 focus:ring-portfolio-orange focus:border-transparent transition-all"
                      placeholder="Masukkan Nama Lengkap Anda"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-portfolio-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-portfolio-navy border border-portfolio-gray-dark rounded-lg text-portfolio-white placeholder-portfolio-gray focus:outline-none focus:ring-2 focus:ring-portfolio-orange focus:border-transparent transition-all"
                      placeholder="Masukkan Alamat Email Anda"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-portfolio-white font-medium mb-2"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-portfolio-navy border border-portfolio-gray-dark rounded-lg text-portfolio-white placeholder-portfolio-gray focus:outline-none focus:ring-2 focus:ring-portfolio-orange focus:border-transparent transition-all"
                      placeholder="Tentang apa ini?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-portfolio-white font-medium mb-2"
                    >
                      Pesan Anda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-portfolio-navy border border-portfolio-gray-dark rounded-lg text-portfolio-white placeholder-portfolio-gray focus:outline-none focus:ring-2 focus:ring-portfolio-orange focus:border-transparent transition-all resize-vertical"
                      placeholder="Ceritakan kepada saya tentang proyek Anda atau sekadar sapa saya!"
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-6">
                    Mari Terhubung
                  </h2>
                  <p className="text-portfolio-gray leading-relaxed mb-8">
                    Siap mewujudkan ide-ide Anda? Baik Anda memiliki proyek yang
                    sedang dipikirkan atau hanya ingin mengobrol tentang desain,
                    saya ingin mendengar dari Anda. Mari kita ciptakan sesuatu
                    yang luar biasa bersama!
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-4">
                    Ikuti Aku
                  </h3>
                  <div className="flex space-x-4">
                    {/* Social media links as in original */}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-portfolio-navy-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">
                    Respon Cepat
                  </h3>
                  <p className="text-portfolio-gray text-sm">
                    Saya biasanya membalas pesan dalam 24 jam. Untuk proyek yang
                    mendesak, jangan ragu untuk menyebutkannya di pesan Anda!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
