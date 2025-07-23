
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactReason: '',
    cv: null as File | null,
    privacyConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Inizio invio form...');
      
      // Validazione del campo motivo del contatto
      if (!formData.contactReason) {
        toast({
          title: "Campo obbligatorio",
          description: "Seleziona il motivo del contatto",
          variant: "destructive",
        });
        return;
      }
      
      // Gestisce l'upload del CV su Supabase se presente
      let cvUrl = "Nessuno";
      
      if (formData.cv) {
        console.log('CV presente, caricamento su Supabase:', formData.cv.name);
        
        // Genera un nome univoco per il file, sanificando il nome originale
        const timestamp = Date.now();
        const sanitizedName = formData.cv.name
          .toLowerCase()
          .replace(/[^a-z0-9.]/g, '_') // Sostituisce caratteri speciali con underscore
          .replace(/_{2,}/g, '_'); // Rimuove underscore multipli consecutivi
        const fileName = `cv_${timestamp}_${sanitizedName}`;
        
        try {
          // Upload del file su Supabase Storage
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('cv-uploads')
            .upload(fileName, formData.cv, {
              cacheControl: '3600',
              upsert: false
            });

          if (uploadError) {
            console.error('Errore upload CV:', uploadError);
            toast({
              title: "Errore nell'upload del CV",
              description: uploadError.message,
              variant: "destructive",
            });
            return;
          }

          // Ottieni l'URL pubblico del file
          const { data: { publicUrl } } = supabase.storage
            .from('cv-uploads')
            .getPublicUrl(fileName);

          cvUrl = publicUrl;
          console.log('CV caricato con successo:', cvUrl);
          
        } catch (error) {
          console.error('Errore durante l\'upload del CV:', error);
          toast({
            title: "Errore nell'upload del CV",
            description: "Si è verificato un errore durante l'upload del CV.",
            variant: "destructive",
          });
          return;
        }
      } else {
        console.log('Nessun CV presente');
      }

      // Prepara i dati per il webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        contactReason: formData.contactReason,
        privacyConsent: formData.privacyConsent,
        timestamp: new Date().toISOString(),
        cvUrl: cvUrl
      };

      console.log('Dati webhook:', webhookData);

      // Crea i parametri URL per la richiesta GET
      const params = new URLSearchParams();
      params.append('name', webhookData.name);
      params.append('email', webhookData.email);
      params.append('phone', webhookData.phone);
      params.append('message', webhookData.message);
      params.append('contactReason', webhookData.contactReason);
      params.append('privacyConsent', webhookData.privacyConsent.toString());
      params.append('timestamp', webhookData.timestamp);
      params.append('cvUrl', webhookData.cvUrl);

      const url = `https://carrierzeno.app.n8n.cloud/webhook/7671f5d9-cd15-4bc9-b772-c596025a27ab?${params.toString()}`;
      console.log('URL finale:', url);

      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
      });

      console.log('Risposta ricevuta');

      // Mostra messaggio di successo
      toast({
        title: "Messaggio inviato con successo!",
        description: "Ti contatteremo presto. Grazie per averci contattato.",
      });

      // Reset del form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactReason: '',
        cv: null,
        privacyConsent: false
      });

    } catch (error) {
      console.error('Errore nell\'invio del form:', error);
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      privacyConsent: e.target.checked
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
                <Select onValueChange={handleSelectChange}>
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

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleCheckboxChange}
                  className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacyConsent" className="text-white text-sm leading-relaxed">
                  Acconsento al trattamento dei dati personali, il consenso è necessario al fine di accedere al servizio. I dati saranno trattati come previsto dalle vigenti normative di sicurezza. Informativa sulla Privacy Policy
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia'}
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
