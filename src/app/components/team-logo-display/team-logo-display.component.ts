import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-team-logo-display',
  standalone: true,
  imports: [],
  templateUrl: './team-logo-display.component.html',
  styleUrl: './team-logo-display.component.css'
})
export class TeamLogoDisplayComponent {
  @Input()
  image_src!: string;
  @Input()
  image_alt!: string;
  constructor() {}
}
