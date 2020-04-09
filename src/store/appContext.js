import React, { Component } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props){
            super(props);

            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updateStore => this.setState({
                    store: Object.assign(this.state.store, updateStore),
                    actions: {...this.state.actions}
                })
            })
        }

        componentDidMount(){
            this.state.actions.getFilms('https://swapi.co/api/films');
            this.state.actions.getPeople('https://swapi.co/api/people/');
            this.state.actions.getVehicle('https://swapi.co/api/vehicles/');
            this.state.actions.getStarShips('https://swapi.co/api/starships/?page=4');
        }

        render(){
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            )
        }
    }
    return StoreWrapper;
}

export default injectContext;