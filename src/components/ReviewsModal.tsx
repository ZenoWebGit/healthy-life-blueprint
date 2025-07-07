
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const ReviewsModal = ({ isOpen, onClose, productName }: ReviewsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
            Recensioni - {productName}
          </DialogTitle>
          <DialogDescription>
            Guarda le recensioni video dei nostri clienti sui prodotti Healthy Life
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="http://zenoweb.it/videotest.mp4" type="video/mp4" />
                Il tuo browser non supporta la riproduzione video.
              </video>
            </div>
            
            <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="http://zenoweb.it/videotest.mp4" type="video/mp4" />
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewsModal;
