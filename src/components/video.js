import React from 'react';



const VideoBackground = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video className="pt-4" autoPlay muted loop id="myVideo">
                            <source src={process.env.REACT_APP_STARWARS_BUCKET_URL+"rise.mp4"} type="video/mp4" />

                        </video>
                    </div>
                </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </div>
        </>
    );
}
export default VideoBackground;