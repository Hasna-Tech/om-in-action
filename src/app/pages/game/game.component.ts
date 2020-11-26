import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { gsap, TimelineMax, Linear } from 'gsap/all';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { data } from './data';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements AfterViewInit {

  tl;
  showPanel = true;
  // showPanel = false;
  showQuizScreen = 'intro';
  // showQuizScreen = '';
  score = 0;
  speed = 5;
  step = 1;
  totalQuestion = 6;
  questions = data;
  quizNo = 0;
  selectedQuiz = this.questions[this.quizNo];
  batchesArr = [];

  batches = 0;
  result = {
    title: '',
    bubble: ''
  };

  alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

  constructor(private cdRef: ChangeDetectorRef) {
    gsap.registerPlugin(MotionPathPlugin);
  }

  ngAfterViewInit(): void {

    this.tl = new TimelineMax();

    this.onResize(null);
    //this.getQuiz(this.quizNo + 1);
    //this.animateBatch();
    //this.animateAddQuestion();
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
          x: 229, y: -140, duration: this.speed, onComplete: () => {
            this.getQuiz(1);
            //this.action(5);
          }
        });
        break;

      case 2:
        this.showPanel = false;
        this.tl.set('#truck1', { opacity: 0 });
        this.tl.set('#truck2', { opacity: 1, duration: 0.1 });
        this.tl.fromTo('#truck2', { x: 0, y: 0 }, {
          x: 160, y: 92, duration: this.speed / 1.5, delay: 2, onComplete: () => {
            this.getQuiz(2);
            //this.action(3);
          }
        });
        break;

      //batch
      case 3:
        this.tl.to('#truck2', {
          x: 240, y: 140, duration: this.speed / 2, ease: Linear, onComplete: () => {
            // this.getQuiz(2);
            this.tl.set('#truck2', { opacity: 0 });
            this.tl.set('#truck1', { opacity: 1 });
            this.tl.fromTo('#truck1', { x: 550, y: -15 }, {
              x: 723, y: -111, duration: this.speed / 2 , onComplete: () => {
                this.animateAddQuestion();
                this.tl.to('#earn_batch1', {
                  opacity: 1, duration: 0.5, onComplete: () => {
                    setTimeout(() => {
                      this.getQuiz(3);

                    }, 1000);
                  }
                });
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
          x: 700, y: 165, duration: this.speed / 2, ease: Linear, onComplete: () => {
            this.tl.set('#truck2', { opacity: 0 });
            this.tl.set('#truck1', { opacity: 1 });
            this.tl.fromTo('#truck1', { x: 1025, y: 20 }, {
              x: 1150, y: -40, duration: this.speed / 2, onComplete: () => {
                this.getQuiz(4);
                //this.action(5);
              }
            });
          }
        });
        break;


      case 5:
        this.tl.fromTo('#truck1', { x: 1150, y: -40 }, {
          x: 1260, y: -110, duration: this.speed / 2, ease: Linear, onComplete: () => {
            this.tl.set('#truck1', { opacity: 0 });
            this.tl.set('#truck3', { opacity: 1 });
            this.tl.fromTo('#truck3', { x: 1394, y: 640 }, {
              x: 1283, y: 571, duration: this.speed / 2, onComplete: () => {
                //this.action(6);
                this.getQuiz(5);
              }
            });
          }
        });
        break;

      case 6:

        this.tl.fromTo('#truck3', { x: 1283, y: 571 }, {
          x: 1125, y: 471, duration: this.speed /2, onComplete: () => {
            //this.getQuiz(1);
            //console.log('came here');
            this.tl.set('#truck1', { opacity: 1 });
            this.tl.set('#truck3', { opacity: 0 });
            this.tl.fromTo('#truck1', { x: 1013, y: -365 }, {
              x: 1043, y: -380, duration: this.speed /2, onComplete: () => {
                this.getQuiz(6);
                //this.action(6);
              }
            });
          }
        });
        break;


      case 7:
        this.tl.fromTo('#truck1', { x: 1043, y: -380 }, {
          x: 1209, y: -475, duration: this.speed /2, onComplete: () => {
            this.tl.set('#truck1', { opacity: 0 });
            this.tl.set('#truck2', { opacity: 1 });
            this.tl.fromTo('#truck2', { x: 1000, y: -300 }, {
              x: 1000, y: -300, duration: this.speed /2, onComplete: () => {
                this.getQuiz(7);
                //this.action(7);
              }
            });
          }
        });
        break;

      //batch
      case 8:
        this.tl.set('#truck1', { opacity: 0 });
        this.tl.set('#truck2', { opacity: 1 });
        this.tl.to('#truck2', {
          x: 1184, y: -200, duration: this.speed, onComplete: () => {
            this.animateAddQuestion2();
            this.tl.to('#earn_batch2', {
              opacity: 1, duration: 0.5, onComplete: () => {
                setTimeout(() => {
                  this.getQuiz(8);
                }, 1000);
              }
            });
            // this.getQuiz(7)
            //this.action(8);
          }
        });
        break;

      case 9:
        this.tl.set('#truck1', { opacity: 0 });
        this.tl.set('#truck2', { opacity: 1 });
        this.tl.to('#truck2', {
          x: 1484, y: -38, duration: this.speed, onComplete: () => {
            // this.getQuiz(8);
            //this.action(8);
            this.tl.set('#truck2', { opacity: 0 });
            this.tl.set('#earn_batch1', { opacity: 0 });
            this.tl.set('#earn_batch2', { opacity: 0 });
            this.tl.set('#truck2', { opacity: 0 });
            this.tl.to('.game_layout', { opacity: 0 });
            this.tl.to('.screen_10', {
              opacity: 1, onComplete: () => {
                setTimeout(() => {
                  this.showPanel = true;
                  this.showQuizScreen = 'miles';
                  this.totalQuestion = 10;
                  this.tl.to('#miles', { opacity: 1, duration: 1 });
                }, 1000);
              }
            });
          }
        });
        break;
      case 10:
        this.tl.to('.screen_10_1', {
          opacity: 1, onComplete: () => {
            setTimeout(() => {
              this.showPanel = true;
              this.getQuiz(10);
            }, 1000);
          }
        });
        break;

      case 11:
        this.showPanel = true;
        this.showQuizScreen = 'result';
        // this.score = 800;
        if (this.score >= 800) {
          this.result.title = 'Congratulations! The product has been successfully delivered.';
          this.result.bubble = 'Cargill came through for me on this order. These are the results that show me you can deliver on your promises and build my confidence that I will get excellent service from Cargill. Thankyou';
        } else if (this.score >= 400) {
          this.result.title = 'Well done!';
          this.result.bubble = 'Recommend to replay the game. ';
        } else {
          this.result.title = 'Good try, but you missed it!';
          this.result.bubble = `You can try the game again or revisit the learning in the ‘Order Management Process Overview’ pathway.`;
        }
        break;

      default:
        break;
    }
  }

  getQuiz(step) {
    console.log('getQuiz = ' + step);
    this.showPanel = true;
    this.showQuizScreen = 'quiz';
    this.selectedQuiz = this.questions[step - 1];
    this.selectedQuiz.choosen = false;
    this.selectedQuiz.submitted = false;
    this.quizNo = step;
  }

  quizSubmit(quiz) {
    if (quiz.type == 'single_choice') {

      if (quiz.choices[quiz.selected].correct == true) {
        this.setScore(quiz.score);
        quiz.correct = true;
        if (quiz.batch) {
          this.animateBatch(1750, 300);
        }
        //quiz.feedbackText = quiz.feedback.correct;
        console.log(this.score);
      } else {
        //this.score = 0;
        if (quiz.feedback.choice_feedback) {
          quiz.feedback.incorrect = quiz.feedback.choice_text[quiz.selected];
        } else {
          //quiz.feedbackText = quiz.feedback.incorrect;
        }
        quiz.correct = false;

      }

      //console.log(quiz);
    }
    else if (quiz.type == 'sort_order') {
      let wrong = false;
      for (let i = 0; i < quiz.choices.length; i++) {
        const choice = quiz.choices[i];
        if (choice.correct != i + 1) {
          wrong = true;
        }
      }
      if (wrong == false) {
        this.setScore(quiz.score);
        quiz.correct = true;
        quiz.feedbackText = quiz.feedback.correct;

      } else {
        quiz.correct = false;
        quiz.feedbackText = quiz.feedback.incorrect;
      }
    } else if (quiz.type == 'multiple_choice') {
      let wrong = false;
      for (let i = 0; i < quiz.choices.length; i++) {
        const choice = quiz.choices[i];
        if (choice.correct != choice.selected && choice.selected != undefined) {
          console.log('multiple-choice ', i, choice.correct , choice.selected);
          wrong = true;
        }
      }
      if (wrong == false) {
        this.setScore(quiz.score);
        quiz.correct = true;
        quiz.feedbackText = quiz.feedback.correct;
        console.log('batch' + quiz.batch)
        if (quiz.batch) {
          this.animateBatch(900, 500);
        }
      } else {
        quiz.correct = false;
        quiz.feedbackText = quiz.feedback.incorrect;
      }
    }
    quiz.submitted = true;
  }

  animateBatch(xpos, ypos) {
    const tl1 = new TimelineMax();
    this.showPanel = false;
    tl1.set('#batch', { x: xpos, y: ypos });
    tl1.fromTo('#batch', { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl1.to('#batch', { x: 1780, y: 200, delay: 0.5, duration: 0.5 });
    tl1.to('#batch', {
      opacity: 0, duration: 0.5, onComplete: () => {
        this.batches += 1;
        this.showPanel = true;
        this.cdRef.detectChanges();
      }
    });
  }

  animateAddQuestion() {
    const tl2 = new TimelineMax();
    tl2.set('#questNoAdd', { x: 930, y: 550 });
    tl2.fromTo('#questNoAdd', { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl2.to('#questNoAdd', { x: 970, y: 90, delay: 0.5, duration: 0.5, onComplete: () => {
      this.totalQuestion += 1;
      this.cdRef.detectChanges();
    } });
    tl2.to('#questNoAdd', {
      opacity: 0, duration: 0.5
    });
  }

  animateAddQuestion2() {
    const tl2 = new TimelineMax();
    tl2.set('#questNoAdd', { x: 1730, y: 320 });
    tl2.fromTo('#questNoAdd', { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl2.to('#questNoAdd', { x: 970, y: 90, delay: 0.5, duration: 0.5, onComplete: () => {
      this.totalQuestion += 1;
      this.cdRef.detectChanges();
    } });
    tl2.to('#questNoAdd', {
      opacity: 0, duration: 0.5
    });
  }

  setScore(s: any) {
    this.score += s;
    /*gsap('#score_anim', {
      onComplete: () => {
        this.score += s;
      }
    });*/
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex, event.currentIndex);
    this.selectedQuiz.choosen = true;
    moveItemInArray(this.selectedQuiz.choices, event.previousIndex, event.currentIndex);
  }

  counter(i: number) {
    return new Array(i);
  }
}
