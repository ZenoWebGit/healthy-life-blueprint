
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoCarousel from '../components/VideoCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Sezione Formazione */}
      <section id="formazione" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Formazione delle Risorse Umane
            </h2>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Formazione e crescita imprenditoriale
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Selezioniamo candidati motivati alla ricerca di nuove opportunità e li guidiamo 
                in un percorso formativo strutturato. L'obiettivo è formare nuovi imprenditori autonomi, 
                in grado di creare valore e replicare il nostro modello nelle proprie città.
              </p>
              <p className="text-lg text-blue-600 font-semibold mt-4">
                Un'opportunità concreta per costruire il proprio futuro professionale.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-300 to-red-400 rounded-lg p-8 text-center">
              <div className="text-white">
                <h4 className="text-xl font-semibold mb-4">Scopri le nostre immagini di repertorio</h4>
                <p className="mb-4">Riguardanti formazioni, coaching, tutoring, tecnologie a disposizione e prodotti</p>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Coaching */}
      <section id="coaching" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Coaching Personalizzato
            </h2>
            <div className="text-center mb-12">
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
            
            <div className="grid md:grid-cols-3 gap-6">
              {['Chi siamo/Valori', 'Recruiting', 'Tecnologie'].map((title, index) => (
                <div key={index} className="bg-gradient-to-br from-red-300 to-red-400 rounded-lg p-6 text-center text-white">
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
                  <p className="text-sm opacity-90">clicchi → foto e testo</p>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {['Prodotti', 'Info', 'Contatti'].map((title, index) => (
                <div key={index} className="bg-gradient-to-br from-red-300 to-red-400 rounded-lg p-6 text-center text-white">
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
                  <p className="text-sm opacity-90">clicchi → foto e testo</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Tecnologia */}
      <section id="tecnologia" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Tecnologia e Benessere
            </h2>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                Innovazione e salute: tecnologie al servizio delle persone
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Promuoviamo il benessere attraverso soluzioni tecnologiche all'avanguardia. 
                Progetti come Active Pure, Hydro System, Biofarmantalgicplus e Anima Genomics 
                rappresentano il nostro impegno nella prevenzione e nella qualità della vita.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Utilizziamo solo prodotti di eccellenza, riconosciuti a livello internazionale 
                per la loro efficacia e innovazione.
              </p>
              <p className="text-lg text-yellow-600 font-semibold">
                La salute è il nostro obiettivo, la tecnologia il nostro alleato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Progetti */}
      <section id="progetti" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Progetti e Qualità
            </h2>
            <div className="text-center mb-12">
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
      </section>

      {/* Sezione Recruiting */}
      <section id="recruiting" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Recruiting
            </h2>
            <div className="text-center mb-12">
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
              
              <p className="text-lg text-red-600 font-semibold">
                Candidati ora e costruisci con noi un futuro di successo!
              </p>
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
    </div>
  );
};

export default Index;
