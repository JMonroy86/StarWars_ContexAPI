const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            films: {},
            people: {},
            vehicle: {},
            starships: {}
        },
        actions: {
            getFilms: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({

                            films: data
                        })
                    })
                    .catch(() => { });
            },
            getPeople(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            people: data
                        })
                    })
                    .catch(() => { });

            },
            getVehicle(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            vehicle: data
                        })
                    })
                    .catch(() => { });

            },
            getStarShips(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            starships: data
                        })
                    })
                    .catch(() => { });

            }
        }
    }
}

export default getState;