import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../../components/animations/Reveal';
import { isValidEmail } from '../../utils/validation';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Введи адрес электронной почты');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Введи корректный адрес электронной почты');
      return;
    }

    setSuccess(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-beige/50">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide text-graphite">
            Оставайся на связи с MONVÉ
          </h2>
          <p className="mt-4 font-body text-sm text-taupe leading-relaxed">
            Новые коллекции, вдохновение и специальные предложения — первыми в
            твоей почте.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-6"
              >
                <p className="font-display text-2xl text-graphite">Спасибо!</p>
                <p className="mt-2 font-body text-sm text-taupe">
                  Адрес сохранён для демонстрации. Реальная рассылка не
                  отправляется.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-4 font-body text-xs tracking-[0.16em] uppercase border-b border-graphite pb-0.5 hover:opacity-60"
                >
                  Подписать другой адрес
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3"
                noValidate
              >
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Электронная почта
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="Твоя электронная почта"
                    className="w-full bg-transparent border border-graphite/30 px-4 py-3.5 font-body text-sm text-graphite placeholder:text-taupe/70 outline-none focus:border-graphite transition-colors"
                    aria-invalid={!!error}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                  />
                  {error && (
                    <p
                      id="newsletter-error"
                      className="mt-2 text-left font-body text-xs text-red-700"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors shrink-0"
                >
                  Подписаться
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
