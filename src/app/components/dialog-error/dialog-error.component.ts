
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogErrorData {
  errorMsg: string;
}

@Component({
  selector: 'dialog-error-component',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.scss']
})
export class DialogErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogErrorData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}