import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }
}
