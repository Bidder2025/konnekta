import { Phone, Zap } from "lucide-react"

export default function KonnektaLogo({ size = "default" }) {
  const sizeClasses = {
    small: "w-10 h-10",
    default: "w-14 h-14",
    large: "w-20 h-20",
  }

  return (
    <div className="flex items-center space-x-3">
      <div className={`relative ${sizeClasses[size] || sizeClasses.default}`}>
        {/* Logo background with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-blue-600 shadow-lg"></div>

        {/* Inner circle */}
        <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
          {/* Stylized K with better positioning */}
          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 relative z-10">
            K
          </span>

          {/* Icons positioned to not overlap the K */}
          <Zap className="absolute -top-1 -right-1 w-4 h-4 text-green-500" />
          <Phone className="absolute bottom-0 -right-2 w-4 h-4 text-blue-600" />
        </div>

        {/* Decorative dots */}
        <div className="absolute w-2 h-2 rounded-full bg-green-400 -right-1 top-1/4"></div>
        <div className="absolute w-2 h-2 rounded-full bg-blue-400 -left-1 bottom-1/4"></div>
      </div>

      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-green-600">Kon</span>
          <span className="text-blue-600">nekta</span>
        </h1>
      </div>
    </div>
  )
}
