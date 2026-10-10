export default function Badge({ children, color = 'green' }) {
  const colors = {
    green: 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300',
    yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300',
    purple: 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300',
    gray: 'bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-200',
  }
  return (
    <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${colors[color] || colors.gray}`}>
      {children}
    </span>
  )
}