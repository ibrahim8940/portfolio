import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="toast show fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl font-medium z-[1000] flex items-center gap-3 shadow-2xl">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
