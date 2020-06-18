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
                        // console.log(data)
                        setStore({
                           
                            films: data
                        })
                    })
                    .catch(()=> {});
            },
            getPeople(url) {
                console.log(url)
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            people: data
                        })
                        // console.log(data)
                    })
                    .catch(()=> {});

            },
            getVehicle(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            vehicle: data
                        })
                        // console.log(data)
                    })
                    .catch(()=> {});

            },
            getStarShips(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            starships: data
                        })
                        // console.log(data)
                    })
                    .catch(()=> {});

            }
        }
    }
}

export default getState;