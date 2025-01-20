import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import React, { useEffect, useRef } from 'react';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Circle, Fill, Stroke } from 'ol/style';


export default function map (){
  const mapRef = useRef();
  const mapInstance = useRef(null);
  
  useEffect(() => {
    if (!mapInstance.current) {
      const baseLayer = new TileLayer({
        source: new OSM(),
      }); {/*base do mapa para criar marcadors de localizaçao */}

      const markers = [
        {
          coordinates: [ -38.57285499556672, -3.796570901502187],
          label: 'Unidade de Apoio 1 - Maraponga',
          color:'red',
        },
        {
          coordinates: [ -38.552147481535776, -3.768421936979245,],
          label: 'Unidade de Apoio 2 - Montese',
          color:'red',
        },
        {
          coordinates: [ -38.49896533872094, -3.7447311383060526],
          label: 'Unidade de Apoio 2 - Aldeota',
          color:'red',
        },
        {
          coordinates: [ -38.536220774954344, -3.7432440678572476],
          label: 'Unidade de Apoio 2 - Benfica',
          color:'red',
        },
      ];

      const features = markers.map((marker) => {
        const feature = new Feature({
          geometry: new Point(fromLonLat(marker.coordinates)),
          name: marker.label,
        });
        feature.setStyle(
          new Style({
            image: new Circle({
              radius: 10,
              fill: new Fill({
                color: marker.color,
              }),
              stroke: new Stroke({
                color: 'red',
                width: 2,
              }),
            }),
          })
        );
        return feature;
      });

      const vectorSource = new VectorSource({
        features: features,
      });

      const markerLayer = new VectorLayer({
        source: vectorSource,
      });

      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [baseLayer, markerLayer],
        view: new View({
          center: fromLonLat([-38.569310405440234, -3.7952660855491236]),
          zoom: 12,
        }),
      });
    }
  }, []);

  return (
  <div ref={mapRef} style={{ width: '100%', height: '55vh' }}>
  </div>
  )
};
