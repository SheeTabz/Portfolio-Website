import React,{ useRef, useState} from 'react'
import emailjs from 'emailjs-com'
import Button from '../Buttons/Button'

function Contact() {
    const [formData, setFormData] = useState({
        fName:'',
        email:'',
        title:'',
        message:'',

    })
    const form = useRef()

    function handlesChange(e){
        const value = e.target.value;
        const keyVal = e.target.name;
        setFormData({...formData,
            [keyVal] : value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
       
        //  fetch("https://sheetabz.github.io/porfolioServer/data.json/",{
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body:JSON.stringify(formData)
        //  }
        //  )
        //  .then(response => response.json())
        //  .then(data => console.log(data))
         emailjs.send('service_lehnk1b','template_0nxxwos',formData,'nngGNUAfCembmi7M5')
         .then(res=> console.log(res)
         ,(error) => {
            console.log(error.text);
        })
        alert(`Hello, ${formData.fName} I have have recived your email '${formData.title}' through ${formData.email} and you will receive a response`)
        setFormData({
            fName:'',
            email:'',
            title:'',
            message:'',
        })
    }
//    console.log(formData)
    return (
        <section id='contacts' className='py-12 lg:py-32 bg-dark text-white'>
            <div className='container mx-auto'>

                <div className='flex flex-col items-center text-center'>
                    <h2 className='contacts text-3xl lg:text-4xl 
            ont-medium lg:font-extrabold mb-5 '>Contact me</h2>
                    {/* <hr className='mb-8 text-white opacity-4 w-[300px]' /> */}
                    {/* */}
                </div>
                <div className='flex flex-col lg:gap-x-8 lg:flex-row mt-8'>
                    <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0'>
                        <h2 className='text-5xl font-extrabold max-w-[480px]'>Have any projects in mind ? Do you want collaboration ? <span className='contSpan'>Reach out</span></h2>
                        <p className='text-lg text-paragraph mb-16 lg:mb:-24 max-w-[520px]'>
                    I am open to work and for collaborations. If you need me use my contact information below or send me an email through the form. I will gladly to respond.
                    </p> 
                        <div className='flex flex-col gap-y-6 '>
                            <p>
                                <a href=''><i class="fa fa-envelope text-white text-3xl"></i> wmuriithitabitha@gmail.com</a> 
                                </p>
                            <p><i class="fa fa-solid fa-phone text-white text-3xl"></i> +254 794 050295</p>

                        </div>
                    </div>
                    {/* FORM */}

                   <form ref={form} className='space-y-8 w-full max-w-[500px] bg-cardColor py-8 px-10 flex flex-col' onSubmit={handleSubmit}>
                    <h3>FILL IN THE FORM BELOW*</h3>
                    <input 
                    type='text' 
                    name='fName' 
                    placeholder='Enter your name'
                     value={formData.fName}
                     onChange={handlesChange}
                     />
                    <input 
                    type='email'
                     name='email' 
                     placeholder='Enter email' 
                      value={formData.email} 
                      onChange={handlesChange} 
                      />
                    <input  
                    type='text' 
                    name='title' 
                    placeholder='Subject'  
                    value={formData.title} 
                    onChange={handlesChange}
                    />
                    <textarea 
                    name='message' 
                    placeholder='Enter Message' 
                     value={formData.message}
                     onChange={handlesChange} 
                     ></textarea>
                    <Button type='submit' name='Submit'/>
                   </form>
                </div>

            </div>
        </section>
    )
}

export default Contact