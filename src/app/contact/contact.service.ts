import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ContactService {

  private readonly serviceId: string = "smtp_server_eventelektro";
  private readonly templateId: string = "template_euVyZvVB";
  private readonly userId: string = "user_42QW3OCq38tHshycJMHUn";
  static readonly ACCESS_TOKEN: string = "5b92656081d45e095ec7ac462fc01687";
  static readonly CONTENT_TYPE: string = "application/json";
  private readonly url: string = "https://api.emailjs.com/api/v1.0/email/send";


  constructor(private http: HttpClient) {
  }

  sendMail(firstname: string, lastname: string, email: string, subject: string, content: string) {
    const data = {
      service_id: this.serviceId,
      template_id: this.templateId,
      user_id: this.userId,
      template_params: {
        'name': `${firstname} ${lastname}`,
        'subject': subject,
        'email': email,
        'message': content
      }
    };
    this.http.post(this.url, data, httpOptions)
      .subscribe(
        data => {
          // console.log(data);
        }, error => {
          // console.error(error);
        }
      )
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': ContactService.CONTENT_TYPE,
    'Authorization': ContactService.ACCESS_TOKEN
  })
};
