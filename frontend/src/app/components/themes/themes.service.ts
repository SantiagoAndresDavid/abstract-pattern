// src/app/themes/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Theme,
  ThemeFactory,
  LightThemeFactory,
  DarkThemeFactory
} from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeFactories: Map<string, ThemeFactory> = new Map();
  private currentThemeSubject = new BehaviorSubject<Theme | null>(null);

  currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    this.registerThemeFactories();
    this.initializeTheme();
  }

  private registerThemeFactories(): void {
    this.themeFactories.set('light', new LightThemeFactory());
    this.themeFactories.set('dark', new DarkThemeFactory());
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('preferred-theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(themeName: string): void {
    const factory = this.themeFactories.get(themeName);
    if (factory) {
      const theme = factory.createTheme();
      theme.apply();
      localStorage.setItem('preferred-theme', themeName);
      this.currentThemeSubject.next(theme);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.currentThemeSubject.value;
    if (currentTheme?.name === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }
}
