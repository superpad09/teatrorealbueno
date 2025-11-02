export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-amber-50/70 py-12 px-6 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl text-amber-100 mb-4">Teatro Real</h3>
            <p className="text-sm leading-relaxed">
              Templo de la ópera y la cultura en el corazón de Madrid desde 1850.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-amber-100 mb-4 uppercase tracking-wide text-sm">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#history" className="hover:text-amber-200 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#programming" className="hover:text-amber-200 transition-colors">
                  Programación
                </a>
              </li>
              <li>
                <a href="#tickets" className="hover:text-amber-200 transition-colors">
                  Comprar Entradas
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-amber-200 transition-colors">
                  Planifica tu Visita
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-100 mb-4 uppercase tracking-wide text-sm">
              Información Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  Accesibilidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-900/20 text-center">
          <p className="text-sm font-light">
            © 2025 Teatro Real — Excelencia artística en el corazón de Madrid
          </p>
        </div>
      </div>
    </footer>
  );
}
