const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center">
      <div className="flex justify-between">
        <div className="w-1/3 text-left">
          <h1>Mots-clés :</h1>
          <p>Épaviste | Enlèvement d'épave | Voiture hors service | Enlèvement gratuit d'épave | Service rapide</p>
        </div>
        <div className="w-1/3">
          <h3>SOS Enlèvement Épave</h3>
          <p>48 Av. Julien Duranton, 94460 Valenton</p>
          <p><a href="tel:0652359402">06 52 35 94 02</a> | <a href="mailto:contact@sos-enlevement-epave.fr">contact@sos-enlevement-epave.fr</a></p>
          <h1 className="pt-4">Développé avec ❤️ par ClickAndTrust</h1>
          <p><a href="https://clickandtrust.fr/">www.clickandtrust.fr</a></p>
        </div>
        <div className="w-1/3">
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
