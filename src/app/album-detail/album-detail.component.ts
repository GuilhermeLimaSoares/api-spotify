import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChangePageService } from 'src/services/change-page.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  constructor(private changePage: ChangePageService) { }

  ngOnInit() {

  }

  public backHomePage(){
    this.changePage.isHomePageOpened(true);
  }

}
