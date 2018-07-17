import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  downloadPDF(): void {
    this.httpClient.get('../../../assets/files/CV_Savych.pdf', {responseType: 'blob'})
      .subscribe(
        response => FileSaver.saveAs(new Blob([response]), 'CV_Savych.pdf'),
        (error) => console.error(error)
      );
  }

  openPDF(): void {
    const link = document.createElement('a');
    link.href = '../../../assets/files/CV_Savych.pdf';
    link.setAttribute('target', '_blank');
    link.click();
  }

}

