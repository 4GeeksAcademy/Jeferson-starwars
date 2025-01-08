const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: []

		},
		actions: {
			loadSomeData: () => {

				const store = getStore();

				if (store.people.length === 0) {
					fetch('https://www.swapi.tech/api/people/')
						.then(resp => resp.json())
						.then(respJson => {
							const response = respJson.results;
							setStore({ people: response })
						})
				}

				if (store.vehicles.length === 0) {
					fetch('https://www.swapi.tech/api/vehicles/')
						.then(resp => resp.json())
						.then(respJson => {
							const response = respJson.results;
							setStore({ vehicles: response })
						})
				}

				if (store.planets.length === 0) {
					fetch('https://www.swapi.tech/api/planets/')
						.then(resp => resp.json())
						.then(respJson => {
							const response = respJson.results;
							setStore({ planets: response })
						})
				}

				console.log(store)


			},
			addFavorite: (id) => {
				const favorites = getStore().favorites;

				const newFavorites = [...favorites, id];
				setStore({ favorites: newFavorites })
			},
			removeFavorite: (id) => {
				const favorites = getStore().favorites;
				const newFavorites = favorites.filter(item => item !== id);
				setStore({ favorites: newFavorites })
			}
		}
	};
};

export default getState;
