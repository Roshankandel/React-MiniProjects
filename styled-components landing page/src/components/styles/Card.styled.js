import styled from "styled-components";
export const StyledCard = styled.div`

text-align:center;
display:flex;
justify-content:space-between;
border:none;
box-shadow: 0 0 10px rgba(0,0,0,0.25);
margin-top:20px;
padding:20px 30px;
flex-direction:${({ layout }) => layout};

img{
   
    width:80%;
    margin-top:10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction:column;
    image{
        margin-top:20px;
        height:15rem;
        width:20rem;
    }
  }
`

