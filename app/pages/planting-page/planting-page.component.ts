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
      name: 'Sopp',
      image: 'assets/red_mushroom.png',
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
