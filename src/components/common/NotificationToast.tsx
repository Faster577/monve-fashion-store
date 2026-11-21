import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';

export function NotificationToast() {
  const notifications = useUiStore((s) => s.notifications);
  const dismiss = useUiStore((s) => s.dismissNotification);

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none"
      aria-live="polite"
    >
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex items-center gap-3 bg-graphite text-ivory px-5 py-3.5 shadow-lg min-w-[280px] max-w-[360px]"
            role="status"
          >
            <p className="font-body text-sm flex-1">{n.message}</p>
            <button
              type="button"
              onClick={() => dismiss(n.id)}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Закрыть уведомление"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
