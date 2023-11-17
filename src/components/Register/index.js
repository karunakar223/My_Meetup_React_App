import Header from '../Header'

import RegisterContext from '../../Context/RegisterContext'

import {
  RegisterContainer,
  Heading,
  ImageContainer,
  Image,
  FormContainer,
  Form,
  InputLabel,
  InputElement,
  SelectElement,
  OptionElement,
  RegisterButton,
  ErrorElement,
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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        input,
        topic,
        onChangeInput,
        onChangeTopic,
        register,
        error,
        updateError,
      } = value

      const onFormSubmit = event => {
        event.preventDefault()
        if (input !== '' && topic !== '') {
          register()
          const {history} = props
          history.replace('/')
        } else {
          updateError()
        }
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <ImageContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </ImageContainer>
            <FormContainer>
              <Heading>Let us join</Heading>
              <Form onSubmit={onFormSubmit}>
                <InputLabel htmlFor="name">NAME</InputLabel>
                <br />
                <InputElement
                  type="text"
                  id="name"
                  value={input}
                  onChange={event => onChangeInput(event.target.value)}
                  placeholder="Your name"
                />
                <br />
                <InputLabel htmlFor="topics">TOPICS</InputLabel>
                <br />
                <SelectElement
                  value={topic}
                  onChange={event => onChangeTopic(event.target.value)}
                  id="topics"
                >
                  {topicsList.map(eachTopic => (
                    <OptionElement key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </OptionElement>
                  ))}
                </SelectElement>
                <br />
                <RegisterButton type="submit">Register Now</RegisterButton>
                {error ? (
                  <ErrorElement>Please enter your name</ErrorElement>
                ) : (
                  ''
                )}
              </Form>
            </FormContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
