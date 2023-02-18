export function Main () {
  return (
    <main className='grid lg:grid-cols-7'>
      <section className='lg:col-start-1 lg:col-end-3'>
        <img src='public/assets/images/Img-dark.jpg' alt='' className='object-cover w-full h-full' />
      </section>

      <section className='flex flex-col justify-center items-start gap-6 p-10 lg:px-16 lg:col-start-3 lg:col-end-6'>
        <h2 className='text-lg font-bold uppercase tracking-[0.2em] lg:text-2xl'>About our furniture</h2>
        <p className='text-base text-dark-gray'>Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </section>

      <section className='lg:col-start-6 lg:col-end-8'>
        <img src='public/assets/images/Img-light.jpg' alt='' className='object-cover w-full h-full' />
      </section>
    </main>
  )
}
