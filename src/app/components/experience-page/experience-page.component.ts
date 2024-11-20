import { Component } from '@angular/core';
import { Expinfo } from 'src/app/model/exp_info';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent {
  exps: Expinfo[];
  constructor() {
    this.exps = [
      new Expinfo(
        'INSAT - Engineering Degree ',
        '2020-2025',
        [
          'Engineering Degree in Computer networks and telecommunications.'
        ]
      ),
      new Expinfo(
        'AI Intern - Manipal Institute Of Technology (MIT) India',
        'Summer-2024',
        [
          'Developed an AI-driven system to analyze data from devices in a smart city prototype.',
          'Applied machine learning and deep learning algorithms to detect cybersecurity risks in connected devices.',
          'Created an interactive user interface using Flask to display cybersecurity predictionsfor enabling faster decision-making for cybersecurity teams'
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        [
          'Baccalaureate Degree in Mathematics.'
        ]
      ),
      new Expinfo(
        'Mobile Developer Intern - Telnet Holding',
        'Summer-2023',
        [
          'Designed and developed an Android application to create an EMV tag dictionary using Kotlin and enhancing user experience through an intuitive interface',
          'Analyzed and identified potential values associated with EMV tags and optimizing tag detection for faster transactions'

        ]
      )
    ];
  }
}
