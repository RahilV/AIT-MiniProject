import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map: any;

  getCurrentPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (location) =>
          resolve({
            lng: location.coords.longitude,
            lat: location.coords.latitude,
          }),
        (err) => reject(err)
      );
    });
  }

  initMap(): void {
    this.getCurrentPosition().then((location) => {
      const latlng = new L.LatLng(location.lat, location.lng);
      this.map = L.map('map').setView(latlng, 15);

      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }).addTo(this.map);

      // Add the marker and bind a popup with it (for display purpose)
      let marker = L.marker(latlng).addTo(this.map);
      marker.bindPopup('<b style="color:blue;">You are here!<b>');
      var circle = L.circle(latlng, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1000,
      }).addTo(this.map);
    });
  }

  addMarkers() {
    var coords = [19.2191, 73.0903, 19.1906, 73.0915, 19.2219, 73.0913];
    for (let i = 0; i < 3; i++) {
      // Add the marker and bind a popup with it (for display purpose)
      let marker = L.marker(new L.LatLng(coords[i], coords[i + 1])).addTo(
        this.map
      );
      console.log(marker);
      marker.bindPopup(`<b style="color:green;">Property #${i + 1}<b>`);
    }
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }
}
