import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Newton-Raphson Calculator',
  description: 'Términos y condiciones de uso de la calculadora Newton-Raphson',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Términos y Condiciones
        </h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              1. Aceptación de los términos
            </h2>
            <p>
              Al usar esta calculadora, aceptas estos términos y condiciones.
              Si no estás de acuerdo, por favor no uses el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              2. Uso de la herramienta
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Educativo:</strong> La calculadora es una herramienta educativa
                para aprender sobre métodos numéricos.
              </li>
              <li>
                <strong>Precisión:</strong> Aunque nos esforzamos por la precisión,
                no garantizamos resultados exactos para todos los casos.
              </li>
              <li>
                <strong>Responsabilidad:</strong> Eres responsable de verificar los
                resultados obtenidos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              3. Propiedad intelectual
            </h2>
            <p>
              Todo el código, diseño y contenido de este sitio es propiedad de
              Newton-Raphson Calculator, a menos que se indique lo contrario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              4. Limitación de responsabilidad
            </h2>
            <p>
              Esta herramienta se proporciona &quot;tal cual&quot;, sin garantías
              de ningún tipo. No somos responsables por daños derivados del uso
              de la calculadora.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              5. Cambios en los términos
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Los cambios entrarán en vigor al ser publicados.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Al continuar usando este sitio, aceptas estos términos y condiciones.
            </p>
          </section>
        </div>
      </Card>
    </div>
  );
}