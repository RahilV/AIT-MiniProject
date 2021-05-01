import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  file: any;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {}

  selectFile(event: any) {
    if (event.target.files.length > 0) this.file = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post('useragreement', formData).subscribe(
      (res: any) =>
        this.toastr.success(res.status, 'User Agreement Document Upload', {
          timeOut: 3000,
          progressBar: true,
        }),
      (err) => {
        console.log(err);
        const errorMsg = err.error.substring(
          err.error.lastIndexOf('<pre>') + 5,
          err.error.lastIndexOf('</pre>')
        );
        this.toastr.error(errorMsg, 'User Agreement Document Upload', {
          timeOut: 3000,
          progressBar: true,
        });
      }
    );
  }
}
