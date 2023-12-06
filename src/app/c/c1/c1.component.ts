import { Component,ViewChild,EventEmitter,ElementRef,Output,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
/**
   * Handles form submission.
   * @param form - The NgForm object representing the form being submitted.
   */
onSubmit(form: NgForm) {
  if (form.valid) {
    console.log('Form Submitted!', form.value);
  } else {
    console.log('Form is invalid!');
  }
   if (this.hasCheckedCheckbox()) {
    console.log('Form submitted!');
  } else {
    console.log('Please select at least one checkbox before submitting.');
  }
}
//message of level
selectedLevel: string = '';
username="";
savemessage:string="";
getMessageForSelectedLevel(): any {
    for(let i=0;i<3;i++){
        if(this.selectedLevel==="beginner"){
           this.savemessage=`Congratulations [${this.username}]! Your programming 
           skills are impressive Keep up the great work in level Beginner .`;
        }
        else if(this.selectedLevel==="intermediate"){
          this.savemessage=`Congratulations [${this.username}]! Your programming 
          skills are impressive Keep up the great work in level Intermediate !`;
        }
        else if(this.selectedLevel==="advanced"){
          this.savemessage=`Congratulations [${this.username}]! Your programming 
          skills are impressive Keep up the great work in level advanced`;
        }
        else{
          this.savemessage='';
        }
    }
   
}
checkboxes: any[] = [
  { label: 'c++', isChecked: false },
  { label: 'javascript', isChecked: false },
  { label: 'java', isChecked: false },
  { label: 'python', isChecked: false },
];
hasCheckedCheckbox(): boolean {

  return this.checkboxes.some(checkbox => checkbox.isChecked);
}

}