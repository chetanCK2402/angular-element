import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  time = new Date();

  ngOnInit() {
      setInterval(() => {
         this.time = new Date();
      }, 1000);
  }

}
