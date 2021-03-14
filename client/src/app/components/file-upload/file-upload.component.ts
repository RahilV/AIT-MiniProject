import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  singleImage: any;
  multipleImages: any = [];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {}

  selectSingleImage(event: any) {
    if (event.target.files.length > 0) this.singleImage = event.target.files[0];
  }

  selectMultipleImage(event: any) {
    if (event.target.files.length > 0) this.multipleImages = event.target.files;
  }

  onSingleSubmit() {
    const formData = new FormData();
    formData.append('file', this.singleImage);

    this.http.post('http://localhost:3000/singleupload', formData).subscribe(
      (res: any) =>
        this.toastr.success(res.status, 'Single File Upload', {
          timeOut: 3000,
          progressBar: true,
        }),
      (err) => console.log(err)
    );
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append('files', img);
    }

    this.http.post('http://localhost:3000/multipleupload', formData).subscribe(
      (res: any) =>
        this.toastr.success(res.status, 'Multiple File Upload', {
          timeOut: 3000,
          progressBar: true,
        }),
      (err) => console.log(err)
    );
  }
}
