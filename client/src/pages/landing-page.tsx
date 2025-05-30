import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountdownTimer from "@/components/countdown-timer";
import ContactForm from "@/components/contact-form";
import { 
  Building2, 
  Target, 
  Palette, 
  DollarSign, 
  MessageCircle, 
  Shield, 
  Download, 
  Infinity, 
  Headphones,
  CheckCircle2,
  Star,
  Clock,
  TrendingDown,
  Banknote,
  Rocket,
  Mail,
  Phone
} from "lucide-react";

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = () => {
    // This would integrate with payment gateway in production
    alert('Redirect ke halaman pembayaran akan diimplementasikan di sini');
  };

  const problems = [
    "Budget Meta Ads habis tapi leads tidak serius",
    "Inquiry banyak tapi sedikit yang berminat beli", 
    "Sales team komplain kualitas leads kurang",
    "Merasa main tebak-tebakan dengan targeting",
    "Kompetitor terlihat lebih efektif dan mendapat leads berkualitas"
  ];

  const agitationPoints = [
    {
      icon: Clock,
      title: "Waktu Terbuang",
      description: "Berbulan-bulan trial error tanpa hasil yang jelas"
    },
    {
      icon: TrendingDown,
      title: "Opportunity Cost", 
      description: "Pesaing yang sudah maju sementara Anda masih berjuang"
    },
    {
      icon: Banknote,
      title: "Budget Terkuras",
      description: "Uang iklan habis untuk leads yang tidak qualified"
    }
  ];

  const solutionPoints = [
    {
      icon: Target,
      title: "Targeting Yang Tepat Sasaran",
      description: "Cara menentukan audience yang benar-benar berminat beli property"
    },
    {
      icon: Palette,
      title: "Creative Yang Converting",
      description: "Template dan formula creative yang terbukti menghasilkan leads berkualitas"
    },
    {
      icon: DollarSign,
      title: "Landing Page Optimization",
      description: "Cara membuat halaman yang mengkonversi visitor menjadi leads serius"
    },
    {
      icon: MessageCircle,
      title: "Follow-Up System",
      description: "Strategi nurturing leads hingga menjadi closing penjualan"
    }
  ];

  const testimonials = [
    {
      name: "Ahmad Hidayat",
      role: "Property Developer",
      initials: "AH",
      quote: "Setelah menerapkan blueprint ini, lead quality meningkat 300% dan cost per lead turun drastis. ROI iklan property saya sekarang sangat profitable."
    },
    {
      name: "Sari Permata", 
      role: "Marketing Manager",
      initials: "SP",
      quote: "Blueprint ini sangat praktis dan mudah diikuti. Dalam 2 minggu implementasi, sudah ada 15 leads serius yang booking viewing unit."
    },
    {
      name: "Rizki Kurniawan",
      role: "Sales Director", 
      initials: "RK",
      quote: "Akhirnya ada panduan yang komprehensif tapi tidak ribet. Sales team sekarang lebih senang karena leads yang masuk lebih qualified."
    }
  ];

  const modules = [
    {
      number: 1,
      title: "Buyer Persona Property",
      description: "Cara menentukan target audience yang tepat berdasarkan demografi, psikografi, dan perilaku calon pembeli property"
    },
    {
      number: 2,
      title: "Creative Strategy",
      description: "Template dan formula creative yang terbukti menghasilkan engagement tinggi dan leads berkualitas"
    },
    {
      number: 3,
      title: "Landing Page Optimization", 
      description: "Cara membuat halaman landing yang mengkonversi visitor menjadi leads dengan conversion rate tinggi"
    },
    {
      number: 4,
      title: "Follow-Up System",
      description: "Strategi nurturing dan follow-up leads melalui WhatsApp dan email hingga closing penjualan"
    }
  ];

  const guaranteeFeatures = [
    {
      icon: Download,
      title: "Akses Langsung",
      description: "Download segera setelah pembayaran"
    },
    {
      icon: Infinity,
      title: "Lifetime Access",
      description: "Akses selamanya + update gratis"
    },
    {
      icon: Headphones,
      title: "Support Penuh",
      description: "Bantuan implementasi via WhatsApp"
    }
  ];

  const inclusions = [
    "4 Modul Lengkap Property Ads Blueprint",
    "Template Creative Meta Ads Siap Pakai",
    "Landing Page Template yang Converting",
    "Script Follow-up WhatsApp & Email", 
    "Lifetime Access & Updates",
    "Konsultasi 1-on-1 (Bonus Senilai Rp 500.000)"
  ];

  const finalBenefits = [
    "Targeting yang tepat sasaran",
    "Creative yang converting tinggi",
    "Landing page yang optimal",
    "Follow-up system yang efektif",
    "Template siap pakai",
    "Konsultasi 1-on-1 gratis"
  ];

  return (
    <div className="min-h-screen bg-gradient-blue text-slate-50 font-sans">
      {/* Header - Mobile Optimized */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <h1 className="text-lg font-bold text-white">PropertyAds Pro</h1>
            </div>
            
            <Button 
              onClick={() => scrollToSection('pricing')}
              size="sm"
              className="bg-gradient-cta hover:opacity-90 text-white font-semibold text-xs px-3 py-2"
            >
              BELI SEKARANG
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section id="home" className="pt-20 pb-12 bg-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 leading-tight">
              Mengapa Meta Ads Property Anda Terasa Seperti{" "}
              <span className="text-blue-accent">Membakar Uang?</span>
            </h1>
            
            <p className="text-base text-slate-200 mb-6 leading-relaxed">
              Pelajari strategi targeting dan creative yang biasa digunakan developer property sukses di Meta Ads
            </p>
            
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-cta hover:opacity-90 text-white font-bold text-sm px-6 py-3 w-full mb-4"
            >
              PELAJARI STRATEGINYA - RP 300.000
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="text-slate-300 text-sm">
              <Shield className="inline mr-2 h-4 w-4" />
              Jaminan 7 hari uang kembali
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Mobile Optimized */}
      <section className="py-12 bg-slate-900">
        <div className="px-4">
          <div>
            <h2 className="text-xl font-bold text-center mb-8">
              Apakah Situasi Ini <span className="text-blue-accent">Familiar?</span>
            </h2>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white text-xs">✕</span>
                        </div>
                      </div>
                      <p className="text-slate-200 text-sm font-medium">{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section - Mobile Optimized */}
      <section className="py-12 bg-gradient-blue-subtle">
        <div className="px-4">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6">
              Dan Yang Lebih <span className="text-red-400">Frustrasi</span> Lagi...
            </h2>
            
            <div className="space-y-6 mt-8">
              {agitationPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <point.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{point.title}</h3>
                  <p className="text-slate-300 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview - Mobile Optimized */}
      <section className="py-12 bg-slate-900">
        <div className="px-4">
          <div>
            <h2 className="text-xl font-bold text-center mb-2">
              Bagaimana Jika Anda Punya Panduan Yang Menjelaskan...
            </h2>
            <p className="text-base text-slate-300 text-center mb-8">Blueprint yang sudah terbukti berhasil</p>
            
            <div className="space-y-4">
              {solutionPoints.map((point, index) => (
                <Card key={index} className="bg-gradient-blue-subtle/30 border-blue-accent/30">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <point.icon className="h-5 w-5 text-blue-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold mb-2 text-white">{point.title}</h3>
                        <p className="text-slate-300 text-sm">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Mobile Optimized */}
      <section className="py-12 bg-gradient-blue-subtle">
        <div className="px-4">
          <div>
            <h2 className="text-xl font-bold text-center mb-8">
              Apa Kata Yang Sudah <span className="text-blue-accent">Belajar</span>
            </h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-200 mb-4 italic text-sm">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-accent rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-xs">{testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                        <p className="text-slate-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview - Mobile Optimized */}
      <section id="tentang" className="py-12 bg-slate-900">
        <div className="px-4">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold mb-2">
                <span className="text-blue-accent">Property Ads Blueprint</span>
              </h2>
              <p className="text-base text-slate-300">Panduan Step-by-Step Yang Akan Anda Pelajari</p>
            </div>
            
            <div className="space-y-4">
              {modules.map((module, index) => (
                <Card key={index} className="bg-gradient-blue-subtle/20 border-blue-accent/30">
                  <CardContent className="p-4">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-blue-accent rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">{module.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white mb-2">{module.title}</h3>
                        <p className="text-slate-300 text-sm">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Mobile Optimized */}
      <section id="pricing" className="py-12 bg-gradient-blue">
        <div className="px-4">
          <div>
            <div className="text-center mb-8">
              <div className="inline-block bg-red-500 text-white px-3 py-2 rounded-full mb-3 font-semibold text-sm">
                PENAWARAN TERBATAS
              </div>
              <h2 className="text-xl font-bold mb-3">
                Hemat <span className="text-yellow-400">Rp 200.000</span> Hari Ini!
              </h2>
            </div>
            
            <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-accent/50 shadow-2xl">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <span className="text-lg text-slate-400 line-through">Rp 500.000</span>
                    <span className="text-3xl font-bold text-yellow-400">Rp 300.000</span>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-slate-300 mb-2 text-sm">Promo berakhir dalam:</p>
                    <CountdownTimer />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h3 className="text-base font-semibold mb-3 text-white">Yang Anda Dapatkan:</h3>
                  
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-200 text-sm">{inclusion}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={handlePurchase}
                  className="w-full bg-gradient-cta hover:opacity-90 text-white font-bold text-lg py-4 h-auto mb-4"
                >
                  AKSES SEKARANG - RP 300.000
                  <Shield className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="text-center text-slate-300 text-xs">
                  <Shield className="inline mr-1 h-3 w-3" />
                  Jaminan 7 hari uang kembali | Akses langsung | Bahasa Indonesia
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee - Mobile Optimized */}
      <section className="py-12 bg-slate-900">
        <div className="px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            
            <h2 className="text-xl font-bold mb-4">
              Jaminan <span className="text-green-400">7 Hari</span> Uang Kembali
            </h2>
            
            <p className="text-sm text-slate-300 mb-8 leading-relaxed">
              Kami sangat yakin dengan kualitas Property Ads Blueprint ini. Jika dalam 7 hari Anda merasa tidak puas atau blueprint ini tidak sesuai ekspektasi, kami akan mengembalikan 100% uang Anda tanpa pertanyaan.
            </p>
            
            <div className="space-y-6 mt-8">
              {guaranteeFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-6 w-6 text-blue-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-12 bg-gradient-blue">
        <div className="px-4">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">
              Siap Upgrade Strategi Meta Ads Property Anda?
            </h2>
            
            <p className="text-base text-slate-200 mb-6">
              Jangan biarkan kompetitor terus unggul. Saatnya Anda menggunakan strategi yang sama dengan developer property sukses.
            </p>
            
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-accent/50 shadow-2xl mb-6">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold mb-4 text-white">Dengan Property Ads Blueprint, Anda Mendapatkan:</h3>
                
                <div className="space-y-3 text-left">
                  {finalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Button 
              onClick={handlePurchase}
              className="w-full bg-gradient-cta hover:opacity-90 text-white font-bold text-lg px-8 py-4 h-auto mb-4"
            >
              AKSES SEKARANG - RP 300.000
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-slate-300 text-xs">
              <Shield className="inline mr-2 h-3 w-3" />
              Jaminan 7 hari uang kembali | Akses langsung | Bahasa Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="px-4">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-white">PropertyAds Pro</h3>
              <p className="text-slate-400 text-sm">
                Membantu developer property mencapai ROI optimal melalui Meta Ads yang efektif dan terukur.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Kontak</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4 text-blue-accent" />
                  <span>support@propertyads.pro</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4 text-blue-accent" />
                  <span>+62 812-3456-7890</span>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
            
            <div className="flex justify-center space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Refund</a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-6 pt-6 text-center text-slate-400">
            <p className="text-xs">&copy; 2024 PropertyAds Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
