// src/app/themes/theme.model.ts
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  error: string;
}

// Abstract Product: Theme interface
export interface Theme {
  name: string;
  colors: ThemeColors;
  apply(): void;
}

// Concrete Products: Light and Dark themes
export class LightTheme implements Theme {
  name = 'light';
  colors: ThemeColors = {
    primary: '#3f51b5',
    secondary: '#ff4081',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#333333',
    error: '#f44336'
  };

  apply(): void {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    this.applyVariables();
  }

  private applyVariables(): void {
    Object.entries(this.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}-color`, value);
    });
  }
}

export class DarkTheme implements Theme {
  name = 'dark';
  colors: ThemeColors = {
    primary: '#7986cb',
    secondary: '#ff80ab',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    error: '#ff5252'
  };

  apply(): void {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    this.applyVariables();
  }

  private applyVariables(): void {
    Object.entries(this.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}-color`, value);
    });
  }
}

// Abstract Factory interface
export interface ThemeFactory {
  createTheme(): Theme;
}

// Concrete Factories
export class LightThemeFactory implements ThemeFactory {
  createTheme(): Theme {
    return new LightTheme();
  }
}

export class DarkThemeFactory implements ThemeFactory {
  createTheme(): Theme {
    return new DarkTheme();
  }
}
