import styled from 'styled-components';
export const StyledFooter = styled.footer`
 margin-top:40px;
 width:100%;
 background-color:${({ theme }) => theme.colors.footer};
 color:White;
 padding: 80px 0 60px;

 ul{
    list-style:none;
 }
 
 ul li {
    margin-bottom: 20px;
    font-weight:bold;
  }
  
  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {

    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
 `;
