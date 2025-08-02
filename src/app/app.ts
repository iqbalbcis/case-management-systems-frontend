import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menuandheader } from './components/menuandheader/menuandheader';
import { Footer } from './components/footer/footer';
import { Spinner } from './components/spinner/spinner';
import { CommonModule } from '@angular/common';
import { AlertAll } from './components/alert-all/alert-all';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    Menuandheader,
    AlertAll,
    Footer,
    Spinner
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'case-management-systems-frontend';
}
