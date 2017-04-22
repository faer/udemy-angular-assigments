import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
  subscription = 'advanced';
  submitted = false;

  student = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form);
    console.log(this.form.form.value.email);
    console.log(this.form.form.value.subscription);
    console.log(this.form.form.value.password);
    this.student.email = this.form.form.value.email;
    this.student.subscription = this.form.form.value.subscription;
    this.student.password = this.form.form.value.password;
  }

}
