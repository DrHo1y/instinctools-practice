import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5rem;
  color: palevioletred;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.section`
  padding: 4em;
  backgound: white;
`

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
`

const Link = ({ className, href, children }) => (
  <a className={className} href={href ? href : '#'}>
    {children}
  </a>
)
export const StyledLink = styled(Link)`
  border: 1px solid #eee;
  padding: 10px 20px;
  border-radius: 5px;
  color: blue;
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: blue;
  }
`
