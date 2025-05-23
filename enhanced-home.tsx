import { CircleUserRound, PhoneCall, CalendarCheck, MessageSquare } from "lucide-react"
import Link from "next/link"
import TestimonialsSection from "./testimonials-section"
import StatsSection from "./stats-section"
import ContactForm from "./contact-form"

export default function EnhancedHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50 text-gray-900 p-8">
      <header className="flex flex-col md:flex-row items-center justify-between mb-12 max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="bg-blue-100 text-blue-800 rounded-full w-14 h-14 flex items-center justify-center">
            <MessageSquare size={28} />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight">Konnekta.no</h1>
        </div>
        <nav className="flex space-x-6 text-blue-800 font-medium">
          <a href="#omoss" className="hover:underline">
            Om oss
          </a>
          <a href="#tjenester" className="hover:underline">
            Våre tjenester
          </a>
          <a href="#testimonials" className="hover:underline">
            Kundehistorier
          </a>
          <a href="#kontakt" className="hover:underline">
            Ta kontakt
          </a>
        </nav>
      </header>

      <section
        className="relative max-w-5xl mx-auto text-center py-32 px-4 rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581093588401-8500c1b3f3fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vi tar oss av veksten for dere.</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Profesjonell telefonkommunikasjon som gir resultater for din bedrift
          </p>
          <Link href="/bli-med">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg hover:bg-orange-600 transition">
              Bli med på laget
            </button>
          </Link>
        </div>
      </section>

      <section id="omoss" className="max-w-4xl mx-auto space-y-6 mt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Om oss</h2>
        <p className="text-lg text-gray-700 text-center">
          Vi er et fargerikt og moderne callsenter som hjelper din bedrift å vokse gjennom målrettet kommunikasjon.
        </p>
        <p className="text-lg text-gray-700 text-center">
          Med over 10 års erfaring i bransjen har vi utviklet effektive metoder for å nå ut til potensielle kunder,
          booke kvalifiserte møter og levere førsteklasses kundeservice.
        </p>
        <p className="text-lg text-gray-700 text-center">
          Vårt team består av dyktige kommunikatører som brenner for å skape resultater for våre kunder.
        </p>
      </section>

      <section id="tjenester" className="max-w-5xl mx-auto mt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-600">Våre tjenester</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center transform transition-transform duration-300 hover:scale-105">
            <PhoneCall className="mx-auto mb-4 text-blue-500" size={32} />
            <h3 className="text-xl font-bold mb-2">Nysalg</h3>
            <p>
              Vi tar kontakt med potensielle kunder og presenterer dine produkter og tjenester på en profesjonell og
              engasjerende måte.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 text-center transform transition-transform duration-300 hover:scale-105">
            <CalendarCheck className="mx-auto mb-4 text-green-500" size={32} />
            <h3 className="text-xl font-bold mb-2">Møtebooking</h3>
            <p>
              Vi sørger for kvalifiserte møter med beslutningstakere, slik at ditt salgsteam kan fokusere på å lukke
              salget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-500 text-center transform transition-transform duration-300 hover:scale-105">
            <CircleUserRound className="mx-auto mb-4 text-purple-500" size={32} />
            <h3 className="text-xl font-bold mb-2">Kundeservice</h3>
            <p>
              Vi håndterer dine kundehenvendelser med profesjonalitet og empati – og sørger for høy kundetilfredshet.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      <section id="testimonials" className="mt-24">
        <TestimonialsSection />
      </section>

      <section id="kontakt" className="max-w-4xl mx-auto mt-24 text-center px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Ta kontakt</h2>
        <p className="text-gray-700 mb-10">
          Ønsker du å samarbeide med oss eller har spørsmål? Fyll ut skjemaet under eller send oss en e-post på{" "}
          <a href="mailto:kontakt@konnekta.no" className="text-blue-600 underline">
            kontakt@konnekta.no
          </a>
        </p>

        <ContactForm />
      </section>

      <footer className="mt-20 text-center text-sm text-gray-600">
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-8 mt-16 grid md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="font-bold text-lg mb-4">Konnekta.no</h3>
            <p>Vi hjelper din bedrift å vokse gjennom målrettet kommunikasjon.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <p>E-post: kontakt@konnekta.no</p>
            <p>Telefon: +47 123 45 678</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Følg oss</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-600">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-600">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-600">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">© {new Date().getFullYear()} Konnekta.no – All rights reserved.</div>
      </footer>
    </main>
  )
}
