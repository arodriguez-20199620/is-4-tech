import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dog-service.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent implements OnInit {
  dogImage: string | undefined;
  descripcion: string = '';

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getNewDogImage();
  }

  getNewDogImage(): void {
    this.dogsService.getRandomDogImage().subscribe(response => {
      this.dogImage = response.message;
    });
  }

}
