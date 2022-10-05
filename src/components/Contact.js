import React from 'react'
import Button from './Button'

function Contact() {
   
    return (
        <section id='contacts' className='py-12 lg:py-32 bg-dark text-white'>
            <div className='container mx-auto'>

                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title lg:text-4xl lg:font-extrabold'>Contact me</h2>
                    <hr className='mb-8 text-white opacity-4 w-[300px]' />
                    {/* */}
                </div>
                <div className='flex flex-col lg:gap-x-8 lg:flex-row mt-8'>
                    <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0'>
                        <h2 className='text-5xl font-extrabold max-w-[480px]'>Have any projects in mind ? Do you want collaboration ? <span className='contSpan'>Reach out</span></h2>
                        <p className='text-base text-paragraph mb-16 lg:mb:-24 max-w-[520px]'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                    </p> 
                        <div className='flex flex-col gap-y-6 '>
                            <p><i class="fa fa-envelope text-white text-3xl"></i> tabithamuriithi@gmail.com</p>
                            <p><i class="fa fa-solid fa-phone text-white text-3xl"></i> +254 794 050295</p>

                        </div>
                    </div>
                    {/* FORM */}

                   <form className='space-y-8 w-full max-w-[500px] bg-cardColor py-8 px-10 flex flex-col'>
                    <h3>FILL IN THE FORM BELOW*</h3>
                    <input type='text' name='' placeholder='Enter your name' value='' />
                    <input type='email' name='' placeholder='Enter email'  value=''  />
                    <input  type='text' name='' placeholder='Subject'  value='' />
                    <textarea name='' placeholder='Enter Message'  value='' ></textarea>
                    <Button type='submit' name='Submit'/>
                   </form>
                </div>

            </div>
        </section>
    )
}

export default Contact