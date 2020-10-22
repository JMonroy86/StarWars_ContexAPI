const AWS = require('aws-sdk');
const bucketName = process.env.REACT_APP_STARWARS_BUCKET_NAME
const bucketUrl = process.env.REACT_APP_STARWARS_BUCKET_URL
const bucketRegion = process.env.REACT_APP_STARWARS_BUCKET_REGION
const bucketAccessKey = process.env.REACT_APP_STARWARS_BUCKET_ACCESS_KEY
const bucketSecretKey = process.env.REACT_APP_STARWARS_BUCKET_SECRET_KEY

AWS.config.update({ region: bucketRegion });
const s3 = new AWS.S3({
    accessKeyId: bucketAccessKey,
    secretAccessKey: bucketSecretKey
});



const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            films: {},
            filmsImg: [],
            people: {},
            peopleImg: [],
            vehicle: {},
            vehicleImg: [],
            starships: {},
            starshipsImg: [],
        },
        actions: {
            getFilms: url => {
                 let params = {
                    Bucket: bucketName,
                    Prefix: 'img'
                };
                s3.listObjectsV2(params, function (err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                    else setStore({ filmsImg: data.Contents })          // successful response

                })

                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({

                            films: data
                        })
                    })
                    .catch(() => { });
            },
            getPeople(url) {


                let params = {
                    Bucket: bucketName,
                    Prefix: 'img/characters'
                };
                s3.listObjectsV2(params, function (err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                    else setStore({ peopleImg: data.Contents })          // successful response

                })

                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            people: data
                        })
                    })
                    .catch(() => { });

            },
            getVehicle(url) {
                let params = {
                    Bucket: bucketName,
                    Prefix: 'img/vehicles'
                };
                s3.listObjectsV2(params, function (err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                    else {
                        console.log(data.Contents)
                        setStore({ vehicleImg: data.Contents })
                    }         // successful response

                })
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            vehicle: data
                        })
                    })
                    .catch(() => { });

            },
            getStarShips(url) {
                let params = {
                    Bucket: bucketName,
                    Prefix: 'img/starships'
                };
                s3.listObjectsV2(params, function (err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                    else {
                        console.log(data.Contents)
                        setStore({ starshipsImg: data.Contents })
                    }         // successful response

                })
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            starships: data
                        })
                    })
                    .catch(() => { });

            }
        }
    }
}

export default getState;