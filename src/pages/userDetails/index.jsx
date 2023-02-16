import React from 'react'
import { useRouter } from 'next/router'
import Time from '@/components/Time'
import MyForm from '@/components/MyForm'
import { supabase } from 'utils/supabase'

const index = () => {
    const router = useRouter()
    const {departure_airport, arrival_airport, price, departure_time,departure_date} = router.query
  return (
    <div className='w-full h-screen p-12 mt-14 flex flex-row'>
        <div className='h-full w-[60%] rounded-lg p-5 border mr-10 shadow-xl'>
                    <MyForm departure_airport={departure_airport} arrival_airport={arrival_airport} departure_time={departure_time}></MyForm>
        </div>
        <div className='w-[30%] h-[40%] rounded shadow-lg border rouned-lg flex flex-col '>
            <div className='flex flex-row justify-between items-center p-5 bg-white rouned-lg  text-slate-600'>
                <div className='text-2xl font-bold text-slate-600'>Flight Details</div>
                
        </div>
        <div className='w-full px-3'>


            <div className='mt-2 bg-slate-200 p-3 rounded'>Departure Time<span>{departure_time} </span></div>
            <div className='mt-2 bg-slate-200 p-3 rounded'>Departure Airport Time<span>{departure_time} </span></div>
            <div className='mt-2 bg-slate-200 p-3 rounded'>Arrival Airport<span>{departure_time} </span></div>

        <div className='flex flex-row justify-between mt-5'>
            <div className='text-lg font-medium ml-2'>Price: ${price}</div>
        </div>
        </div>
        </div>

           
                    
        
    </div>
  )
}

export default index