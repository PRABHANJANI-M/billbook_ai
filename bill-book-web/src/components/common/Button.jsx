export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400',
    outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-100 dark:hover:text-slate-900',
    ghost: 'text-gray-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-900',
    danger: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500',
  }
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}