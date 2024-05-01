import NavBar from '../components/Navbar';
import pikachu from '/pikachu.png';
const Home = () => {
  return (
    <>
      < NavBar />

      <div className="container text-center">
        <h1>Bienvenido Maestro pokemon</h1>
        <img 
          className="w-50"
          src={pikachu}
          alt="Pokemon Logo" 
        />
      </div>
    </>
  );
}
export default Home;