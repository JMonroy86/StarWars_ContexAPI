import React from 'react';
import './../App.css'



const Notfound = () => {
    return (
        <div className="container not_found pt-5">
            <div className="row pb-4">
                <div className="col-6">
                    <div className="col-12 ">
                        <h1 className="text-left">404</h1>
                    </div>
                    <div className="col-12">
                        <h2 className="text-left">Not Found</h2>
                    </div>
                </div>
                <div className="col-6 text-right p-0 ">
                    <img src={process.env.REACT_APP_STARWARS_BUCKET_URL+"/img/notfound.png"} height="400" alt="" />
                </div>
            </div>
        </div>
    );
}
export default Notfound;