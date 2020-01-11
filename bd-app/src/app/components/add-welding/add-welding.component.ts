import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-welding',
  templateUrl: './add-welding.component.html',
  styleUrls: ['./add-welding.component.scss']
})
export class AddWeldingComponent {
  public welding = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    progress: new FormControl(''),
  });
  constructor() { }

  public addWelding(): void {
    const weldings = Array.from(JSON.parse(localStorage.getItem('welding')));
    weldings.push(this.welding.value);
    localStorage.setItem('welding', JSON.stringify(weldings));
  }

}
