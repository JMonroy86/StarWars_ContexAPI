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
                        console.log(data)
                        setStore({
                           
                            films: data
                        })
                    });
            },
            getPeople(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            people: data
                        })
                        console.log(data)
                    })
            },
            getVehicle(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            vehicle: data
                        })
                        console.log(data)
                    })
            },
            getStarShips(url) {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            starships: data
                        })
                        console.log(data)
                    })
            }
        }
    }
}

export default getState;