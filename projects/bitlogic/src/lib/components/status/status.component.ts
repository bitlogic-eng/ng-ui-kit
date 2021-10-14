import { Component, OnInit, Input } from '@angular/core';

enum StatusEnum {
  PENEDING = 'pending',
  ACCEPTED = 'accepted',
  ERROR = 'error',
  CANCELED = 'canceled'
};

enum SizeEnum {
  SMALL = 'small',
  NORMAL = 'normal'
}

@Component({
  selector: 'bit-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input()
  status: StatusEnum = StatusEnum.ACCEPTED;
 
  @Input()
  size: SizeEnum = SizeEnum.NORMAL;

  @Input()
  statusHead: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
