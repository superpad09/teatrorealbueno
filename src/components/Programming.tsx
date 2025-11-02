import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import MandarinoDetail from './MandarinoDetail';
import CastilloDetail from './CastilloDetail';

export default function Programming() {
  const [selectedShow, setSelectedShow] = useState<string | null>(null);

  const shows = [
    {
      id: 'mandarin',
      title: 'El Mandarín Maravilloso',
      composer: 'Bartók Béla',
      date: '10 - 23 Noviembre',
      time: '20:00h',
      image: 'https://images.pexels.com/photos/7512810/pexels-photo-7512810.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'castle',
      title: 'El Castillo de Barba Azul',
      composer: 'Bartók Béla',
      date: '28 Noviembre - 12 Diciembre',
      time: '19:30h',
      image: 'https://images.pexels.com/photos/8294810/pexels-photo-8294810.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  if (selectedShow === 'mandarin') {
    return <MandarinoDetail onBack={() => setSelectedShow(null)} />;
  }

  if (selectedShow === 'castle') {
    return <CastilloDetail onBack={() => setSelectedShow(null)} />;
  }

  return (
    <section id="programming" className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-6">
            Programación
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-amber-50/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Descubre las próximas producciones que llenarán nuestro escenario de emoción, arte y
            cultura
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {shows.map((show) => (
            <div
              key={show.id}
              className="group bg-neutral-800 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-amber-900/30 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-2xl text-amber-100 mb-2">{show.title}</h3>
                <p className="text-amber-50/70 text-sm mb-6 italic">{show.composer}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-amber-50/80">
                    <Calendar size={18} className="text-amber-700" />
                    <span className="text-sm">{show.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-50/80">
                    <Clock size={18} className="text-amber-700" />
                    <span className="text-sm">{show.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedShow(show.id)}
                  className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Más Información
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
