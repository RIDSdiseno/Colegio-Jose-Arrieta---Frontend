import { Helmet } from "react-helmet-async";
import { TrendingUp, BookOpen, Globe, Heart, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import talleres from "../data/talleres";

const metas = [
  {
    icon: TrendingUp,
    color: "bg-emerald-50 text-emerald-600",
    titulo: "75% de aprobación",
    texto: "Meta institucional: al menos el 75% de los alumnos con todas sus asignaturas aprobadas.",
  },
  {
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    titulo: "Mejora SIMCE +2 puntos",
    texto: "Objetivo de incrementar los resultados SIMCE en al menos 2 puntos respecto al año anterior.",
  },
  {
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-600",
    titulo: "Matemáticas +20%",
    texto: "Mejora del 20% en resultados de matemáticas aplicando el Método Singapur de Pre-Kínder a 4° básico.",
  },
  {
    icon: Globe,
    color: "bg-violet-50 text-violet-600",
    titulo: "Inglés Richmond",
    texto: "Programa Richmond para fortalecer el inglés en 3° a 8° básico con horas de instrucción ampliadas.",
  },
  {
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
    titulo: "90% hábitos saludables",
    texto: "Meta de que el 90% de los alumnos adquiera hábitos de vida saludable a través de talleres y deporte.",
  },
];

function ProyectoEducativo() {
  return (
    <>
      <Helmet>
        <title>Proyecto Educativo — Colegio José Arrieta, La Reina</title>
        <meta
          name="description"
          content="Conoce el proyecto educativo del Colegio José Arrieta: ejes estratégicos, metas académicas SIMCE, inglés desde prekinder, método Singapur y talleres extraprogramáticos en La Reina."
        />
      </Helmet>

      <section className="page-hero">
        <div className="container-main">
          <p className="text-sm uppercase tracking-wide text-secondary">Formación Integral</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">Proyecto Educativo</h1>
          <p className="mt-4 max-w-2xl text-slate-100">
            Impulsamos el desarrollo académico, emocional y social en cada estudiante.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-main">
          <SectionTitle
            title="Aprender con sentido, convivir con valores"
            subtitle="Nuestro proyecto integra excelencia académica, ciudadanía responsable y trabajo colaborativo."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:col-span-2">
              <h2 className="font-heading text-2xl font-semibold text-primary">Ejes estratégicos</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>1. Aprendizaje activo con metodologías participativas.</li>
                <li>2. Formación socioemocional transversal en todos los niveles.</li>
                <li>3. Trabajo conjunto familia-escuela con comunicación permanente.</li>
                <li>4. Desarrollo de hábitos, autonomía y pensamiento crítico.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl font-semibold text-primary">Horario</h2>
              <p className="mt-3 text-slate-700">Lunes a Viernes</p>
              <p className="font-semibold text-primary">08:20-12:30 y 14:00-18:00 hrs</p>
            </article>
          </div>
        </div>
      </section>

      {/* Metas académicas reales */}
      <section className="bg-slate-50 py-16">
        <div className="container-main">
          <SectionTitle
            eyebrow="Metas Académicas 2025–2026"
            title="Comprometidos con resultados reales"
            subtitle="Nuestras metas institucionales son concretas, medibles y orientadas al éxito de cada alumno."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metas.map((m) => {
              const Icon = m.icon;
              return (
                <article key={m.titulo} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                  <div className={`mt-0.5 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl ${m.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{m.titulo}</p>
                    <p className="mt-1 text-sm text-slate-600">{m.texto}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-main">
          <SectionTitle
            eyebrow="Vida complementaria"
            title="Talleres destacados"
            subtitle="Espacios que potencian talentos y habilidades para el futuro."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {talleres.map((taller) => (
              <article key={taller.id} className="rounded-2xl border border-slate-200 p-5 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-primary">{taller.nombre}</h3>
                <p className="mt-2 text-sm text-slate-600">{taller.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProyectoEducativo;
