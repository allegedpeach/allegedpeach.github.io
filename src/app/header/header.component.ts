import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor() {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  openNewsLink() {
    window.open('https://maplestory.nexon.net/news', '_blank');
  }
}
