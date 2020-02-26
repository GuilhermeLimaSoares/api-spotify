import { Component, SimpleChanges, OnInit } from '@angular/core';
import { ChangePageService } from 'src/services/change-page.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHomePage = true;

  constructor(private changePage: ChangePageService){

  }
  ngOnInit() {
    console.log(this.changePage.isOpen);

    this.changePage.isOpen.subscribe((resp) => {
      this.isHomePage = resp;
      console.log(resp);
    });

  }

}
