import assets from './assets';
import { Container, UserContact, UserPhoto } from './components';

function App() {

	return (
		<>
			<Container>
				<UserContact
					email='safnekena1@gmail.com'
					phone='+261344058128'
					social_links={{
						github: 'https://www.github.com/nrabehar',
					}}
				/>
        <Container.Section>
          <UserPhoto src={assets.images.userPic} alt='user-pic' />
        </Container.Section>
			</Container>
		</>
	);
}

export default App;
