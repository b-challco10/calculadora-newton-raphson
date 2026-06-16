'use client';

import { useState } from 'react';
import { CalculatorState, NewtonResult } from '@/types';
import { newtonRaphson } from '@/lib/math/newtonRaphson';
import { InputField } from './InputField';
import { ResultDisplay } from './ResultDisplay';
import { IterationTable } from './IterationTable';
import { ErrorAlert } from './ErrorAlert';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Spinner } from '../ui/Spinner';

export function NewtonRaphsonCalculator() {
  const [state, setState] = useState<CalculatorState>({
    func: 'x**3 - 2*x - 5',
    deriv: '',
    x0: 2,
    tolerance: 1e-7,
    maxIter: 50,
    useDerivative: false,
    result: null,
    loading: false,
    error: null,
  });

  const handleCalculate = async () => {
    // Validar

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Simular async (podría ser llamada a API)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const result = newtonRaphson(
        state.func,
        state.deriv,
        state.x0,
        state.tolerance,
        state.maxIter,
        state.useDerivative
      );

      setState(prev => ({
        ...prev,
        result,
        loading: false,
        error: result.converged ? null : result.message || 'No convergió',
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
      }));
    }
  };

  const handleClear = () => {
    setState(prev => ({
      ...prev,
      result: null,
      error: null,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <Card className="p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
          🧮 Calculadora Newton-Raphson
        </h1>

        <div className="space-y-4">
          <InputField
            label="f(x)"
            value={state.func}
            onChange={(value) => setState(prev => ({ ...prev, func: value }))}
            placeholder="ej: x**3 - 2*x - 5"
            helpText="Usa Math.sin(x), Math.exp(x), etc."
          />

          <InputField
            label="f'(x)"
            value={state.deriv}
            onChange={(value) => setState(prev => ({ ...prev, deriv: value }))}
            placeholder="Opcional (se calcula automáticamente)"
            helpText="Dejar vacío para derivación numérica"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="x₀"
              value={state.x0.toString()}
              onChange={(value) => setState(prev => ({ ...prev, x0: parseFloat(value) || 0 }))}
              type="number"
              step="any"
            />
            <InputField
              label="Tolerancia"
              value={state.tolerance.toString()}
              onChange={(value) => setState(prev => ({ ...prev, tolerance: parseFloat(value) || 1e-7 }))}
              type="number"
              step="any"
              min="0"
            />
            <InputField
              label="Max Iter."
              value={state.maxIter.toString()}
              onChange={(value) => setState(prev => ({ ...prev, maxIter: parseInt(value) || 50 }))}
              type="number"
              min="1"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="useDeriv"
              checked={state.useDerivative}
              onChange={(e) => setState(prev => ({ ...prev, useDerivative: e.target.checked }))}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <label htmlFor="useDeriv" className="text-sm text-gray-700 dark:text-gray-300">
              Usar derivada manual (si está vacía, se calculará automáticamente)
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleCalculate}
              disabled={state.loading}
              className="flex-1"
            >
              {state.loading ? <Spinner /> : 'Calcular raíz'}
            </Button>
            <Button
              onClick={handleClear}
              variant="secondary"
              className="flex-1"
            >
              Limpiar
            </Button>
          </div>

          {state.error && <ErrorAlert message={state.error} />}

          {state.result && (
            <>
              <ResultDisplay result={state.result} />
              <IterationTable iterations={state.result.iterations} />
            </>
          )}
        </div>
      </Card>
    </div>
  );
}