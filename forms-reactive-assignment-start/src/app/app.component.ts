import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = this.getForm();
  }

  private getForm(): FormGroup {
    const form = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.projectNamesValidator.bind(this)]),
        'projectEmail': new FormControl(null, [Validators.required, Validators.email])
      }),
      'projectStatus': new FormControl()
    });
    return form;
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  projectNamesValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'forbiddenName' : true};
    }
    return null;
  }

  projectNamesValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({'forbiddenNameAsync' : true});
        } {
          resolve(null);
        }
      }
    );
    return null;
  }
}
