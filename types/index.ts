export interface Iteration {
  iter: number;
  x: number;
  f: number;
  deriv: number;
  error: number;
}

export interface NewtonResult {
  root: number;
  fRoot: number;
  iterations: Iteration[];
  iterationsCount: number;
  converged: boolean;
  message?: string;
}

export interface CalculatorState {
  func: string;
  deriv: string;
  x0: number;
  tolerance: number;
  maxIter: number;
  useDerivative: boolean;
  result: NewtonResult | null;
  loading: boolean;
  error: string | null;
}

export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  step?: string;
  min?: string;
  helpText?: string;
  className?: string;
}