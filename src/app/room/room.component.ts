import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'gw-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(paramMapResponse => {
          return paramMapResponse.get('id') + " was done mapped";
        }),
        take(1)
      )
    .subscribe(idString => {
      this.id = idString;
    })
  }

}
