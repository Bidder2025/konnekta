import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Morten Hansen",
      company: "TechNorge AS",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Konnekta har hjulpet oss med å øke salget med over 40% på bare 3 måneder. Deres profesjonelle tilnærming og dedikasjon er imponerende.",
      stars: 5,
    },
    {
      name: "Ingrid Johansen",
      company: "Retail Solutions",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Vi har brukt Konnekta for møtebooking i over et år nå, og kvaliteten på møtene er konsekvent høy. Anbefales på det sterkeste!",
      stars: 5,
    },
    {
      name: "Lars Pedersen",
      company: "Innovasjon Norge",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Kundeservice-teamet hos Konnekta har vært en forlengelse av vårt eget team. De forstår vår bedrift og representerer oss på en utmerket måte.",
      stars: 4,
    },
  ]

  return (
    <section className="max-w-5xl mx-auto mt-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Hva våre kunder sier</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <div className="flex mt-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-gray-300" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <Quote className="absolute text-gray-200 -left-1 -top-1 w-8 h-8 transform rotate-180" />
              <p className="text-gray-700 italic pl-6 relative z-10">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
