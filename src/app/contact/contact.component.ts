import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  subject: string = '';
  content: string = '';

  constructor(private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  sendMail() {
    if (this.inputValid()) {
      //TODO Send Mail
      this.showSuccessToast();
      this.clearInputs();
    }
  }

  private inputValid() {
    if (this.firstname.length < 1) {
      this.toastr.warning("Bitte überprüfen Sie den Vornamen!", "Validierung");
      return false;
    } else if (this.lastname.length < 1) {
      this.toastr.warning("Bitte überprüfen Sie den Nachnamen!", "Validierung");
      return false;
    } else if (this.email.length < 6) {
      this.toastr.warning("Bitte überprüfen Sie die E-Mail!", "Validierung");
      return false;
    } else if (this.subject.length < 2) {
      this.toastr.warning("Bitte überprüfen Sie den Betreff!", "Validierung");
      return false;
    } else if (this.content.length < 5) {
      this.toastr.warning("Bitte überprüfen Sie die Nachricht!", "Validierung");
      return false;
    } else return true;
  }

  private clearInputs() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.subject = '';
    this.content = '';
  }

  showSuccessToast() {
    this.toastr.success('E-Mail', 'Wurde erfolgreich versant');
  }

  showErrorToast() {
    this.toastr.error('E-Mail', 'Konnte nicht versented werden!');
  }
}
