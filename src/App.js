import './App.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react';
import TreasureSVG from './TreasureSVG';
import MapDiagram from './MapDiagramSVG';
import PirateSVG from './PirateSVG';
import GoogleMaps from './GoogleMaps';

function App() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
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

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container col-xs-4">
          <a className="navbar-brand">Map Story</a>
          <form className="d-flex w-75 p-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search for a city" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>


      <div className="container-fluid">
        <div className="map-responsive">
          <Wrapper apiKey={'AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc'} render={render}>
            <GoogleMaps/>
          </Wrapper>
      {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" title="random" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen></iframe> */}
      </div>
      </div>
      <p>Want to treasure every place you visit on your adventures?<br/>Now you can!</p>



      <PirateSVG />
      <MapDiagram />
      <TreasureSVG />
    </div>
  );
}

export default App;
