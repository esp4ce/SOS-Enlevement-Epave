const Hero = () => {
    return (
        <div className="flex items-top justify-center h-screen bg-cover bg-center relative">
            <img src="https://cdn.discordapp.com/attachments/878674914268311625/1188151866199134229/WhatsApp_Image_2023-12-23_at_17.10.49.jpeg?ex=65997ba7&is=658706a7&hm=4ef41f818881131ac5a2a5044b83fc07d4e1ac2421b5bd21d42e75dfa4d055b1&" className="w-full h-full object-cover absolute inset-0" alt="Background" />
            <div className="text-white text-center mt-7 z-10">
                <h1 className="text-4xl text-blue-500 font-bold mb-4 ">Enlèvement d'épave gratuit en Île-de-France</h1>
                <meta name="description" content="Service professionnel d'enlèvement d'épaves en Île-de-France. Récupération rapide et gratuite de véhicules hors d'usage." />
                <p className="font-semibold text-xl mb-6 text-blue-500">Service d'enlèvement d'épave 100% gratuit dans toute l'Île-de-France. Agréé VHU. Prise de rendez-vous et intervention immédiate.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full">
                    <a href="tel:0652359402">06 52 35 94 02</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;
