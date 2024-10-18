

export const LandingPage = () => {
    return (
      <div className="font-sans">
        {/* Sección 1 */}
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">Bienvenidos a Capibara Trading Cards</h1>
            <h2 className="text-2xl mb-6">Colecciona, intercambia y disfruta de la aventura</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ingresar al Sitio
            </button>
          </div>
        </section>
  
        {/* Sección 2 */}
        <section className="flex flex-col lg:flex-row items-center py-16 px-4 bg-gray-100">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">Trading Cards de Capibaras</h2>
            <p className="text-lg mb-4">
              Las cartas coleccionables de capibaras ofrecen una experiencia única para los amantes de los capibaras. Con cada carta, obtendrás una representación única de nuestros amigos capibaras en situaciones temáticas divertidas y emocionantes.
            </p>
            <p className="text-lg">
              ¡Colecciona tus cartas, intercambia con otros usuarios y participa en eventos especiales!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/path-to-your-image2.jpg" alt="Capibara Cards" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>
  
        {/* Sección 3 */}
        <section className="flex flex-col lg:flex-row-reverse items-center py-16 px-4 bg-white">
          <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">Marketplace de Capibara Trading Cards</h2>
            <p className="text-lg mb-4">
              Nuestro marketplace te permite vender y comprar cartas de capibaras con otros usuarios. Encuentra las cartas más raras y únicas, y aumenta tu colección al mejor precio.
            </p>
            <p className="text-lg">
              ¡Sé parte de la comunidad y disfruta del intercambio y comercio de estas cartas excepcionales!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/path-to-your-image3.jpg" alt="Marketplace Capibara" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>
      </div>
    );
  }