'use client';

import { NewtonResult } from '@/types';
import { formatNumber } from '@/utils/formatters';

interface ResultDisplayProps {
  result: NewtonResult;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div className="animate-fade-in bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-5 my-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Raíz aproximada
          </p>
          <p className="text-xl font-bold text-primary-700 dark:text-primary-300 font-mono">
            {formatNumber(result.root, 10)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Iteraciones
          </p>
          <p className="text-xl font-bold text-gray-800 dark:text-white">
            {result.iterationsCount}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            f(raíz)
          </p>
          <p className="text-xl font-bold text-gray-800 dark:text-white font-mono">
            {formatNumber(result.fRoot, 10)}
          </p>
        </div>
      </div>
      {result.message && (
        <div className="mt-3 pt-3 border-t border-primary-200 dark:border-primary-800">
          <p className={`text-sm font-medium ${result.converged ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
            {result.message}
          </p>
        </div>
      )}
    </div>
  );
}