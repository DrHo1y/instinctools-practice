import styled from 'styled-components';

export const SCatalogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 790px;
  grid-gap: 20px;
  margin-top: 20px;
`;
export const SFilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
export const SContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
`;
export const SHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 13px 0;
  font-size: 24px;
  font-weight: 500;
`;
export const SContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: 200px;
  grid-gap: 10px;
`;
export const SItem = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 180px 1fr 150px;
  grid-gap: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
`;
export const SImage = styled.div`
  width: 100%;
  heigth: 100%;
  border-radius: 5px;
  background-image: url(${(props) => props.src || null});
  background-position: center center;
  background-size: cover;
`;
export const SDescription = styled.div`
  width: 100%;
  height: 100%;
`;
export const STitle = styled.h2`
  display: block;
  font-size: 20px;
  line-height: 30px;
  fonr-weight: 600;
  margin-bottom: 5px;
`;
export const SLocation = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 10px;
`;
export const SText = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  line-height: 18px;
`;
export const SPanel = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 0;
`;
export const SButton = styled.div`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  background-color: #339990;
  text-align: center;
`;
