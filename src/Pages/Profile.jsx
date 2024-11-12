import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Provider/UserProvider"
import { IoImages } from "react-icons/io5";
import { IoStorefrontSharp } from "react-icons/io5";

//Componentes
import Load from "../Components/Load"
import start from "../assets/start.png"
import ShineText from "../Components/ShineText";
import MenuButton  from "../Components/MenuButton";
import FileUpload from "../Components/FileUpload";
import NavBar from "../Components/NavBar"
import ModalSaleCard from "../Components/ModalSaleCard";

//funciones de la api
import { getCardByUser } from "../api/apiProfiel";
import toast from "react-hot-toast";


function Profile() {

  const [cards, setCards] = useState([])
  const [username, setUsername] = useState(sessionStorage.getItem('userName'))

  //state para modal
  const [open, setOpen] = useState(false)

  //state para modal saleCard
  const [openSaleCard, setOpenSaleCard] = useState(false)

  //state para load
  const [isloading, setLoading] = useState(false)

  // state para carta seleccionada
  const [cardSelect, setCardSelect] = useState({})

  useEffect(() => {
    handleGetCards();
  }, [])

  //Funcion para obtener las tarjetas del usuario
  const handleGetCards = async () => {
    setLoading(true);
    const response = await getCardByUser();

    if (response.status === 200) {
      console.log(response.cards);
      setCards(response.cards);
    } else {
      toast.error("Error al obtener las tarjetas");
    }


    setLoading(false);

  }

  //provaider
  const { userImage } = useContext(UserContext);

  return (
    <div className="flex flex-col bg-black w-full h-screen overflow-y-hidden">
      <NavBar />
      {
        isloading
          ? <Load />
          : (
            <div className="flex flex-col lg:flex-row items-center  justify-start w-full h-full px-5 py-5">
              <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-slate-900 w-full lg:min-w-[40vh] h-[600px] rounded-[30px] shadow-xl">
                {
                  userImage != null ? <img src={userImage} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full" /> : <img src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" className="w-[100px] md:w-[150px]" />
                }
                <h1 className="text-xl md:text-xl font-bold text-white mt-5">
                  {
                    username != null ? `@${username}` : '@username'
                  }
                </h1>

                <div className="flex flex-col w-full h-auto justify-start items-center my-5 px-5 gap-y-5">
                  <button
                  onClick={() => setOpen(true)} 
                  className="flex items-center ml-5 mr-5 w-full bg-slate-900 py-3 px-5 rounded-[30px] hover:bg-slate-800">
                    <IoImages className="text-white md:text-lg mr-2" />
                    <span className="text-white font-extralight text-sm">Change Image</span>
                  </button>

                  <button className="flex items-center ml-5 mr-5 w-full bg-slate-900 py-3 px-5 rounded-[30px] hover:bg-slate-800">
                    <IoStorefrontSharp className="text-white md:text-lg mr-2" />
                    <span className="text-white font-extralight text-sm">Store</span>
                  </button>
                  {
                    open && <FileUpload setOpen={setOpen} />
                  }
                </div>


              </div>
              <div className="flex flex-col flex-wrap items-start justify-start bg-gradient-to-b from-black to-slate-900 w-full lg:min-w-[70vh] h-[98%] mx-2 my-2 rounded-[30px] shadow-xl overflow-y-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3">
                  {
                    cards.map((card, index) => (
                      <div className="flex flex-col" key={index}>
                        <img src={card.image} className="rounded-3xl object-contain" />
                        <h1 className="text-white font-lilita text-lg mt-2">{card.nameCard}</h1>
                        <ShineText text={card.description}/>
                        <div className="flex justify-end gap-x-2">
                          {
                            Array.from({ length: card.rarity}).map((_, i) => (
                              <img key={i} src={start} className="w-5 mb-2" />
                            ))
                          }

                        </div>
                        <div className="flex flex-wrap w-full h-auto justify-center">
                        <MenuButton text="Sale Card" onPressed={() => {
                          setCardSelect(card)
                          setOpenSaleCard(true) 
                        }}/>

                        </div>

                      </div>
                    ))
                  }

                </div>

              </div>

              {openSaleCard && <ModalSaleCard cardSelect={cardSelect} setOpen={setOpenSaleCard}/>}

            </div>

          )
      }

    </div>
  )
}

export default Profile
