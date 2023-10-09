import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";



export const revalidate = 60;
export default async function ProjectsPage() {


    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Mis Proyectos
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Mis proyectos durante mi tiempo en SoyHenry Bootcamp
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link href={`/projects/`}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className=" flex items-center justify-center gap-3  ">
                                    <div className="flex text-xs text-zinc-100 ">
                                        <Card>
                                            <img src="C:\Users\USUARIO\OneDrive\Desktop\Produccion\portfolio\portfolio\util\Landin pi.png"
                                                alt="pi-dogs"
                                                width={600}
                                                height={400} />
                                        </Card>

                                    </div>
                                </div>
                                <h2 id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >Pi Henry Dogs
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Mi primer proyecto fue una experiencia gratificante e innovadora, ya que pude aplicar todo lo aprendido en el Bootcamp de SoyHenry. A pesar de ser bastante básico, la idea es mejorarlo significativamente para reforzar mis conocimientos y aprender aún más.

                                    Se trata de una página diseñada para trabajar con una API externa de perros, sus razas y estadísticas. Este proyecto representó un gran desafío, el cual pude desarrollar gracias al apoyo de mis compañeros y la guía proporcionada por SoyHenry.

                                    El enlace para acceder al deploy se encuentra en proceso y estará disponible próximamente.

                                </p>

                                <Card>
                                    <img src="C:\Users\USUARIO\OneDrive\Desktop\Produccion\portfolio\portfolio\util\PI.png"
                                        alt="pi-dogs"
                                        width={600}
                                        height={400} />
                                </Card>
                            </article>
                        </Link>
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        <Card>
                            <Link href="https://hyperevent-fe.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <div className=" flex items-center justify-center gap-3  ">
                                        <div className="flex text-xs text-zinc-100 ">


                                        </div>
                                    </div>
                                    <h2 id="featured-post"
                                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                    >Hyper Events
                                    </h2>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        Es una página de compra y venta de tickets para eventos en la que puedes buscar una nueva experiencia para vivir o salir a divertirte con amigos. Por ahora, sigue en desarrollo y quizás pueda cambiar la idea principal para adaptarse a algún cliente.

                                        Link de la página para poder probarla: https://hyperevent-fe.vercel.app/
                                    </p>
                                    <Card>
                                        <img src="C:\Users\USUARIO\OneDrive\Desktop\Produccion\portfolio\portfolio\util\Hyper Event.png"
                                            alt="H-events"
                                            width={400}
                                        />
                                    </Card>
                                </article>
                            </Link>
                        </Card>

                    </div>
                </div>



            </div>
        </div>
    );
}
