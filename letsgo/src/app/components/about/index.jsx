import clsx from 'clsx'
import React from 'react'


const ItemLayout = ({children, className}) => {
    return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-4', className)}>
    {children}
</div>
}


const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-8 w-full '>
    <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
    <h2 className='text-xl text-left w-full capitalize'>
    Conjurer of secrets.
    </h2>
    <p className='text-left font-light text-sm'>
    A spellbinding creator fluent in the ancient runes of React JS and the enchanted scripts of JavaScript. A master of the MERN Stack, weaving seamless digital realms. Adept in the arcane arts of data structures and algorithms, with a dash of Flutter magic and C++ sorcery to complete the spell.
    </p>
    </ItemLayout>

    <ItemLayout className={'col-span-4 text-accent'}>
    <p className='font-semibold w-full text-left text-xl'>
        2+ <sub className='font-semibold text-base'>Clients</sub>
    </p> 
    </ItemLayout>

    <ItemLayout className={'col-span-4 text-accent'}>
    <div className='font-semibold w-full text-left text-xl'>
        4+ <sub className='font-semibold text-base'>Years of Knowledge</sub>
    </div>
    </ItemLayout>
    
        </div>

    </section>
  )
}

export default AboutDetails
