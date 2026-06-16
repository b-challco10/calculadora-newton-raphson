'use client';

import { Iteration } from '@/types';
import { formatNumber } from '@/utils/formatters';

interface IterationTableProps {
  iterations: Iteration[];
}

export function IterationTable({ iterations }: IterationTableProps) {
  if (!iterations || iterations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>No hay datos de iteraciones disponibles</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        📊 Detalle de iteraciones
      </h3>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">#</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700 dark:text-gray-300">xₙ</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700 dark:text-gray-300">f(xₙ)</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700 dark:text-gray-300">f'(xₙ)</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700 dark:text-gray-300">Error</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {iterations.map((it, index) => (
              <tr 
                key={index}
                className={`
                  ${index === iterations.length - 1 
                    ? 'bg-green-50 dark:bg-green-900/20 font-medium' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
                  }
                  transition-colors duration-150
                `}
              >
                <td className="px-4 py-2.5 text-gray-600 dark:text-gray-400 font-mono">
                  {it.iter}
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">
                  {formatNumber(it.x, 8)}
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">
                  {formatNumber(it.f, 8)}
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">
                  {formatNumber(it.deriv, 8)}
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">
                  {formatNumber(it.error, 8)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">
        Mostrando {iterations.length} iteraciones
      </p>
    </div>
  );
}