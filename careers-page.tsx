import { Clock, Users, Briefcase, ArrowLeft, Upload, Phone, Mail, User } from "lucide-react"
import Link from "next/link"
import KonnektaLogo from "./logo"

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 text-gray-900 p-8">
      <header className="flex flex-col md:flex-row items-center justify-between mb-12 max-w-6xl mx-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <KonnektaLogo />
        </div>
        <nav className="flex space-x-6 text-green-800 font-medium">
          <Link href="/" className="hover:underline hover:text-green-600 transition-colors">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-sm hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Tilbake til hovedsiden
            </button>
          </Link>
          <a href="#stillinger" className="hover:underline hover:text-green-600 transition-colors">
            Ledige stillinger
          </a>
          <a href="#hvorfor-konnekta" className="hover:underline hover:text-green-600 transition-colors">
            Hvorfor Konnekta
          </a>
        </nav>
      </header>

      {/* Hero section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Bli en del av Konnekta-teamet</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Vi søker dyktige og motiverte medarbeidere som vil være med på å skape vekst for våre kunder. Hos oss får du
          muligheten til å utvikle deg i et dynamisk og støttende miljø.
        </p>
      </section>

      {/* Why work with us section */}
      <section id="hvorfor-konnekta" className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600">Hvorfor jobbe hos Konnekta?</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 text-center">
            <Users className="mx-auto mb-4 text-green-500" size={32} />
            <h3 className="text-xl font-bold mb-2 text-green-700">Sterkt team</h3>
            <p>Jobb sammen med erfarne og engasjerte kolleger i et støttende miljø hvor alle bidrar til suksess.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center">
            <Briefcase className="mx-auto mb-4 text-blue-500" size={32} />
            <h3 className="text-xl font-bold mb-2 text-blue-700">Karriereutvikling</h3>
            <p>Vi investerer i våre ansatte med opplæring, mentoring og muligheter for å vokse i organisasjonen.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 text-center">
            <Clock className="mx-auto mb-4 text-green-500" size={32} />
            <h3 className="text-xl font-bold mb-2 text-green-700">Fleksibilitet</h3>
            <p>Vi tilbyr fleksible arbeidstider og mulighet for hjemmekontor for å skape en god work-life balance.</p>
          </div>
        </div>
      </section>

      {/* Job application form section */}
      <section id="stillinger" className="max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600">Ledige stillinger</h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-700 mb-6">Søk på jobb hos oss</h3>
          <p className="text-gray-700 mb-8">
            Vi er alltid på utkikk etter dyktige medarbeidere som kan bidra til vår vekst. Fyll ut skjemaet under for å
            søke på jobb hos oss.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  <User size={16} className="inline mr-2" />
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="Ditt fulle navn"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone size={16} className="inline mr-2" />
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                  placeholder="+47 XXX XX XXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                <Mail size={16} className="inline mr-2" />
                E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                placeholder="din.epost@eksempel.no"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                <Briefcase size={16} className="inline mr-2" />
                Hvilken stilling søker du?
              </label>
              <select
                id="position"
                name="position"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              >
                <option value="">Velg stilling</option>
                <option value="telefonselger">Telefonselger - Nysalg</option>
                <option value="kundeservice">Kundeservicemedarbeider</option>
                <option value="motebooker">Møtebooker</option>
                <option value="annet">Annet / Åpen søknad</option>
              </select>
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                <Upload size={16} className="inline mr-2" />
                Last opp CV
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-green-500 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
                    >
                      <span>Last opp en fil</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">eller dra og slipp</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX opptil 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Kort om deg selv (valgfritt)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                placeholder="Fortell oss litt om deg selv, din erfaring og hvorfor du ønsker å jobbe hos oss..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center"
              >
                <Upload className="mr-2" size={20} />
                Send søknad
              </button>
            </div>
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
