import { evaluateFunction } from './newtonRaphson';

export function numericalDerivative(
  funcExpr: string,
  x: number,
  h: number = 1e-7
): number {
  const fx1 = evaluateFunction(funcExpr, x + h);
  const fx2 = evaluateFunction(funcExpr, x - h);
  return (fx1 - fx2) / (2 * h);
}