import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rombus',
  templateUrl: './rombus.component.html',
  styleUrls: ['./rombus.component.css']
})
export class RombusComponent implements OnInit {
  rombForm !: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.rombForm = new FormGroup({
      side: new FormControl(''),
      angle: new FormControl(''),
      area: new FormControl('')
    });    
  }
  onSubmit() {
    this.formHandler();
  }
  formHandler() {
    let side = Number(this.rombForm.value.side);
    let angle = Number(this.rombForm.value.angle);
    let area = this.calcVolume(side, angle);
    console.log(area);
    this.rombForm.patchValue({area: String(area)})
  }
  calcVolume(side: number, angle: number) {
      let area = Math.pow(side, 2) * Math.sin(angle* Math.PI/180);
      return area;
  }
}
