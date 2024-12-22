import { RouterOutlet } from '@angular/router';
import {Component, OnInit, Pipe} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-zenek',
  templateUrl: './zenek.component.html',
  styleUrl: './zenek.component.css',
  imports: [CommonModule, HttpClientModule, RouterOutlet, FormsModule]
})
export class ZenekComponent implements OnInit {
  title = 'Muzsikak'
  zenek: any[] = [];
  newZene = {id: null, title: '', artist: '', album : ''};
  constructor(private http: HttpClient){};

  editingSong: any = null;

  loadSongs() {
    this.http.get<any[]>('/api/songs').subscribe(data => {
      this.zenek = data;
    });
  }

  deleteSong(id: number) {
    this.http.delete(`/api/songs/${id}`).subscribe(() => {
      this.zenek = this.zenek.filter(song => song.id !== id);
    });
  }

  editSong(song: any) {
    this.editingSong = { ...song }; // Clone the song for editing
  }

  saveSong() {
    if (this.editingSong && this.editingSong.id) {
      this.http.put(`/api/songs/${this.editingSong.id}`, this.editingSong).subscribe(updatedSong => {
        this.zenek = this.zenek.map(song => song.id === this.editingSong.id ? updatedSong : song);
        this.editingSong = null;
      });
    }
  }

  cancelEdit() {
    this.editingSong = null;
  }

  addSong() {
    if (this.newZene.title && this.newZene.artist && this.newZene.album) {
      this.http.post('/api/songs', this.newZene).subscribe(newAddedSong => {
        // After adding, update the local list
        this.zenek.push(newAddedSong);
        this.newZene = { id: null, title: '', artist: '', album: '' }; // Reset the form fields
      });
    } else {
      alert('Please fill out all fields.');
    }
  }


  ngOnInit(): void {
    this.loadZenek();
  }
  
  loadZenek(): void {
    
    this.http.get<any>("/api/songs",
      {headers: {'Accept' : 'application/json', 'Content-Type' : 'application/json' }}).subscribe(
      (data) => {
        console.log(data)
        this.zenek = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}


