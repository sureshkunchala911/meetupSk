import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import Context from '../../Context/Context'
import './index.css'

const Home = () => {
  const Registration = ({inputValue, activeId}) => (
    <div className="bg-container">
      <Navbar />
      <div className="details-container">
        <h1 className="heading">Hello {inputValue}</h1>
        <p className="topic">{activeId}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="image"
        />
      </div>
    </div>
  )

  const Register = () => (
    <div className="bg-container">
      <Navbar />
      <div className="details-container">
        <h1 className="heading">Welcome to Meetup</h1>
        <p className="topic">Please register for the Topic</p>
        <Link to="/register">
          <button className="button" type="button">
            Register
          </button>
        </Link>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="image"
        />
      </div>
    </div>
  )

  return (
    <Context.Consumer>
      {value => {
        const {inputValue, activeId} = value
        if (inputValue !== '') {
          return Registration({inputValue, activeId})
        }
        return Register()
      }}
    </Context.Consumer>
  )
}

export default Home
