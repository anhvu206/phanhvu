import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      views: 100000,
      year: 1997,
      category: 'Phiêu lưu',
      image: 'https://picsum.photos/100?1',
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      views: 90000,
      year: 1999,
      category: 'Hành động',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoR-8MB-n3RIvf0F3B7T-CDft3KIw_AaxlNl5ahuSvop9jgkrudVfGRx0&s',
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F. Fujio',
      views: 70000,
      year: 1969,
      category: 'Thiếu nhi',
      image: 'https://picsum.photos/100?3',
    },
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      views: 120000,
      year: 1984,
      category: 'Hành động',
      image: 'https://picsum.photos/100?4',
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      views: 95000,
      year: 2009,
      category: 'Dark Fantasy',
      image: 'https://picsum.photos/100?5',
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      views: 85000,
      year: 2001,
      category: 'Shounen',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoR-8MB-n3RIvf0F3B7T-CDft3KIw_AaxlNl5ahuSvop9jgkrudVfGRx0&s',
    },
  ];
}
