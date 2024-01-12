import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'repro-app';
  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.http.options('/apii/a', {observe: 'response'})
      .subscribe(res => console.log('options', res.headers.get('Content-Language')))

    this.http.get('/apii/a', {observe: 'response'})
      .subscribe(res => console.log('get', res.headers.get('Content-Language')))
  }
}
