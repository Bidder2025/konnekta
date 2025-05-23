import { Users, TrendingUp, Award, Clock } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "500+",
      label: "Fornøyde kunder",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      value: "40%",
      label: "Gjennomsnittlig salgsøkning",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      value: "98%",
      label: "Kundetilfredshet",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      value: "10+ år",
      label: "Erfaring i bransjen",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto mt-24 px-4 py-12 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">Konnekta i tall</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
