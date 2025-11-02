import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">Contacto</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Estamos a tu disposición para cualquier consulta o información adicional
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-amber-700 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@teatro-real.com"
                      className="text-neutral-600 hover:text-amber-700 transition-colors"
                    >
                      info@teatro-real.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-amber-700 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Teléfono</h4>
                    <a
                      href="tel:+34915160660"
                      className="text-neutral-600 hover:text-amber-700 transition-colors"
                    >
                      +34 915 160 660
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-6">Síguenos</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Twitter, label: 'Twitter' },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-12 h-12 bg-neutral-900 hover:bg-amber-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-700 text-white p-6">
              <h4 className="font-serif text-xl mb-3">Horario de Atención</h4>
              <div className="space-y-2 text-sm">
                <p>Lunes a Viernes</p>
                <p className="text-amber-100">10:00 - 18:00h</p>
                <p className="mt-3">Sábados</p>
                <p className="text-amber-100">10:00 - 14:00h</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg">
              <h3 className="font-serif text-2xl text-neutral-900 mb-6">Envíanos un Mensaje</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors bg-white"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="tickets">Consulta sobre entradas</option>
                    <option value="visit">Visitas guiadas</option>
                    <option value="groups">Grupos y eventos</option>
                    <option value="other">Otra consulta</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-600 text-white py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
