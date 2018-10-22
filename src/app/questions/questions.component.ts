import { Component, OnInit , Output } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  yourRate:string='';
  yourAge:string='';
  fullName:string='';
  creditScore:string='';
  resident:string='';

  
  constructor(private data: DataService) {

  }
  
  
  // data$: Object;
  
  ngOnInit() {
    // this.data$ = this.data.data;
  } // end of gnOnInit


  onEvents = (submission) => {
    this.creditScore = submission.value.creditScore;
    this.yourAge = submission.value.age;

    this.data.data.forEach((item) => {
      if (this.creditScore === item.score && this.yourAge === item.age) {
        this.yourRate = item.rate;
      }// end of ternary
    }) //end of forEach
    let results = document.getElementById('footer');
    results.scrollIntoView();
  }  // end of onEvents


} //end of class
