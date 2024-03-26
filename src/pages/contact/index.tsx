import React, { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { satoshiMedium } from '@/styles/fonts'
import { allArtists } from '@/utils/artistData'

function Contact() {
  // Name, email,  type of booking, message
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ bookingType, setBookingType ] = useState('')
  const [ message, setMessage ] = useState('')


  const select = [
    {
      value: 'No Select',
      innerText: ''
    },
    {
      value: 'Event Booking',
      innerText: 'Event Booking'
    },
    {
      value: 'Collaboration',
      innerText: 'Collaboration'
    },
    {
      value: 'Shout Out',
      innerText: 'Shout Out'
    },
    {
      value: 'Referral',
      innerText: 'Referral'
    },
  ]

  return (
    <section className='px-5'>
      <div>
        <h5>Reach out to the team</h5>
        <div className='flex justify-center items-center'>
          <form className='w-[50%] mb-8'>
            <div className='flex flex-col mb-8'>
              <label htmlFor='formName' className='pl-3 mb-2 uppercase tracking-tight'>
                Name *
              </label>
              <input className='px-3 py-2 outline-none border-b-accent border-b-[1.5px] bg-transparent' placeholder='' onChange={(e) => setName(e.target.value)} id='formName' value={name} type='text'/>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor='formEmail' className='pl-3 mb-2 uppercase tracking-tight'>
                Email *
              </label>
              <input className='px-3 py-2 outline-none border-b-accent border-b-[1.5px] bg-transparent' placeholder='' onChange={(e) => setEmail(e.target.value)} id='formEmail' value={email} type='email'/>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor='formInquiry' className='pl-3 mb-2 uppercase tracking-tight'>
                What is your inquiry? *
              </label>
              <select id='formInquiry' className='px-3 py-2 outline-none border-b-accent border-b-[1.5px] bg-transparent' onChange={(e) => setBookingType(e.target.value)} value={bookingType}>
                {
                  select.map(ele => {
                    return (
                      <option value={ele.value} className='bg-background'>{ele.innerText}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor='formInquiry' className='pl-3 mb-2 uppercase tracking-tight'>
                Artist that you want to highlight? *
              </label>
              <select id='formInquiry' className='px-3 py-2 outline-none border-b-accent border-b-[1.5px] bg-transparent' onChange={(e) => setBookingType(e.target.value)} value={bookingType}>
                <option value='No Select' className='bg-background'></option>
                <option value='All Artists' className='bg-background'>All Artists</option>
                {
                  allArtists.map(ele => {
                    return (
                      <option value={ele.artistName} className='bg-background'>{ele.artistName}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor='formMessage' className='pl-3 mb-2 uppercase tracking-tight'>
                Message *
              </label>
              <textarea id='formMessage' rows={4} className='px-3 py-2 outline-none border-b-accent border-b-[1.5px] bg-transparent' placeholder='' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div className='flex justify-center items-center mt-8'>
              <button className={` flex justify-between items-center gap-10 px-8 py-1 border-[1.5px] rounded-full uppercase text-[22px] text-white`}>
                Submit
                <ArrowRightIcon className='w-6' color='#fff'/>
              </button>
            </div>  
          </form>

        </div>
      </div>
    </section>
  )
}

type FormLabel = {
  label: string;
  children: React.ReactNode;
  formName: string;

}
function Label({ label, children, formName }: FormLabel ) {
  return (
    <label htmlFor={formName} className='flex flex-col'>
      {label}
      {children}
    </label>
  )
}

export default Contact