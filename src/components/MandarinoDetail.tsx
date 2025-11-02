import { ArrowLeft } from 'lucide-react';

interface MandarinoDetailProps {
  onBack: () => void;
}

export default function MandarinoDetail({ onBack }: MandarinoDetailProps) {
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
              src="https://images.pexels.com/photos/7512810/pexels-photo-7512810.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="El Mandarín Maravilloso"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-amber-100 mb-4">
            El Mandarín Maravilloso
          </h1>
          <p className="text-2xl text-amber-50/80 font-light italic mb-2">Béla Bartók</p>
          <p className="text-amber-50/60">Ópera de un acto | Libreto de Menyhért Lengyel</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-neutral-800/50 p-8 border border-amber-900/20">
            <h2 className="font-serif text-3xl text-amber-100 mb-6">La Obra</h2>
            <div className="text-amber-50/80 leading-relaxed space-y-4">
              <p>
                El Mandarín Maravilloso es una ópera de un solo acto compuesta por Béla Bartók en
                1918, basada en la obra homónima de Menyhért Lengyel. Aunque fue escrita hace más
                de un siglo, su estreno europeo no llegó hasta 1956, debido a la complejidad de su
                música y su temática controversia.
              </p>
              <p>
                La trama sigue a una joven mujer casada que, para obtener dinero, atrae a un
                mandarín chino a su casa con la intención de robarle. Sin embargo, la obra toma un
                giro oscuro y violento que refleja la experimentación musical y dramática de
                Bartók.
              </p>
              <p>
                La puntuación es una de las obras más desafiantes de la ópera moderna, con
                orquestación compleja que combina la tradición operática con elementos de la música
                contemporánea.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-neutral-800/50 p-8 border border-amber-900/20 mb-8">
              <h3 className="font-serif text-2xl text-amber-100 mb-4">Director</h3>
              <p className="text-amber-50/80 leading-relaxed">
                Bajo la dirección de <span className="font-semibold">Ivor Bolton</span>, reconocido
                maestro británico especializado en ópera moderna, esta producción presenta una
                visión contemporánea de la obra. Bolton aporta su experiencia con las obras más
                desafiantes del repertorio lírico europeo.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-8 border border-amber-900/20">
              <h3 className="font-serif text-2xl text-amber-100 mb-4">Reparto Principal</h3>
              <div className="space-y-3 text-amber-50/80 text-sm">
                <div>
                  <p className="font-semibold text-amber-100">La Mujer</p>
                  <p>Soprano - Soprano dramático</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-100">El Mandarín</p>
                  <p>Tenor dramático</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-100">El Marido</p>
                  <p>Barítono</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800/50 p-8 border border-amber-900/20 mb-16">
          <h2 className="font-serif text-3xl text-amber-100 mb-6">Curiosidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Experimentación Musical</h4>
              <p className="text-amber-50/80 leading-relaxed">
                Bartók utilizó técnicas revolucionarias para su época, incluyendo el uso extensivo
                de disonancias, ritmos complejos y colores orquestales innovadores que la convierte
                en una obra muy adelantada a su tiempo.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Historia de Censura</h4>
              <p className="text-amber-50/80 leading-relaxed">
                La obra enfrentó dificultades para ser representada debido a su temática violenta y
                su música desafiante. No se estrenó hasta 1956, mucho después de ser compuesta.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Influencias Folclóricas</h4>
              <p className="text-amber-50/80 leading-relaxed">
                A pesar de su modernismo, Bartók incorpora elementos de la música folclórica
                húngara, creando un fascinante diálogo entre tradición y vanguardia.
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Duración</h4>
              <p className="text-amber-50/80 leading-relaxed">
                Con una duración de aproximadamente 50 minutos, es una ópera concentrada que
                presenta la intensidad dramática y musical en un formato compacto sin intermedio.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-700/10 border border-amber-700/30 p-8 text-center">
          <h3 className="font-serif text-2xl text-amber-100 mb-4">Próximas Funciones</h3>
          <p className="text-amber-50/80 mb-6">10 - 23 Noviembre | 20:00h</p>
          <button className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300">
            Comprar Entradas
          </button>
        </div>
      </div>
    </section>
  );
}
