import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})

export class MineCoinsComponent implements OnInit {
    question = { question: "What is Kobe's name?", answer: "Bryant" };
    numbers = [];
    answer: any;

    constructor(private _shinto: HttpService) { }

    ngOnInit() {
    }

    submitAnswer() {
        if(this.answer == this.question.answer) {
            console.log("correct answer!");
            this._shinto.mineCoin();
        } else {
            console.log("incorrect answer!");
        }
        this.answer = ""
    }

    addToNumbers(num){
        this._shinto.addToNumbers(num);
    }

}