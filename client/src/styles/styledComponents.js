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
  padding: 22px 0 2px 0;
`

export const HeaderWrapperElement = styled.div`
  opacity: ${(props) => (props.active ? '1' : '0.2')};
  margin-right: 40px;
  height: 36px;
  display: inline-flex;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  &::before {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    bottom: 0;
  }
  &:hover {
    opacity: 1;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: white;
      bottom: 0;
    }
  }
`
const img = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: 24, height: 24 }} />
)
export const Img = styled(img)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.color || 'white'};
`
export const HeaderWrapperElementTitle = styled.h2`
  padding: 4px 5px;
  font-weight: 600;
  font-size: 16px;
  color: white;
`

export const Button = styled.div`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 5px;
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.color || theme.primaryColor};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.secondaryColor};
  }
`

export const ContainerMainPage = styled.div`
  height: 260px;
  display: block;
  padding: 40px 5px;
`
export const MainPageText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color || theme.textColor};
  line-height: 30px;
`

export const SearchForm = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
  background: ${theme.secondaryColor};
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
`
export const Input = styled.input`
  height: 100%;
  width: ${(props) => props.width};
  border-radius: 5px;
  padding: 0 5px 0 10px;
  margin-right: 5px;
`
export const ButtonForForm = styled.button`
  width: ${(props) => props.width};
  background-color: ${theme.primaryColor};
  font-size: ${(props) => props.size || '16px'};
  font-weight: 600;
  border-radius: 5px;
`
