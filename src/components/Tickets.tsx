import { Ticket, Shield, CreditCard, CalendarDays } from 'lucide-react';

export default function Tickets() {
  const benefits = [
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Transacciones protegidas con encriptación SSL',
    },
    {
      icon: CreditCard,
      title: 'Múltiples Métodos',
      description: 'Tarjeta, PayPal y transferencia bancaria',
    },
    {
      icon: CalendarDays,
      title: 'Elige tu Función',
      description: 'Calendario completo de la temporada disponible',
    },
    {
      icon: Ticket,
      title: 'Entrega Inmediata',
      description: 'Recibe tus entradas digitales al instante',
    },
  ];

  return (
    <section id="tickets" className="py-24 px-6 bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-6">
            Adquiere tus Entradas
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-amber-50/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Vive la magia de la ópera en uno de los teatros más prestigiosos del mundo
          </p>
        </div>

        <div className="bg-neutral-800/80 backdrop-blur-sm p-8 md:p-12 shadow-2xl border border-amber-900/20 mb-12">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl text-amber-100 mb-4">
              Reserva tu Experiencia
            </h3>
            <p className="text-amber-50/70 leading-relaxed max-w-xl mx-auto">
              Accede a la venta online oficial del Teatro Real. Selecciona tu función, elige tus
              asientos y disfruta de una velada inolvidable.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <button className="bg-amber-700 hover:bg-amber-600 text-white px-12 py-5 text-base uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Comprar Entradas Ahora
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-neutral-900/50 border border-amber-900/10 transition-all duration-300 hover:border-amber-700/30"
                >
                  <Icon className="text-amber-700 mx-auto mb-4" size={32} />
                  <h4 className="font-semibold text-amber-100 mb-2 text-sm uppercase tracking-wide">
                    {benefit.title}
                  </h4>
                  <p className="text-amber-50/60 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-amber-700/10 border border-amber-700/30 p-8 text-center">
          <h4 className="font-serif text-2xl text-amber-100 mb-4">Tarifas Especiales</h4>
          <p className="text-amber-50/80 leading-relaxed mb-6">
            Consulta nuestras ofertas para grupos, estudiantes, jóvenes menores de 35 años y
            personas mayores de 65 años.
          </p>
          <button className="text-amber-200 hover:text-amber-100 underline underline-offset-4 transition-colors text-sm uppercase tracking-wide font-semibold">
            Ver Todas las Tarifas
          </button>
        </div>
      </div>
    </section>
  );
}
