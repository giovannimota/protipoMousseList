import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  list: any[]

  constructor(private webService: WebService) {  }

  ngOnInit(): void {
    this.webService.getToDos().subscribe((doc: any[]) => {
      this.list = doc
    })
  }

  handleClick() {
    console.log("clicado");
  }

}
