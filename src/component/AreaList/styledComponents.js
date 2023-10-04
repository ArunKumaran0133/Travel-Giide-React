import styled from 'styled-components'

export const ItemContainer = styled.li`
  background-color: white;
  width: 31%;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 350px;

  @media screen and (max-width: 1000px) {
    width: 45%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

export const Image = styled.img`
  height: 200px;
  width: 100%;
`
export const Name = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-size: 18px;
  font-weight: 500;
`
export const Description = styled.h1`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 14px;
  font-weight: 400;
`
export const TextContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`
