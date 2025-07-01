import { CircleUserRound, PhoneCall, CalendarCheck } from "lucide-react"
import Link from "next/link"
import KonnektaLogo from "./logo"
import Image from "next/image"

export default function EnhancedHomeGreen() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 text-gray-900 p-8">
      <header className="flex flex-col md:flex-row items-center justify-between mb-12 max-w-6xl mx-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <KonnektaLogo />
        </div>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6 text-green-800 font-medium">
            <a href="#tjenester" className="hover:underline hover:text-green-600 transition-colors">
              Våre tjenester
            </a>
            <a href="#omoss" className="hover:underline hover:text-green-600 transition-colors">
              Om oss
            </a>
            <a href="#kontakt" className="hover:underline hover:text-green-600 transition-colors">
              Ta kontakt
            </a>
          </nav>
          <Link href="/careers">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-sm hover:from-green-600 hover:to-green-700 transition shadow-lg">
              Søk jobb
            </button>
          </Link>
        </div>
      </header>

      {/* Hero section with hover effect */}
      <section className="relative max-w-5xl mx-auto text-center py-16 px-4 rounded-xl overflow-hidden group">
        {/* Image container with hover effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/call-center-background.jpg"
              alt="Call center team working"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vi tar oss av veksten for dere.</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Profesjonell telefonkommunikasjon som gir resultater for din bedrift
          </p>
          <Link href="/bli-med">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg hover:from-green-600 hover:to-green-700 transition shadow-lg">
              Bli med på laget
            </button>
          </Link>
        </div>
      </section>

      <section id="tjenester" className="max-w-5xl mx-auto mt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600">Våre tjenester</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 text-center transform transition-transform duration-300 hover:scale-105">
            <PhoneCall className="mx-auto mb-4 text-green-500" size={32} />
            <h3 className="text-xl font-bold mb-2 text-green-700">Nysalg</h3>
            <p>
              Vi tar kontakt med potensielle kunder og presenterer dine produkter og tjenester på en profesjonell og
              engasjerende måte.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center transform transition-transform duration-300 hover:scale-105">
            <CalendarCheck className="mx-auto mb-4 text-blue-500" size={32} />
            <h3 className="text-xl font-bold mb-2 text-blue-700">Møtebooking</h3>
            <p>
              Vi sørger for kvalifiserte møter med beslutningstakere, slik at ditt salgsteam kan fokusere på å lukke
              salget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 text-center transform transition-transform duration-300 hover:scale-105">
            <CircleUserRound className="mx-auto mb-4 text-green-500" size={32} />
            <h3 className="text-xl font-bold mb-2 text-green-700">Kundeservice</h3>
            <p>
              Vi håndterer dine kundehenvendelser med profesjonalitet og empati – og sørger for høy kundetilfredshet.
            </p>
          </div>
        </div>
      </section>

      <section id="omoss" className="max-w-4xl mx-auto space-y-6 mt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Om oss</h2>
        <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 text-center">
            Vi er et moderne callsenter som hjelper din bedrift å vokse gjennom målrettet kommunikasjon.
          </p>
          <p className="text-lg text-gray-700 text-center mt-4">
            Etter over 10 år i bransjen vet vi hva som fungerer. Vi hjelper deg med å nå riktige folk, booke gode møter og gi kundene dine en god opplevelse.
          </p>
          <p className="text-lg text-gray-700 text-center mt-4">
            Hos oss jobber folk som virkelig kan snakke med mennesker – og som bryr seg om å skape resultater.
          </p>
        </div>
      </section>

      <section id="kontakt" className="max-w-4xl mx-auto mt-24 text-center px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Ta kontakt</h2>
        <p className="text-gray-700 mb-10">
          Ønsker du å samarbeide med oss eller har spørsmål? Fyll ut skjemaet under eller send oss en e-post på{" "}
          <a href="mailto:kontakt@konnekta.no" className="text-green-600 underline">
            kontakt@konnekta.no
          </a>
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border-t-4 border-green-500">
          <h3 className="text-2xl font-bold mb-6 text-green-700">Send oss en forespørsel</h3>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Bedrift
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Hvilken tjeneste er du interessert i?
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              >
                <option value="nysalg">Nysalg</option>
                <option value="motebooking">Møtebooking</option>
                <option value="kundeservice">Kundeservice</option>
                <option value="annet">Annet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition flex items-center justify-center gap-2 w-full md:w-auto mx-auto shadow-md"
            >
              <Send size={18} />
              Send forespørsel
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-600">
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-8 mt-16 grid md:grid-cols-3 gap-8 px-4">
          <div>
            <div className="flex justify-center mb-4">
              <KonnektaLogo size="small" />
            </div>
            <p>Vi hjelper din bedrift å vokse gjennom målrettet kommunikasjon.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-700">Kontakt</h3>
            <p>E-post: kontakt@konnekta.no</p>
            <p>Telefon: +47 123 45 678</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-700">Følg oss</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-green-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">© {new Date().getFullYear()} Konnekta – All rights reserved.</div>
      </footer>
    </main>
  )
}

import { Send } from "lucide-react"
