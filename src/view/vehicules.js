import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Vehicle = () => {
    const { store, actions } = useContext(Context);
    console.log(store.vehicle)
    return (<>
        <div className="container pt-5" >
            <div className="row" > {
                store.vehicle.results != null ?
                    (
                        store.vehicle.results.map((vehicle, i) => {
                            // console.log(vehicle.episode_id)
                            return (<div key={i} className="col-md-3" >

                                <div className="card bg-transparent pt-2" >
                                    <img src={"../img/vehicles/" + vehicle.name + ".jpg"} className="mycard-img-top img-fluid"
                                        alt="..." />
                                    <div className="card-body" >
                                        <h1 className="card-title" > {vehicle.name} </h1>
                                        <h2 >Model : {vehicle.model} </h2>
                                        <h6 className="card-text">{vehicle.manufacturer}</h6>
                                                <h6>{vehicle.cost_in_credits}</h6>
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
            <div className="row" >
                <div className="col-md-12 d-flex justify-content-between" >
                    <button className="btn tbn-primary btn-md" onClick={() => actions.getVehicle(store.vehicle.previous)} > Previous </button>
                    <button className="btn tbn-primary btn-md" onClick={() => actions.getVehicle(store.vehicle.next)} > Next </button>
                </div >
            </div>
        </div>
    </>
    )
}


export default Vehicle;