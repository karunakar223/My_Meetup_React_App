import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'
import {
  HomeContainer,
  HomeHeader,
  HomeDescription,
  HomeButton,
  HomeImage,
  RegisteredHeader,
  RegisteredDescription,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, input, topic} = value

      const item = topicsList.find(each => each.id === topic)
      console.log(item)
      const updateRegistration = () => {
        if (isRegistered) {
          return (
            <>
              <RegisteredHeader>Hello {input}</RegisteredHeader>
              <RegisteredDescription>
                Welcome to {item.displayText}
              </RegisteredDescription>
            </>
          )
        }
        return (
          <>
            <HomeHeader>Welcome to Meetup</HomeHeader>
            <HomeDescription>Please register for the topic</HomeDescription>
            <Link to="/register">
              <HomeButton>Register</HomeButton>
            </Link>
          </>
        )
      }

      return (
        <>
          <Header />
          <HomeContainer>
            {updateRegistration()}
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
