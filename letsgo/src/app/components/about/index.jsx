
import React from 'react'
import ItemLayout from './ItemLayout'





const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 xs:gap-6 gap-4 md:gap-8 w-full '>
                <ItemLayout className={'col-span-full col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-accent drop-shadow-sm">
  Conjurer of secrets.
</h2>

                    <p className='text-left font-light text-sm'>
                        A digital alchemist forging intelligent systems from the raw elements of the MERN stack. Fluent in the evolving sigils of Next.js and TanStack, and sculpting immersive experiences with Three.js. Battle-tested through real-world creations, including a full-scale school management system empowered by a Gemini-infused conversational mind. Adept in algorithms, architecture, and performance sorcery, blending logic and imagination to conjure interfaces that think, respond, and endure.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 text-accent'}>
                    <p className='font-semibold w-full text-left text-xl'>
                        4+ <sub className='font-semibold text-base'>Clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 text-accent'}>
                    <div className='font-semibold w-full text-left text-xl'>
                        6+ <sub className='font-semibold text-base'>Years of Knowledge</sub>
                    </div>
                </ItemLayout>



                <ItemLayout className={'col-span-full sm:col-span-6 !p-0'}>
                    <img
                        className='w-full h-auto'
                        src={`https://github-readme-stats-eight-lovat-16.vercel.app/api?username=utsav1103&show_icons=true&theme=transparent&text_color=E1E1E1&title_color=FEFE5B&icon_color=FEFE5B`}
                        alt='Utsav Vaghela'
                        loading='lazy'
                        referrerPolicy='no-referrer'
                    />
                </ItemLayout>


                <ItemLayout className={'col-span-full sm:col-span-6 !p-0'}>
                    <img
                        className='w-full h-auto'
                        src={`https://github-readme-stats-eight-lovat-16.vercel.app/api/top-langs?username=utsav1103&layout=compact&theme=transparent&text_color=E1E1E1&title_color=FEFE5B&icon_color=FEFE5B`}
                        alt='Utsav Vaghela'
                        loading='lazy'
                        referrerPolicy='no-referrer'
                    />
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
                        src={`https://github-readme-stats-eight-lovat-16.vercel.app/api/pin/?username=utsav1103&repo=School_Management_System&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=E1E1E1&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                        alt='Utsav Vaghela'
                        loading='lazy'
                        referrerPolicy='no-referrer'
                    />
                </ItemLayout>



                <ItemLayout className={'col-span-full p-2'}>
                    <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,wasm,aws,bootstrap,cloudflare,docker,git,github,linux,mongodb,mysql,vite,vscode,threejs,tailwind,redux,react,dart,flutter,python,c,androidstudio,angular,cpp,nextjs,nodejs,npm,postman,qt,svg,ubuntu' alt='Utsav Vaghela' loading='lazy' referrerPolicy="no-referrer" />
                </ItemLayout>

            </div>

        </section>
    )
}

export default AboutDetails
