import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../services/user-detail.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private userService: UserDetailService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Upload Page');
    // this.userService.getDetail().subscribe();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
