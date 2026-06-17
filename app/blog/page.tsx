import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { posts } from './data/posts';
import * as Icons from 'lucide-react';
  // 👈 Importar todos los íconos

export const metadata: Metadata = {
  title: 'Blog - Newton-Raphson Calculator',
  description: 'Artículos educativos sobre el método de Newton-Raphson y métodos numéricos',
};

// Mapeo de nombres de íconos a componentes
const iconMap: Record<string, React.ElementType> = {
  Calculator: Icons.Calculator,
  History: Icons.History,
  Microscope: Icons.Microscope,
  Book: Icons.Book,
  // Puedes añadir más íconos aquí
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8 flex items-center gap-3">
        {/* 👇 Usar Icons.Book en lugar de Book */}
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
          <Icons.Book className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Artículos educativos sobre el método de Newton-Raphson
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => {
          const IconComponent = iconMap[post.iconName] || Icons.FileText; // Fallback
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {/* 👇 Ícono en lugar de emoji */}
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}