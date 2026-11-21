import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
  amount?: number | 'some' | 'all';
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Conservative viewport so tall/image blocks still trigger reliably */
const VIEWPORT = { once: true, amount: 0.08 as const, margin: '0px 0px -40px 0px' };

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.08,
}: RevealProps) {
  const reduced = useReducedMotion();

  const offset = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { y: 0, x: 28 },
    right: { y: 0, x: -28 },
    none: { y: 0, x: 0 },
  }[direction];

  const variants: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0.01 : 0.65,
        delay: reduced ? 0 : delay,
        ease: EASE,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: VIEWPORT.margin }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function Stagger({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
}: StaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduced ? 0.01 : 0.55,
            ease: EASE,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
