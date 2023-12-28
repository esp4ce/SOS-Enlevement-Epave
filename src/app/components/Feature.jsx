import { useRouter } from 'next/navigation';

export default function Feature() {

    const router = useRouter();

    const text = () => {
        router.push('/text-explicatif');
    };
    


    return (
        <>


            <div className="text-center my-12 ">
                <h2 className="text-3xl font-bold mb-6 text-blue-500" >LES ÉTAPES POUR UN ENLÈVEMENT D'ÉPAVE FACILE ET GRATUIT</h2>
                <div className="flex flex-wrap justify-center" onClick={text}>
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <button className="text-xl font-bold mb-2 text-blue-500">Contactez-nous</button>
                        <button className='font-bold text-blue-500'>Pour un enlèvement de véhicules hors d'usage à Paris et dans les départements 78, 77, 91, 92, 93, 94 et 95.</button>
                        <a><span className='underline decoration-1'>La première étape est simple</span>:<span className='font-bold'> 06 52 35 94 02</span>.</a>
                        <button>Contactez-nous pour l'enlèvement d'un véhicule hors d'usage. Dès votre appel, nous mettons en place l'organisation de l'enlèvement de votre véhicule le plus rapidement possible, en gérant toutes les démarches.</button>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8" >
                        <button className="text-xl font-bold mb-2 text-blue-500">Enlèvement Gratuit</button>
                        <button className='font-bold text-blue-500'>SOS Enlèvement Épaves vous offre un service d'enlèvement d'épaves totalement gratuit.</button>
                        <button>Nous nous occupons de tout, nous sommes équipé de matériél professionnels, nous pouvons nous rendre dans les endroits parfois difficile d'accès et nous sommes formés pour intervenir efficacement, garantissant une prise en charge sans tracas pour vous.</button>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-8" >
                        <button className="text-xl font-bold mb-2 text-blue-500" >Démarche Facile</button>
                        <button className='font-bold text-blue-500'>Nous simplifions les démarches administratives pour vous, enlevant toute complexité au processus.</button>
                        <button>Disponibles 24/24, nous nous adaptons parfaitement à votre emploi du temps, assurant une flexibilité totale pour l'enlèvement de votre véhicule. Même si certains documents sont manquants, notre équipe (en relation avec l'administration) assure toutes les démarches.</button>
                    </div>
                </div>
            </div>

        </>
    )
}