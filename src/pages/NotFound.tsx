
const NotFound = () => {
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/404-image.svg')` }} // Image de fond personnalisée
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-white text-4xl font-bold mb-4 text-center">
          Oops! Page non trouvée
        </h1>
        <p className="text-white text-lg text-center">
          Il semble que vous soyez perdu. La page que vous recherchez n'existe pas.
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="/"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
