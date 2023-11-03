
import  styled from 'styled-components'

const Navbar=styled.header`
height: 100%;
width: 100%;
display: flex;
position: relative;

`
const Wrapper = styled.nav`

min-width:100%;
display:flex;
height: fit-content;
position: relative;
justify-content: space-between;
padding:20px 40px;


.brand{
font:800 2rem 'Poppins' ,'sans-sarif';
color:#ffff;

}
.navlinks{

display:flex;
column-gap:20px;
list-style:none;
text-decoration:none;
color:#ffff;
font:800 1.5rem Poppins ,'sans-sarif';




}
.nav-link{
list-style:none;
text-decoration:none;
color:#ffff;
font:800 1.5rem Poppins ,'sans-sarif';
&:hover{
color:#8d8282;

}

}
.showbar{
display: none;
transition:all 0.5s ease;
}
.nav{




}
.navbar-toggle {
display: grid;
grid-gap: 5px;
.hamburger{
  
  border-top:  4px solid white;
  width: 50px ;

}
}
.navbar-toggle{
  display: none;
}
@media (max-width: 768px) {

.navbar-toggle{
  display: grid;
}
.nav {
display: none;
}

.showbar {
display: block;


}

.hidebar {
display: none;
}
}




`
const Wrapper2=styled.nav`
padding: 4vmax 1.5vmax;

min-width: 100%;
transform: translateX(-100%);
display: grid;
background-color: #250a29;
place-items:center;
position: absolute;

transition: ease;

.navlinks{
  display: grid;
  list-style: none;
  text-decoration:none;
 
row-gap: 20px;

  .navlink{
   text-decoration:none;
   font:800 1.8rem 'Poppins' ,'sans-sarif';
   color:#ffff;
   &:hover{
  color:#8d8282;
}
  }
}
.btn-cross{
  border:none;
  outline: none;
  background-color: transparent;
  position: absolute;
  top:10px;
  right:50px;
  color:#ffff;
  font:800 1.8rem 'Poppins' ,'sans-sarif';
}
${({ active }) =>
active &&
`


transform: translateX(0%);
`}
`

export const Utils ={Navbar,Wrapper,Wrapper2}