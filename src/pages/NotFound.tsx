import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper p-8 text-ink">
      <section className="max-w-lg rounded-md border-2 border-ink bg-cream p-8 shadow-[5px_5px_0_#2D2630]">
        <p className="kicker">Caminho não encontrado</p>
        <h1 className="font-display text-5xl font-extrabold">Essa porta não abre aqui.</h1>
        <p className="my-6 leading-relaxed">Volte para a entrada do Observatório e retome a travessia.</p>
        <Button asChild>
          <Link to="/">Voltar ao início</Link>
        </Button>
      </section>
    </main>
  );
}
