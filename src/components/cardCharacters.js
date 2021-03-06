import React from 'react'


const Character = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-6">
                    <div className="media">
                        <img src={process.env.REACT_APP_STARWARS_BUCKET_URL+"img/mandalorian_char.jpg"} width="200" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0 text-white">The Mandalorian</h5>
                            <p className="text-white-50 text-justify">Din Djarin, better known as The Mandalorian, and sometimes addressed as Mando, is a fictional character in the Star Wars franchise and the title character in the Disney+ television series of the same name.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="media">
                        <img src={process.env.REACT_APP_STARWARS_BUCKET_URL+"img/babyjoda.jpg"} width="200" className="mr-3" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0 text-white">The Child</h5>
                            <p className="text-white-50 text-justify">The Child is a member of the same alien species as Yoda, a popular character from previous Star Wars films, but is not a younger version of Yoda himself.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Character;
