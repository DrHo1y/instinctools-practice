import styled from 'styled-components';

export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const Group = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;
export const Title = styled.h2`
  display: block;
  margin: 0 0 10px 0;
  font-size: 22px;
  font-weight: 500;
`;
export const SubTitle = styled.h4`
  display: block;
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 500;
`;
export const Label = styled.label`
  display: ${(props) => props.inline || 'block'};
  line-height: 40px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px 0 0;
`;
export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
`;
export const Radio = styled.input`
  height: 16px;
  width: 16px;
  display: inline-block;
  margin: 0 10px 0 0;
`;
export const Checkbox = styled.input`
  height: 16px;
  width: 16px;
  display: inline-block;
  margin: 0 10px 0 0;
`;
export const Textarea = styled.textarea`
  height: 80px;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
  resize: none;
`;
export const Select = styled.select`
  height: 40px;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
`;
export const Option = styled.option`
  widht: 100%;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
`;

export const Button = styled.button`
  height: 40px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
`;
