import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-planting-page',
  templateUrl: './planting-page.component.html',
  styleUrls: ['./planting-page.component.scss'],
})
export class PlantingPageComponent {
  plants = [
    {
      name: 'Lavendel',
      image: 'assets/lavendel.png',
      top: 30,
      left: 40,
      humidity: 65,
      healthy: true,
    },
    {
      name: 'Hengeplante',
      image: 'assets/hengeplante.png',
      top: 30,
      left: 40,
      humidity: 65,
      healthy: true,
    },
    // Add more plant objects as needed
  ];

  editMode = false;
  dragging = false;
  activePlantIndex: number | null = null;
  initialMouseX = 0;
  initialMouseY = 0;

  ngOnInit() {
    const savedPlants = localStorage.getItem('plants'); // Retrieve plants data
    if (savedPlants) {
      this.plants = JSON.parse(savedPlants); // Parse and assign plant data
    }
  }

  toggleEditMode() {
    if (!this.editMode) {
      this.activePlantIndex = null;
      this.savePlantPositions(); // Save positions when exiting edit mode
    }
    this.editMode = !this.editMode;
  }

  public savePlantPositions() {
    localStorage.setItem('plants', JSON.stringify(this.plants));
  }

  startDrag(event: MouseEvent, index: number) {
    if (this.editMode) {
      this.dragging = true;
      this.activePlantIndex = index;
      this.initialMouseX = event.clientX;
      this.initialMouseY = event.clientY;

      // Prevent the default drag behavior
      event.preventDefault();
    }
  }

  @HostListener('document:mouseup')
  endDrag() {
    this.dragging = false;
    this.activePlantIndex = null;
    this.savePlantPositions();
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event: MouseEvent) {
    if (this.dragging && this.activePlantIndex !== null) {
      const deltaX = event.clientX - this.initialMouseX;
      const deltaY = event.clientY - this.initialMouseY;

      this.plants[this.activePlantIndex].top +=
        (deltaY * 100) / window.innerHeight;
      this.plants[this.activePlantIndex].left +=
        (deltaX * 100) / window.innerWidth;

      this.initialMouseX = event.clientX;
      this.initialMouseY = event.clientY;
    }
  }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBs8MW6JD2yGb4Vh6g0_iKWJG1lwd0zUXg',
  authDomain: 'home-homepage.firebaseapp.com',
  projectId: 'home-homepage',
  storageBucket: 'home-homepage.appspot.com',
  messagingSenderId: '101456984618',
  appId: '1:101456984618:web:e8f15a74f7d188867a6153',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
