'use client';

import { InputFieldProps } from '@/types';

export function InputField({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  step,
  min,
  helpText,
  className = '',
}: InputFieldProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        step={step}
        min={min}
        className={`
          w-full px-4 py-2.5 rounded-xl
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700
          text-gray-900 dark:text-white
          placeholder-gray-400 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-all duration-200
          hover:border-gray-400 dark:hover:border-gray-500
        `}
      />
      {helpText && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {helpText}
        </p>
      )}
    </div>
  );
}