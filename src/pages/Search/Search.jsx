import React from 'react'
import { useParams } from 'react-router-dom'

import Wrapper from './utils';
import Card from '../Feature/Card';
import {MdKeyboardBackspace} from  "react-icons/md"
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const {text} = useParams();
  const navigate= useNavigate()
  const Data = [
    {
      id: 1,
      name: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED tech…",
      price: 67425,
  
      images: [
        
        {
          url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-storage-select-202309-6-1inch-black?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692924212672",
        },
        {
          url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697018305/Croma%20Assets/Communication/Mobiles/Images/300684_14_gh5wep.png?tr=w-640",
        },
        {
          url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697018295/Croma%20Assets/Communication/Mobiles/Images/300684_12_ic8rhb.png?tr=w-640",
        },
        {
          url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697018293/Croma%20Assets/Communication/Mobiles/Images/300684_11_frn04h.png?tr=w-640",
        },
      ],
      category: "smartphones",
      stock: 3,
    },
    {
      id:2,
      name: "Samsung Refrigerator 236L",
     
      description:
        "236L Digital Inverter Technology Double Door Refrigerator RT28C3452BX",
      price: 87425,
  
      images: [
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/rt28c3452bx-hl/gallery/in-top-mount-freezer-rt28t3453s9hl-316627-rt28c3452bx-hl-535085766?$2052_1641_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/rt28c3452bx-hl/gallery/in-top-mount-freezer-rt28t3453s9hl-316627-rt28c3452bx-hl-535085745?$684_547_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/rt28c3452bx-hl/gallery/in-top-mount-freezer-rt28t3453s9hl-316627-rt28c3452bx-hl-535085746?$2052_1641_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/rt28c3452bx-hl/gallery/in-top-mount-freezer-rt28t3453s9hl-316627-rt28c3452bx-hl-535085748?$684_547_PNG$",
        },
      ],
      category: "smartphones",
      stock: 3,
    },
    {
      id:3,
      name: "Galaxy Watch6 (Bluetooth, 44mm)",
      description:
        "The watch that knows you best is back with a more personalized health experience and better yet, upgraded sleep tracking. Start off your day with a good night's sleep with Sleep coaching now available on Galaxy Watch6.",
      price: 67425,
  
      images: [
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzsains-537406821?$1300_1038_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzsains-537406811?$684_547_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzsains-537406812?$684_547_PNG$",
        },
       
      ],
      category: "smartphones",
      stock: 3,
    },
    {
      id:4,
      name: "ThinkPad E16 (16, AMD)",
      description:
        "AMD Ryzen™ 5 7530U Processor (2.00 GHz up to 4.50 GHz) Windows 11 Home Single Language 64 (English)",
      price: 67425,
  
      images: [
        {
          url: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjExMjA2fGltYWdlL3BuZ3xoODEvaGU3LzE3MzEyNTYxMTY4NDE0LmpwZ3wzYjE2ZjAwOGI4YzA3Zjc1MDY4NTA5Njg3MTlmOGM4ZmY2Mjg0YzEyNDhmNmQzODQ4YjE4NDkzNjEzMTA3ODgw",
        },
        {
          url: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MzQxMjIzfGltYWdlL3BuZ3xoNGEvaDcwLzE0NTI0NzA5OTI4OTkwLnBuZ3xlMzJmNDViNDllNTc3ZmYxMWVlNzNlMzEwYjc0Yzc3ZGFlYjhmZGU4ZDQ2OGMwMDI1NDAxOGY4NzQzYmMyY2Jj",
        },
        {
          url: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MzMxNDIyfGltYWdlL3BuZ3xoNmEvaGFkLzE0NTI0NzEwMTI1NTk4LnBuZ3xlMmNlYTkxOTcxMzU5YzA1ZjEwNWZkMDE2ZmU3YWQyYzJhN2U4NjFmZTc5MmIyYWMxNGMzMWE2MDYwMTkzN2Qx",
        },
        {
          url: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjUwNzU2fGltYWdlL3BuZ3xoOGQvaGJlLzE0NTI0NzEwMjU2NjcwLnBuZ3w1Y2I1Y2FiYWQ0ZDI2YzNhOTgxYTM1NGUzY2MxMGU1MTFmMzYwOGVmYzVmMDY2YzFjNWIxYmQyMmMxMWY2MzQz",
        },
      ],
      category: "smartphones",
      stock: 3,
    },
    {
      id:5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 67425,
  
      images: [
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/ua43cue60aklxl/gallery/in-crystal-uhd-cu7000-458954-ua43cue60aklxl-536446982?$1300_1038_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/ua43cue60aklxl/gallery/in-crystal-uhd-cu7000-458954-ua43cue60aklxl-536446967?$684_547_PNG$",
        },
        {
          url: "https://images.samsung.com/is/image/samsung/p6pim/in/ua43cue60aklxl/gallery/in-crystal-uhd-cu7000-458954-ua43cue60aklxl-536446968?$684_547_PNG$",
        },
      ],
      category: "smartphones",
      stock: 3,
    },
    
   
  ];
 
    const results = Data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
     console.log(results)
  
  
  return (
    <>
    <Wrapper>
      
    <h2>Search Results</h2>
      
      <div className="products">

      
    { results.length > 0 && results.map((item,index)=>{
      return (
      <Card item={item} key={index}/>
      
      )
    
    }) 
     }
     </div>
     <button className='btn-back' onClick={()=>navigate(-1)}> <MdKeyboardBackspace className='icon' /></button>
    </Wrapper>
    </>
  )
}

export default Products