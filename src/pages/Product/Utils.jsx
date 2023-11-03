import styled from 'styled-components';




const Wrapper =styled.section`
 position: relative;
  display: grid;
  place-items:center;
  padding: 10% 0 5% 0;
  @media(max-width:1234px){
    padding: 15% 0 5% 0;
    }
  @media(max-width:734px){
    padding: 25% 0 5% 0;
    }
  @media(max-width:484px){
    padding: 45% 0 5% 0;
    }
  .product{

    width: 80%;
    min-width:200px;

    display: flex;
    column-gap: 5%;

    @media(max-width:1024px){
      display: grid;
      row-gap: 40px;
    }
    .product-img{
      display: flex;
       column-gap: 3%;
      width: 60%;
      min-width:200px;
       overflow: hidden;
       @media(max-width:1024px){
         width:100%;
         display:grid;
         row-gap: 20px;
    }
      .ref-img{
        display: grid;
        row-gap: 10px;
       order:2;
        width:30%;
        height: 40%;
        min-width:100px;
        @media(max-width:1024px){
          width: 100%;
         display:flex;
         flex-wrap:wrap;
         column-gap:30px;
    }
         .img{
          width: 100%;
          @media(max-width:1024px){
          width: 40%;
         display:flex;
         flex-wrap:wrap;
         column-gap:30px;
    }
          height: 150px;
          transition: all;
        
        
        
           &:hover{
            outline:2px solid orange;
            outline-offset: -1px;
           }
          >img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
         }
      }

      .main-img{
        width:80%;
        order:1;
        height:  650px;
        min-width:200px;
        @media(max-width:1024px){
            width: 100%;
          
          }
        .img{
          width: 100%;
          height: 100%;
          border: 1px solid #f2f2f2;
          -webkit-animation: slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          @-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

          >img{
            width: 100%;
          height: 100%;
          object-fit: cover;
          }
        }
      }
    }
    .product-details{
      width: 40%;
      min-width:200px;
      @media(max-width:1024px){
         width:100%
    }
      >h1{
        font:800 3rem 'Poppins' ,'sans-sarif';
        @media(max-width:484px){
          font:800 2rem 'Poppins' ,'sans-sarif';
    }
      }
      >p{
        padding: 30px 0;
        display: grid;
        font:800 2rem 'Poppins' ,'sans-sarif';
        
        >span{
          font:500 1rem 'Poppins' ,'sans-sarif';
        }
      }
      .buttons{
        display: flex;
        column-gap: 5%;
        margin-bottom:60px;
        @media(max-width:768px){
        display: grid;
        row-gap: 30px;
    }
        .btn{
          font:800 1.5rem 'Poppins' ,'sans-sarif';
        padding: 10px 0;
        width:50%;
        background:none;
        border: none;
        white-space: nowrap;
        outline: 2px solid #4d4e50;
        border-radius:5px;
        overflow: hidden;
        transition:all 0.1s ease;
        @media(max-width:768px){
          width:100%;
    }
        &:active{
          background-color:#4d4e50;
        
          color: #ffff;
        }
      }
      .btn-add{
        font:800 1.5rem 'Poppins' ,'sans-sarif';
        width:50%;
        background:#4182c0;
        border: none;
        white-space: nowrap;
        border-radius:5px;
        overflow: hidden;
        color: #ffff;
        transition:all 0.1s ease;
        @media(max-width:768px){
          width:100%;
    }
        &:active{
          background:none;
          outline: 2px solid #4182c0;
          color: #4182c0;
        }
      }
      }
      >span{
        
        font:800 1.8rem 'Poppins' ,'sans-sarif';
        
      }
      
      

    }

  }
  .btn-back{
    padding: 6px 6px;
    font:800 1.5rem 'Poppins' ,'sans-sarif';
    background: #4182c0;
    border: none;
    color:#ffff;
    position: absolute;
    top: 40px;
    left: 65px;
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