import { Todo } from './../../models/todos';
import { WebService } from './../../web.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todo: Todo[];

  showModal: boolean = false;

  selected: string = '';

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.getToDos().subscribe((doc: Todo[]) => {
      this.todo = doc;
    })
  }

  selectItem() {
    this.showModal = !this.showModal;
  }
  
  calculate(date1, date2) {
    const data01 = new Date(date1.substring(0, 16)+":00.0000");
    const data02 = new Date(date2.substring(0, 16)+":00.0000");
    var time = new Date(date1.substring(0, 16)+":00.0000").getTime() - new Date(date2.substring(0, 16)+":00.0000").getTime();
    var final = new Date(date1.substring(0, 16)+":00.0000").getTime() - time;
    return (new Date(final));
  }

  formatDate(date) {
    return new Date(date.substring(0, 16)+":00.0000");
  }

}
