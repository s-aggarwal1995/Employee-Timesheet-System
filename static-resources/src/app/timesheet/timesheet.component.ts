import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CalendarModule } from 'primeng/calendar';
import { TimesheetService } from '../services/timesheet/timesheet.service'
import { TasksService } from '../services/tasks/tasks.service';
import { WeeklyTask } from '../models/weeklyTask'
import { Resource } from '../models/resource';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Subscription, Observable, timer } from 'rxjs';
import { ConstantService } from '../services/constants/constants.service';
import { environment } from '../../environments/environment';

import icons from 'glyphicons';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { EmailService } from '../services/email/email.service';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Tasks } from '../models/tasks';

import { ActivatedRoute, Router } from '@angular/router';

import { OtpService } from '../services/otp/otp.service';



@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {


  // icons of glyphions used in the application using glyphicons package
  editIcon = icons.pencil;
  crossIcon = icons.crossHeavy;
  mailIcon = icons.email;
  plus = icons.plus;
  check = icons.checkHeavy;
  refresh = icons.arrowCircleFull;

  // to disable the add and edit button in the timesheet table according to whether timesheet exist or not
  addAndEditButtonDisable: boolean = false;

  // show all validation message through this variable
  message: any;
  EmailIdExistMessage: boolean;

  // toggle edita nd save timesheet button visibility according to whether timesheet exist or not
  editButtonVisibility: boolean = false;
  saveButtonVisibility: boolean = true;
  isReadOnlyForTimesheetRow: boolean = false;


  // validation message show variable for hour validation and Validation message for hour Task.
  hourValidationMessage: boolean = false;
  validationMessageForMandatoryTaskName: boolean = false;

  // sum of total weekly hour
  totalWeeklyHours: any = '';

  // response from uodatation 
  responseForUpdatedManager: any;
  responseForUpdatedClient: any;
  responseForAddedStakeholder: any;
  responseForDeletedStakeholder: any;
  responseForUpdatedClientEmail: any;
  responseForUpdatedUserEmail: any;


  // each date sum of hours
  firstDateTotal: any = '';
  secondDateTotal: any = '';
  thirdDateTotal: any = '';
  fourthDateTotal: any = '';
  fifthDateTotal: any = '';
  sixthDateTotal: any = '';
  seventhDateTotal: any = '';

  // array which is passed at the backend to for each row total hours
  totalHoursArrayOfEachDate: any;

  // get resources and tasks coming from the apis
  resources = [];
  tasksData: Tasks[];

  // select resource object when selected from the dropdown
  selectedResourceValue: any;

  // timesheet array contains all teh timesheet of a single users
  public timesheetArray: Array<any> = [];
  public tasks: WeeklyTask = new WeeklyTask('', '', '', '', '', '', '', '', '');
  public exportToExcelTimesheet: Array<any> = [];

  // startDate and EndDate of a week and dates array contains all the dates of a week
  startDate: Date;
  endDate: Date;
  dates = [];

  // properties for client name button show hide
  clientEditButtonShowHide: boolean = true;
  clientUpdateButtonShowHide: boolean = false;

  //properties for manger name button show hide
  managerEditButtonShowHide: boolean = true;
  managerUpdateButtonShowHide: boolean = false;

  //properties for client email button show hide
  clientEmailEditButtonShowHide: boolean = true;
  clientEmailUpdateButtonShowHide: boolean = false;

  //properties for user email button show hide
  userEmailEditButtonShowHide: boolean = true;
  userEmailUpdateButtonShowHide: boolean = false;

  // make all the inout boxes of client and user credentials readonly
  isManagerReadOnly: boolean = true;
  isClientReadOnly: boolean = true;
  isClientEmailReadOnly: boolean = true;
  isUserEmailReadOnly: boolean = true;

  // stakeholderemail to add in the stakeholderemail List
  stakeholderEmail;

  // email address properties
  emailTemplate: string;
  ccEmailAddresses: string;
  clientMailId: string;
  userMailId: string;
  mailSubject: string;

  // to enable send button if password is having at least one character
  invalidMailAddress: boolean = true;

  // user password binding which post too api
  userPasswordForEmail: string;

  // message to show "password should contain at least one character"
  emptyPasswordMessage: boolean;

  // message for invalid email address if user not tyed correct email address while updation
  emailAddressNotValidated: string;

  tasksName: string[] = [];

  showOtpInput: boolean = false;

  otpSuccessMessage: String;

  otpCheckEnabled: boolean = false;

  otpValue: String;

  showTimesheetOfSelectedUser: boolean = false;

  otpFailMessage: String;

  searchForTaskName = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.tasksName.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );



  constructor(public otpService: OtpService, public router: Router, public email: EmailService, public timesheetService: TimesheetService, public tasksService: TasksService, public constantService: ConstantService, private modalService: NgbModal) {

    // to get task in dropdown from the service
    this.getTasks();

  }

  ngOnInit() {

    // to get the resources name from the service
    this.getResources();

    // get the current monday of the week
    this.startDate = this.getMonday();

    // get week from date 
    this.getWeekFromDate(this.startDate);

  }

  checkForOtpLength(otp, event) {
    console.log(otp.value);
    if (otp.value.length == 3) {
      this.otpCheckEnabled = true;
    }
    if (otp.value.length >= 4 || !(event.keyCode >= 48 && event.keyCode <= 57))
      if (!(event.keyCode == 8 || event.keyCode == 46))
        event.preventDefault();

  }

  validateOtp(event) {

    this.constantService.showLoader();

    this.otpService.validateOtp(this.selectedResourceValue.userMailAdd, this.otpValue).subscribe(message => {

      this.constantService.hideLoader();
      console.log(message.response);
      if (message.response == "OTP is verified successfullly") {
        this.showTimesheetOfSelectedUser = true;
        this.getExistingTimesheet();
      }

    },
      error => {
        //this.otpCheckEnabled = false;
        this.constantService.hideLoader();
        this.otpFailMessage = error.error.response;
        var self = this;
        setTimeout(function () { self.otpFailMessage = ""; }, 3000);
      })
  }

  // call when new resource/user is selected from the drop down box
  getSelectedResourceValue() {

    this.otpValue = "";

    this.constantService.showLoader();

    this.otpService.sendOtp(this.selectedResourceValue.userMailAdd).subscribe(message => {

      if (message != null) {
        this.constantService.hideLoader();
        console.log(message.response);
        this.showOtpInput = true;
        this.otpSuccessMessage = message.response;
        var self = this;
        setTimeout(function () { self.otpSuccessMessage = ""; }, 2000);
      }
    },
      error => {
        this.message = error;
        var self = this;
        setTimeout(function () { self.message = ""; }, 2000);
      })

    //this.getExistingTimesheet();
  }

  // get Monday From Present Date
  getMonday() {
    var d = new Date();
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff - 7));
  }


  // for getting existing timesheet accoring to user and week
  getExistingTimesheet() {
    this.constantService.showLoader();
    this.timesheetService.getTimesheetAccordingToWeekAndUser(this.startDate, this.selectedResourceValue).subscribe(timesheet => {

      this.constantService.hideLoader();


      if (timesheet != null) {
        this.timesheetArray = [];
        for (var i = 0; i < timesheet.tasks.length; i++) {
          this.timesheetArray.push(timesheet.tasks[i]);
        }
        this.firstDateTotal = timesheet.totalHoursForEachDate[0];
        this.secondDateTotal = timesheet.totalHoursForEachDate[1];
        this.thirdDateTotal = timesheet.totalHoursForEachDate[2];
        this.fourthDateTotal = timesheet.totalHoursForEachDate[3];
        this.fifthDateTotal = timesheet.totalHoursForEachDate[4];
        this.sixthDateTotal = timesheet.totalHoursForEachDate[5];
        this.seventhDateTotal = timesheet.totalHoursForEachDate[6];
        this.totalWeeklyHours = timesheet.totalWeeklyHours;
        this.isReadOnlyForTimesheetRow = true;

        this.editButtonVisibility = true;
        this.saveButtonVisibility = false;

        // if user get timesheet
        this.addAndEditButtonDisable = true;



      }
      else {
        this.timesheetArray = [];
        this.tasks = new WeeklyTask('', '', '', '', '', '', '', '', '');
        this.timesheetArray.push(this.tasks);
        this.addAndEditButtonDisable = false;

        this.firstDateTotal = "";
        this.secondDateTotal = "";
        this.thirdDateTotal = "";
        this.fourthDateTotal = "";
        this.fifthDateTotal = "";
        this.sixthDateTotal = "";
        this.seventhDateTotal = "";
        this.totalWeeklyHours = "";
        this.isReadOnlyForTimesheetRow = false;


        this.editButtonVisibility = false;
        this.saveButtonVisibility = true;


      }
    },
      error => {
        this.message = error;
        var self = this;
        setTimeout(function () { self.message = ""; }, 2000);
      });
  }


  // get resources from the apis
  getResources() {
    this.constantService.showLoader();
    this.timesheetService.getResources().subscribe(resources => {
      this.constantService.hideLoader();
      this.resources = resources;

    }, error => {
      this.constantService.hideLoader();
      this.message = error;
      var self = this;
      setTimeout(function () { self.message = ""; }, 2000);
    });
  }





  hideManagerEditButton() {
    this.managerUpdateButtonShowHide = true;
    this.managerEditButtonShowHide = false;
    this.isManagerReadOnly = false;
  }

  hideManagerUpdateButton() {
    this.timesheetService.updateProjectManagerName(this.selectedResourceValue).subscribe(Message => {
      this.responseForUpdatedManager = Message;
      console.log(this.responseForUpdatedManager.response);
      this.managerUpdateButtonShowHide = false;
      this.managerEditButtonShowHide = true;
      this.isManagerReadOnly = true;
    },
      error => {
        this.message = error;
        var self = this;
        setTimeout(function () { self.message = ""; }, 2000);
      });

  }

  hideClientEditButton() {
    this.clientUpdateButtonShowHide = true;
    this.clientEditButtonShowHide = false;
    this.isClientReadOnly = false;
  }

  hideClientUpdateButton() {
    this.timesheetService.updateProjectManagerName(this.selectedResourceValue).subscribe(Message => {
      this.responseForUpdatedClient = Message;
      this.clientUpdateButtonShowHide = false;
      this.clientEditButtonShowHide = true;
      this.isClientReadOnly = true;
    },
      error => {
        this.message = error;
        var self = this;
        setTimeout(function () { self.message = ""; }, 2000);
      });

  }




  hideClientEmailEditButton() {
    this.clientEmailUpdateButtonShowHide = true;
    this.clientEmailEditButtonShowHide = false;
    this.isClientEmailReadOnly = false;
  }

  hideClientEmailUpdateButton(event) {

    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (pattern.test(event.path[2].childNodes[0].value)) {

      this.timesheetService.updateClientManagerEmail(this.selectedResourceValue).subscribe(Message => {
        this.responseForUpdatedClientEmail = Message;

        this.clientEmailUpdateButtonShowHide = false;
        this.clientEmailEditButtonShowHide = true;
        this.isClientEmailReadOnly = true;
      },
        error => {
          this.message = error;
          var self = this;
          setTimeout(function () { self.message = ""; }, 2000);
        });
    }

    else {

      this.emailAddressNotValidated = "Please enter the Correct EmailAddress";
      var self = this;
      setTimeout(function () { self.emailAddressNotValidated = ""; }, 2000);

    }

  }




  hideUserEmailEditButton() {
    this.userEmailUpdateButtonShowHide = true;
    this.userEmailEditButtonShowHide = false;
    this.isUserEmailReadOnly = false;
  }

  hideUserEmailUpdateButton(event) {

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(pattern.test(event.path[2].childNodes[0].value));
    if (pattern.test(event.path[2].childNodes[0].value)) {
      this.timesheetService.updateUserEmail(this.selectedResourceValue).subscribe(Message => {
        this.responseForUpdatedUserEmail = Message;

        this.userEmailUpdateButtonShowHide = false;
        this.userEmailEditButtonShowHide = true;
        this.isUserEmailReadOnly = true;
      },
        error => {
          this.message = error;
          var self = this;
          setTimeout(function () { self.message = ""; }, 2000);
        });
    }
    else {

      this.emailAddressNotValidated = "Please enter the Correct EmailAddress";
      var self = this;
      setTimeout(function () { self.emailAddressNotValidated = ""; }, 2000);

    }

  }

  // add stakeholder email in the stakeholders email list
  addEmail() {

    let index = this.selectedResourceValue.stakeholdersEmail.indexOf(this.stakeholderEmail)
    if (index > -1) {
      this.EmailIdExistMessage = true;
      var self = this;
      setTimeout(function () { self.EmailIdExistMessage = false; }, 2000);
    }
    else {
      this.selectedResourceValue.stakeholdersEmail.push(this.stakeholderEmail);
      this.timesheetService.addStakeholderEmail(this.selectedResourceValue).subscribe(Message => {
        this.responseForAddedStakeholder = Message;
        console.log(this.responseForAddedStakeholder.response);
      },
        error => {
          this.message = error;
          var self = this;
          setTimeout(function () { self.message = ""; }, 2000);
        });


      this.stakeholderEmail = "";
    }

  }

  // delete stakholder emails from list
  deleteStakeHolderEmail(stakeholderEmail) {
    for (var i = this.selectedResourceValue.stakeholdersEmail.length - 1; i >= 0; i--) {
      if (this.selectedResourceValue.stakeholdersEmail[i] === stakeholderEmail)
        this.selectedResourceValue.stakeholdersEmail.splice(i, 1);
      this.timesheetService.deleteStakeholderEmail(this.selectedResourceValue).subscribe(Message => {
        this.responseForDeletedStakeholder = Message;
        console.log(this.responseForDeletedStakeholder.response);
      },
        error => {
          this.message = error;
          var self = this;
          setTimeout(function () { self.message = ""; }, 2000);
        });
    }
  }


  // get week from date
  getWeekFromDate(selectedDate) {

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var startingDate = selectedDate.getDate();
    for (var i = 0; i < 7; i++) {
      var dateObj = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
      //var month = dateObj.getUTCMonth() + 1;
      let month = dateObj.getMonth();   //months from 1-12
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      let newdate = day + "-" + months[month];
      this.dates[i] = newdate;
      if (i == 0)
        this.startDate = new Date(
          selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
      if (i == 6) {
        let lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
        var dateObj = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
        //var month = dateObj.getUTCMonth() + 1;
        let month = dateObj.getMonth();   //months from 1-12
        let day = dateObj.getDate();
        let year = dateObj.getFullYear();
        let newdate = day + "-" + months[month];
        this.dates[i] = newdate;
        this.endDate = lastDate;
      }
      startingDate++;
    }

    if (this.selectedResourceValue != undefined && this.startDate != undefined)
      this.getExistingTimesheet();

  }


  addRow() {
    this.timesheetArray.push(new WeeklyTask('', '', '', '', '', '', '', '', ''));
  }

  deleteFieldValue(index) {
    this.timesheetArray.splice(index, 1);


    // total weekly hours
    this.sumOfWeeklyHours();

    let sumOfFirstDate = 0;
    let sumOfSecondDate = 0;
    let sumOfThirdDate = 0;
    let sumOfFourthDate = 0;
    let sumOfFifthDate = 0;
    let sumOfSixthDate = 0;
    let sumOfSeventhDate = 0;
    for (let i = 0; i < this.timesheetArray.length; i++) {
      sumOfFirstDate += parseInt(this.timesheetArray[i].dayOneHours || 0);
      sumOfSecondDate += parseInt(this.timesheetArray[i].dayTwoHours || 0);
      sumOfThirdDate += parseInt(this.timesheetArray[i].dayThreeHours || 0);
      sumOfFourthDate += parseInt(this.timesheetArray[i].dayFourHours || 0);
      sumOfFifthDate += parseInt(this.timesheetArray[i].dayFiveHours || 0);
      sumOfSixthDate += parseInt(this.timesheetArray[i].daySixHours || 0);
      sumOfSeventhDate += parseInt(this.timesheetArray[i].daySevenHours || 0);

      this.firstDateTotal = sumOfFirstDate;
      this.secondDateTotal = sumOfSecondDate;
      this.thirdDateTotal = sumOfThirdDate;
      this.fourthDateTotal = sumOfFourthDate;
      this.fifthDateTotal = sumOfFifthDate;
      this.sixthDateTotal = sumOfSixthDate;
      this.seventhDateTotal = sumOfSeventhDate;
    }


  }

  //chcek hours for validation
  checkHours(event, hours, key, index) {

    //Total Weekly Hours
    this.sumOfWeeklyHours();


    if (event.target.classList[1] == "firstDate") {
      let sumOfFirstDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfFirstDate += parseInt(this.timesheetArray[i].dayOneHours || 0);
        if (sumOfFirstDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.firstDateTotal = sumOfFirstDate;


        this.sumOfWeeklyHours();
      }
    }
    if (event.target.classList[1] == "secondDate") {
      let sumOfSecondDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfSecondDate += parseInt(this.timesheetArray[i].dayTwoHours || 0);
        if (sumOfSecondDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.secondDateTotal = sumOfSecondDate;
      }
    }

    if (event.target.classList[1] == "thirdDate") {

      let sumOfThirdDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfThirdDate += parseInt(this.timesheetArray[i].dayThreeHours || 0);
        if (sumOfThirdDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.thirdDateTotal = sumOfThirdDate;
      }

    }

    if (event.target.classList[1] == "fourthDate") {
      let sumOfFourthDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfFourthDate += parseInt(this.timesheetArray[i].dayFourHours || 0);
        if (sumOfFourthDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.fourthDateTotal = sumOfFourthDate;
      }
    }
    if (event.target.classList[1] == "fifthDate") {
      let sumOfFifthDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfFifthDate += parseInt(this.timesheetArray[i].dayFiveHours || 0);
        if (sumOfFifthDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.fifthDateTotal = sumOfFifthDate;
      }
    }
    if (event.target.classList[1] == "sixthDate") {
      let sumOfSixthDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfSixthDate += parseInt(this.timesheetArray[i].daySixHours || 0);
        if (sumOfSixthDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.sixthDateTotal = sumOfSixthDate;
      }
    }
    if (event.target.classList[1] == "seventhDate") {
      let sumOfSeventhDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfSeventhDate += parseInt(this.timesheetArray[i].daySevenHours || 0);
        if (sumOfSeventhDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidationMessage = true;
          var self = this;
          setTimeout(function () { self.hourValidationMessage = false; }, 2000);
        }
        else
          this.seventhDateTotal = sumOfSeventhDate;
      }
    }

  }

  // sum of weekly hours
  sumOfWeeklyHours() {
    let totalWeekSum = 0;
    for (var i = 0; i < this.timesheetArray.length; i++) {
      for (var objectKey in this.timesheetArray[i]) {
        if (this.timesheetArray[i].hasOwnProperty(objectKey)) {
          if (objectKey !== "taskName") {
            if (objectKey !== "taskDescription") {
              totalWeekSum += parseInt(this.timesheetArray[i][objectKey] || 0);
              this.totalWeeklyHours = totalWeekSum;
            }
          }
        }
      }
    }
  }

  // save timesheet
  saveTimesheet() {
    let valueIsEmptyOrNot: boolean = this.checkForEmptyData();

    if (valueIsEmptyOrNot) {
      this.totalHoursArrayOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
      this.timesheetService.postTimesheet(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursArrayOfEachDate)
        .subscribe(message => {
          this.message = message.response;
          var self = this;
          setTimeout(function () { self.message = ""; }, 2000);

          this.isReadOnlyForTimesheetRow = true;
          this.editButtonVisibility = true;
          this.saveButtonVisibility = false;

          this.addAndEditButtonDisable = true;


        },
          error => {
            this.message = error;
            var self = this;
            setTimeout(function () { self.message = ""; }, 2000);
          });

    }

  }

  // export to excel timesheet
  exportToExcel() {

    let valueIsEmptyOrNot: boolean = this.checkForEmptyData();

    if (valueIsEmptyOrNot) {
      this.totalHoursArrayOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
      //this.checkForEmptyData();
      this.constantService.showLoader();

      this.timesheetService.exportToExcel(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursArrayOfEachDate)
        .subscribe(message => {

          try {
            window.open(`${environment.baseUrl}` + "downloadexcelsheet", "_parent");
            window.close();
          }
          catch (e) {
            this.message = e;
            var self = this;
            setTimeout(function () { self.message = ""; }, 2000);
          }

          this.message = message.response;
          var self = this;
          setTimeout(function () {
            self.message = "";
            self.constantService.hideLoader();
          }, 2000);


          this.isReadOnlyForTimesheetRow = true;
          this.addAndEditButtonDisable = true;

          this.editButtonVisibility = true;
          this.saveButtonVisibility = false;

        },
          error => {
            this.message = error;
            var self = this;
            setTimeout(function () { self.message = ""; }, 2000);
          });
    }
  }



  // hours should not be greater than two
  checkNoOfDigitsInHours(event) {
    if (event.target.value > 2 || !(event.keyCode >= 48 && event.keyCode <= 57))
      event.preventDefault();
  }

  // check whether the selected task should not be empty
  checkForEmptyData(): boolean {
    for (var i = 0; i < this.timesheetArray.length; i++) {
      for (var objectKey in this.timesheetArray[i]) {
        if (this.timesheetArray[i].hasOwnProperty(objectKey)) {
          if (this.timesheetArray[i]["taskName"] == '') {
            //$("#validationlabel").show();
            this.validationMessageForMandatoryTaskName = true;
            var self = this;
            setTimeout(function () {
              self.validationMessageForMandatoryTaskName = false;
            }, 2000);
            return false;
          }
        }
      }
    }
    return true;
  }


  toggleButton() {

    this.isReadOnlyForTimesheetRow = false;

    this.editButtonVisibility = false;
    this.saveButtonVisibility = true;

    this.addAndEditButtonDisable = false;

  }


  // set mail subject in the model
  setMailSubject() {
    this.mailSubject = "Timesheet for approval from" + " " + this.startDate.toLocaleDateString() + "-" + this.endDate.toLocaleDateString();
  }



  // on key press check that both the email addresss is correct and password is not empty (called on keydown)
  checkPasswordLength(event) {

    if (this.userPasswordForEmail != "") {
      this.invalidMailAddress = false;
    }
    else {
      this.invalidMailAddress = true;
    }
  }

  // show validation messages (called on blur)
  showPasswordValidationMessageIfEmpty(event) {

    //let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (event.target.value == "") {
      this.emptyPasswordMessage = true;
    }
    else {
      this.emptyPasswordMessage = false;
    }

  }



  closeResult: string;

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  sendMail(content) {

    this.clientMailId = "";
    this.ccEmailAddresses = "";
    this.userMailId = "";
    this.userPasswordForEmail = "";

    this.invalidMailAddress = true;


    let valueIsEmptyOrNot: boolean = this.checkForEmptyData();

    if (valueIsEmptyOrNot) {
      this.totalHoursArrayOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
      //this.checkForEmptyData();
      this.constantService.showLoader();

      this.timesheetService.exportToExcel(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursArrayOfEachDate)
        .subscribe(message => {
          this.message = message.response;
          var self = this;
          var con = content;
          setTimeout(function () {
            self.message = "";
            self.constantService.hideLoader();
          }, 2000);


          //mail functionality
          this.email.getEmailTemplate().subscribe(emailTemplate => {

            this.userMailId = this.selectedResourceValue.userMailAdd;
            this.clientMailId = this.selectedResourceValue.clientMailAdd;

            this.setMailSubject();
            this.emailTemplate = emailTemplate;



            var arrayLength = this.selectedResourceValue.stakeholdersEmail.length;

            for (var i = 0; i < arrayLength; i++) {
              this.ccEmailAddresses += this.selectedResourceValue.stakeholdersEmail[i] + ";";
            }
            this.ccEmailAddresses = this.ccEmailAddresses.slice(0, this.ccEmailAddresses.length - 1);




            this.open(con);
          }
            , error => {
              this.message = error;
              var self = this;
              setTimeout(function () { self.message = ""; }, 2000);
            })

          this.isReadOnlyForTimesheetRow = true;
          this.addAndEditButtonDisable = true;

          this.editButtonVisibility = true;
          this.saveButtonVisibility = false;

        },
          error => {
            this.message = error;
            var self = this;
            setTimeout(function () { self.message = ""; }, 2000);
          });
    }


  }


  // hide the modal
  mailSent() {

    //$(".modal").remove(); 
    $(".modal-dialog").css("display", "none");
    $(".modal-backdrop.show").css("opacity", "0");

    this.constantService.showLoader();


    this.email.postEmail(this.userMailId, this.userPasswordForEmail, this.clientMailId, this.selectedResourceValue.stakeholdersEmail, this.mailSubject, this.emailTemplate).subscribe(message => {
      this.constantService.hideLoader();
      this.message = message.response;
      var self = this;
      setTimeout(function () { self.message = ""; }, 2000);
    },
      error => error => {
        this.message = error.response;
        var self = this;
        setTimeout(function () { self.message = ""; }, 2000);
      })

  }

  expandDescriptionOnFocus(event) {

    if (!this.editButtonVisibility) {

      event.srcElement.parentNode.style.opacity = "0.9";
      event.srcElement.parentNode.style.zIndex = "9999";
      event.srcElement.parentNode.style.position = "fixed";

      event.target.style.position = "relative";
      event.target.style.width = "480px";

    }

  }

  descriptionBoxBackToNormal(event) {

    event.srcElement.parentNode.style.width = "";
    event.srcElement.parentNode.style.height = "";
    event.srcElement.parentNode.style.opacity = "";
    event.srcElement.parentNode.style.width = "";
    event.srcElement.parentNode.style.background = "";
    event.srcElement.parentNode.style.position = "";

    event.target.style.width = "100%";
    event.target.style.height = "";
    event.target.style.opacity = "";
    event.target.style.position = "";
    event.target.style.zIndex = 1;
  }







  // get tasks from the apis
  getTasks() {
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasksData = tasks;

      //changes to be checked in
      if (this.tasksData != []) {
        for (let i = 0; i < this.tasksData.length; i++) {
          this.tasksName.push(this.tasksData[i].taskName);
        }
      }

    },
      error => {
        this.message = error;
        var self = this;
        setTimeout(function () { self.message = ""; }, 2000);
      });
  }


  // redirectToReports() {
  //   this.router.navigate(['/reports']);
  // }









}
