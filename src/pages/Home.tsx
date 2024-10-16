
const Home = () => {
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/logo.svg')` }} // Image de fond
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg absolute top-6">
        <h1 className="text-white text-4xl font-bold mb-4 text-center">
          Bienvenue sur HR Net
        </h1>
        <p className="text-white text-lg text-center">
          Cette application vous permet de créer des employés et de consulter la liste des employés dans toute l'entreprise.
        </p>
      </div>
    </div>
  );
};

export default Home;
