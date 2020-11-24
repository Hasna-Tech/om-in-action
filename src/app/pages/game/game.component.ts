import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import gsap from 'gsap';
import { TimelineMax, Linear } from 'gsap/all';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { data } from './data';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements AfterViewInit {

  tl;
  showPanel = true;
   showQuizScreen = 'intro';
  // showQuizScreen = 'quiz';
  score = 0;
  speed = 1;
  step = 1;
  questions = data;
  quizNo = 0;
  selectedQuiz = this.questions[this.quizNo];

  constructor() {
    gsap.registerPlugin(MotionPathPlugin);
  }

  ngAfterViewInit(): void {

    this.tl = new TimelineMax();

    /* this.tl.to('.building1', { scale: 1, duration: 0.this.speed });
    this.tl.to('.tree1', { scale: 1, duration: 0.5 });

    this.tl.fromTo('#truck1', { x: -161, y: 100 }, { x: 229, y: -140, duration: 5 });
    this.tl.to('.selection1', { scale: 1, duration: 0.5 });
    this.tl.to('#truck1', { opacity: 0, duration: 0.1 });

    this.tl.to('#truck2', { opacity: 1, duration: 0.1 });
    this.tl.fromTo('#truck2', { x: 0, y: 0 }, { x: 240, y: 140, duration: 5 });
    */
    this.onResize(null);
    this.getQuiz(this.quizNo + 1);
  }

  @HostListener('window:resize', ['$event']) onResize(event) {

    const game = document.getElementById('game');
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    let scaleW = 1;
    let scaleH = 1;

    if (width < 1920) {
      scaleW = width / 1920;
    }
    if (height < 937) {
      scaleH = height / 937;
    }

    //console.log(scaleW, scaleH); 
    const scale = Math.min(scaleW, scaleH);
    game.style.transform = 'scale(' + scale + ')';
  }

  action(step) {
    console.log('action ' + step);
    this.step = step;
    this.showPanel = false;

    if (this.tl) {
      this.tl.clear();
    }
    this.tl = new TimelineMax();
    switch (step) {
      case 1:
        this.showPanel = false;
        this.tl.fromTo('#truck1', { x: -161, y: 100 }, {
          x: 229, y: -140, duration: 5, onComplete: () => {
            this.getQuiz(1);
          }
        });
        break;

      case 2:
        this.showPanel = false;
        this.tl.set('#truck1', { opacity: 0 });
        this.tl.set('#truck2', { opacity: 1, duration: 0.1 });
        this.tl.fromTo('#truck2', { x: 0, y: 0 }, {
          x: 160, y: 92, duration: this.speed * 1.5, delay: 2, onComplete: () => {
            this.getQuiz(2);
            //this.action(3);
          }
        });
        break;

      case 3:
        this.tl.to('#truck2', {
          x: 240, y: 140, duration: this.speed, ease: Linear, onComplete: () => {
            // this.getQuiz(2);
            this.tl.set('#truck2', { opacity: 0 });
            this.tl.set('#truck1', { opacity: 1 });
            this.tl.fromTo('#truck1', { x: 550, y: -15 }, {
              x: 723, y: -111, duration: this.speed, onComplete: () => {
                 this.getQuiz(3);
                // this.action(4);
              }
            });

          }
        });
        break;


      case 4:
        this.tl.set('#truck2', { opacity: 1 });
        this.tl.set('#truck1', { opacity: 0 });
        this.tl.fromTo('#truck2', { x: 500, y: 40 }, {
          x: 700, y: 165, duration: this.speed, ease: Linear, onComplete: () => {
            this.tl.set('#truck2', { opacity: 0 });
            this.tl.set('#truck1', { opacity: 1 });
            this.tl.fromTo('#truck1', { x: 1025, y: 20 }, {
              x: 1150, y: -40, duration: this.speed, onComplete: () => {
                this.getQuiz(4);
                //this.action(5);
              }
            });
          }
        });
        break;


      case 5:
        this.tl.fromTo('#truck1', { x: 1150, y: -40 }, {
          x: 1260, y: -110, duration: this.speed, ease: Linear, onComplete: () => {
            this.tl.set('#truck1', { opacity: 0 });
            this.tl.set('#truck3', { opacity: 1 });
            this.tl.fromTo('#truck3', { x: 1394, y: 640 }, {
              x: 1125, y: 471, duration: this.speed, onComplete: () => {
                //this.getQuiz(1);
                //console.log('came here');
                this.tl.set('#truck1', { opacity: 1 });
                this.tl.set('#truck3', { opacity: 0 });
                this.tl.fromTo('#truck1', { x: 1013, y: -365 }, {
                  x: 1043, y: -380, duration: this.speed, onComplete: () => {
                    this.getQuiz(5);
                    //this.action(6);
                  }
                });
              }
            });
          }
        });
        break;


      case 6:
        this.tl.fromTo('#truck1', { x: 1043, y: -380 }, {
          x: 1209, y: -475, duration: this.speed, onComplete: () => {
            this.tl.set('#truck1', { opacity: 0 });
            this.tl.set('#truck2', { opacity: 1 });
            this.tl.fromTo('#truck2', { x: 1000, y: -300 }, {
              x: 1000, y: -300, duration: this.speed, onComplete: () => {
                this.getQuiz(6);
                //this.action(7);
              }
            });
          }
        });
        break;

      case 7:
        this.tl.to('#truck2', {
          x: 1184, y: -200, duration: this.speed, onComplete: () => {
            this.getQuiz(7)
            //this.action(8);
          }
        });
        break;

      case 8:
        this.tl.to('#truck2', {
          x: 1484, y: -38, duration: this.speed, onComplete: () => {
            // this.getQuiz(8);
            //this.action(8);
          }
        });
        break;


      default:
        break;
    }
  }

  getQuiz(step) {
    console.log('getQuiz = ' + step);
    //this.step = step;
    this.showPanel = true;
    this.showQuizScreen = 'quiz';
    this.selectedQuiz = this.questions[step - 1];
    this.quizNo = step+1;

    switch (step) {
      case 1:
        this.showPanel = true;
        this.showQuizScreen = 'quiz';
        break;
      case 2:
        this.showPanel = true;
        this.showQuizScreen = 'quiz';
        this.selectedQuiz = this.questions[step - 1];
        break;
      default:
        break;
    }
  }

  quizSubmit(quiz) {
    if (quiz.type == 'single_choice') {

      if (quiz.choices[quiz.selected].correct == true) {
        this.score += 100;
        quiz.correct = true;
        quiz.feedbackText = quiz.feedback.correct;
        console.log(this.score);
      } else {
        //this.score = 0;
        quiz.correct = false;
        quiz.feedbackText = quiz.feedback.incorrect;
      }
      
      console.log(quiz);
    }
    else if (quiz.type == 'sort_order')
    {
      let wrong = false;
      for (let i = 0; i < quiz.choices.length; i++) {
        const choice = quiz.choices[i];
        if(choice.correct != i+1){
          wrong = true;
        }
      }
      if(wrong == false){
        this.score += 100;
        quiz.correct = true;
        quiz.feedbackText = quiz.feedback.correct;
      }else {
        quiz.correct = false;
        quiz.feedbackText = quiz.feedback.incorrect;
      }
    } else if (quiz.type == 'multiple_choice')
    {
      let wrong = false;
      for (let i = 0; i < quiz.choices.length; i++) {
        const choice = quiz.choices[i];
        if(choice.correct != choice.selected){
          wrong = true;
        }
      }
      if(wrong == false){
        this.score += 100;
        quiz.correct = true;
        quiz.feedbackText = quiz.feedback.correct;
      }else {
        quiz.correct = false;
        quiz.feedbackText = quiz.feedback.incorrect;
      }
    }
    quiz.submitted = true;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex, event.currentIndex);
    moveItemInArray(this.selectedQuiz.choices, event.previousIndex, event.currentIndex);
  }
}
