import { Component, OnInit } from '@angular/core';
import { OverlayScrollbars } from 'overlayscrollbars';

const initBodyOverlayScrollbars = (force?: boolean) =>
  OverlayScrollbars(
    {
      target: document.body,
      cancel: {
        body: force ? false : null,
      },
    },
    {
      scrollbars: {
        theme: 'os-theme-dark',
        // theme: 'os-theme-light',
        // theme: 'os-theme-custom',
      },
    }
  ).state().destroyed;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scrollbar-tweaks';

  ngOnInit(): void {
    initBodyOverlayScrollbars(true);
  }

}
