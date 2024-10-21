const Home = () => {
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/logo.svg')` }} // Image de fond
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg absolute top-6">
        <h1 className="text-white text-4xl font-bold mb-4 text-center">
          Welcom to HR Net
        </h1>
        <p className="text-white text-lg text-center">
          This application allows you to create employees and view the list of
          employees throughout the company.
        </p>
      </div>
    </div>
  );
};

export default Home;
