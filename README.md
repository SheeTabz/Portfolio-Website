# My PORTFOLIO WEBSITE
***

## Describtion
This is my portfolio where I have documented my professional profile and sample of my works and how to contact me.


## Site Demo
Use the link provided to navigate to my Portfolio website and see my details.
[Portfolio](https://portfolio-website-five-pink.vercel.app/)<br>

## Technologies used & Features
- Well designed and responsive UI
- React.js
- CSS3
- Tailwind css
- API

## Future-implementations 
- React animation libraries (framer motion animation libraries)

## Contribution
If you need to contribute to this project follow the steps below:<br>
- Fork the repo first (`fork`)
- Clone the repo(`git clone <repo link>`)
- Create a branch where you will add changes (`git branch -b <branchname>`)
- Add the changes (`git add .`)
- Commit changes (`git commit -m"contributing changes"`)
- Push your changes (`git push origin <branchname>`)

In the project directory, you can run:
**
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Code Samples

```JavaScript
import React from 'react'
import {serviceData} from '..//data'
function ServiceItem({children}) {
  return (
    <>
    {serviceData.map(service=>{
        return (
            <div className=' card  border-t-4 border-t-fuchsia-600 bg-cardColor p-6 rounded-xl'>
            <div className='text-bright rounded-sm w-12 h-12 flex justify-center items-center
            mb-10 text-[28px]'>
                {children}
            </div>
            <h4  className='text-xl font-extrabold mb-3'>{service.professional}</h4>
            <p className='text-[18px]'>{service.description}, </p>
        </div>
        )
    })}
    </>
  )
}

export default ServiceItem
```
## Author
### Name : [TABITHA MURIITHI](https://github.com/SheeTabz)
### Contact Info :  [wmuriithitabitha@gmail.com](wmuriithitabitha@gmail.com)

## License information.
### MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`


