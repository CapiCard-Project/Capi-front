import MenuButton from './MenuButton'
import { useForm } from 'react-hook-form'
import { saleCardApi } from '../api/apiMarket'

import React from 'react'
import toast from 'react-hot-toast'

function ModalSaleCard({ cardSelect, setOpen }) {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const onSubmit = handleSubmit( async (data) => {
        const response = await saleCardApi(data.price, cardSelect.id, data.hours)
        
        if (response.status === 200) {
            window.location.href = '/profile'
            toast.success('Card on sale')
            setOpen(false)
        } else {
            toast.error('Error on sale card')
        }
        
    })

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-violet-950 bg-opacity-15 z-50'>
            <div className='flex flex-col bg-black w-[400px] md:w-[600px] lg:w-[800px] h-auto rounded-3xl'>
            <div className=' flex justify-end w-full h-[40px] bg-gradient-to-r from-second_color to-pink-600 rounded-t-3xl py-1 px-2'>
                <button onClick={() => {setOpen(false)}} className='bg-white rounded-full w-8 font-lilita'>x</button>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='flex-1'>
                    <img src={cardSelect.image} className='rounded-3xl p-2' />
                </div>

                <form onSubmit={onSubmit}
                className='flex-1 px-5'>
                    <h1 className='text-white text-lg font-bold my-5'>Sale Card</h1>
                    <input
                        type='text'
                        placeholder="Pirce"
                        className="w-full placeholder:text-white bg-primary placeholder:text-xs py-3 px-5 rounded-3xl border-2 border-white text-white text-sm"
                        {...register('price', { required: true })}
                    />
                    {errors.price && <span className='text-white font-bold text-[10px] mb-5'>This field is required</span>}

                    <input
                        type='number'
                        placeholder="Hours"
                        className="w-full placeholder:text-white bg-primary placeholder:text-xs py-3 px-5 rounded-3xl border-2 border-white text-white text-sm mt-5"
                        {...register('hours', { required: true })}
                    />
                    {errors.hours && <span className='text-white font-bold text-[10px] mb-5'>This field is required</span>}

                    <div className='flex items-center justify-center mt-5'>
                        <MenuButton text="Sale"/>

                    </div>



                </form>

            </div>

            </div>

        </div>
    )
}

export default ModalSaleCard
