
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const ReviewsModal = ({ isOpen, onClose, productName }: ReviewsModalProps) => {
  const isCoffyWay = productName === "The Coffy Way";
  const isBiofarmantalgicPlus = productName === "Biofarmantalgic Plus";
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
            Recensioni - {productName}
          </DialogTitle>
          <DialogDescription>
            {isCoffyWay 
              ? "Guarda le recensioni video dei nostri clienti sui prodotti Healthy Life"
              : isBiofarmantalgicPlus
              ? "Guarda le testimonianze dei nostri clienti su Biofarmantalgic Plus"
              : `Recensioni per ${productName}`
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {isCoffyWay ? (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="https://zenoweb.it/recensionecaffe.mp4" type="video/mp4" />
                    Il tuo browser non supporta la riproduzione video.
                  </video>
                </div>
                
                <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="https://zenoweb.it/recensionecaffe2.mp4" type="video/mp4" />
                    Il tuo browser non supporta la riproduzione video.
                  </video>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Guarda cosa dicono i nostri clienti sui prodotti Healthy Life
                </p>
                
                <a 
                  href="https://beacons.ai/healthylifesrls?fbclid=PAZXh0bgNhZW0CMTEAAadA3kn5URCJFuHaXGYZ1xrtyK4DuMLS2UTVxzF-jG5J4RIyF2tndUjzm0CEyg_aem_s_jh-v8MUe4LERMSTByk_A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Prenota consulenza Gratuita
                </a>
              </div>
            </>
          ) : isBiofarmantalgicPlus ? (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="https://www.biofarmantalgicplus.com/wp-content/uploads/2019/06/sindrome-gambe-senza-riposo.mp4" type="video/mp4" />
                    Il tuo browser non supporta la riproduzione video.
                  </video>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="https://www.biofarmantalgicplus.com/wp-content/uploads/2014/12/fasciano_rosa.mp4" type="video/mp4" />
                    Il tuo browser non supporta la riproduzione video.
                  </video>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Scopri le testimonianze dei nostri clienti su Biofarmantalgic Plus
                </p>
                
                <a 
                  href="https://beacons.ai/healthylifesrls?fbclid=PAZXh0bgNhZW0CMTEAAadA3kn5URCJFuHaXGYZ1xrtyK4DuMLS2UTVxzF-jG5J4RIyF2tndUjzm0CEyg_aem_s_jh-v8MUe4LERMSTByk_A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Prenota consulenza Gratuita
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Recensioni per {productName} disponibili prossimamente
              </p>
              <div className="mt-6">
                <a 
                  href="https://beacons.ai/healthylifesrls?fbclid=PAZXh0bgNhZW0CMTEAAadA3kn5URCJFuHaXGYZ1xrtyK4DuMLS2UTVxzF-jG5J4RIyF2tndUjzm0CEyg_aem_s_jh-v8MUe4LERMSTByk_A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Prenota consulenza Gratuita
                </a>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewsModal;
