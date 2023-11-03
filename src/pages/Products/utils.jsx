import styled from "styled-components";


const image ="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-check-mark-1.png"
const Wrapper = styled.section`
    display: grid;
    place-items: center;
    padding: 5% 0;
    ul{
   list-style: none;
    display: flex;
    }
    > h2 {
      font: 800 2rem "Poppins", "sans-sarif";
      text-decoration: underline;
      letter-spacing: 3px;
      padding: 2% 0;
    }
    .box {
      width: 90%;
      min-width: 200px;
    
      display: flex;
      column-gap: 2%;
  

      @media (max-width: 768px){

        display: grid;
        row-gap: 30px;
      }
      .sidebar {
        width: 30%;
      
        min-width: 200px;
        border: 2px solid #f2f2f2;
        padding: 2% 3%;
        @media (max-width: 768px){

      width: 100%;
}
        .filter {
          > h2 {
            font: 800 2rem "Poppins", "sans-sarif";
            border-bottom: 2px solid #f2f2f2;
            text-align: center;
          }
          .price-filter {
            padding: 5% 4%;
            margin-top: 20px;
            border: 2px solid #f2f2f2;
            > h2 {
              font: 800 1.4rem "Poppins", "sans-sarif";
              text-decoration: underline;
            }
            > div {
              display: flex;

              padding: 10px 0;
              column-gap: 10px;
              align-items: center;
              justify-content: center;
              > span {
                font: 400 1.3rem "Poppins", "sans-sarif";
              }
              .checkbox-wrapper {
                transition: all 100ms ease-out;
                &:focus:not(.focus-visible) {
                  outline: 0;
                }
                > input {
                  appearance: none;
                  cursor: default;
                  background-color: #dfe1e4;
                  border-radius: 72px;
                  border-style: none;
                  flex-shrink: 0;
                  height: 20px;
                  margin: 0;
                  position: relative;
                  width: 30px;
                  &:hover {
                    background-color: #c9cbcd;
                    transition-duration: 0s;
                  }
                  &:checked {
                    background-color: #6e79d6;
                    &:hover {
                      background-color: #535db3;
                    }
                    &::after {
                      background-color: #fff;
                      left: 13px;
                    }
                  }
                  &::before {
                    bottom: -6px;
                    content: "";
                    left: -6px;
                    position: absolute;
                    right: -6px;
                    top: -6px;
                  }
                  &::after {
                    background-color: #fff;
                    border-radius: 50%;
                    content: "";
                    height: 14px;
                    left: 3px;
                    position: absolute;
                    top: 3px;
                    width: 14px;
                    transition: all 100ms ease-out;
                  }
                }
              }
            }
            .range {
              
            }
           
          }
        }
      }
      .products {
        border: 2px solid #f2f2f2;
        width: 70%;
       
        min-width: 200px;
        padding: 2% 3%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2%;
        row-gap: 2%;
        place-items: center;
        width: 80%;
        min-width: 200px;
        @media (max-width: 1440px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1268px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);
          width: 100%;
        }

        .feature-content {
          width: 100%;
         
          min-width: 100px;
          cursor: pointer;
          border: 2px solid #f2f3f4;
          background-color: #ffff;

          @media (max-width: 468px) {
            width: 100%;
            min-width: 200px;
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
    }
    .pagination-box{
        
    display: grid;
    place-items: center;
    margin: 0 auto;
   text-align: center;
    margin: 30px auto;
   display: block;
}
.page-item{
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.178);
    transition: all  0.3s;
    padding: 20px 10px;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    &:last-child{
    border-radius: 0 5px 5px 0 ;
  
}
&:hover{
    background-color:rgb(170, 182, 204) ;
  color: #ffff;
}
&:first-child{
    border-radius: 5px 0 0 5px ;

}

}
.page-link{
    padding: 1vmax 1.2vmax;
   background: none !important;
   color: rgb(81, 122, 200);
    border: none !important;
    outline: none !important;
    &:hover{
        background-color:rgb(170, 182, 204) ;
  color: #ffff;
    }
    @media (max-width:568px){
        font-size: 0.8rem;
        padding: 2px 2px;
    }
}




.page-item-active{
  background-color:rgb(170, 182, 204) ;
  color: #ffff;
  
}
  `;
  const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 3px;
 transition: all 0.1s ease;
  &:checked {
    background: url(${image});
    background-size: contain;
    background-position:center;
  }
`;

export const Utils ={Wrapper,StyledCheckbox}