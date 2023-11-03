import React, { useState } from "react";
import {Utils} from "./utils"
import Card from "../Feature/Card";
import Pagination from 'react-js-pagination';
const Products = () => {
    const {Wrapper,StyledCheckbox}=Utils
   
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
      id: 2,
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
      id: 3,
      name: "Galaxy Watch6 (Bluetooth, 44mm)",
      description:
        "The watch that knows you best is back with a more personalized health experience and better yet, upgraded sleep tracking. Start off your day with a good night's sleep with Sleep coaching now available on Galaxy Watch6.",
      price: 99425,

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
      id: 4,
      name: "ThinkPad E16 (16, AMD)",
      description:
        "AMD Ryzen™ 5 7530U Processor (2.00 GHz up to 4.50 GHz) Windows 11 Home Single Language 64 (English)",
      price: 70425,

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
      id: 5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 97425,

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
    {
      id: 5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 97425,

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
    {
      id: 5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 47425,

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
    {
      id: 5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 60425,

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
    {
      id: 5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 47425,

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
    {
      id: 5,
      name: "CUE60 Crystal 4K UHD Smart TV",
      description:
        "PurColor enables the TV to express a huge range of colors for optimal picture performance for an immersive viewing experience.",
      price: 20425,

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
  
  const [checked, setChecked] = useState(0);
  const [range, setRange] = useState(0);
  const [currentPage, setcurrentPage] = useState(1)
  const handleCheckbox = (option) => {
    if (checked === option) {
      setChecked(0);
    } else {
      setChecked(option);
      
    }
  };
  const setCurrentPageNo = (e) => {
    setcurrentPage(e)
    
    }
    const productcount=Data.length
    const resultperpage=2;
  const handleRange = (option) => {
    if (range === option) {
      setRange(0);
    } else {
      setRange(option);
     
    }
  };

 
  return (
    <>
      <Wrapper>
        <h2>Products</h2>
        <div className="box">
          <aside className="sidebar">
            <div className="filter">
              <h2>Filters</h2>
              <div className="price-filter">
                <h2>Sort</h2>
                <div>
                  <span>Price Low to High</span>
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="lowToHigh"
                      id=""
                      checked={checked === 1}
                      onClick={() => handleCheckbox(1)}
                  
                    />
                  </div>
                </div>

                <div>
                  <span>Price High to Low</span>
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="hightToLow"
                      id=""
                      checked={checked === 2}
                    
                      onClick={() => handleCheckbox(2)}
                    />
                  </div>
                </div>
              </div>

              <div className="price-filter">
                <h2> price range</h2>
                <div>
                  <span>₹0 to ₹10000</span>
                   <StyledCheckbox name="range"  checked={range===1} onClick={()=>handleRange(1)}/>
                </div>
                <div>
                  <span>₹10000 to ₹30000</span>
                   <StyledCheckbox name="range"  checked={range===2} onClick={()=>handleRange(2)}/>
                </div>
                <div>
                  <span>₹30000 to ₹60000</span>
                   <StyledCheckbox name="range"  checked={range===3} onClick={()=>handleRange(3)}/>
                </div>
                <div>
                  <span> ₹60000 and more</span>
                   <StyledCheckbox name="range"  checked={range===4} onClick={()=>handleRange(4)}/>
                </div>
              </div>
            </div>
          </aside>
          <div className="products">
            
            {Data.length > 0 &&(

            Data.sort((a, b) => {
                if (checked === 1) {
                  return a.price - b.price;
                } else if (checked === 2) {
                  return b.price - a.price;
                } else {
                  return 0; // No sorting
                }
              })
              .filter(item => {
                switch (range) {
                  case 1:
                    return item.price >= 0 && item.price <= 10000;
                  case 2:
                    return item.price > 10000 && item.price <= 30000;
                  case 3:
                    return item.price > 30000 && item.price <= 60000;
                  case 4:
                    return item.price > 60000;
                  default:
                    return true; // No filtering
                }
              }).map((item, index) => {
               
                    return <Card item={item} key={index} />;
                
                
              })).slice((currentPage-1)*resultperpage,currentPage*resultperpage)
              }
         
    
          </div>
        </div>
        <div className="pagination-box">
          <Pagination 
            activePage={currentPage}
            itemsCountPerPage={resultperpage}
            totalItemsCount={productcount}
            onChange={setCurrentPageNo}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            lastPageText={"Last"}
            firstPageText={"First"}
            itemClass='page-item'
            activeClass='page-item-active'
            linkClass='page-link nav-link'
            activeLinkClass='page-link-active'
          />
          </div>
      </Wrapper>
    </>
  );
};

export default Products;
