import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import gsap from 'gsap';
import { TimelineMax } from 'gsap/all';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements AfterViewInit {

  constructor() {
    gsap.registerPlugin(MotionPathPlugin);
  }
  ngAfterViewInit(): void {

    const tl = new TimelineMax();
    tl.to('.building1', { scale: 1, duration: 0.5 });
    tl.to('.tree1', { scale: 1, duration: 0.5 });

    tl.fromTo('#truck1', { x: -161, y: 100 }, { x: 229, y: -140, duration: 5 });
    tl.to('.selection1', { scale: 1, duration: 0.5 });
    tl.to('#truck1', { opacity: 0, duration: 0.1 });

    tl.to('#truck2', { opacity: 1, duration: 0.1 });
    tl.fromTo('#truck2', { x: 0, y: 0 }, { x: 240, y: 140, duration: 5 });
  }
}