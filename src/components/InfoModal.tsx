
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  description: string;
}

const InfoModal = ({ isOpen, onClose, title, imageSrc, description }: InfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={imageSrc}
              alt={title}
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
