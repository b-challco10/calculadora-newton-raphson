import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Documentación - Newton-Raphson Calculator',
  description: 'Guía de uso de la calculadora Newton-Raphson',
};

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          📚 Documentación
        </h1>
        
        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              🎯 ¿Cómo usar la calculadora?
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                  1. Ingresa la función f(x)
                </h3>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl font-mono text-sm">
                  Ejemplo: <code className="text-primary-600 dark:text-primary-400">x**3 - 2*x - 5</code>
                </div>
                <p className="text-sm mt-1">
                  Puedes usar funciones de JavaScript como <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Math.sin(x)</code>, 
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Math.exp(x)</code>, 
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Math.log(x)</code>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                  2. (Opcional) Ingresa la derivada f'(x)
                </h3>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl font-mono text-sm">
                  Ejemplo: <code className="text-primary-600 dark:text-primary-400">3*x**2 - 2</code>
                </div>
                <p className="text-sm mt-1">
                  Si la dejas vacía, la calculadora calculará la derivada numéricamente.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                  3. Configura los parámetros
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>x₀:</strong> Valor inicial para el método</li>
                  <li><strong>Tolerancia:</strong> Precisión deseada (ej: 1e-7)</li>
                  <li><strong>Max Iteraciones:</strong> Límite para evitar bucles infinitos</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                  4. ¡Calcula!
                </h3>
                <p className="text-sm">
                  Presiona &quot;Calcular raíz&quot; y observa los resultados en tiempo real.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              💡 Ejemplos prácticos
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                  Ejemplo 1: x³ - 2x - 5 = 0
                </h4>
                <div className="text-sm space-y-1">
                  <p><strong>f(x):</strong> <code className="bg-white dark:bg-gray-800 px-1 rounded">x**3 - 2*x - 5</code></p>
                  <p><strong>f'(x):</strong> <code className="bg-white dark:bg-gray-800 px-1 rounded">3*x**2 - 2</code></p>
                  <p><strong>x₀:</strong> 2</p>
                  <p><strong>Resultado:</strong> 2.0945514815</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                  Ejemplo 2: cos(x) - x = 0
                </h4>
                <div className="text-sm space-y-1">
                  <p><strong>f(x):</strong> <code className="bg-white dark:bg-gray-800 px-1 rounded">Math.cos(x) - x</code></p>
                  <p><strong>f'(x):</strong> <code className="bg-white dark:bg-gray-800 px-1 rounded">-Math.sin(x) - 1</code></p>
                  <p><strong>x₀:</strong> 0.5</p>
                  <p><strong>Resultado:</strong> 0.7390851332</p>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                  Ejemplo 3: x² - 2 = 0
                </h4>
                <div className="text-sm space-y-1">
                  <p><strong>f(x):</strong> <code className="bg-white dark:bg-gray-800 px-1 rounded">x**2 - 2</code></p>
                  <p><strong>f'(x):</strong> <code className="bg-white dark:bg-gray-800 px-1 rounded">2*x</code></p>
                  <p><strong>x₀:</strong> 1</p>
                  <p><strong>Resultado:</strong> 1.4142135624 (√2)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              ⚠️ Errores comunes
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
              <li>
                <strong>Derivada cero:</strong> Si f'(x) = 0 en alguna iteración, el método falla.
                Prueba con otro valor inicial.
              </li>
              <li>
                <strong>No convergencia:</strong> Aumenta el número de iteraciones o prueba con otra x₀.
              </li>
              <li>
                <strong>Error de sintaxis:</strong> Verifica que la función esté bien escrita.
                Usa <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">*</code> para multiplicar.
              </li>
            </ul>
          </section>

          
        </div>
      </Card>
    </div>
  );
}