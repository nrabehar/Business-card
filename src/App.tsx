import assets from './assets';
import { Container, UserContact, UserInfo, UserPhoto } from './components';

function App() {

	return (
		<>
			<Container>
				<UserContact
					email='zac.patrick@mail.com'
					phone='(+33) 6 32 43 1290'
					social_links={{
						github: 'https://www.github.com/zacpatrick',
						linkedin: 'https://www.linkedin.com/zacpatrick',
						twitter: 'https://www.x.com/zacpatrick',
					}}
				/>
        <Container.Section>
          <UserPhoto src={assets.images.userPic} alt='user-pic' />
          <UserInfo
            fname='Zac'
            lname='Patrick'
            title='Front-end Developer'
            location='San Francisco'
            description='High accomplishment and user-focused Front-end Developer adept in collaborating with UX and design teams to plan the technical writting and execution of functionnal specifications for websites and applications.'
            technologies={[
              'Javascript','React','Nodejs'
            ]}
          />
        </Container.Section>
			</Container>
		</>
	);
}

export default App;
