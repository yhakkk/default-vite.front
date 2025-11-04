import { Button } from "../../components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-zinc-50 to-white">
            <div className="max-w-5xl mx-auto px-6 py-16 text-center">
                <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                    Carta virtual
                </div>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                    Crea y comparte una carta con un toque especial
                </h1>
                <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                    Diseña un mensaje memorable usando utilidades de Tailwind y componentes estilizados
                    tipo shadcn. Comparte el enlace con quien más quieras.
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                    <Link to="/home">
                        <Button className="px-6">Empezar ahora</Button>
                    </Link>
                    <a href="#demo" className="text-sm text-zinc-700 underline underline-offset-4">
                        Ver demo
                    </a>
                </div>

                <div id="demo" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-left">
                        <h3 className="font-semibold">Personaliza tu mensaje</h3>
                        <p className="mt-2 text-zinc-600 text-sm">
                            Escribe, edita y deja tu marca personal. Todo rápido y sencillo.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-left">
                        <h3 className="font-semibold">Comparte con un clic</h3>
                        <p className="mt-2 text-zinc-600 text-sm">
                            Genera un enlace y compártelo en tus redes o por mensaje.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <Button variant="outline" className="gap-2">
                        <Heart className="size-4" />
                        Enviar cariño
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Landing;


