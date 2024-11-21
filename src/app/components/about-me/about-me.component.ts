import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  downloadPdf() {
    const pdfUrl = 'assets/Achraf_Triki_CV.pdf'; // Update with your local PDF file path cv file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Achraf_Triki_CV.pdf';
    link.click();
    document.body.removeChild(link);
  }
}
