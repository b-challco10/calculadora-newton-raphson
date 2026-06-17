// components/layout/Footer.tsx
'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Columna 1: Información */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                Sobre la calculadora
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Calculadora interactiva del método de Newton-Raphson para encontrar raíces de funciones.
              </p>
            </div>

            {/* Columna 2: Enlaces útiles */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                Enlaces útiles
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/blog" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                  Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                  Documentación
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Acerca de
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Legal (NUEVO) */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                
                </li>
              </ul>
            </div>

            {/* Columna 4: Redes sociales */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                Conéctate
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://github.com/b-challco10/calculadora-newton-raphson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria y copyright con enlaces legales */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} Newton-Raphson CalculatorBCT. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <Link 
                  href="/privacy" 
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Política de Privacidad
                </Link>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <Link 
                  href="/terms" 
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Términos y Condiciones
                </Link>
                <span className="text-gray-300 dark:text-gray-600"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}