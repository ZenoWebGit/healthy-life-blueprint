
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
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&rel=0&modestbranding=1"
                title="Recensione prodotto Healthy Life 1"
                className="w-full h-full border-0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0&mute=1&rel=0&modestbranding=1"
                title="Recensione prodotto Healthy Life 2"
                className="w-full h-full border-0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-md rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&mute=1&rel=0&modestbranding=1"
                title="Recensione prodotto Healthy Life 3"
                className="w-full h-full border-0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
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
