import styled from 'styled-components'

export const theme = {
  fontFamily: "'Montserrat', sans-serif",
  primaryColor: '#339990',
  secondaryColor: '#EDD174',
  textColor: '#2E2E2E',
}

export const Container = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.headerSize} 1fr;
  max-width: 1110px;
  height: 100%;
  margin: 0 auto;
`

export const Header = styled.header`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  display: grid;
  grid-template-rows: 50px 60px;
`

export const HeaderWrapperFirst = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 50% 50%;
`

export const HeaderWrapperFirstLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Logo = styled.h1`
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  color: white;
`

export const LogoSpan = styled.span`
  color: ${theme.secondaryColor};
`

export const HeaderWrapperFirstControlWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const HeaderWrapperSecond = styled.div`
  padding: 22px 0px 2px 5px;
`

export const Button = styled.div`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 5px;
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.color};
  color: ${(props) => props.textColor};
  font-family: 'Montserrat', sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  cursor: pointer;
  &:hover {
    color: ${theme.secondaryColor};
  }
`
