import {
  ItemContainer,
  Image,
  Name,
  Description,
  TextContainer,
} from './styledComponents'

const AreaList = props => {
  const {placeDetail} = props
  const {name, imageUrl, description} = placeDetail
  return (
    <ItemContainer>
      <Image src={imageUrl} alt={name} />
      <TextContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </TextContainer>
    </ItemContainer>
  )
}

export default AreaList
