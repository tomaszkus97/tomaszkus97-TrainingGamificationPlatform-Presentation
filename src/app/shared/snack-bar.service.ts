import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  public openSuccess(message, duration = 3000) {
      this.zone.run(() => {
          this.snackBar.open(message, null, { duration: duration, panelClass: ['success-snackbar'] });
      });
  }

  public openDanger(message, duration = 3000) {
      this.zone.run(() => {
          this.snackBar.open(message,null, { duration: duration, panelClass: ['warn-snackbar'] });
      });
  }
}
