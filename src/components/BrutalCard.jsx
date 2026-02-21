export default function BrutalCard({ children, className }) {
  return (
    <div
      className={`border-2 border-black bg-white shadow-[6px_6px_0px_#000] p-6 ${className}`}
    >
      {children}
    </div>
  )
}