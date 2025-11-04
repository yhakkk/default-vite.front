import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Heart, Mail } from "lucide-react";

const Home = () => {

    return (
        <div className="w-full min-h-full">
            <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Tu Carta Virtual</h1>
                    <div className="flex flex-wrap gap-2">
                        <Button>
                            <Mail className="size-4 mr-2" /> Compartir
                        </Button>
                        <Button variant="outline">
                            <Heart className="size-4 mr-2" /> Me gusta
                        </Button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Mensaje de hoy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-zinc-700 leading-relaxed">
                                Bienvenido a tu espacio personal. Aquí puedes crear, personalizar y compartir una carta virtual
                                con quien tú quieras. Usa los botones para interactuar o vuelve a la landing para crear una nueva.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Vista previa</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-[4/3] w-full rounded-lg border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
                                Contenido de la carta
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home;   