import styled from 'styled-components';

export const theme = {
  fontFamily: "'Montserrat', sans-serif",
  primaryColor: '#339990',
  secondaryColor: '#EDD174',
  textColor: '#2E2E2E',
};

export const Container = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.headerSize} 1fr;
  max-width: 1110px;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
  display: grid;
  grid-template-rows: 50px 60px;
`;

export const HeaderWrapperFirst = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const HeaderWrapperFirstLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Logo = styled.h1`
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  color: white;
`;

export const LogoSpan = styled.span`
  color: ${theme.secondaryColor};
`;

export const HeaderWrapperFirstControlWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderWrapperSecond = styled.div`
  padding: 22px 0 2px 0;
`;

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
`;
const img = ({ src, alt }) => <img src={src} alt={alt} style={{ width: 24, height: 24 }} />;
export const Img = styled(img)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.color || 'white'};
`;
export const HeaderWrapperElementTitle = styled.h2`
  padding: 4px 5px;
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

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
`;

export const ContainerMainPage = styled.div`
  height: 260px;
  display: block;
  padding: 40px 5px;
`;
export const MainPageText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color || theme.textColor};
  line-height: 30px;
`;

export const SearchForm = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
  background: ${theme.secondaryColor};
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  position: relative;
`;
export const Input = styled.input`
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width};
  border-radius: 5px;
  padding: 0 5px 0 10px;
  margin-right: 5px;
  margin-bottom: ${(props) => (props.margin ? '10px' : '0')};
  border: ${(props) => (props.error ? '2px solid #eb4034' : props.border)};
`;
export const ButtonForForm = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${theme.primaryColor};
  font-size: ${(props) => props.size || '16px'};
  font-weight: 600;
  border-radius: 5px;
`;

export const FormError = styled.p`
  position: absolute;
  bottom: -20px;
  left: 5px;
  font-size: 16px;
  color: red;
  font-weight: 600;
`;

export const LoginRegisterForm = styled.form`
  position: relative;
  width: 500px;
  margin: 10px auto;
  padding: 20px 10px;
  border: 1px solid #eee;
  border-radius: 5px;
`;
export const LabelForInput = styled.label`
  display: inline-block;
  font-weight: 500;
  margin: 0 0 5px 0;
`;
export const FormErrorForRegister = styled.p`
  position: fixed;
  width: 300px;
  top: 120px;
  right: 130px;
  color: red;
  font-weight: 600;
`;
export const Link = styled.p`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
`;

export const DashboardContainer = styled.div`
  display: block;
  height: 100%;
`;

export const DashboardNavContainer = styled.div`
  display: block;
  width: 100%;
  height: 50px;
  padding: 13px 0 0 0;
  border-bottom: 1px solid #ddd;
`;

export const DashboardNavMenu = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const DashboadrNavItem = styled.li`
  height: 100%;
  line-height: 24px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const DashboatdTable = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 10px;
  margin: 10px 0;
`;
export const DashboatdTableItem = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;
