import React, { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { satoshiMedium, reverie } from '@/styles/fonts'
import { allArtists } from '@/utils/artistData'
import SpinningStar from '@/components/SpinningStar'

function Contact() {
  // Name, email,  type of booking, message
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ bookingType, setBookingType ] = useState('')
  const [ artist, setArtist ] = useState('')
  const [ message, setMessage ] = useState('')

  const [ error, setError ] = useState('')


  const select = [
    {
      value: 'none',
      innerText: "Let us know why you're reaching out"
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

  const emailRegex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.length || !email.length || !message.length) {
      setError('No fields should be left empty')
    } else if (!email.match(emailRegex)) {
      setError('Invalid email address')
    } else if (bookingType === '' || artist === '') {
      setError('An option must be selected')
    } else {
      setError('')
    }

    console.log(bookingType, artist)
  }

  return (
    <section className='px-5'>
      <div className='flex md:justify-between md:flex-row flex-col gap-12 mt-[2rem]'>
        <div className='flex-[1.5]'>
          <div>
            <h5 className={`${satoshiMedium.className} uppercase md:text-[8vw] text-[18vw] leading-[1]`}>Give us</h5>
          </div>
          <div>
            <h5 className={`${satoshiMedium.className} uppercase md:text-[8vw] text-[18vw] leading-[1]`}>a shout</h5>
          </div>
          <div className='flex justify-end mt-4'>
            <p className='w-[70%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</p>
          </div>

        </div>
        <div className='flex-[2]'>
          <form onSubmit={handleSubmit} className='mb-8 md:w-[90%]'>
            {error.length ?
            <div className='flex items-center justify-between rounded-xl border-[1px] border-accent px-6 py-3 mb-6'>
              <p className='text-white'>{error}</p>
              <SpinningStar size={'20px'}/>
            </div>
            :
            null
            }
            <div className='flex flex-col mb-8'>
              {/* <label htmlFor='formName' className='pl-3 mb-2 uppercase tracking-tight'>
                Name *
              </label> */}
              <input placeholder='Name *' className='placeholderForm text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setName(e.target.value)} id='formName' value={name} type='text'/>
            </div>
            <div className='flex flex-col mb-8'>
              {/* <label htmlFor='formEmail' className='pl-3 mb-2 uppercase tracking-tight'>
                Email *
              </label> */}
              <input placeholder='Email *' className='placeholderForm text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setEmail(e.target.value)} id='formEmail' value={email} type='email'/>
            </div>
            <div className='flex flex-col mb-8'>
              {/* <label htmlFor='formInquiry' className='pl-3 mb-2 uppercase tracking-tight'>
                What is your inquiry? *
              </label> */}
              <select id='formInquiry' className='text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setBookingType(e.target.value)} value={bookingType}>
                {
                  select.map((ele, index) => {
                    return (
                      index === 0 ?
                      <option key={ele.value} value={ele.value} className='bg-background text-[14px]'>{ele.innerText}</option>
                      :
                      <option key={ele.value} value={ele.value} className='bg-background text-[14px]'>{ele.innerText}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='flex flex-col mb-8'>
              {/* <label htmlFor='formInquiry' className='pl-3 mb-2 uppercase tracking-tight'>
                Artist that you want to highlight? *
              </label> */}
              <select id='formInquiry' className='placeholderForm px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent text-[14px]' onChange={(e) => setArtist(e.target.value)} value={artist}>
                <option value='none' className='bg-background text-[14px]'>Which artist are you reaching out for?</option>
                <option value='All Artists' className='bg-background text-[14px]'>All Artists</option>
                {
                  allArtists.map(ele => {
                    return (
                      <option key={ele.artistName} value={ele.artistName} className='bg-background text-[14px]'>{ele.artistName}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='flex flex-col mb-8'>
              {/* <label htmlFor='formMessage' className='pl-3 mb-2 uppercase tracking-tight'>
                Message *
              </label> */}
              <textarea placeholder='Send a Message *' id='formMessage' rows={4} className='placeholderForm text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div className='flex justify-center items-center mt-8'>
              <button type='submit' className={`group hover:text-background hover:bg-accent duration-[.4s] flex justify-between items-center gap-10 px-8 py-1 border-[1.5px] border-accent rounded-full uppercase text-[22px] text-white`}>
                Submit
                <ArrowRightIcon className='w-6 text-white transform duration-[.4s] group-hover:text-background group-hover:translate-x-[10px]'/>
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