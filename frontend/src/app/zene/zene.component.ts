import { RouterOutlet } from '@angular/router';
import {Component, OnInit, Pipe} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-zene',
  templateUrl: './zene.component.html',
  styleUrl: './zene.component.css',
  imports: [CommonModule, HttpClientModule, RouterOutlet]
})
export class ZeneComponent implements OnInit {
  zene: any;
  id:number=0;
  constructor(private http: HttpClient,  private route: ActivatedRoute){}; 

  ngOnInit(): void {
    this.loadZene();
  }

  loadZene(): void {
    this.http.get<any>(`/api/zenek/${this.id}`,
      {headers: {'Accept' : 'application/json', 'Content-Type' : 'application/json' }}).subscribe(
      (data) => {
        this.zene = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}