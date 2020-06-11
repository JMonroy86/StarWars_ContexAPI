import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const People = () => {
    const { store, actions } = useContext(Context);
    console.log(store.people)
    return (<>
        <div className="container pt-5" >
            <div className="row" > {
                store.people.results != null ?
                    (
                        store.people.results.map((character, i) => {
                            // console.log(character.episode_id)
                            return (<div key={i} className="col-md-3" >

                                <div className="card bg-transparent pt-2" >
                                    <img src={"../img/characters/" + character.name + ".jpg"} className="mycard-img-top img-fluid"
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
                                <img src="../resistance.png" width="50" className="animated infinite swing mx-auto" alt="" />
                                <div className="typewriter" >
                                    <h1 className="text-white mandalorian pt-4" > Loading... </h1>
                                </div >
                            </div>
                        </div >
                    </div>
                    )
            }

            </div>
            {/* <div className="row" >
                <div className="col-md-12 d-flex justify-content-between" >
                    <button className="btn tbn-primary btn-md" onClick={() => actions.getPeople(store.people.previous)} > Previous </button>
                    <button className="btn tbn-primary btn-md" onClick={() => actions.getPeople(store.people.next)} > Next </button>
                </div >
            </div> */}
        </div>
    </>
    )
}


export default People;