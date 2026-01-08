
import React from 'react'
import ItemLayout from './ItemLayout'





const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 xs:gap-6 gap-4 md:gap-8 w-full '>
                <ItemLayout className={'col-span-full col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-xl text-left w-full capitalize'>
                        Conjurer of secrets.
                    </h2>
                    <p className='text-left font-light text-sm'>
                        A spellbinding creator fluent in the ancient runes of React JS and the enchanted scripts of JavaScript. A master of the MERN Stack, weaving seamless digital realms. Adept in the arcane arts of data structures and algorithms, with a dash of Flutter magic and C++ sorcery to complete the spell.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-xl'>
                        2+ <sub className='font-semibold text-base'>Clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-4 text-accent'}>
                    <div className='font-semibold w-full text-left text-xl'>
                        4+ <sub className='font-semibold text-base'>Years of Knowledge</sub>
                    </div>
                </ItemLayout>



                <ItemLayout className={'col-span-full sm:col-span-4 !p-0'}>
                    <img
                        className='w-full h-auto'
                        src={`https://github-readme-stats-eight-lovat-16.vercel.app/api?username=utsav1103&show_icons=true&theme=transparent&text_color=E1E1E1&title_color=FEFE5B&icon_color=FEFE5B`}
                        alt='Utsav Vaghela'
                        loading='lazy'
                        referrerPolicy='no-referrer'
                    />
                </ItemLayout>


                <ItemLayout className={'col-span-full sm:col-span-8 !p-0'}>
                    <img
                        className='w-full h-auto'
                        src={`https://github-readme-stats-eight-lovat-16.vercel.app/api/top-langs?username=utsav1103&layout=compact&theme=transparent&text_color=E1E1E1&title_color=FEFE5B&icon_color=FEFE5B`}
                        alt='Utsav Vaghela'
                        loading='lazy'
                        referrerPolicy='no-referrer'
                    />
                </ItemLayout>




                <ItemLayout className={'col-span-full p-2'}>
                    <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,wasm,aws,bootstrap,cloudflare,docker,git,github,linux,mongodb,mysql,vite,vscode,threejs,tailwind,redux,react,dart,flutter,python,c,androidstudio,angular,cpp,nextjs,nodejs,npm,postman,qt,svg,ubuntu' alt='Utsav Vaghela' loading='lazy' referrerPolicy="no-referrer" />
                </ItemLayout>


                <ItemLayout className={'col-span-full sm:col-span-6 !p-0'}>
                    <img
                        className="w-full h-auto"
                        src="https://github-readme-streak-stats-xi-gilt.vercel.app?user=utsav1103&theme=transparent"
                        alt="GitHub Streak Stats"
                        loading="lazy" referrerPolicy="no-referrer"
                    />

                </ItemLayout>



                <ItemLayout className={'col-span-full sm:col-span-6 !p-0'}>
                    <img
                        className='w-full h-auto'
                        src={`https://github-readme-stats-eight-lovat-16.vercel.app/api/pin/?username=utsav1103&repo=Portfolio3d&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=E1E1E1&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                        alt='Utsav Vaghela'
                        loading='lazy'
                        referrerPolicy='no-referrer'
                    />
                </ItemLayout>




            </div>

        </section>
    )
}

export default AboutDetails
