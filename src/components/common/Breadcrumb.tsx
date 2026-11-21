import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Crumb = {
  label: string;
  to?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Навигационная цепочка" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 font-body text-xs text-taupe">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} aria-hidden />}
            {item.to ? (
              <Link to={item.to} className="hover:text-graphite transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-graphite" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
