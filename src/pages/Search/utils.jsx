import styled from 'styled-components'
 const Wrapper = styled.section`
display: grid;
position: relative;
place-items: center;
height: 100%;
padding: 3%  0;

@media (max-width:500px) {
  
    padding: 35%  0 15% 0;
  }
>h2 {
font :800 2rem 'Poppins','sans-sarif';
text-decoration:underline;
letter-spacing: 3px;
}

.products{

padding: 5%  0;
display: grid;
grid-template-columns: repeat( 4, 1fr) ;
column-gap: 1%;
row-gap: 1%;
place-items:center;
width: 80%;
min-width:200px;
@media (max-width:1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width:1268px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width:768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 15%  0;
  }

.feature-content {
    width: 100%;
    min-width:290px;
    cursor: pointer;
    border: 2px solid #f2f3f4;
    background-color: #ffff;
  
  @media (max-width:468px) {
    width: 100%;
    min-width:200px;
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
.btn-back{
padding: 6px 6px;
font:800 1.5rem 'Poppins' ,'sans-sarif';
background: #4182c0;
border: none;
color:#ffff;
position: absolute;
top: 20px;
left: 25px;
cursor: pointer;
transition:all 0.1s ease;
&:active{
  background:none;
  color: #4182c0;
  outline: 2px solid #4182c0;
}
.icon{
  font-size: 3rem;
}
}

`
export default Wrapper