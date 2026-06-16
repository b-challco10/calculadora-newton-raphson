export function formatNumber(value: number, decimals: number = 8): string {
  if (value === undefined || value === null || isNaN(value)) {
    return '—';
  }
  
  if (!isFinite(value)) {
    return value > 0 ? '∞' : '-∞';
  }

  // Si el número es muy pequeño o muy grande, usar notación exponencial
  if (Math.abs(value) < 1e-10 || Math.abs(value) > 1e10) {
    return value.toExponential(decimals);
  }

  return value.toFixed(decimals);
}

export function formatIterationNumber(value: number): string {
  return value.toString().padStart(3, ' ');
}