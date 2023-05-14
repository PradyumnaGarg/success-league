import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'success-league';

  openModal = true;

  form: FormGroup = new FormGroup({
    check: new FormControl(['', [Validators.required]])
  })

  ngOnInit(): void {
    this.form.reset();
  }

  closeModal(): void {
    if (this.form.invalid) {
      return;
    }

    if (!this.form.value.check) {
      return;
    }

    this.openModal = false;
  }
}
