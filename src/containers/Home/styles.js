import styled from "styled-components";


export const Container = styled.div `
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;








`


export const Image = styled.img `

width: 330px;
margin-top: 30px;
transform : translateY(0px);
animation: float 5s ease-in-out infinite;

@keyframes float {
    0%{
        transform:translateY(0px)
    }
    50%{
        transform:translateY(-30px)
    }
    100%{
        transform:translateY(0px)
    }
    
}

`

export const H1 = styled.h1`


color:white;

font-size: 28px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: center;
margin-bottom: 40px;
margin-top: -20px;


`

export const InputLabel = styled.p `
    color:white;
  
font-size: 18px;
font-weight: 700;
line-height: 22px;
text-align: left;
padding-left: 25px;



`

export const Input = styled.input `
width:  342px;
height:  58px;
top: 521px;
left: 36px;
gap: 18px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border:none;
font-size: 18px;
font-weight: 300;
line-height: 21px;
text-align: center;
margin-bottom: 40px;
margin-top: 2px;
color:white;
outline: 1px solid rgb(209,156,0);




`
export const ContainerItens = styled.div `

padding:50px 36px;
display: flex;
flex-direction: column;


`

export const Button = styled.button `

width: 342px;
height: 68px;
padding: 0px, 113px, 0px, 113px;
background:rgb(209,156,0);
margin-top: 50px;
border-radius: 14px;

font-size: 17px;
font-weight: 900;
line-height: 3px;
text-align: center;
border:none;
cursor:pointer;
transition:0.2s all ease-in;

&:hover{

    background-color: black;
    border:2px solid rgb(209,156,0);
    color: rgb(209,156,0);

}

&:active{
    transform:scale(1.1)
}




`

export const Order = styled.li `
display: flex;
flex-direction: column;
width:  342px;
height:  101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border:none;
outline: 1px solid rgb(209,156,0);
margin-top: 20px;


p{
    margin-left:20px;
}

.Pedido{
font-size: 18px;
line-height: 21px;
color: #d3d3d3;
font-weight: 300;
margin-top: 15px;


}
.Name{
font-size: 18px;
font-weight: 700;
line-height: 21px;
color: rgba(255, 255, 255, 1);
margin-bottom: 10px;

}

button{
    background:transparent;
    border: none;
    cursor:pointer;
    margin-left: 290px;
    width: 24px;
    height: 28px;
    top: 39px;
    left: 303px;

    &:hover{
        transform:scale(1.04)
    }
}

`