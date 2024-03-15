import {Component} from 'react'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Countries extends Component {
  state = {countryList: []}

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const finalList = initialCountriesList.filter(
      each => each.isVisited === true,
    )
    this.setState({countryList: finalList})
  }

  getCountry = value => {
    const {countryList} = this.state
    const countryDetails = initialCountriesList.find(each => each.id === value)
    const filterValue = countryList.find(each => each.id === value)
    if (filterValue === undefined) {
      this.setState(prevState => ({
        countryList: [...prevState.countryList, countryDetails],
      }))
    }
  }

  removeCountry = value => {
    const {countryList} = this.state
    const filteredList = countryList.filter(each => each.id !== value)

    this.setState({countryList: filteredList})
  }

  render() {
    const {countryList} = this.state
    console.log(countryList)
    const isValue = countryList.length === 0
    return (
      <div className="bg-container">
        <h1 className="heading1">Countries</h1>
        <ul className="ul-container">
          {initialCountriesList.map(each => (
            <li key={each.id} className="list-container">
              <div className="container1">
                <p className="p1">{each.name}</p>
                {countryList.find(e => e.id === each.id) === undefined ? (
                  <button
                    onClick={() => this.getCountry(each.id)}
                    className={
                      countryList.find(e => e.id === each.id) === undefined
                        ? 'btn1'
                        : 'btn2'
                    }
                    type="button"
                  >
                    Visit
                  </button>
                ) : (
                  <p className="visit">Visited</p>
                )}
              </div>
              <hr className="hr-line" />
            </li>
          ))}
        </ul>
        <h1 className="heading1"> Visited Countries</h1>
        {isValue ? (
          <div className="no-container">
            <p className="p1">No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul className="ul-container2">
            {countryList.map(each => (
              <li key={each.id} className="list-container1">
                <img alt="thumbnail" src={each.imageUrl} className="image1" />
                <div className="container2">
                  <p className="country">{each.name}</p>
                  <button
                    onClick={() => this.removeCountry(each.id)}
                    className="btn2"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Countries
