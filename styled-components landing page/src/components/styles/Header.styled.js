import styled from "styled-components";
export const StyledHeader = styled.header`
background-color:${({ theme }) => theme.colors.header};
padding: 0;
margin:0;
box-sizing:border-box;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-bottom:10px;
    }
`;

export const Logo = styled.img`
  margin-bottom: 30px;
  padding-top:20px;
  margin-right:10px;
  height:2.8rem;
 
  @media(max - width: ${({ theme }) => theme.mobile}) {
  margin - bottom: 20px;
}

`
export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`

