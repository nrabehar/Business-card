import { Container, UserContact } from './components';

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
			</Container>
		</>
	);
}

export default App;
