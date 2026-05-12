import SectionTitle from "../components/ui/SectionTitle";
import talleres from "../data/talleres";

function ProyectoEducativo() {
  return (
    <>
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
