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



@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {


  // icons
  editIcon = icons.pencil;
  crossIcon = icons.crossHeavy;
  mailIcon = icons.email;
  plus = icons.plus;
  check= icons.checkHeavy;

  addAndEditButtonDisable: boolean = false;

  completeTimesheet: any;

  message: any;

  editButtonVisibility: boolean = false;
  saveButtonVisibility: boolean = true;
  isReadOnlyForTimesheetRow: boolean = false;

  hourValidation: boolean = false;
  mandatoryValidation: boolean = false;

  totalWeeklyHours: any = '';

  responseForUpdatedManager: any;
  responseForUpdatedClient: any;
  responseForAddedStakeholder: any;
  responseForDeletedStakeholder: any;

  firstDateTotal: any = '';
  secondDateTotal: any = '';
  thirdDateTotal: any = '';
  fourthDateTotal: any = '';
  fifthDateTotal: any = '';
  sixthDateTotal: any = '';
  seventhDateTotal: any = '';

  totalHoursOfEachDate: any;

  resources = [];
  tasksData = [];

  // TODO its an object
  selectedResourceValue: any;

  public timesheetArray: Array<any> = [];
  public tasks: WeeklyTask = new WeeklyTask('', '', '', '', '', '', '', '', '');
  public exportToExcelTimesheet: Array<any> = [];


  startDate: Date;
  dates = [];
  endDate: Date;
  //defaultDate:Date;

  clientEditButtonShowHide: boolean = true;
  clientUpdateButtonShowHide: boolean = false;

  managerEditButtonShowHide: boolean = true;
  managerUpdateButtonShowHide: boolean = false;

  isManagerReadOnly: boolean = true;
  isClientReadOnly: boolean = true;

  stakeholderEmail;

  constructor(public timesheetService: TimesheetService, public tasksService: TasksService, public constantService: ConstantService) { }

  ngOnInit() {

    

    // to get the resources name from the service
    this.getResources();

    // to get task in dropdown from the service
    this.getTasks();

    // get the current monday of the week
    this.startDate = this.getMonday();


    // get week from date 
    this.getWeekFromDate(this.startDate);

  }



  getSelectedResourceValue() {

    console.log(this.selectedResourceValue);
    console.log(this.startDate);
    this.getExistingTimesheet();

  }

  getMonday() {
    var d = new Date();
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff - 7));
  }


  getExistingTimesheet() {
    this.constantService.showLoader();
    this.timesheetService.getTimesheetAccordingToWeekAndUser(this.startDate, this.selectedResourceValue).subscribe(timesheet => {
      console.log(timesheet);
      this.constantService.hideLoader();

      //this.completeTimesheet = timesheet;
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

        // if existing timesheet is present then show previous manager and client manager if present
        //this.selectedResourceValue=timesheet.user;

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

  getTasks() {
    this.tasksService.getTasks().subscribe(tasks => this.tasksData = tasks, error => {
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
      console.log(this.responseForUpdatedClient.response);
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

  addEmail() {
    //var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //this.stakeholderEmails.push(this.stakeholderEmail);
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

  getWeekFromDate(selectedDate) {
    console.log(selectedDate);
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
        this.startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
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
    console.log(this.timesheetArray);
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


  // checkTaskValidation(taskDesp, id, i) {
  //   console.log(i);
  //   console.log(this.timesheetArray[i]);
  //   console.log(this.timesheetArray[i].taskDescription);


  //   if (taskDesp.length > 20) {
  //     alert("task length should not be greater than 20");
  //     this.timesheetArray[i][id] = "";
  //     return;
  //   }
  // }

  checkHours(event, hours, key, index) {

    //Total Weekly Hours
    this.sumOfWeeklyHours();


    if (event.target.classList[1] == "firstDate") {
      let sumOfFirstDate = 0;
      for (let i = 0; i < this.timesheetArray.length; i++) {
        sumOfFirstDate += parseInt(this.timesheetArray[i].dayOneHours || 0);
        if (sumOfFirstDate > 24) {
          this.timesheetArray[index][key] = '';
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
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
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
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
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
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
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
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
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
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
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
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
          this.hourValidation = true;
          var self = this;
          setTimeout(function () { self.hourValidation = false; }, 2000);
        }
        else
          this.seventhDateTotal = sumOfSeventhDate;
      }
    }

  }

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

  saveTimesheet() {
    let valueIsEmptyOrNot: boolean = this.checkForEmptyData();

    if (valueIsEmptyOrNot) {
      this.totalHoursOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
      this.timesheetService.postTimesheet(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursOfEachDate)
        .subscribe(message => {
          this.message = message.response;
          var self = this;
          setTimeout(function () { self.message = ""; }, 2000);

          this.isReadOnlyForTimesheetRow = true;
          this.editButtonVisibility = true;
          this.saveButtonVisibility = false;

          this.addAndEditButtonDisable = true;

          //this.setTimesheetArrayToDefault();
        },
          error => {
            this.message = error;
            var self = this;
            setTimeout(function () { self.message = ""; }, 2000);
          });

    }

  }

  exportToExcel() {

    let valueIsEmptyOrNot: boolean = this.checkForEmptyData();

    if (valueIsEmptyOrNot) {
      this.totalHoursOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
      //this.checkForEmptyData();
      this.constantService.showLoader();

      this.timesheetService.exportToExcel(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursOfEachDate)
        .subscribe(message => {
          this.message = message.response;
          var self = this;
          setTimeout(function () {
            self.message = "";
            self.constantService.hideLoader();
          }, 2000);

          try {
            window.open(`${environment.baseUrl}` + "downloadexcelsheet", "_parent");
            window.close();
          }
          catch (e) {
            this.message = e;
            var self = this;
            setTimeout(function () { self.message = ""; }, 2000);
          }

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



  setTimesheetArrayToDefault() {
    this.firstDateTotal = '';
    this.secondDateTotal = '';
    this.thirdDateTotal = '';
    this.fourthDateTotal = '';
    this.fifthDateTotal = '';
    this.sixthDateTotal = '';
    this.seventhDateTotal = '';
    this.timesheetArray = [];
    this.tasks = new WeeklyTask('', '', '', '', '', '', '', '', '')
    this.timesheetArray.push(this.tasks);
    this.totalWeeklyHours = '';
  }

  checkNoOfDigitsInHours(event) {
    if (event.target.value > 2 || !(event.keyCode >= 48 && event.keyCode <= 57))
      event.preventDefault();
  }

  checkForEmptyData(): boolean {
    for (var i = 0; i < this.timesheetArray.length; i++) {
      for (var objectKey in this.timesheetArray[i]) {
        if (this.timesheetArray[i].hasOwnProperty(objectKey)) {
          if (this.timesheetArray[i]["taskName"] == '') {
            //$("#validationlabel").show();
            this.mandatoryValidation = true;
            var self = this;
            setTimeout(function () {
              self.mandatoryValidation = false;
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

    // if user get timesheet
    this.addAndEditButtonDisable = false;
  }

 


}
