import { Component } from '@angular/core';

@Component({
  selector: 'app-research-blog',
  templateUrl: './research-blog.component.html',
  styleUrls: ['./research-blog.component.css'],
})
export class ResearchBlogComponent {
  downloadReport() {
    const title = 'Graph Transformer for Human Embryo Selection';
    const pdfUrl = `assets/projects image/${title}/Rapport_PFA.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Graph_Transformer_Embryo_Selection_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
