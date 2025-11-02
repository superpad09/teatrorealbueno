import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrollToSection: (section: string) => void;
  activeSection: string;
}

export default function Header({ scrollToSection, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'history', label: 'Historia' },
    { id: 'programming', label: 'Programación' },
    { id: 'visit', label: 'Visita' },
    { id: 'tickets', label: 'Entradas' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1835487/pexels-photo-1835487.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-900/90"></div>
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-amber-100 font-serif text-2xl tracking-wider">TR</div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-100 hover:text-amber-200 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-amber-200 border-b-2 border-amber-200'
                      : 'text-amber-100 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-sm border-t border-amber-900/30">
            <ul className="flex flex-col py-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-amber-100 hover:bg-amber-900/20 hover:text-amber-200 transition-all uppercase tracking-wide text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-amber-100 mb-6 tracking-wide leading-tight">
          Teatro Real de Madrid
        </h1>
        <p className="text-lg md:text-2xl text-amber-50/90 font-light tracking-wide leading-relaxed">
          Donde la ópera, la historia y la excelencia se encuentran
        </p>
        <div className="mt-12">
          <button
            onClick={() => scrollToSection('tickets')}
            className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Comprar Entradas
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-100/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-100/50 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
