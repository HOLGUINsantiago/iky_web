import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin,
} from "@vis.gl/react-google-maps";

const containerStyle = {
  width: "800px",
  height: "450px",
};

const center = {
  lat: 3.329258,
  lng: -76.523714,
};

const zoom = 15;

const Mapa = () => {
  return (
    <div style={containerStyle}>
      <APIProvider
        apiKey={"AIzaSyDmmuC_vI61t9jci4dSJIPaSZGsP-4irk8"}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map defaultZoom={zoom} defaultCenter={center} mapId="a11436f6e96f86d3">
          <AdvancedMarker key={"IshkaCenter"} position={center}>
            <Pin />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
};

export default Mapa;
