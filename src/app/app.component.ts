import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chez-shui';

  expandSet = new Set<number>();
  
  projects = [
    {
      id: 1,
      name: 'Curriculum Vitae',
      url: 'http://www.zhongshui.fr/',
      description: "This is a resume website.",
      opacity: "1",
      expand: false
    },
    {
      id: 2,
      name: 'Repayment',
      url: 'https://repayment.azurewebsites.net/',
      description: "This is a website for understanding different loan repayment methods.",
      opacity: "1",
      expand: false
    },
    {
      id: 3,
      name: 'Photo master',
      url: 'https://colorerlavie.azurewebsites.net/',
      description: "This is a website for managing and displaying photos.",
      opacity: "1",
      expand: false
    }
  ];

  constructor() { }

  ngOnInit() { }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
