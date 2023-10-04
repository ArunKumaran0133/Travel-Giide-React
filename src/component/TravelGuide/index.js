import {Component} from 'react'
import Loader from 'react-loader-spinner'

import AreaList from '../AreaList'

import {
  TravelGuideBgContainer,
  Header,
  AreaListContainer,
  LoadingViewContainer,
} from './styledComponents'

const apiStatusObj = {
  initial: 'INITIAL',
  isLoading: 'IS_LOADING',
  success: 'SUCCESS',
}

class TravelGuide extends Component {
  state = {placeList: [], apiStatus: apiStatusObj.initial}

  componentDidMount() {
    this.getPlaceDetails()
  }

  getPlaceDetails = async () => {
    this.setState({apiStatus: apiStatusObj.isLoading})
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.packages.map(eachItem => ({
      description: eachItem.description,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
    }))
    this.setState({placeList: formattedData, apiStatus: apiStatusObj.success})
  }

  renderLoadingView = () => (
    <LoadingViewContainer data-testid="loader">
      <Loader type="ThreeDots" color="#52bbf0" />
    </LoadingViewContainer>
  )

  renderAreaList = () => {
    const {placeList} = this.state
    return (
      <AreaListContainer>
        {placeList.map(eachItem => (
          <AreaList key={eachItem.id} placeDetail={eachItem} />
        ))}
      </AreaListContainer>
    )
  }

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusObj.success:
        return this.renderAreaList()
      case apiStatusObj.isLoading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <TravelGuideBgContainer>
        <Header>Travel Guide</Header>
        {this.renderResultView()}
      </TravelGuideBgContainer>
    )
  }
}
export default TravelGuide
