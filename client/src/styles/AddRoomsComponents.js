import styled from 'styled-components';

export const SForm = styled.div`
  display: block;
  width: 700px;
  height: 100%;
  margin: 10px auto;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
`;
export const STitle = styled.h2`
  display: block;
  margin: 0 0 10px 0;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;
export const SLabel = styled.label`
  display: ${(props) => (props.inline ? 'inline' : 'block')};
  line-height: 40px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px 0 0;
`;
export const SInput = styled.input`
  height: 40px;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
`;
export const SInputWIdth = styled.input`
  height: 40px;
  width: 70px;
  margin: 0 0 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
`;
export const STextarea = styled.textarea`
  height: 100px;
  width: 100%;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
  resize: none;
`;
export const SSelect = styled.select`
  height: 40px;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #eb4034' : '1px solid #ddd')};
`;
export const SOption = styled.option`
  widht: 100%;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
`;

export const SButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
`;
