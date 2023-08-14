import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-save-vegg-button',
  templateUrl: './edit-save-vegg-button.component.html',
  styleUrls: ['./edit-save-vegg-button.component.scss'],
})
export class EditSaveVeggButtonComponent {
  editMode = false;

  @Output() toggleEdit = new EventEmitter<boolean>();

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.toggleEdit.emit(this.editMode);
  }
}
