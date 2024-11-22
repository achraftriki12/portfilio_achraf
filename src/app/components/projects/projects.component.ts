import { Component, TemplateRef } from '@angular/core';
import { project } from 'src/app/model/project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: project[];
  path1:string="https://www.youtube.com/embed/KnTs16PImcA?si=b4Ig_53-Ux-J-_4p";
  constructor(private modalService: NgbModal) {
    this.projects = [
          
     
      new project(
        'Graph Transformer for Human Embryo Selection',
        'IA',
        'Transformers, Computer vision, GNN, CNN',
        '2024',
        'https://github.com/achraftriki12/graph-transformers',
        ' Developed a Graph Transformer-based model for embryo classification, achieving 85% accuracy. Reviewed 15+ research papers, segmented 1,000 embryo images into patches, and extracted node and edge features to create detailed graph representations. The approach outperformed traditional CNN models by 5%. ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg', 'image 3.jpg'],
        "",
        "Rapport_PFA"

        
      ),
      new project(
        'YOLOv8-animal pose estimation',
        'IA',
        'Yolo V8m',
        '2024',
        'https://github.com/achraftriki12/Cheetah-Keypoint-Detection-and-Pose-Estimation-with-YOLOv8',
        'This project uses the YOLOv8n-pose model to detect cheetah keypoints and estimate poses, based on the AcinoSet dataset. It includes data preprocessing, model training, and result visualization, with tools for keypoint detection and evaluation.',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg'],
        "",
        ""

        
      ),
   

      
      new project(
        'Dev Hub',
        'Web dev',
        'Angular - Nest JS',
        '2023',
        'https://github.com/achraftriki12/Backend-Devhub',
        ' A project management platform built with Angular and NestJS, offering real-time project tracking, resource allocation, and secure data exchange. Simplifies task management and coordination with an intuitive interface for administrators, clients, and consultants. ',
        ['thumbnail.jpg','image 1.png','image 2.png','image 3.png','image 4.png','image 5.png','image 6.png'],
        "",
        ""
        
        
      ),
      new project(
        'Event Hub',
        'Web dev',
        'Angular - Nest JS',
        '2023',
        'https://github.com/achraftriki12/Event-hub',
        ' Developed an event management project with AngularJS and NestJS architecture, facilitating comprehensive solutions for creating, managing, and purchasing event tickets. Users can also customize events, and an integrated approval process ensures event quality. ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "",
        ""
        
      ),
      new project(
        'Vulnerability Detection in smart city prototype',
        'IA',
        'GNN , ML ,DeepLearning',
        '2024',
        '',
        'Developed an AI-driven system using machine learning to detect cybersecurity risks in smart city devices, featuring a Flask-based interface for real-time risk visualization.',
        ['thumbnail.jpg','image 1.png','image 2.png'],
        "",
        "intership report"
        
      ),
      new project(
        'Emv Tag Mobile App',
        'mobile dev',
        'android , Kotlin', 
        '2023',
        '',
        'Developed an Android app using Kotlin to create an EMV tag dictionary, enhancing user experience with an intuitive interface and optimizing tag detection for faster transactions.',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg', 'image 3.jpg','image 4.png','image 5.jpg'],
        "",
        "intership report"
        
      ),
      
        
      


    ];
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, {
      centered: true,
      modalDialogClass: 'dark-modal',
      windowClass: 'dark-modal',
      size: 'xl',
    });
  }
  downloadPdf(title:string) {
    const pdfUrl = `assets/projects image/${title}/${title}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
    document.body.removeChild(link);
  }

}
