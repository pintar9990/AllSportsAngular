import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-league-art-display',
  standalone: true,
  imports: [],
  templateUrl: './league-art-display.component.html',
  styleUrl: './league-art-display.component.css'
})
export class LeagueArtDisplayComponent {
  @Input()
  image_src!: string;
  @Input()
  image_alt!: string;
  constructor() {}
}
