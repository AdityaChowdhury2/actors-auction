import { useEffect, useState } from 'react';
import './App.css';
import ActorsCart from './components/ActorsCart/ActorsCart';
import Headers from './components/Headers/Headers';
import Actors from './components/Actors/Actors';
// import avengerBG from '/avengers.jpg';

function App() {
	const budget = 5000000;
	const [actors, setActors] = useState([]);
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	const [cartActors, setCartActors] = useState([]);
	const [remaining, setRemaining] = useState(budget);
	const [cost, setCost] = useState(0);

	const handleAddActor = actor => {
		if (remaining < actor.salary)
			return alert('please select a low cost actor');
		setCartActors([...cartActors, actor]);
		setRemaining(remaining - actor.salary);
		setCost(cost + actor.salary);
	};
	const handleRemoveActor = (id, salary) => {
		setCartActors([...cartActors.filter(actor => actor.id !== id)]);
		setRemaining(remaining + salary);
		setCost(cost - salary);
	};

	const handleThemeChange = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	// fetching actors data
	useEffect(() => {
		fetch('data.json').then(res => res.json().then(data => setActors(data)));
	}, []);

	//setting the theme from local storage
	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.querySelector('html').setAttribute('data-theme', theme);
	}, [theme]);
	// console.log(theme);

	return (
		<div
			className={`bg-avengerBG bg-no-repeat ${
				theme === 'light' ? 'bg-neutral-300' : 'bg-neutral-800'
			}  bg-blend-overlay bg-fixed bg-cover`}
		>
			<Headers handleThemeChange={handleThemeChange} />
			<div className="flex flex-col lg:flex-row container gap-10">
				<Actors
					theme={theme}
					actors={actors}
					remaining={remaining}
					handleAddActor={handleAddActor}
					handleRemoveActor={handleRemoveActor}
				/>
				<ActorsCart cartActors={cartActors} remaining={remaining} cost={cost} />
			</div>
		</div>
	);
}

export default App;
