export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] text-white px-6">
      <div className="max-w-md w-full text-center rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-8">
        <h1 className="text-3xl font-semibold mb-4">
          ¡Gracias por tu mensaje!
        </h1>

        <p className="text-white/70 mb-6">
          Ya recibí tu consulta. Te voy a responder a la brevedad.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-white px-4 py-2 font-medium text-black hover:bg-white/90 transition"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
