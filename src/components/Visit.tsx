import { MapPin, Clock, ShoppingBag, Utensils } from 'lucide-react';

export default function Visit() {
  const features = [
    {
      icon: Clock,
      title: 'Visitas Guiadas',
      description: 'Descubre los secretos del teatro con tours exclusivos por sus salones históricos',
    },
    {
      icon: ShoppingBag,
      title: 'Tienda Oficial',
      description: 'Encuentra recuerdos únicos, libros y ediciones especiales de ópera',
    },
    {
      icon: Utensils,
      title: 'Restaurante',
      description: 'Disfruta de una experiencia gastronómica refinada antes o después de la función',
    },
  ];

  return (
    <section id="visit" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
            Planifica tu Visita
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-700 text-lg max-w-2xl mx-auto leading-relaxed">
            El Teatro Real te espera en el corazón de Madrid, frente al Palacio Real y la Plaza de
            Oriente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="bg-white p-8 shadow-lg mb-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif text-2xl text-neutral-900 mb-2">Ubicación</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Plaza de Oriente, s/n
                    <br />
                    28013 Madrid, España
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-3">Cómo llegar</h4>
                <div className="space-y-2 text-neutral-700 text-sm">
                  <p>
                    <span className="font-semibold">Metro:</span> Ópera (líneas 2, 5 y R)
                  </p>
                  <p>
                    <span className="font-semibold">Autobús:</span> Líneas 3, 25, 39, 148
                  </p>
                  <p>
                    <span className="font-semibold">Aparcamiento:</span> Plaza de Oriente
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="text-amber-700 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-serif text-xl text-neutral-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="relative h-96 lg:h-[600px] overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/756092/pexels-photo-756092.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Interior del Teatro Real"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-amber-100 text-lg font-light leading-relaxed">
                  "Un templo de la cultura donde cada detalle arquitectónico cuenta una historia"
                </p>
              </div>
            </div>

            <div className="mt-6 bg-amber-700 text-white p-6 shadow-lg">
              <h4 className="font-serif text-xl mb-3">Horarios de Visita</h4>
              <div className="space-y-2 text-sm">
                <p>Lunes a Viernes: 10:00 - 13:00h</p>
                <p>Sábados y Domingos: 10:00 - 14:00h</p>
                <p className="pt-3 border-t border-amber-600 text-amber-100">
                  *Sujeto a disponibilidad por funciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
