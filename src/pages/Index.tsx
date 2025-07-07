
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoCarousel from '../components/VideoCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import InfoModal from '../components/InfoModal';
import ReviewsModal from '../components/ReviewsModal';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const [reviewsModal, setReviewsModal] = useState<{ isOpen: boolean; productName: string }>({
    isOpen: false,
    productName: ''
  });

  const modalData = {
    'Chi siamo/Valori': {
      imageSrc: '/lovable-uploads/85a259f8-6146-4373-9dfa-ea202dec4ca2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    'Recruiting': {
      imageSrc: '/lovable-uploads/d44afeb9-7f49-4c80-a82c-c737a0694352.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue. Proin tincidunt fermentum lorem, eu porta arcu pellentesque sed. Vestibulum sed magna at nunc commodo placerat.'
    },
    'Tecnologie': {
      imageSrc: '/lovable-uploads/64478f32-a76d-4ef7-82d5-cc025d5896d2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.'
    },
    'Prodotti': {
      imageSrc: '/lovable-uploads/44f5d4e0-045a-4cc7-8b8e-27963ffcd48a.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
    },
    'Info': {
      imageSrc: '/lovable-uploads/65a2fbdd-0a04-494f-ad6f-d7a40e650e52.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.'
    },
    'Contatti': {
      imageSrc: '/lovable-uploads/79250853-3926-4521-b9e5-7179d637b923.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
    },
    'Formazione': {
      imageSrc: '/lovable-uploads/79250853-3926-4521-b9e5-7179d637b923.png',
      description: 'Al centro del nostro lavoro, poniamo la risorsa umana come protagonista assoluto, seguendola e prendendoci cura di essa in modo scrupoloso.'
    },
    'Coaching': {
      imageSrc: '/lovable-uploads/a404cd40-b3ad-4658-8af5-33cf491c37f3.png',
      description: 'Ogni individuo è unico, con obiettivi, sfide e talenti distinti. Il nostro approccio di coaching si basa su una profonda comprensione di queste caratteristiche individuali. Attraverso incontri, ascolto attivo e un\'analisi approfondita delle esigenze di ogni membro del team, sviluppiamo piani di coaching personalizzati. Questi piani mettono in evidenza le aree di miglioramento specifiche e identificano le strategie necessarie per superare gli ostacoli e raggiungere i risultati desiderati.'
    },
    'Eventi Aziendali': {
      imageSrc: '/lovable-uploads/2524bb98-c971-45e0-b910-a078e4ecc3e2.png',
      description: 'Conferenze e meeting internazionali. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Organizziamo eventi aziendali di alto livello per promuovere la crescita professionale e il networking. I nostri eventi sono progettati per creare valore e opportunità di business per tutti i partecipanti.'
    }
  };

  const openModal = (modalType: string) => {
    setSelectedModal(modalType);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  const openReviewsModal = (productName: string) => {
    setReviewsModal({ isOpen: true, productName });
  };

  const closeReviewsModal = () => {
    setReviewsModal({ isOpen: false, productName: '' });
  };

  // Ascolta gli eventi dal VideoCarousel
  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      openModal(event.detail);
    };

    window.addEventListener('openModal', handleOpenModal as EventListener);
    
    return () => {
      window.removeEventListener('openModal', handleOpenModal as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Sezione Formazione */}
      <section id="formazione" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Formazione delle Risorse Umane
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Formazione e crescita imprenditoriale
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Selezioniamo candidati motivati alla ricerca di nuove opportunità e li guidiamo 
                  in un percorso formativo strutturato. L'obiettivo è formare nuovi imprenditori autonomi, 
                  in grado di creare valore e replicare il nostro modello nelle proprie città.
                </p>
                <p className="text-lg text-blue-600 font-semibold">
                  Un'opportunità concreta per costruire il proprio futuro professionale.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/80e2061a-7efa-450c-bb24-8881204f8a6b.png" 
                  alt="Evento di formazione aziendale"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione I nostri Prodotti */}
      <section id="prodotti" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              I nostri Prodotti
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Prima riga */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/38f9c72b-007f-4455-af15-5ba68f9b6edb.png" 
                    alt="Mondo Hydro"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mondo Hydro</h3>
                  <p className="text-gray-600 mb-4">Innovativo sistema di trattamento dell'acqua basato sulla tecnologia dell'iperfiltrazione.</p>
                  <div className="text-center">
                    <Button 
                      onClick={() => openReviewsModal('Mondo Hydro')}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Guarda recensioni
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/4fe27953-13d3-4c56-a367-4e5bd0fc65f9.png" 
                    alt="Biofarmantalgic Plus"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Biofarmantalgic Plus</h3>
                  <p className="text-gray-600 mb-4">Sfruttando le nanotecnologie, agiamo sul sistema cellulare con effetti antalgici e antiossidanti.</p>
                  <div className="text-center">
                    <Button 
                      onClick={() => openReviewsModal('Biofarmantalgic Plus')}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Guarda recensioni
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/6cf7fc8e-711c-4913-98d7-ae5565d6846e.png" 
                    alt="The Coffy Way"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Coffy Way</h3>
                  <p className="text-gray-600 mb-4">Marchio unico che ti consente di scegliere tra una vasta gamma di miscele, nella quantità e compatibilità che preferisci.</p>
                  <div className="text-center">
                    <Button 
                      onClick={() => openReviewsModal('The Coffy Way')}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Guarda recensioni
                    </Button>
                  </div>
                </div>
              </div>

              {/* Seconda riga */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/5d103475-f959-427d-86d4-5d00c35ed9ac.png" 
                    alt="Mondo Tecnologia Aria"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mondo Tecnologia Aria</h3>
                  <p className="text-gray-600 mb-4">Attraverso la tecnologia Active Pure, garantiamo un'aria più pulita negli ambienti interni.</p>
                  <div className="text-center">
                    <Button 
                      onClick={() => openReviewsModal('Mondo Tecnologia Aria')}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Guarda recensioni
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/3f11de24-9e7f-4680-a50c-96ce3d8d2ca4.png" 
                    alt="Riposo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Riposo</h3>
                  <p className="text-gray-600 mb-4">Ricerchiamo il sistema di riposo ideale per il benessere quotidiano.</p>
                  <div className="text-center">
                    <Button 
                      onClick={() => openReviewsModal('Riposo')}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Guarda recensioni
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/5afa40bd-f6ad-425f-89a5-515d975589a0.png" 
                    alt="Anima Genomics"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Anima Genomics</h3>
                  <p className="text-gray-600 mb-4">Siamo leader nella genomica, all'avanguardia globalmente. Offriamo test del DNA avanzati e completi.</p>
                  <div className="text-center">
                    <Button 
                      onClick={() => openReviewsModal('Anima Genomics')}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Guarda recensioni
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Coaching */}
      <section id="coaching" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Coaching Personalizzato
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/c759b66a-c6a9-43dc-bdc1-0b14d5fb3237.png" 
                  alt="Sessione di coaching professionale"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-semibold text-red-600 mb-4">
                  Coaching professionale su misura
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ogni persona è unica. Il nostro approccio al coaching tiene conto delle caratteristiche 
                  individuali, delle ambizioni e delle potenzialità. Attraverso incontri dedicati, 
                  ascolto attivo e analisi dei bisogni, elaboriamo piani personalizzati di crescita.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Supportiamo ogni membro del team nello sviluppo delle proprie competenze e nel 
                  raggiungimento degli obiettivi personali e professionali.
                </p>
                <p className="text-lg text-red-600 font-semibold">
                  Coaching efficace per superare ostacoli e liberare il potenziale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Progetti */}
      <section id="progetti" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Progetti e Qualità
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/65a2fbdd-0a04-494f-ad6f-d7a40e650e52.png" 
                  alt="Grande evento aziendale con partecipanti internazionali"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Progetti concreti per il benessere
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ogni progetto è il risultato di una visione chiara e di una selezione rigorosa 
                  di prodotti e servizi. Promuoviamo principalmente prodotti Made in Italy, 
                  supportando fornitori locali e valorizzando il capitale umano del territorio.
                </p>
                <p className="text-lg text-blue-600 font-semibold">
                  Qualità, sostenibilità e impegno sociale guidano ogni nostra scelta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Recruiting */}
      <section id="recruiting" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Recruiting
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-4">
                  Lavora con noi: diventa protagonista del tuo successo
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hai passione per la vendita e credi in uno stile di vita sano e sostenibile? 
                  Entra a far parte del team di Healthy Life! Cerchiamo persone dinamiche, 
                  ambiziose e orientate ai risultati, pronte a fare la differenza.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Avrai accesso a una linea di prodotti Made in Italy di alta qualità e 
                  riceverai formazione continua per crescere professionalmente.
                </p>
                <p className="text-lg text-red-600 font-semibold">
                  Candidati ora e costruisci con noi un futuro di successo!
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/d44afeb9-7f49-4c80-a82c-c737a0694352.png" 
                  alt="Team building e networking professionale"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
              
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Posizioni aperte:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Consulenti commerciali
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Store Manager
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Formatori e coach certificati
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Responsabili risorse umane
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Esperti HydroCoaching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Valori */}
      <section id="valori" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              I Nostri Valori
            </h2>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-8">
                I valori che guidano Healthy Life
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Onestà</h4>
                  <p className="text-gray-700">
                    Operiamo con trasparenza e integrità, costruendo relazioni di fiducia 
                    durature con clienti e collaboratori.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Stabilità</h4>
                  <p className="text-gray-700">
                    Garantiamo continuità e solidità grazie a una visione strategica e 
                    a una gestione responsabile delle risorse.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Meritocrazia</h4>
                  <p className="text-gray-700">
                    Valorizziamo talento, impegno e competenza. Offriamo un ambiente di lavoro 
                    inclusivo, dove ogni persona può esprimere il proprio potenziale e ambire 
                    a ruoli di leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoCarousel />
      <ContactForm />
      <Footer />

      {/* Modali */}
      {selectedModal && modalData[selectedModal as keyof typeof modalData] && (
        <InfoModal
          isOpen={true}
          onClose={closeModal}
          title={selectedModal}
          imageSrc={modalData[selectedModal as keyof typeof modalData].imageSrc}
          description={modalData[selectedModal as keyof typeof modalData].description}
        />
      )}

      {/* Modal Recensioni */}
      <ReviewsModal
        isOpen={reviewsModal.isOpen}
        onClose={closeReviewsModal}
        productName={reviewsModal.productName}
      />
    </div>
  );
};

export default Index;
