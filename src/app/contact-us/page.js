import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="relative bg-[url('/thar-contact2.jpg')] bg-cover bg-no-repeat bg-center h-[550px] flex items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <div className='py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12 z-10'>
          <h1 className='text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
            How to reach us?
          </h1>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <div className='bg-white sm:py-0'>
        <h1 className='text-center text-4xl mb-20'>We are happy to hear from you!</h1>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 text-center'>
              <div>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Get in touch</h2>
              </div>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-base font-semibold leading-7 text-gray-900'>Say hello</h3>
                  <dl className='mt-3 space-y-1 text-sm leading-6 text-gray-600'>
                    <div>
                      <dt className='sr-only'>Email</dt>
                      <dd>
                        <a
                          className='font-semibold text-green-600'
                          href='mailto:thar-dairy@gmail.com'
                        >
                          thar-dairy@gmail.com
                        </a>
                      </dd>
                    </div>
                    <div className='mt-1'>
                      <dt className='sr-only'>Phone number</dt>
                      <dd>+91 9928945814</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3 text-center'>
              <div>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Location</h2>
              </div>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-base font-semibold leading-7 text-gray-900'>Our Address</h3>
                  <dl className='mt-3 space-y-1 text-sm leading-6 text-gray-600'>
                    <div>
                      <dt className='sr-only'>Address</dt>
                      <dd>Goyalon Ki Dhani, Kali Beri Soorsagar, Jodhpur (RJ) 342024</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href='https://wa.me/+919928945814' // Replace with your actual WhatsApp number (country code without +)
        target='_blank'
        rel='noopener noreferrer'
        className='fixed left-4 bottom-4 z-20'
      >
        <img
          src='/WhatsApp.svg.webp' // Replace with your WhatsApp logo image path
          alt='WhatsApp'
          className='h-16 w-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-110'
        />
      </a>
    </>
  );
}
