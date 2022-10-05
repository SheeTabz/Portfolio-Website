import React from 'react'

function Services() {
    return (
        <section id='services' className='section py-12 lg:py-32 bg-dark text-white'>
            <div className='container mx-auto'>
                <div className='flex flex-col item-center text-center'>
                    <h2 className='section-title text-3xl lg:text-4xl 
            ont-medium lg:font-extrabold mb-5 before:content-services before:opacity-40 before:-top-[2rem] before:-left-28 
            before:hidden before:lg:block'>Services <span>I believe in</span></h2>
                    <p className='text-base text-paragraph mb-16 lg:mb-24 text-[22px] max-w-[520pz]'>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    </p>
                </div>

                {/* Card items */}
                <div className='grid lg:grid-cols-3 gap-8'>

                    {/* REFACTOR THIS USING MAP */}
                    <div className=' card bg-cardColor p-6 rounded-xl'>
                        <div className='text-bright rounded-sm w-12 h-12 flex justify-center items-center
                        mb-10 text-[28px]'>
                            <i class="fa fa-gear fa-spin" ></i>
                        </div>
                        <h4  className='text-xl font-extrabold mb-3'>Web Development</h4>
                        <p className='text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, </p>
                    </div>
                    <div className='bg-cardColor p-6 rounded-2xl'>
                        <div className='text-bright rounded-sm w-12 h-12 flex justify-center items-center
                        mb-10 text-[28px]'>
                            <i class="fa fa-gear fa-spin" ></i>
                        </div>
                        <h4  className='text-xl font-extrabold mb-3'>Web Development</h4>
                        <p className='text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, </p>
                    </div>
                    <div className='bg-cardColor p-6 rounded-2xl'>
                        <div className='text-bright rounded-sm w-12 h-12 flex justify-center items-center
                        mb-10 text-[28px]'>
                            <i class="fa fa-gear fa-spin" ></i>
                        </div>
                        <h4  className='text-xl font-extrabold mb-3'>Web Development</h4>
                        <p className='text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, </p>
                    </div>
                  
                </div>
            </div>
        </section>
    )
}

export default Services