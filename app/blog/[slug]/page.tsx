import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { posts } from '../data/posts';
import * as Icons from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Mapeo de nombres de íconos a componentes
const iconMap: Record<string, React.ElementType> = {
  Calculator: Icons.Calculator,
  History: Icons.History,
  Microscope: Icons.Microscope,
  FileText: Icons.FileText, // Fallback
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${post.title} - Newton-Raphson Calculator`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const IconComponent = iconMap[post.iconName] || Icons.FileText;

  // Convertir el contenido markdown a HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Títulos
        if (line.startsWith('## ')) {
          return `<h2 key="${index}" class="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">${line.slice(3)}</h2>`;
        }
        if (line.startsWith('### ')) {
          return `<h3 key="${index}" class="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">${line.slice(4)}</h3>`;
        }
        // Listas
        if (line.startsWith('- ')) {
          return `<li key="${index}" class="ml-4 text-gray-700 dark:text-gray-300">${line.slice(2)}</li>`;
        }
        if (line.match(/^\d+\. /)) {
          return `<li key="${index}" class="ml-4 text-gray-700 dark:text-gray-300">${line}</li>`;
        }
        // Negrita
        if (line.includes('**')) {
          let formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return `<p key="${index}" class="text-gray-700 dark:text-gray-300 my-2">${formatted}</p>`;
        }
        // Párrafos vacíos
        if (line.trim() === '') {
          return '';
        }
        // Párrafos normales
        return `<p key="${index}" class="text-gray-700 dark:text-gray-300 my-2">${line}</p>`;
      })
      .filter(Boolean)
      .join('\n');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6"
      >
        ← Volver al blog
      </Link>

      <Card className="p-8">
        <div className="flex items-center gap-3 mb-4">
          {/* 👇 Ícono en lugar de emoji */}
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
            <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </Card>
    </div>
  );
}