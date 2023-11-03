import styled from 'styled-components'



const Wrapper=styled.section`
 background:#281639;
 background-size: contain;
 
 background-repeat: repeat;
 padding-bottom:60px;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    .home-main{
        
    display: grid;
    place-items: center;
    padding: 15%  0;

      .home-body{
   
     width: 60%;
     margin: 0 auto;
    text-align: center;
    .button-scroll{
      margin-top:40px;
      padding: 10px 60px;
      background:none;
      border: 2px solid #ffff;
      transition: ease;
      &:active{
        border: 2px solid #1f1b1bba;
        color: black;
      }
      >a{
        color: #fff;
        width: 100%;
        font:800 1rem 'Poppins' ,'sans-sarif';
        outline: none;
        text-decoration:none;
        &:active{
          color:black;

        }
      }
    }
    >h2{
      font-size: 3vmax;
    font-family: "Poppins", Helvetica;

    color: #ffff;
    text-overflow: ellipsis;
    }

    .search-bar{
            width: 100%;
           
            display: flex;
          
            margin: 40px auto;
            @media (max-width:769px) {
              display: grid;
              row-gap:20px;
            }
           >input{
           border-radius:5px 0 0 5px;
            padding: 8px 30px;
            outline: none;
            border: none;
            width: 80%;
            color: #464343;
            font: 800 1.3rem 'Poppins','sans-sarif';
            @media (max-width:769px) {
              width: 100%;
              border-radius:5px 5px 5px 5px;
            }
            &:focus {
              outline: 2px solid #4182c0;
             
            }
           }
           >button{
            padding: 8px 30px;
            border-radius:0 5px 5px 0;
            outline: 2px solid #4182c0;
           background: #4182c0;
            border: none;
            color: #ffff;
            font: 800 1.3rem 'Poppins','sans-sarif';
            width: 20%;
            min-width:150px;
            transition: all 0.1s ease;
            &:active{
              background:none;
              outline: 2px solid #4182c0;

            }
            @media (max-width:769px) {
              width: 40%;
              margin: 0 auto;
              border-radius:5px 5px 5px 5px;
            }
           }
          }
          }
        
    }

   
`
export default Wrapper