import React, { useEffect } from "react";

import { Utils } from "./Utils";

import { useNavigate } from "react-router-dom";

import {IoIosCall, IoIosHome, IoIosMail} from 'react-icons/io'
import Card from "./Card";
const Feature = ({ top6Products }) => {

  const{ Wrapper, Banner, Banner2, Banner3, Wrapper2, Footer }= Utils ;
  
  const navigate = useNavigate();
  
  const bannerimg=[
    {
      url:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698839498/Croma%20Assets/CMS/New%20at%20croma/01-11-2023/HP_BigTile_NewAtCroma_macbook_1nov2023_ozpcg8.png?tr=w-1024"
    },
    {
      url:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698907210/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/02-11-2023/HP_BigTile_NewAtCroma_ONneplus_nov2023_xqytfd.png?tr=w-1024"
    },
    {
      url:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698853129/Croma%20Assets/CMS/New%20at%20croma/crossloops/HP_4Split_NewAtCroma_Crossloop_27Oct2023_sruivn.png?tr=w-720"
    },
    {
      url:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698384475/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Oct%202023/27-10-2023/HP_4Split_NewAtCroma_cromaSW_27Oct2023_ndsdgi.png?tr=w-720"
    },
    {
      url:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698907207/Croma%20Assets/CMS/Homepage%20Banners/01_Homepage%20Bugs%20Daily/Nov%202023/02-11-2023/HP_4Split_NewAtCroma_Lenevo_2nov2023_yufauo.png?tr=w-720"
    },
    
  ]
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
        // Trigger animation here
        console.log("Animation triggered!");
        // Remove event listener after animation is triggered
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  return (
    <>
    
      <Wrapper className="feature">
       

        <div className="feature-box">
          <h2>Latest Deals</h2>
          <div className="feature-main">
            {top6Products.length > 0 &&
              top6Products.map((item, index) => {
                return (
                  <>
                    <Card  key={index} item={item} />
                     
                   
                  </>
                );
              })}
          </div>
        </div>
      </Wrapper>

      <Banner>
        <div className="banner-content">
          <h2>Get Upto 50% Off On Favourate brands</h2>
          <button className="banner-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </Banner>
      <Wrapper2 >
        <div className="feature-box feature-2" id="products">
          <h2>Featured Products</h2>
          <div className="feature-main">
            {top6Products.length > 0 &&
              top6Products.map((item, index) => {
                return (
                  <>
                    <div className="feature-content" key={index} value={item}>
                      <div className="feature-img">
                        <img src={item?.images[0]?.url} alt="" />
                      </div>

                      <div className="feature-details">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>

                        <span className="price">₹{item.price}</span>
                        <button className="feature-btn">Buy Now</button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </Wrapper2>

      <Banner2>
        <div className="banner">
          <div className="banner-content">
            <h2>Get your Dream iPhone With Amazing Offers</h2>
          </div>
        </div>
      </Banner2>

      <Banner3>
        <div className="main">
        <div className="top">
          <div className="first"><img src={bannerimg[0].url} alt="" /></div>
          <div className="first"><img src={bannerimg[1].url} alt="" /></div>
          
        </div>
        <div className="bottom">
          
        { bannerimg.map((item,index)=>{
          return(
            <div><img src={item.url} alt="" key={index} /></div>
          )

        }).splice(2,bannerimg.length) 
          
         }
        </div>
        </div>
      </Banner3>

      <Footer>
      <div className="footer">
        <div className="col-1">
         <h2>Find Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos provident non laborum quas fugit. Quas, </p>
       
        <div className="icons">
          <ul>
            <li>
            <IoIosCall className="icon" /> <span>+9187654321</span>
            </li>
            <li>
            <IoIosHome className="icon" /> <span>sec 22,Faridabad</span>
            </li>
            <li>
            <IoIosMail className="icon" /><span>sam178@bbstore.com</span> 
            </li>
           
          </ul>
       
      
          
        
        </div>
        </div>
        <div className="col-2">
           <h2>About us </h2>
          <ul>
            <li>
            Staff
            </li>
            <li>
            Team
            </li>
            <li>
            Careers
            </li>
            <li>
            Blog
            </li>



            
          </ul>
        </div>
        <div className="col-2">
           <h2>About us </h2>
          <ul>
            <li>
            Staff
            </li>
            <li>
            Team
            </li>
            <li>
            Careers
            </li>
            <li>
            Blog
            </li>



            
          </ul>
        </div>
        <div className="col-2">
           <h2>About us </h2>
          <ul>
            <li>
            Staff
            </li>
            <li>
            Team
            </li>
            <li>
            Careers
            </li>
            <li>
            Blog
            </li>



            
          </ul>
        </div>
       
       
      </div>
      </Footer>
    </>
  );
};

export default Feature;
