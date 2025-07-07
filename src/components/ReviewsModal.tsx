
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
          
          <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-md rounded-lg overflow-hidden bg-gray-100">
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
          
          <div className="text-center">
            <p className="text-gray-600">
              Guarda cosa dicono i nostri clienti sui prodotti Healthy Life
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewsModal;
