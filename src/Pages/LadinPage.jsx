import { useNavigate } from 'react-router-dom';
import seccion2 from '../assets/landing/seccion2.png';
import seccion3 from '../assets/landing/seccion3.png';

export const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }

    return (
      <div className="font-sans bg-primary">
        {/* Sección 1 */}
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(src/assets/landing/seccion1.png)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">Capibara Trading Cards</h1>
            <h2 className="text-2xl mb-6">Colecciona, intercambia y disfruta de la aventura</h2>
            <button onClick={() => handleClick()} className="bg-primary bg-opacity-75 border-none hover:bg-black hover:bg-opacity-75 text-white font-bold py-5 rounded-full shadow-xl w-1/4">
              Comienza tu aventura
            </button>
          </div>
        </section>
  
        {/* Sección 2 */}
        <section className="flex flex-col lg:flex-row items-center py-16 px-4">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-second_color">Trading Cards de Capibaras</h2>
            <p className="text-lg mb-4 text-white font-extralight text-justify">
              Las cartas coleccionables de capibaras ofrecen una experiencia única para los amantes de los capibaras. Con cada carta, obtendrás una representación única de nuestros amigos capibaras en situaciones temáticas divertidas y emocionantes.
            </p>
            <p className="text-lg text-slate-500">
              ¡Colecciona tus cartas, intercambia con otros usuarios y participa en eventos especiales!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={seccion2} alt="Capibara Cards" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>
  
        {/* Sección 3 */}
        <section className="flex flex-col lg:flex-row-reverse items-center py-16 px-4">
          <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-white">Marketplace de Capibara Trading Cards</h2>
            <p className="text-lg mb-4 text-white">
              Nuestro marketplace te permite vender y comprar cartas de capibaras con otros usuarios. Encuentra las cartas más raras y únicas, y aumenta tu colección al mejor precio.
            </p>
            <p className="text-lg text-white">
              ¡Sé parte de la comunidad y disfruta del intercambio y comercio de estas cartas excepcionales!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={seccion3} alt="Marketplace Capibara" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>
      </div>
    );
  }