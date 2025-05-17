import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {ThemeToggleComponent} from './components/app-theme-toggle/app-theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
