let urlpath = "//swapi.dev/api/"
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
                fetch(urlpath+url)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                           
                            films: data
                        })
                    })
                    .catch(()=> {});
            },
            getPeople(url) {
                fetch(urlpath+url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            people: data
                        })
                        console.log(data)
                    })
                    .catch(()=> {});

            },
            getVehicle(url) {
                fetch(urlpath+url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            vehicle: data
                        })
                        console.log(data)
                    })
                    .catch(()=> {});

            },
            getStarShips(url) {
                fetch(urlpath+url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            starships: data
                        })
                        console.log(data)
                    })
                    .catch(()=> {});

            }
        }
    }
}

export default getState;