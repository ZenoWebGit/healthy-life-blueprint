
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactReason: '',
    cv: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Qui andrà la logica per inviare il form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      contactReason: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData({
        ...formData,
        cv: file
      });
    } else if (file) {
      alert('Si prega di caricare solo file PDF');
      e.target.value = '';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Form Contatti
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Ricerca continua di personale alle vendite.
            <br />
            Compila il form qui sotto se sei interessato e vuoi saperne di più.
          </p>
          
          <div className="bg-gradient-to-br from-red-300 to-red-400 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactReason" className="block text-white font-medium mb-2">
                  Motivi del contatto
                </label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none bg-white">
                    <SelectValue placeholder="Seleziona il motivo del contatto" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="informazioni">Informazioni</SelectItem>
                    <SelectItem value="candidatura">Candidatura</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.contactReason === 'candidatura' && (
                <div>
                  <label htmlFor="cv" className="block text-white font-medium mb-2">
                    Carica il tuo CV (solo formato PDF)
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  />
                  <p className="text-white/80 text-sm mt-1">
                    Accettiamo solo file in formato PDF
                  </p>
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none resize-none"
                  placeholder="Raccontaci qualcosa di te e delle tue motivazioni..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Invia Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
