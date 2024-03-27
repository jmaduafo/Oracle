import React, { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { satoshiMedium, reverie } from '@/styles/fonts'
import { allArtists } from '@/utils/artistData'
import SpinningStar from '@/components/SpinningStar'
import { sendContactForm } from '@/lib/api'

function Contact() {
  // Name, email,  type of booking, message
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ bookingType, setBookingType ] = useState('')
  const [ artist, setArtist ] = useState('')
  const [ message, setMessage ] = useState('')

  const [ error, setError ] = useState('')
  const [ success, setSuccess ] = useState('')
  const [ loading, setLoading ] = useState(false)


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
    {
      value: 'I want to join Oracle',
      innerText: 'I want to join Oracle'
    },
  ]

  const emailRegex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.length || !email.length || !message.length) {
      setError('No fields should be left empty')
    } else if (!email.match(emailRegex)) {
      setError('Invalid email address')
    } else if (bookingType === '') {
      setError('An option must be selected')
    } else {
      setError('')
      setLoading(true)
      
      try {
        await sendContactForm({
          name: name,
          email: email,
          inquiryType: bookingType,
          inquiryArtist: artist,
          message: message
        })

        setLoading(false)

        setName('')
        setEmail('')
        setBookingType('')
        setArtist('')
        setMessage('')

        setSuccess('Message has been sent successfully!')

        setTimeout(function() {
          setSuccess('')
        }, 5000)

      } catch (err: any) {
        setError(err.message)
        setLoading(false)

        setTimeout(function() {
          setError('')
        }, 5000)
        
      }

    }
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
          {/* FORM SUBMIT */}
          <form onSubmit={handleSubmit} className='mb-8 md:w-[90%]'>
            {/* ERROR MESSAGE FOR FORM VALIDATION */}
            {error.length ?
            <div className='flex items-center justify-between rounded-xl border-[1px] border-accent px-6 py-3 mb-6'>
              <p className='text-white'>{error}</p>
              <SpinningStar size={'20px'}/>
            </div>
            :
            null
            }
            {success.length ?
            <div className='flex items-center justify-between rounded-xl border-[1px] border-accent px-6 py-3 mb-6'>
              <p className='text-white'>{success}</p>
              <SpinningStar size={'20px'}/>
            </div>
            :
            null
            }
            {/* NAME INPUT */}
            <div className='flex flex-col mb-8'>
              <input placeholder='Name *' className='placeholderForm text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setName(e.target.value)} id='formName' value={name} type='text'/>
            </div>
            {/* EMAIL ADDRESS INPUT */}
            <div className='flex flex-col mb-8'>
              <input placeholder='Email *' className='placeholderForm text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setEmail(e.target.value)} id='formEmail' value={email} type='email'/>
            </div>
            {/* INQUIRY FOR REACHING OUT */}
            <div className='flex flex-col mb-8'>
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
            {/* ARTIST THAT'S BEING ASKED FOR */}
            <div className='flex flex-col mb-8'>
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
            {/* MESSAGE TEXTAREA */}
            <div className='flex flex-col mb-8'>
              <textarea placeholder='Send a Message *' id='formMessage' rows={4} className='placeholderForm text-[14px] px-3 py-2 outline-none border-b-white border-b-[1.5px] bg-transparent' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            {/* SUBMIT BUTTON */}
            {loading ?
            <div className='flex justify-center items-center mt-8'>
              <button type='submit' className={`group cursor-not-allowed duration-[.4s] flex justify-center items-center gap-10 px-10 py-2 border-[1.5px] border-accent rounded-full`}>
                <span className='border-[3px] border-[#ffffff30] border-b-white animate-spin w-[30px] h-[30px] rounded-full'></span>
              </button>
            </div>  
            :
            <div className='flex justify-center items-center mt-8'>
              <button type='submit' className={`group hover:text-background hover:bg-accent duration-[.4s] flex justify-between items-center gap-10 px-8 py-1 border-[1.5px] border-accent rounded-full uppercase text-[22px] text-white`}>
                <>
                  Submit
                  <ArrowRightIcon className='w-6 text-white transform duration-[.4s] group-hover:text-background group-hover:translate-x-[10px]'/>
                </>
              </button>
            </div>  
            }
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact