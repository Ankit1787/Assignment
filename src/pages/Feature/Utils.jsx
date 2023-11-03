
import styled from "styled-components";
import banner from "../../assets/2.jpg";

const banner2 =
    "https://www.apple.com/v/iphone/home/bp/images/overview/subhero/guided_tour__c40f88on9o8y_large_2x.jpg";
 
const Wrapper = styled.section`
display: grid;
place-items: center;




.feature-main {
  overflow: hidden;
  display: grid;
  place-items:center;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width:1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width:1268px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width:768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .feature-content {
    width: 18rem;
    cursor: pointer;
    border: 2px solid #f2f3f4;
    background-color: #ffff;
    @media (max-width:1268px) {
      width: 22rem;
  }
  @media (max-width:768px) {
    width: 25rem;
  }
  @media (max-width:468px) {
    width: 18rem;
  }
  }
  .feature-details {
    padding: 1vmax 1.4vmax;
    display: grid;
    row-gap: 10px;
    transform: translateY(-3px);

    > p {
      font-family: "Poppins", Helvetica;
      font-weight: 500;
      color: #83424a;
      height: 100px;
      text-overflow: ellipsis;
      overflow: hidden;

    }
    > h1 {
      font-family: "Poppins", Helvetica;
      color: #452b52;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      
    }
  }
  .feature-img {
    width: 100%;
    height: 250px;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      border-bottom: 2px solid #f2f3f4;
      &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        transition: 1s ease;
      }
    }
  }
  .feature-btn {
    padding: 15px 0;
    color: #f2f3f4;
    background-color: #0f0c09;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: ease;
    &:active {
      color: rgba(0, 0, 0, 0.24);

      transform: scale(0.9);
      transition: 1s ease;
    }
  }
  .price {
    font-size: 1.6rem;
    font-weight: 600;
    color: #0f0c09;
  }
}

.feature-box {
  > h2 {
    font-family: "Poppins", Helvetica;
    font-size: 1.7rem;
    margin: 60px auto 40px 0;
    font-weight: 600;
    width: fit-content;
    letter-spacing: 5px;
    border-bottom: 2px solid #0f0c09;
  }
}

`;

const Banner = styled.section`

height: 30vh;
width: 100%;
display: grid;
place-items: center;
margin: 60px 0 0 0;
justify-items: flex-start;
background: url(${banner});
background-position: center;
background-size: cover;
.banner-content {
  width: 60%;
  min-width: 100px;
  text-align: center;

  > h2 {
    font-size: 3.5vmax;
    font-family: "Poppins", Helvetica;
  }
  .banner-btn {
    transition: ease;
    padding: 15px 60px;
    margin: 0 auto;
    color: #f2f3f4;
    background-color: #0f0c09;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:active {
      color: #0f0c09;
      background-color: #f1f2f3;
    }
  }
}
`;
const Banner2 = styled.section`
width: 100%;
height: 70vh;

padding: 5% 0%;
.banner {
  background: url(${banner2});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  min-width: 300px;
  border-radius: 25px;
 

  .banner-content {
    display: flex;
    padding: 0 5%;
    height: 100%;

    align-items: center;
    justify-content: center;
    width: 50%;
   
 
    > h2 {
      font-size: 2.5vmax;
      color: #ffff;
      font-family: "Poppins", Helvetica;
    }
  }
}
`;

const Wrapper2 =styled(Wrapper)`
background-color:#dfe2e5;
padding: 2.5vmax 1.5vmax;
`
const Banner3=styled.section`

display: grid;
place-items:center;
.main{
height: 100%;
width: 80%;
min-width: 300px;
 display: grid;
 row-gap: 20px;
.top{
display: flex;
 align-items:center;
 justify-content: center;
column-gap: 20px;

width: 100%;
@media (max-width:768px) {
   display: grid;
   row-gap: 20px;
    
  }
.first{
  width: 70%;
  height: 100%;
  @media (max-width:768px) {
    width: 100%;
    
  }
 >img{
  height: 100%;
  width: 100%;
  object-fit: contain;  
 }

 
}
}
.bottom{
display: flex;
column-gap: 20px;
width: 100%;
@media (max-width:768px) {
   display: grid;
   row-gap: 20px;
    
  }
>div{
  width: 50%;
  @media (max-width:768px) {
  width: 100%;
    
  }
  >img{
    height: 100%;
    width: 100%;
    object-fit: contain;

  }
}
}
}

`
const Footer =styled.footer`
display: grid;
place-items: center;
height: 100%;
padding: 5%  0;
background:#281639;
box-shadow: rgba(0, 0, 0, 0.24) 9px 0 0;
margin-top:80px;
.footer{
display: flex;
width: 80%;
min-width: 300px;

row-gap: 20px;
column-gap: 30px;
flex-wrap:wrap;
.col-1{
 width: 40%;
 min-width:150px;
  
  >h2{
    font:800 2rem 'Poppins', 'sans-sarif';
    white-space: nowrap;
    color: #ffff;
  }
  >p{
   
    color: #ffff;
   padding: 10px 0;
    
    text-overflow:wrap;
    font:500 1rem 'Poppins', 'sans-sarif';
  }
  .icons{
  
    column-gap:20px;
    >ul{
        list-style: none;
       
        >li{
          display: flex;
          align-items: center;
          color: #ffff;
          .icon{
      display: block;
      font-size: 2rem;
      color: #ffff;
      
    }
    >span{
      color: #ffff;
      font:500 1rem 'Poppins', 'sans-sarif';
    }
        }
      }
    
  }

  @media (max-width:660px) {
    width: 50%;
    min-width: 150px;
    
  }
  @media (max-width:460px) {
    width: 100%;
   
    
  }
}
.col-2{
  width: 25%;
  min-width: 100px;
  >h2{
    white-space: nowrap;
    font:800 1.5rem 'Poppins', 'sans-sarif';
    margin: 10px 0;
    color: #ffff;
  }
  >ul{
    list-style: none;
 
    >li{
      font:500 1rem 'Poppins', 'sans-sarif';
      color: #ffff;
      cursor: pointer;
      &:hover{
        color:#5e5e66;
      }
    }
  }
  .img{
    width:100px;
    height: 100px;
    >img{
    
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width:660px) {
    width: 30%;
    min-width: 100px;
    
  }
  @media (max-width:460px) {
    width: 40%;
    min-width: 100px;
    
  }
}
}

`

export const Utils = { Wrapper, Banner, Banner2, Banner3, Wrapper2, Footer };