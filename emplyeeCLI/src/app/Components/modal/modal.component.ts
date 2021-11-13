import { Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() closable = true;
  @Input() visible: boolean;
  @Input() version: string = "";
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() dialogclosable = true;

  constructor() { }

  ngOnInit() { }

  close() {
    if (!this.dialogclosable) {
      return;
    }
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
