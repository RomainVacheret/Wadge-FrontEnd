import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import data from './shops.json';

import './ShopMap.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API;

const ShopMap = (props) => {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 48.8566,
        lng: 2.3522,
        accurate: 0
    });

    const [zoom, setZoom] = useState(12);

    const [markers, setMarkers] = useState([{
        lat: 48.855050,
        lng: 2.306350,
        text: 'Naturalia'
    }]);

    const [currentPos, setCurrentPos] = useState({
        lat: 0,
        lng: 0
    });

    const [localStores, setLocalStores] = useState([]);

    const getCurrentPosition = () => {
     navigator.geolocation.getCurrentPosition((position) => {
        const crd = position.coords;
        setCurrentPos({ 
            lat: crd.latitude, 
            lng: crd.longitude, 
        });
    });
}

    const AnyReactComponent = ({ text }) => <div style={{ height: 15, width: 50 }}className="Marker"><div>{text}</div></div>

    useEffect(() => setMarkers([...data]), []);

    getCurrentPosition();
    useEffect(() => {
        console.log(currentPos);    
        fetch(`http://localhost:8080/map/${currentPos.lat}/${currentPos.lng}`, {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setLocalStores([...response['candidates']]))
        .then(() => console.log('Stores', localStores))
    }, []);

    return (
        <>
            <h1 className="Title">Liste des magasins</h1>
            <div className="Map" style={{ height: 600, width: 800 }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={ currentPosition }
                    defaultZoom={ zoom }
                >

                {markers.map((marker, idx) => (
                    <AnyReactComponent
                    key={idx}
                    lat={marker.lat}
                    lng={marker.lng}
                    text={marker.name}/>
                ))}

                </GoogleMapReact>
            </div>
            {!localStores.length ? <></> : (
                <>
                    <h3 className='Title'> Liste des magasins proches </h3>
                    <ul> {
                    localStores.map(({ formatted_address, opening_hours }, idx) => {
                        return ( 
                            <div className="List"key={idx}> { 
                                <>
                                    <ul>
                                        <li>{ `Adresse : ${ formatted_address }` }</li>
                                        <li>{ `Est ouvert: ${ opening_hours['open_now'] ? 'Oui' : 'Non' }` }</li>
                                    </ul>
                                    <br></br>
                                </>
                            } </div> 
                        )
                        })
                    } </ul>
                </>
            )}
        </>
    );
}

export default ShopMap;