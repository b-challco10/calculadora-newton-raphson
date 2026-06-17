import { Metadata } from "next";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Acerca de - Newton-Raphson Calculator",
  description: "Conoce más sobre la calculadora Newton-Raphson y su creador",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Acerca de
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              ¿Qué es la Calculadora Newton-Raphson?
            </h2>
            <p>
              Esta es una herramienta educativa interactiva diseñada para ayudar
              a estudiantes, ingenieros y entusiastas de las matemáticas a
              encontrar raíces de funciones utilizando el método de
              Newton-Raphson.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              ¿Cómo funciona?
            </h2>
            <p>
              El método de Newton-Raphson es un algoritmo iterativo para
              encontrar aproximaciones sucesivas a las raíces de una función. La
              calculadora:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Evalúa la función f(x) en cada iteración</li>
              <li>Calcula la derivada (numérica o manualmente)</li>
              <li>Itera hasta alcanzar la tolerancia deseada</li>
              <li>Muestra cada paso del proceso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Objetivo del proyecto
            </h2>
            <p>
              El objetivo es proporcionar una herramienta gratuita y accesible
              para el aprendizaje de métodos numéricos, combinando una interfaz
              moderna con cálculos precisos y transparentes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Tecnologías utilizadas
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                Next.js 14
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                React
              </span>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
}
