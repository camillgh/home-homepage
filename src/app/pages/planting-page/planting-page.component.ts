import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-planting-page',
  templateUrl: './planting-page.component.html',
  styleUrls: ['./planting-page.component.scss'],
})
export class PlantingPageComponent implements OnInit {
  plants: Plant[] = [];
  editMode = false;
  dragging = false;
  activePlantIndex: number | null = null;
  initialMouseX = 0;
  initialMouseY = 0;

  newPlant: Plant = {
    name: '',
    humidity: 0,
    healthy: false,
    top: 30,
    left: 40,
  };

  plants$: Observable<Plant[]> | undefined;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    const plantCollection = this.afs.collection<Plant>('plants');
    this.plants$ = plantCollection.valueChanges();
  }

  toggleEditMode(): void {
    if (!this.editMode) {
      this.activePlantIndex = null;
      this.savePlantPositions();
    }
    this.editMode = !this.editMode;
  }

  public savePlantPositions(): void {
    // Update plant positions in Firebase Firestore
    this.afs.collection('plants').doc('NIqwvRYLjQqOVHpaHQj8').set({
      plants: this.plants,
    });
  }

  startDrag(event: MouseEvent, index: number): void {
    if (this.editMode) {
      this.dragging = true;
      this.activePlantIndex = index;
      this.initialMouseX = event.clientX;
      this.initialMouseY = event.clientY;

      // Prevent the default drag behavior
      event.preventDefault();
    }
  }

  endDrag(): void {
    this.dragging = false;
    this.activePlantIndex = null;
    this.savePlantPositions();
  }

  drag(event: MouseEvent): void {
    if (this.dragging && this.activePlantIndex !== null) {
      const deltaX = event.clientX - this.initialMouseX;
      const deltaY = event.clientY - this.initialMouseY;

      this.plants[this.activePlantIndex]['top'] +=
        (deltaY * 100) / window.innerHeight;
      this.plants[this.activePlantIndex]['left'] +=
        (deltaX * 100) / window.innerWidth;

      this.initialMouseX = event.clientX;
      this.initialMouseY = event.clientY;
    }
  }

  addNewPlant(): void {
    // Add the new plant to the local array
    this.plants.push({ ...this.newPlant });

    // Add the new plant to Firebase Firestore
    this.afs.collection('plants').add(this.newPlant);

    // Clear the form for the next input
    this.newPlant = {
      name: '',
      humidity: 0,
      healthy: false,
      top: 30,
      left: 40,
    };
  }

  toggleHealthy(): void {
    // Invert the healthy value when the checkbox is changed
    this.newPlant.healthy = !this.newPlant.healthy;
  }
}
