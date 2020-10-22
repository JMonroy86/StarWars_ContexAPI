import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const People = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container pt-5" >
                <div className="row" > {
                    store.people.results != null ?
                        (
                            store.people.results.map((character, i) => {
                                const AWS_img = store.peopleImg.find(item => ((item.Key.replace("img/characters/", "")) == character.name + ".jpg"))
                                return (<div key={i} className="col-md-3" >

                                    <div className="card bg-transparent pt-2" >
                                        <img src={process.env.REACT_APP_STARWARS_BUCKET_URL + AWS_img.Key} className="mycard-img-top img-fluid"
                                            alt="..." />
                                        <div className="card-body" >
                                            <h1 className="card-title" > {character.name} </h1>
                                            <h2 > Birth Year: {character.birth_year} </h2>
                                            <h6 className="card-text" > {character.gender} </h6>
                                        </div >
                                    </div>
                                </div >)
                            })

                        ) :
                        (<div className="container pt-5" >
                            <div className="row" >
                                <div className="col-12 text-center w-25" >
                                    <img src={process.env.REACT_APP_STARWARS_BUCKET_URL + "/resistance.png"} width="50" className="animated infinite swing mx-auto" alt="" />
                                    <div className="typewriter" >
                                        <h1 className="text-white mandalorian pt-4" > Loading... </h1>
                                    </div >
                                </div>
                            </div >
                        </div>
                        )
                }

                </div>
                <div className="row" >
                    <div className="col-md-12 d-flex justify-content-between" >
                        <button className="btn tbn-primary btn-md" onClick={() => actions.getPeople(store.people.previous.replace("http://swapi.dev/api/people/", ""))} > Previous </button>
                        <button className="btn tbn-primary btn-md" onClick={() => actions.getPeople(store.people.next.replace("http://swapi.dev/api/people/", "https://swapi.dev/api/people/"))} > Next </button>
                    </div >
                </div>
            </div>
        </>
    )
}



export default People;