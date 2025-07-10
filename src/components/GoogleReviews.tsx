
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulazione di recensioni Google (in un'app reale, queste verrebbero da un'API)
  const mockReviews: Review[] = [
    {
      id: '1',
      author: 'Marco R.',
      rating: 5,
      text: 'Esperienza eccellente con Healthy Life. Prodotti di qualità e personale molto competente. Il sistema di filtrazione Mondo Hydro ha migliorato notevolmente la qualità dell\'acqua di casa.',
      date: '2 settimane fa'
    },
    {
      id: '2',
      author: 'Giulia M.',
      rating: 5,
      text: 'Consiglio vivamente Healthy Life! Il coaching personalizzato mi ha aiutato molto nel mio percorso professionale. Azienda seria e affidabile.',
      date: '1 mese fa'
    },
    {
      id: '3',
      author: 'Alessandro P.',
      rating: 4,
      text: 'Ottimi prodotti per il benessere. Il caffè The Coffy Way è davvero buono e il servizio clienti è sempre disponibile e cortese.',
      date: '3 settimane fa'
    },
    {
      id: '4',
      author: 'Francesca L.',
      rating: 5,
      text: 'Partnership professionale fantastica. La formazione ricevuta è stata di altissimo livello e mi ha permesso di crescere professionalmente.',
      date: '2 mesi fa'
    },
    {
      id: '5',
      author: 'Roberto C.',
      rating: 5,
      text: 'Prodotti innovativi e di qualità. Particolare menzione per Biofarmantalgic Plus che ha davvero fatto la differenza per il mio benessere.',
      date: '1 settimana fa'
    },
    {
      id: '6',
      author: 'Laura S.',
      rating: 4,
      text: 'Azienda che punta davvero sulla qualità e sul Made in Italy. Apprezzo molto l\'approccio sostenibile e l\'attenzione alle persone.',
      date: '3 settimane fa'
    }
  ];

  useEffect(() => {
    // Simulazione di caricamento delle recensioni
    const loadReviews = async () => {
      setLoading(true);
      // Simula una chiamata API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReviews(mockReviews);
      setLoading(false);
    };

    loadReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0';

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Recensioni dei Clienti
            </h2>
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded-lg p-6 h-48"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Recensioni dei Clienti
          </h2>
          
          {/* Statistiche generali */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-50 rounded-lg px-6 py-3">
              <div className="flex items-center gap-1">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
              <span className="text-gray-600">({reviews.length} recensioni)</span>
            </div>
          </div>

          {/* Griglia delle recensioni */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {review.author}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Link a Google Reviews */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?sa=X&sca_esv=f7156635f6e9a261&tbm=lcl&q=Healthylife+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzQ2MTSwMLIwMzSxNDUzMbU02cDI-IpRzCM1MackozInMy1VISg1OTWvODM_L3MRKw4JAG921kBMAAAA&rldimm=6134108286149564594&hl=it-IT&ved=2ahUKEwiI0Mact7KOAxWphP0HHYMFARoQ9fQKegQIRhAF&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Vedi tutte le recensioni su Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
