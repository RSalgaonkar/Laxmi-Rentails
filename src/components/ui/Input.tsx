import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => (
    <div className="space-y-2">
      {label && (
        <label className="block text-lg font-semibold text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-saffron-500 focus:ring-4 focus:ring-saffron-500/20 transition-all duration-300 shadow-lg hover:shadow-xl ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
);

Input.displayName = 'Input';
export default Input;