import React from "react";
import { useState, useEffect, useRef } from "react";

export default function GoogleMaps({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {

  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} style={{height:1000+'px', width:1000+'px'}} id ="map"/>;
}
