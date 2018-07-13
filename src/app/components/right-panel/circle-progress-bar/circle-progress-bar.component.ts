import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'cv-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss']
})
export class CircleProgressBarComponent implements AfterViewInit {
  @Input() barValue = 64;
  @Input() label = '';
  @Input() showValue = false;
  initValue = 0;

  readonly canvasSize = 100;
  readonly lineWidth = 10;

  @ViewChild('progressBar') progressBar: ElementRef;
  @ViewChild('inactiveProgress') inactiveProgress: ElementRef;
  @ViewChild('activeProgress') activeProgress: ElementRef;

  activeProgressCTX: CanvasRenderingContext2D;
  quarterTurn = Math.PI / 2;
  startAngle = 0 - this.quarterTurn;

  constructor(private renderer2: Renderer2) { }

  ngAfterViewInit() {
    this.drawInactive();
    const activeCanvas = this.activeProgress.nativeElement;
    this.setCanvasSize(activeCanvas);
    this.activeProgressCTX = activeCanvas.getContext('2d');
    const interval = setInterval(() => {
      this.initValue += Math.floor(Math.random() * 10) + 1;
      this.drawActive(this.initValue);
      if (this.initValue >= this.barValue) {
        this.initValue = this.barValue;
        clearInterval(interval);
      }
    }, 100);
  }



  private drawInactive(): void {
    const inactiveCanvas = this.inactiveProgress.nativeElement;
    this.setCanvasSize(inactiveCanvas);
    const inactiveProgressCTX = inactiveCanvas.getContext('2d');
    inactiveProgressCTX.lineCap = 'square';

    // progress bar
    inactiveProgressCTX.beginPath();
    inactiveProgressCTX.lineWidth = 0;
    inactiveProgressCTX.fillStyle = '#f0f2f4';
    inactiveProgressCTX.arc(this.canvasSize / 2, this.canvasSize / 2, this.canvasSize / 2, 0, 2 * Math.PI);
    inactiveProgressCTX.fill();

    // progressbar caption
    inactiveProgressCTX.beginPath();
    inactiveProgressCTX.lineWidth = 0;
    inactiveProgressCTX.fillStyle = '#fff';
    inactiveProgressCTX.arc(this.canvasSize / 2, this.canvasSize / 2, this.canvasSize / 2 - this.lineWidth, 0, 2 * Math.PI);
    inactiveProgressCTX.fill();
  }

  private drawActive(currentValue: number): void {
    const endAngle = ((2 * currentValue / 100) * Math.PI) - this.quarterTurn;

    this.activeProgressCTX.lineCap = 'square';
    this.activeProgressCTX.beginPath();
    this.activeProgressCTX.lineWidth = this.lineWidth;
    this.activeProgressCTX.strokeStyle = '#065e52';
    this.activeProgressCTX.arc(this.canvasSize / 2, this.canvasSize / 2,
      this.canvasSize / 2 - this.lineWidth + (this.lineWidth / 2), this.startAngle, endAngle);
    this.activeProgressCTX.stroke();
  }

  setCanvasSize(nativeElement: HTMLElement): void {
    this.renderer2.setAttribute(nativeElement, 'height', this.canvasSize.toString());
    this.renderer2.setAttribute(nativeElement, 'width', this.canvasSize.toString());
  }
}
