
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall, 
  Brain, 
  Briefcase, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-blue-900 tracking-tight">AnonimEkspert</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Niyə biz?</a>
          <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Necə işləyir?</a>
          <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Qiymət</a>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-full transition-all font-semibold">
            Ekspert ol
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          <a href="#problem" onClick={() => setIsMenuOpen(false)} className="text-slate-600 py-2 border-b border-slate-50">Niyə biz?</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-slate-600 py-2 border-b border-slate-50">Necə işləyir?</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-slate-600 py-2 border-b border-slate-50">Qiymət</a>
          <button className="w-full text-center border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold">
            Ekspert ol
          </button>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Yeni: İlk 5 dəqiqə tamamilə pulsuzdur!
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-950 mb-6 leading-tight">
          Dərdini danışmaq üçün üzünü göstərməyə <span className="text-blue-600">ehtiyac yoxdur.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Peşəkar Psixoloq, Karyera Mütəxəssisi və Həkimlər – bir mesaj qədər yaxın. Çat və ya Səsli zənglə, tam anonim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
            İndi Ekspertlə Danış
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-slate-500 font-medium sm:ml-4 flex items-center gap-1">
            <CheckCircle2 className="text-teal-500 w-5 h-5" />
            İlk 5 dəqiqə pulsuz
          </p>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
    </section>
  );
};

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Psixologiya",
      text: "İşdə və ailədə gərginlik var, amma psixoloqa getməyə çəkinirsən?"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-teal-600" />,
      title: "Karyera",
      text: "İşindən zövq almırsan, amma hara gedəcəyini bilmirsən?"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Sağlamlıq",
      text: "Analiz cavablarını aldın, amma həkimin nə dediyini başa düşmürsən?"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Bu hisslər sizə tanışdır?</h2>
          <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                "{p.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Mövzunu Seç",
      desc: "Psixologiya, Karyera və ya Tibb sahəsindən sizə uyğun olanı seçin.",
      icon: <CheckCircle2 className="text-blue-600" />
    },
    {
      num: "02",
      title: "Formatı Seç",
      desc: "Yazış və ya Danış. Kamera açmağa qətiyyən ehtiyac yoxdur.",
      icon: <MessageSquare className="text-teal-600" />
    },
    {
      num: "03",
      title: "Həllini Tap",
      desc: "Peşəkarlardan dərhal cavab al və rahatlıq tap.",
      icon: <PhoneCall className="text-blue-600" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Cəmi 3 addımda rahatlıq tapın.</h2>
          <p className="text-slate-500">Məxfilik və sürət bizim əsas üstünlüyümüzdür.</p>
        </div>
        
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-xl shadow-blue-200 ring-8 ring-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900 to-blue-950 text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck className="w-48 h-48" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Cibinizə və Vaxtınıza Qənaət.</h2>
          <p className="text-blue-100 text-lg mb-10 relative z-10">
            Seanslar cəmi <span className="text-white font-bold text-3xl mx-2">9 AZN</span>-dən başlayır. 
            <br />Bəyənməsəniz, ödəniş dərhal geri qaytarılır.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span>Gizli xərclər yoxdur</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span>Tam Anonimlik</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span>Geri ödəniş zəmanəti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Təşəkkürlər! Sizi siyahıya aldıq. Tezliklə xəbər verəcəyik.");
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-teal-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-teal-100 text-teal-800 px-6 py-2 rounded-full font-bold mb-6">
            Tezliklə açılır! 🚀
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
            Platforma tezliklə istifadəyə verilir!
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            İlk istifadəçilərə <span className="text-teal-600 font-bold">50% endirim</span> və <span className="text-teal-600 font-bold">Pulsuz 10 dəqiqə</span> qazanmaq üçün emailinizi daxil edin.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="Emailinizi yazın"
                className="flex-1 px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-all text-lg shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2"
              >
                Siyahıya Qoşul
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="bg-white p-8 rounded-3xl border border-teal-200 shadow-xl inline-block animate-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Qeydiyyat tamamlandı!</h3>
              <p className="text-slate-600">Sizi ilk növbəyə əlavə etdik. Endirim kuponunuz tezliklə emailinizə gələcək.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-slate-200 p-1.5 rounded-lg">
            <ShieldCheck className="text-slate-600 w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-slate-800">AnonimEkspert</span>
        </div>
        
        <div className="flex gap-8 text-slate-500 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Şərtlər</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Məxfilik</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Əlaqə</a>
        </div>
        
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} AnonimEkspert. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Pricing />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
};

export default App;
