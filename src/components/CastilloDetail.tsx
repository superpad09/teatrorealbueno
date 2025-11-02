import { ArrowLeft } from 'lucide-react';

interface CastilloDetailProps {
  onBack: () => void;
}

export default function CastilloDetail({ onBack }: CastilloDetailProps) {
  return (
    <section className="min-h-screen bg-neutral-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-700 hover:text-amber-600 transition-colors mb-12 font-semibold uppercase tracking-wide text-sm"
        >
          <ArrowLeft size={20} />
          Volver a Programación
        </button>

        <div className="mb-16">
          <div className="relative h-96 overflow-hidden shadow-2xl mb-12">
            <img
              src="https://images.pexels.com/photos/8294810/pexels-photo-8294810.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="El Castillo de Barba Azul"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-amber-100 mb-4">
            El Castillo de Barba Azul
          </h1>
          <p className="text-2xl text-amber-50/80 font-light italic mb-2">Béla Bartók</p>
          <p className="text-amber-50/60">Ópera de un acto | Libreto de Balázs Béla</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-neutral-800/50 p-8 border border-amber-900/20">
            <h2 className="font-serif text-3xl text-amber-100 mb-6">La Obra</h2>
            <div className="text-amber-50/80 leading-relaxed space-y-4">
              <p>
                El Castillo de Barba Azul es una ópera de un acto compuesta por Béla Bartók en
                1911, con libreto de Balázs Béla. Es considerada una de las obras maestras de la
                ópera del siglo XX y una de las composiciones más profundas y cinematográficas de
                su género.
              </p>
              <p>
                La obra reinterpreta el cuento de hadas tradicional con una perspectiva psicológica
                profunda. Judith, la nueva esposa del Duque Barba Azul, descubre progresivamente
                los secretos del castillo mientras intenta comprender los misterios de su marido y
                el amor humano.
              </p>
              <p>
                La música de Bartók es única, sugerente y atmosférica, creando un mundo sonoro que
                evoluciona a medida que se abren las puertas del castillo, representando la
                revelación progresiva de la verdad emocional y psicológica.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-neutral-800/50 p-8 border border-amber-900/20 mb-8">
              <h3 className="font-serif text-2xl text-amber-100 mb-4">Director</h3>
              <p className="text-amber-50/80 leading-relaxed">
                Bajo la dirección del maestro <span className="font-semibold">Péter Eötvös</span>,
                compositor y director húngaro de fama internacional, esta producción ofrece una
                interpretación profunda y contemporánea de esta obra maestra. Eötvös aporta una
                visión íntima y psicológica a la partitura.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-8 border border-amber-900/20">
              <h3 className="font-serif text-2xl text-amber-100 mb-4">Reparto Principal</h3>
              <div className="space-y-3 text-amber-50/80 text-sm">
                <div>
                  <p className="font-semibold text-amber-100">Judith</p>
                  <p>Mezzosoprano dramático</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-100">El Duque Barba Azul</p>
                  <p>Barítono dramático</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800/50 p-8 border border-amber-900/20 mb-16">
          <h2 className="font-serif text-3xl text-amber-100 mb-6">Curiosidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Pocos Personajes, Gran Impacto</h4>
              <p className="text-amber-50/80 leading-relaxed">
                A pesar de solo tener dos personajes principales, la ópera crea un universo
                psicológico completo y emocionante, demostrando que la intimidad dramática puede
                ser tan poderosa como cualquier gran espectáculo.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Las Siete Puertas</h4>
              <p className="text-amber-50/80 leading-relaxed">
                Cada puerta del castillo simboliza un viaje emocional y musical diferente. La orquesta
                evoca sangre, lágrimas, riqueza, un jardín hermoso, el imperio, y finalmente, la
                verdad sobre el amor.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Influencia Cinematográfica</h4>
              <p className="text-amber-50/80 leading-relaxed">
                Muchos críticos describen la estructura musical de esta ópera como cinematográfica,
                con transiciones suaves que evocan encuadres y movimientos de cámara característicos
                del cine.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Tema Universal</h4>
              <p className="text-amber-50/80 leading-relaxed">
                Más allá del cuento de hadas, la ópera explora temas universales como el amor, el
                miedo, el misterio y la imposibilidad de conocer completamente a otra persona.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Duración Hipnotizante</h4>
              <p className="text-amber-50/80 leading-relaxed">
                Con aproximadamente una hora sin intermedio, la ópera mantiene un estado de tensión
                y suspenso hipnotizante de principio a fin.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Partitura Desafiante</h4>
              <p className="text-amber-50/80 leading-relaxed">
                La música de Bartók presenta un desafío técnico y interpretativo significativo,
                requiriendo cantantes de extraordinario nivel operístico y madurez artística.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-700/10 border border-amber-700/30 p-8 text-center">
          <h3 className="font-serif text-2xl text-amber-100 mb-4">Próximas Funciones</h3>
          <p className="text-amber-50/80 mb-6">28 Noviembre - 12 Diciembre | 19:30h</p>
          <button className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300">
            Comprar Entradas
          </button>
        </div>
      </div>
    </section>
  );
}
