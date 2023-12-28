const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-sm mb-4">
          <a href="https://maps.app.goo.gl/HH5SBD6gnt8rG2e19">
            <span className="font-bold">Épaviste 75 (Paris)</span>
            <br />
            <span className="font-bold">Épaviste 91 (Essonne):</span>
            <br />
            Épaviste Évry - Épaviste Corbeil-Essonnes - <br/> Épaviste Massy
            <br />
            <span className="font-bold">Épaviste 93 (Seine Saint Denis):</span>
            <br />
            Épaviste Saint-Denis - Épaviste Montreuil - <br/> Épaviste Aubervilliers
            <br />
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3>SOS Enlèvement Épave</h3>
          <a href="https://maps.app.goo.gl/HH5SBD6gnt8rG2e19">48 Av. Julien Duranton, 94460 Valenton</a>
          <p>
            <a href="tel:0652359402">06 52 35 94 02</a> |{' '}
            <a href="mailto:contact@sos-enlevement-epave.fr">contact@sos-enlevement-epave.fr</a>
          </p>
          <h1 className="pt-4">Développé avec ❤️ par <a href="https://clickandtrust.fr/">ClickAndTrust</a></h1>
          <p>
            <a href="https://clickandtrust.fr/">www.clickandtrust.fr</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-sm mb-4">
          <a href="https://maps.app.goo.gl/HH5SBD6gnt8rG2e19">
            <span className="font-bold">Épaviste 78 (Yvelines)</span>
            <br />
            <span className="font-bold">Épaviste 94 (Val de Marne):</span>
            <br />
            Épaviste Vitry - Épaviste Créteil - <br/> Épaviste Champigny
            <br />
            <span className="font-bold">Épaviste 95 (Val d'Oise):</span>
            <br />
            Épaviste Argenteuil - Épaviste Sarcelles - <br/> Épaviste Cergy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
