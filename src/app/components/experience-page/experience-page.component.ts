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
        'Data Science Apprentice - Suricog',
        'Sep 2025 - Present',
        [
          'Developed and improved data processing pipelines for eye-tracking analysis.',
          'Implemented advanced algorithms for saccade detection and pursuit signal analysis.',
          'Optimized model performance using fitting techniques (Heaviside, sinusoidal fitting) and signal processing.',
          'Collaborated with product and research teams to integrate solutions into industrial environments.'
        ]
      ),
      new Expinfo(
        'Master\'s Degree - EDC Paris Business School',
        'Sep 2025 - Sep 2026',
        [
          'Grande École Program - Data Science & Business Intelligence, in apprenticeship with Suricog.'
        ]
      ),
      new Expinfo(
        'Generative AI Intern - Algocat (End-of-Studies Project)',
        'Mar 2025 - Sep 2025',
        [
          'Developed an industrial benchmark to evaluate the performance and cost of dozens of LLMs for e-commerce product data enrichment.',
          'Compared 10+ task-specific prompts based on extraction accuracy and processing cost.',
          'Benchmarked models hosted on Scaleway (Generative APIs, Managed Inference, GPU instances) to optimize response time and coverage.',
          'Provided strategic recommendations on optimal providers and prompt optimization to reduce costs while maintaining quality.'
        ]
      ),
      new Expinfo(
        'INSAT - Engineering Degree ',
        'Sep 2020 - Sep 2025',
        [
          'Engineering Degree in Computer networks and telecommunications.'
        ]
      ),
      new Expinfo(
        'Data Science Intern - Manipal Institute Of Technology (MIT) India',
        'Jul 2024 - Sep 2024',
        [
          'Developed an AI-driven system to analyze data from devices in a smart city prototype.',
          'Applied machine learning and deep learning algorithms to detect cybersecurity risks in connected devices.',
          'Created an interactive user interface using Flask to display cybersecurity predictions, enabling faster decision-making for cybersecurity teams.'
        ]
      ),
      new Expinfo(
        'Mobile Developer Intern - Telnet Holding',
        'Jul 2023 - Sep 2023',
        [
          'Designed and developed an Android application to create an EMV tag dictionary using Kotlin and enhancing user experience through an intuitive interface.',
          'Analyzed and identified potential values associated with EMV tags and optimizing tag detection for faster transactions.'
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'Aug 2020',
        [
          'Baccalaureate Degree in Mathematics.'
        ]
      )
    ];
  }
}
