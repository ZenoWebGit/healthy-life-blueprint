
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[9/16] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Ttye_hqBCMs"
                title="Recensione 1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="aspect-[9/16] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Ttye_hqBCMs"
                title="Recensione 2"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-md rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/MMTrvmm54LM"
                title="Recensione 3"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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
