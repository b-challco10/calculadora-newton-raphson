import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Newton-Raphson Calculator',
  description: 'Política de privacidad de la calculadora Newton-Raphson',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Política de Privacidad
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
              1. Introducción
            </h2>
            <p>
              En Newton-Raphson Calculator valoramos tu privacidad. Esta política
              explica cómo recopilamos, usamos y protegemos tu información cuando
              visitas nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              2. Datos que recopilamos
            </h2>
            <p>Recopilamos información limitada para mejorar tu experiencia:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo de navegación</li>
              <li><strong>Cookies:</strong> Preferencias de tema (dark/light mode)</li>
              <li><strong>Datos de entrada:</strong> Las funciones que ingresas (solo para el cálculo)</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              Importante: <strong>NO almacenamos</strong> tus datos de entrada.
              Todos los cálculos se realizan localmente en tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              3. Cookies
            </h2>
            <p>
              Utilizamos cookies esenciales para:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Recordar tu preferencia de tema (dark/light)</li>
              <li>Mejorar el rendimiento del sitio</li>
            </ul>
            <p className="mt-2">
              Puedes desactivar las cookies en la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              4. Anuncios de Google
            </h2>
            <p>
              Este sitio utiliza Google AdSense para mostrar anuncios. Google puede
              recopilar información sobre tu visita para personalizar los anuncios.
              Puedes obtener más información en la 
              <a 
                href="https://policies.google.com/technologies/partner-sites" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline mx-1"
              >
                Política de Privacidad de Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              5. Seguridad
            </h2>
            <p>
              Implementamos medidas de seguridad para proteger tu información.
              Sin embargo, ninguna transmisión por internet es 100% segura.
            </p>
          </section>



          <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Esta política puede actualizarse ocasionalmente. Revisa esta página para estar al día.
            </p>
          </section>
        </div>
      </Card>
    </div>
  );
}