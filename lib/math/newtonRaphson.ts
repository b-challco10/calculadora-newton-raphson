import { Iteration, NewtonResult } from '@/types';
import { numericalDerivative } from './derivative';

export function evaluateFunction(expr: string, x: number): number {
  try {
    // Reemplazar operadores comunes para mayor compatibilidad
    const sanitizedExpr = expr
      .replace(/Math\.pow/g, '**')
      .replace(/Math\./g, 'Math.');
    
    const fn = new Function('x', `"use strict"; return (${sanitizedExpr});`);
    return fn(x);
  } catch (error) {
    throw new Error(`Error evaluando f(x) en x = ${x}: ${error}`);
  }
}

export function newtonRaphson(
  funcExpr: string,
  derivExpr: string,
  x0: number,
  tol: number,
  maxIter: number,
  useDeriv: boolean
): NewtonResult {
  const iterations: Iteration[] = [];
  let x = x0;
  let error = Infinity;
  let fVal: number;
  let derivVal: number;

  for (let i = 0; i < maxIter; i++) {
    // Evaluar f(x)
    try {
      fVal = evaluateFunction(funcExpr, x);
    } catch (error) {
      throw new Error(`Error evaluando f(x) en x = ${x}: ${error}`);
    }

    // Calcular derivada
    if (useDeriv && derivExpr && derivExpr.trim() !== '') {
      try {
        derivVal = evaluateFunction(derivExpr, x);
      } catch (error) {
        throw new Error(`Error evaluando f'(x) en x = ${x}: ${error}`);
      }
    } else {
      derivVal = numericalDerivative(funcExpr, x);
    }

    // Verificar derivada cercana a cero
    if (Math.abs(derivVal) < 1e-14) {
      throw new Error(`Derivada cero o muy cercana a cero en x = ${x}. El método no puede continuar.`);
    }

    // Calcular siguiente iteración
    const xNext = x - fVal / derivVal;
    error = Math.abs(xNext - x);

    // Guardar iteración
    iterations.push({
      iter: i,
      x: x,
      f: fVal,
      deriv: derivVal,
      error: error,
    });

    x = xNext;

    // Verificar convergencia
    if (error < tol) {
      const fLast = evaluateFunction(funcExpr, x);
      iterations.push({
        iter: i + 1,
        x: x,
        f: fLast,
        deriv: derivVal,
        error: error,
      });
      
      return {
        root: x,
        fRoot: fLast,
        iterations,
        iterationsCount: iterations.length,
        converged: true,
        message: `Convergió en ${iterations.length} iteraciones`,
      };
    }
  }

  // No convergió en maxIter
  const fLast = evaluateFunction(funcExpr, x);
  return {
    root: x,
    fRoot: fLast,
    iterations,
    iterationsCount: iterations.length,
    converged: false,
    message: `No convergió en ${maxIter} iteraciones. Último error: ${error.toExponential(4)}`,
  };
}