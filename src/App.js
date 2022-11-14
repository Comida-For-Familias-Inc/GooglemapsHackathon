import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useState } from "react";
import TreasureSVG from "./TreasureSVG";
import MapDiagram from "./MapDiagramSVG";
import PirateSVG from "./PirateSVG";
import {GoogleMaps, Marker} from "./GoogleMaps.js";

function App() {
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(4);
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  // const center = { lat: -34.397, lng: 150.644 };
  // const zoom = 20;

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  const render = (status) => {
    console.log(status);
    {
      switch (status) {
        case Status.LOADING:
          // return <Spinner/>
          return <h1>LOADING</h1>;
        case Status.FAILURE:
          // return <ErrorComponent/>
          return <h1>ERROR</h1>;
        case Status.SUCCESS:
          return <h1>SUCCESS</h1>;
        // return <GoogleMaps/>
      }
    }
  };

  // mapMarkers => () => {
  //   const initialMarker ={lat:12.97, lng:77.59};
  //   const map = new google.maps.Map(
  //     document.getElementById("map") as HTMLElement,
  //     {
  //       zoom: 12,
  //       center: bangalore,
  //     }
  //   );

  //   google.maps.event.addListener(map, "click", (event) => {
  //     addMarker(event.latLng, map)
  //   });

  //   addMarker(bangalore, map);
  // }

  // function addMarker(location: google.maps.latLngLiteral, map: google.maps.Map){
  //   //adds the marker at the clicked location, and the next-available lable
  //   new google.maps.Marker({
  //     position: location,
  //     label: labels[labelIndex++ % labels.length],
  //     maps: map,
  //   })
  // }

  return (
    <div className="App">
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossOrigin="anonymous"
      ></script>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container col-xs-4">
          <a className="navbar-brand">Map Story</a>
          <form className="d-flex w-75 p-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for a city"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="map-responsive">
          <Wrapper
            apiKey={"AIzaSyAmrQoYVzHo1BFUnsQVLCKzJhllR-TmDQU"}
            render={render}
          >
            <GoogleMaps
              center={center}
              onClick={onClick}
              onIdle={onIdle}
              zoom={zoom}
              style={{ flexGrow: "1", height: "100%" }}
            >
              {clicks.map((latLng, i) => (
                <Marker key={i} position={latLng} />
              ))}
            </GoogleMaps>
          </Wrapper>
        </div>
      </div>
      <p>
        Want to treasure every place you visit on your adventures?
        <br />
        Now you can!
      </p>

      <PirateSVG />
      <MapDiagram />
      <TreasureSVG />
    </div>
  );
}

export default App;
