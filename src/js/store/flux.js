import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			characters: [],
			planets: []
			
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
