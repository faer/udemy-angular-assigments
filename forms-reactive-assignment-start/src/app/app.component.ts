import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = this.getForm();
  }

  private getForm(): FormGroup {
    const form = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(
          null,
          [Validators.required, CustomValidators.projectNamesValidator],
          CustomValidators.projectNamesValidatorAsync
        ),
        'projectEmail': new FormControl(null, [Validators.required, Validators.email])
      }),
      'projectStatus': new FormControl()
    });
    return form;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
