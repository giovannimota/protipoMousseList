import { WebService } from './../../web.service';
import { HEROES } from './../../models/teste';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  heroes: any[];

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.getToDos().subscribe((doc: any[]) => {
      this.heroes = doc;
    })
  }

}
