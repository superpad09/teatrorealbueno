export default function History() {
  const images = [
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section id="history" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6 leading-tight">
              Una Historia de Excelencia
            </h2>
            <div className="w-24 h-1 bg-amber-700 mb-8"></div>
            <p className="text-neutral-700 leading-relaxed text-lg mb-6">
              Inaugurado en <span className="font-semibold text-neutral-900">1850</span>, el Teatro
              Real se erige como uno de los emblemas culturales más importantes de España y uno de
              los grandes templos de la ópera europea.
            </p>
            <p className="text-neutral-700 leading-relaxed text-lg mb-6">
              Su majestuosa arquitectura neoclásica, ubicada en el corazón de Madrid frente al
              Palacio Real, ha sido testigo de más de siglo y medio de historia artística y social.
            </p>
            <p className="text-neutral-700 leading-relaxed text-lg">
              Tras una profunda restauración que concluyó en 1997, el Teatro Real renació como un
              referente internacional de la ópera y la danza, combinando la grandeza de su pasado
              con la innovación tecnológica del presente.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`Teatro Real histórico ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white shadow-sm">
            <div className="font-serif text-5xl text-amber-700 mb-3">1850</div>
            <div className="text-neutral-600 uppercase tracking-wide text-sm">Inauguración</div>
          </div>
          <div className="text-center p-8 bg-white shadow-sm">
            <div className="font-serif text-5xl text-amber-700 mb-3">1997</div>
            <div className="text-neutral-600 uppercase tracking-wide text-sm">Restauración</div>
          </div>
          <div className="text-center p-8 bg-white shadow-sm">
            <div className="font-serif text-5xl text-amber-700 mb-3">175+</div>
            <div className="text-neutral-600 uppercase tracking-wide text-sm">
              Años de Historia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
