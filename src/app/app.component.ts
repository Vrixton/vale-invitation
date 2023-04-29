import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vale';
  message : string = "Allá estaré mor! 💚💚💚";
  openProfile : boolean = false;
  isReady: boolean = false;
  loader: boolean = true;

  @HostListener('document:DOMContentLoaded', ['$event'])
  onDomContentLoaded(event: Event) {
    this.isReady = true;
  }
  ngOnInit() {
    setTimeout(()=>{
      this.loader = false;
  }, 3000);
  }
}
