import { Component, OnInit } from '@angular/core';
import { Feedback } from "./feedbackModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  isWentWrong = false;
  feedback: Feedback = {
    companyName: "",
    projectName: "",
    willRecommend: true,
    rating: 0,
    wentWrong: {
      complaintsMentioned: false,
      projectManager: false,
      crew: false,
      qualityOfWork: false,
      speedAndDelivery: false,
      pricing: false,
      other: ""
    }
  }
  buttonSelected = {
    projectManager: "",
    crew: "",
    qualityOfWork: "",
    speedAndDelivery: "",
    pricing: "",
  }
  baseUrl = "http://localhost:3000/feedback/add"
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  ngOnInit() {
  }

  submitFeedback() {
    if (this.feedback.rating < 9 && !this.feedback.wentWrong.complaintsMentioned) {
      this.isWentWrong = true;
      this.feedback.wentWrong.complaintsMentioned = true;
    }
    else {
      console.log(this.feedback);
      this._http.post(this.baseUrl, this.feedback, this.options).subscribe(function (response) {
        console.log(response);
      },
        function (error) {
          console.log(error);
        });
    }
  }
  checkProjectManager() {
    this.feedback.wentWrong.projectManager = !this.feedback.wentWrong.projectManager;
    this.buttonSelected.projectManager = this.buttonSelected.projectManager ? "" : "warn";
  }
  checkCrew() {
    this.feedback.wentWrong.crew = !this.feedback.wentWrong.crew;
    this.buttonSelected.crew = "warn";
  }
  checkQualityOfWork() {
    this.feedback.wentWrong.qualityOfWork = !this.feedback.wentWrong.qualityOfWork;
    this.buttonSelected.qualityOfWork = this.buttonSelected.qualityOfWork ? "" : "warn";
  }
  checkSpeedAndDelivery() {
    this.feedback.wentWrong.speedAndDelivery = !this.feedback.wentWrong.speedAndDelivery;
    this.buttonSelected.speedAndDelivery = this.buttonSelected.speedAndDelivery ? "" : "warn";
  }
  checkPricing() {
    this.feedback.wentWrong.pricing = !this.feedback.wentWrong.pricing;
    this.buttonSelected.pricing = this.buttonSelected.pricing ? "" : "warn";
  }
}
