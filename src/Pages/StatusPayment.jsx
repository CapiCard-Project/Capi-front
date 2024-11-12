
import React from 'react'
import payment from '../assets/payment.png'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { consultPayment } from '../api/apiPayment'
import { CapiPointsContext } from '../Provider/CapiPointsProvider'
import ButtonCustom from '../Components/ButtonCustom'

function StatusPayment() {

  const location = useLocation()
  const { setCapiPoints } = useContext(CapiPointsContext)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const payment_id = searchParams.get('payment_id')
    console.log('payment_id:', payment_id)

    handleTransaction(payment_id)

  }, [location])

  const handleTransaction = async (payment_id) => {

    const response = await consultPayment(payment_id)
    console.log('response:', response)
    if (response.status === 'approved') {
      setCapiPoints(response.capipoins)
      setStatus('approved')
    } else {
      setStatus('rejected')
    }

  }

  const renderStatusApproved = () => {
    return (
      <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-t from-second_color to-black gap-y-10'>
        <img src={payment} className='w-64'/>
        <h3 className='text-white font-lilita text-xl'>Your transaction has been completed successfully.</h3> 
        <ButtonCustom text='Back to home' onClick={() => window.location.href = '/home'}/>
      </div>
    )
  }

  const renderStatusRejected = () => {
    return (
      <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-t from-second_color to-black gap-y-10'>
        <img src={payment} className='w-64'/>
        <h3 className='text-white font-lilita text-xl'>Your transaction has not been completed successfully.</h3> 
        <ButtonCustom text='Back to home' onClick={() => window.location.href = '/home'}/>
      </div>
    )
  }

  const renderStatusProcessed = () => {
    return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-t from-second_color to-black gap-y-10'>
            <img src={payment} className='w-64'/>
            <h3 className='text-white font-lilita text-xl'>Your payment is being processed right now.</h3> 
    </div>
    )
  }

  return (
    <>
    {
      status === 'approved'
        ? renderStatusApproved()
        : status === 'rejected'
          ? renderStatusRejected()
          : renderStatusProcessed()
    }
    </>
  )
}

export default StatusPayment
