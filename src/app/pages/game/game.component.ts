import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import gsap from 'gsap';
import { TimelineMax, Linear } from 'gsap/all';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements AfterViewInit {

  tl;
  showPanel = true;
  // showQuizScreen = 'intro';
  showQuizScreen = 'quiz';
  score = 0;
  speed = 1;
  step = 1;

  questions = [
    {
      type: 'single_choice',
      title: 'Customer Care Management',
      question: 'You receive an order request from the Customer asking Cargill to deliver goods. What steps should you follow before the order is entered in our systems?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      choices: [
        {
          text: 'Promptly ensure everything is set-up correctly in our systems so the Customer has a seamless experience.',
          correct: true,

        },
        {
          text: 'Read the request notes carefully. Perform updates exactly as they are outlined. Do nothing further.',
          correct: false,
        },
        {
          text: 'Hold the order request. Contact the Customer to double check and review all the details they submitted. Document your notes in a notebook or use post-it notes, and then save them to enter when you have all your responses from the Customer.',
          correct: false,
        },
        {
          text: 'Review and double check the details with the Customer. Wait to enter the details into the system until the day before the loading date.',
          correct: false,
        }
      ],
      feedback:
      {
        correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`,
        incorrect: `<h2 class='correct'>Good try, but this is incorrect. Option A is the correct answer.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`
      }
    },
    {
      type: 'single_choice',
      title: 'Customer Care Management',
      question: '2. You receive an order request from the Customer asking Cargill to deliver goods. What steps should you follow before the order is entered in our systems?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      choices: [
        {
          text: 'Promptly ensure everything is set-up correctly in our systems so the Customer has a seamless experience.',
          correct: true,

        },
        {
          text: 'Read the request notes carefully. Perform updates exactly as they are outlined. Do nothing further.',
          correct: false,
        },
        {
          text: 'Hold the order request. Contact the Customer to double check and review all the details they submitted. Document your notes in a notebook or use post-it notes, and then save them to enter when you have all your responses from the Customer.',
          correct: false,
        },
        {
          text: 'Review and double check the details with the Customer. Wait to enter the details into the system until the day before the loading date.',
          correct: false,
        }
      ],
      feedback:
      {
        correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`,
        incorrect: `<h2 class='correct'>Good try, but this is incorrect. Option A is the correct answer.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`
      }
    }
  ];

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
          x: 160, y: 92, duration: this.speed, onComplete: () => {
            //this.getQuiz(2);
            this.action(3);
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
                //this.getQuiz(1);
                this.action(4);
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
                //this.getQuiz(1);
                this.action(5);
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

                    this.action(6);
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

                this.action(7);
              }
            });
          }
        });
        break;

      case 7:
        this.tl.to('#truck2', {
          x: 1184, y: -200, duration: this.speed, onComplete: () => {
            this.action(8);
          }
        });
        break;

      case 8:
        this.tl.to('#truck2', {
          x: 1484, y: -38, duration: this.speed, onComplete: () => {
            this.action(8);
          }
        });
        break;


      default:
        break;
    }
  }

  getQuiz(step) {
    this.step = step;
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
        this.score = 0;
        quiz.correct = false;
        quiz.feedbackText = quiz.feedback.incorrect;
      }
      quiz.submitted = true;
      console.log(quiz);
    }
  }
}
