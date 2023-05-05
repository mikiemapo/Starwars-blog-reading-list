import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			getVehicles: () => {
				axios.get('https://swapi.dev/api/vehicles/')
					.then(response => {
						const data = response.data.results;
						setStore({ vehicles: data });
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						console.log('Request complete!');
					});
			},

			addFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
				console.log(store.favorites);
			},

			deleteFavorites: (index) => {
				console.log(index,'DELETE')
				const store = getStore();
				let filtered = store.favorites.filter((item, i) => i != index);
				setStore({ favorites: filtered });
			},

			getCharacters: () => {
				axios.get('https://swapi.dev/api/people/')
					.then(response => {
						const data = response.data.results;
						setStore({ characters: data });
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						console.log('Request complete!');
					});
			},

			getPlanets: () => {
				axios.get('https://swapi.dev/api/planets/')
					.then(response => {
						const data = response.data.results;
						setStore({ planets: data });
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						console.log('Request complete!');
					});
			}
		}
	};
};

export default getState;
