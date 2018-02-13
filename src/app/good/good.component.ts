import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../Service/app.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
  good: any;
 // safeURL: any;
  constructor(private ar: ActivatedRoute, private servise: AppService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.good = this.servise.getGoodById(+param.id)[0];
    });
  }
  openDialog(): void {
    console.log(this.good);
    const dialogRef = this.dialog.open(Dialog2Component, {
      width: 'auto',

      data: {name: this.good.goodPhoto}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
})
export class Dialog2Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<Dialog2Component>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
