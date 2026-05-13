import { Users, Zap, Heart, Building2, Wifi, FlaskConical, Dumbbell, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/ui/SectionTitle";

const pilares = [
  {
    id: 1,
    icon: Users,
    titulo: "Convivencia",
    texto:
      "Promovemos el respeto y el compañerismo entre todos los miembros de nuestra comunidad educativa.",
  },
  {
    id: 2,
    icon: Zap,
    titulo: "Vanguardia",
    texto:
      "Innovamos constantemente para potenciar y mejorar el aprendizaje de nuestros estudiantes.",
  },
  {
    id: 3,
    icon: Heart,
    titulo: "Vida Saludable",
    texto:
      "Fomentamos la actividad física, la alimentación sana y los buenos hábitos en nuestra comunidad.",
  },
];

const espacios = [
  {
    icon: BookOpen,
    titulo: "Biblioteca",
    texto: "Biblioteca con acceso digital y préstamo en línea para toda la comunidad escolar.",
  },
  {
    icon: FlaskConical,
    titulo: "Laboratorio de Ciencias",
    texto: "Sala equipada para experimentos que acercan la ciencia a los estudiantes de forma práctica.",
  },
  {
    icon: Wifi,
    titulo: "Sala de Computación",
    texto: "Laboratorio de informática con conexión a internet de alta velocidad para cada alumno.",
  },
  {
    icon: Dumbbell,
    titulo: "Gimnasio y Canchas",
    texto: "Espacios deportivos techados y descubiertos para educación física y talleres extraprogramáticos.",
  },
  {
    icon: Building2,
    titulo: "Infraestructura Segura",
    texto: "Recintos mantenidos y certificados, con acceso controlado y cámaras de seguridad perimetral.",
  },
];

function PorQueElegirnos() {
  return (
    <>
      <Helmet>
        <title>¿Por qué elegirnos? — Colegio José Arrieta, La Reina</title>
        <meta
          name="description"
          content="Descubre por qué el Colegio José Arrieta es una de las mejores opciones en La Reina: educación integral, comunidad cercana, infraestructura moderna e inglés desde prekinder en Santiago."
        />
        <meta name="keywords" content="colegio educación integral La Reina, colegio con inglés prekinder Santiago, colegio valores La Reina, colegio subvencionado recomendado Santiago" />
      </Helmet>

      <section className="page-hero">
        <div className="container-main">
          <p className="text-sm uppercase tracking-wide text-secondary">Comunidad Educativa</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">¿Por qué elegirnos?</h1>
          <p className="mt-4 max-w-2xl text-slate-100">
            Somos un colegio que combina exigencia académica, cercanía familiar y bienestar integral.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-main">
          <SectionTitle
            title="Nuestros 3 pilares institucionales"
            subtitle="Conoce los pilares oficiales que sostienen el proyecto del Colegio José Arrieta."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <article key={pilar.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-primary">{pilar.titulo}</h2>
                  <p className="mt-3 text-slate-600">{pilar.texto}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="bg-white py-16">
        <div className="container-main">
          <SectionTitle
            eyebrow="Infraestructura"
            title="Espacios pensados para aprender"
            subtitle="Nuestras instalaciones están diseñadas para ofrecer un ambiente seguro, moderno y estimulante."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {espacios.map((e) => {
              const Icon = e.icon;
              return (
                <article key={e.titulo} className="flex gap-4 rounded-2xl border border-slate-200 bg-bgsoft p-5 shadow-soft">
                  <div className="mt-0.5 shrink-0">
                    <div className="inline-flex rounded-xl bg-secondary/20 p-3 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary">{e.titulo}</h3>
                    <p className="mt-1 text-sm text-slate-600">{e.texto}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-slate-50 py-16">
        <div className="container-main">
          <SectionTitle
            eyebrow="Historia"
            title="Sobre el colegio"
            subtitle="Reseña oficial de nuestra trayectoria institucional."
          />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <img
              src="https://colegiojosearrieta.cl/wp-content/uploads/2025/09/nota23_int25b-768x431.jpg"
              alt="Comunidad Colegio José Arrieta"
              className="h-56 w-full object-cover sm:h-72"
            />
          </div>
          <article className="mx-auto mt-4 max-w-4xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-soft sm:p-8">
            <p>
              Nuestro Colegio José Arrieta es un establecimiento educacional que imparte enseñanza Pre-Escolar 
              y Educación Básica 1° a 8° año.
            </p>
            <p>
              Sus inicios se remontan al año 1973, cuando la Sra. Marta junto a dos profesoras pioneras dieron inicio a este proyecto educacional como
              Colegio Particular José Arrieta. Actualmente nuestro colegio pertenece a la sociedad formada por la señora Marta y su hija Silvia, quienes 
              dirigen el establecimiento con una mirada futurista. Gracias a ello, el colegio se ha implementado con las últimas tecnologías en el área 
              de la educación, lo que ha permitido que nuestros alumnos logren niveles de rendimiento superior a sus pares.
            </p>
            <p>
              El 26 de abril de 1973 el colegio fue reconocido por el Ministerio de Educación según decreto cooperador N° 11621.
            </p>
            <p>
              El Colegio José Arrieta nace de la experiencia pedagógica formativa acumulada en sus primeros años, cuando era una institución
              educativa familiar que se sostenía con el aporte de cada apoderado, postulando como desafío lograr índices de alto nivel en 
              infraestructura y una comprometida formación educacional e integral para sus alumnos.
            </p>
            <p>
              Los años siguientes fueron claves en el crecimiento de la institución: pasamos a ser escuela Subvencionada y en 1997 el colegio ingresó
              al Sistema de Financiamiento Compartido según Resolución N° 2335 de 1996.
            </p>
            <p>
              Estamos atentos a incorporar las nuevas tecnologías que apoyen y mejoren nuestras prácticas pedagógicas, con miras a
              que nuestros alumnos mantengan y superen los niveles de rendimiento ya alcanzados, sentando las bases para que cada estudiante logre el
              éxito en sus estudios superiores.
            </p>
          </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default PorQueElegirnos;
