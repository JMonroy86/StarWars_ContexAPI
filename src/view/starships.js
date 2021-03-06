import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const StarShips = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container pt-5" >
                <div className="row" > {
                    store.starships.results != null ?
                        (
                            store.starships.results.map((starShips, i) => {
                                const AWS_img = store.starshipsImg.find(item => ((item.Key.replace("img/starships/", "")) == starShips.name + ".jpg"))
                                console.log(AWS_img)
                                return (<div key={i} className="col-md-3" >

                                    <div className="card bg-transparent pt-2" >
                                        <img src={process.env.REACT_APP_STARWARS_BUCKET_URL+AWS_img.Key} className="mycard-img-top img-fluid"
                                            alt="..." />
                                        <div className="card-body" >
                                            <h1 className="card-title" > {starShips.name} </h1>
                                            <h2 >Model : {starShips.model} </h2>
                                            <h6 className="card-text">{starShips.manufacturer}</h6>
                                            <h6>{starShips.cost_in_credits}</h6>
                                        </div >
                                    </div>
                                </div >)
                            })

                        ) :
                        (<div className="container pt-5" >
                            <div className="row" >
                                <div className="col-12 text-center w-25" >
                                    <img src={process.env.REACT_APP_STARWARS_BUCKET_URL+"/resistance.png"} width="50" className="animated infinite swing mx-auto" alt="" />
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
                        <button className="btn tbn-primary btn-md" onClick={() => actions.getStarShips(store.starships.previous.replace("http://swapi.dev/api/starships/", "https://swapi.dev/api/starships/"))} > Previous </button>
                        <button className="btn tbn-primary btn-md" onClick={() => actions.getStarShips(store.starships.next.replace("http://swapi.dev/api/starships/", "https://swapi.dev/api/starships/"))} > Next </button>
                    </div >
                </div>
            </div>
        </>
    )
}


export default StarShips;