
import NavBar from "../Components/NavBar"
import { useState, useEffect } from "react"
import card from "../assets/credit-card.png"
import pse from '../assets/pse.png'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
} from '@heroicons/react/16/solid'

import CustomInput from "../Components/CustomInput"
import ButtonCustomGeneral from "../Components/ButtonCustomGeneral"
import coint from '../assets/coint.png'
import Card from "../Components/Card"
import CrediCard from "../Components/CrediCard"
import { useNavigate } from "react-router-dom"
import Load from "../Components/Load"

//funciones de metodos de pago
import { bankList, createPaymentPSE } from "../api/apiPayment"


function FormPayment() {

    // estado para el manejo de la ventana
    const [isExpandedCredit, setIsExpandedCredit] = useState(false);
    const [isExpandedPse, setIsExpandedPse] = useState(false);

    //estado para datos de pago
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idType, setIdType] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [bank, setBank] = useState('');
    const [bankId, setBankId] = useState('');

    //state para manejar la carga del metodo de pago
    const [loading, setLoading] = useState(false);

    //estado para manejar la lista de bancos
    const [bankListState, setBankList] = useState([]);

    const toggleExpanded = () => {
        setIsExpandedCredit(!isExpandedCredit);
        setIsExpandedPse(false);
    }

    const toggleExpandedPse = () => {
        setIsExpandedPse(!isExpandedPse);
        setIsExpandedCredit(false);
    }

    const handleBankList = async () => {
        await bankList(setBankList);
    }

    const handlePayment = async () => {
        setLoading(true);
        const paymentdataJson = {
            'amount': 1700,
            'financial_institution': bankId,
            'payer': {
                'email': email,
                'identification': {
                    'type': idType,
                    'number': idNumber
                },
                'first_name': name,
                'last_name': lastName,
                'phone': phone.toString()
            }
        }
        await createPaymentPSE(paymentdataJson, setLoading);

    }

    const formatCurrency = (value) => {
        return new Intl.NumberFormat(
            'es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(value);
    }

    return (
        <div className="flex flex-col w-full h-screen overflow-y-auto bg-black">
            <NavBar />
            {
                loading
                    ? <Load />
                    : (
                        <div className="flex flex-wrap items-center justify-center w-full h-full">
                            <div className="flex flex-col md:flex-row w-full sm:w-[80vh] lg:w-[120vh] h-auto bg-primary rounded-3xl items-center justify-center py-5">
                                <div className="flex-1 flex-col items-start justify-center px-8">

                                    <h1 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">Confirm your purchase</h1>
                                    <h3 className="font-bold text-white text-xs md:text-xl mt-5">Payment methods</h3>

                                    <div className={`flex flex-col w-full bg-black transition-all duration-300 ease-in-out ${isExpandedCredit ? 'h-auto' : 'h-16'} mt-5 rounded-3xl border-2 border-second_color px-5 py-5`}>
                                        <div onClick={toggleExpanded} className="flex flex-row w-full h-auto justify-between items-center">
                                            <h3 className="text-white font-bold">Credit-cards</h3>
                                            <img src={card} className="w-8" />

                                        </div>

                                        {
                                            isExpandedCredit && (
                                                <div className="flex flex-col w-full h-auto">
                                                    <CrediCard />

                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className={`flex flex-col w-full bg-black transition-all duration-300 ease-in-out ${isExpandedPse ? 'h-auto' : 'h-16'} mt-5 rounded-3xl border-2 border-second_color px-5 py-5`}>
                                        <div onClick={toggleExpandedPse} className="flex flex-row w-full h-auto justify-between items-center">
                                            <h3 className="text-white font-bold">PSE</h3>
                                            <img src={pse} className="w-8" />

                                        </div>

                                        {
                                            isExpandedPse && (
                                                <>
                                                    <div className="flex flex-col top-5 w-full text-left gap-y-5">
                                                        <Menu>
                                                            <MenuButton
                                                                onClick={() => handleBankList()}
                                                                className="flex text-white items-center w-full text-[10px] lg:text-[14px] bg-primary py-3 px-5 mt-3 justify-between rounded-3xl border-2 border-white">
                                                                {bank == '' ? 'Select bank' : bank}
                                                                <ChevronDownIcon className="w-5 h-5" />
                                                            </MenuButton>

                                                            <MenuItems className="mt-2 bg-primary rounded-3xl max-h-40 overflow-y-auto border-2 border-white px-5 py-2 overflow-hidden">
                                                                {bankListState && bankListState.length > 0 ? (
                                                                    bankListState.map((bank, index) => (
                                                                        <MenuItem
                                                                            as="button"
                                                                            key={index}
                                                                            onClick={() => {
                                                                                setBank(bank.description);
                                                                                setBankId(bank.id);
                                                                            }}
                                                                            className="p-2 text-white w-full text-left text-[10px] lg:text-[14px]">
                                                                            {bank.description}
                                                                            <hr />
                                                                        </MenuItem>
                                                                    ))
                                                                ) : <MenuItem as="button" className="p-2 text-white w-full text-left text-[10px] lg:text-[14px]">Load Bank</MenuItem>
                                                                }
                                                            </MenuItems>
                                                        </Menu>

                                                        <div className="flex w-full items-center justify-center gap-x-5">
                                                            <div className="flex-col">
                                                                <Menu>
                                                                    <MenuButton className="flex text-white items-center text-[10px] lg:text-[14px] bg-primary py-3 px-5 justify-between rounded-3xl border-2 border-white">
                                                                        {idType == '' ? 'ID' : idType}
                                                                        <ChevronDownIcon className="w-5 h-5" />
                                                                    </MenuButton>

                                                                    <MenuItems className="mt-2 bg-primary rounded-3xl max-h-40 overflow-y-auto border-2 border-white px-5 py-2 overflow-hidden">
                                                                        <MenuItem onClick={() => setIdType('C.C')} as="button" className="p-2 text-white w-full text-left text-[10px] lg:text-[14px]">C.C</MenuItem>
                                                                        <MenuItem onClick={() => setIdType('T.E')} as="button" className="p-2 text-white w-full text-left text-[10px] lg:text-[14px]">T.E</MenuItem>

                                                                    </MenuItems>
                                                                </Menu>
                                                            </div>
                                                            <CustomInput placeholder="Number" type="number" set={setIdNumber} />

                                                        </div>

                                                        <CustomInput placeholder="Name" type="text" set={setName} />
                                                        <CustomInput placeholder="last name" type="text" set={setLastName} />
                                                        <CustomInput placeholder="Email" type="text" set={setEmail} />
                                                        <CustomInput placeholder="Phone" type="number" set={setPhone} />
                                                        <ButtonCustomGeneral text="Register payment" onClickProp={() => {
                                                            handlePayment();
                                                        }} />



                                                    </div>
                                                </>
                                            )
                                        }

                                    </div>

                                </div>

                                <div className="flex-1 flex-col items-start justify-center bg-black mx-5 px-5 py-5 rounded-xl my-5">
                                    <div className="flex w-full h-autopy-5 gap-x-2 my-5">
                                        <img src={coint} width={80} className="bg-gradient-to-tr from-second_color to-pink-600 rounded-lg " />
                                        <div className="flex flex-col">
                                            <h3 className="text-white font-bold text-sm">1700 CP CapiConints para CP Capibaras Traiding 24 </h3>
                                            <span className="text-gray-400 font-extralight text-xs mt-2">This item will only be redeemable once</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-2 bg-gradient-to-tr from-second_color to-pink-600"></div>
                                    <div className="flex justify-between my-5">
                                        <h3 className="text-white font-bold">Total</h3>
                                        <h3 className="text-white font-extralight">{formatCurrency(1700)}</h3>
                                    </div>

                                    <Card />

                                    <span className="text-gray-400 text-[10px] font-extralight ">
                                        By purchasing in-game currency "Coins" within the game,
                                        you agree to the following terms and conditions. Coins are exclusively
                                        for use within the game to acquire virtual items, including but not limited
                                        to virtual card packs, upgrades, or other in-game features. Coins do not hold
                                        any real-world value and cannot be exchanged, redeemed, or refunded for actual
                                        currency or any other value outside the game. All purchases are final, and no
                                        refunds will be issued once a transaction has been completed, except as required
                                        by applicable law. We reserve the right to modify the price, availability.
                                    </span>




                                </div>

                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default FormPayment

