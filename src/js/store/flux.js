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
				axios.get('http https://swapi.dev/api/vehicles/:id/')
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
				axios.get('http https://swapi.dev/api/people/:id/')
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
				axios.get('http https://swapi.dev/api/planets/:id/')
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
