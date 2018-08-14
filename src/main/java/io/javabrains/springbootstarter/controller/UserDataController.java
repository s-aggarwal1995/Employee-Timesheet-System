package io.javabrains.springbootstarter.controller;

import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import io.javabrains.springbootstarter.model.ConditionalTimesheet;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.apache.poi.util.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserDataController implements UserDataControllerIfc{


    /*
     * programming to interfaces, using ifc as a reference variable
     */

    @Autowired
    TimesheetServiceIfc timesheetService;

    private static final Logger logger = LoggerFactory.getLogger(UserDataController.class);

    //post user data
    @RequestMapping(value="/postuser",method=RequestMethod.POST)
    public String setUsersData(@RequestBody User user) {

        try {
            logger.info("Enter The Post User Function");
            timesheetService.setUserData(user);
            logger.info("Exit The Post User Function");
            return "{\"response\":\"user successfully registered\"}";

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At The Post User Function");
            return null;
        }

    }

    //update project manager name
    @RequestMapping(value="/updateprojectmanagername",method=RequestMethod.POST)
    public String updateProjectManagerName(@RequestBody User user) {


        try {
            logger.info("Enter The Update Project Manager Name Function");
            timesheetService.setUserData(user);
            logger.info("Exit The Update Project Manager Name Function");
            return "{\"response\":\"Project Manager Name Successfully Updated\"}";

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Update Project Manager Name Function");
            return null;
        }

    }

    // update client manager name
    @RequestMapping(value="/updateclientmanagername",method=RequestMethod.POST)
    public String updateClientManagerName(@RequestBody User user) {

        try {
            logger.info("Enter The Update Client Manager Name Function");
            timesheetService.setUserData(user);
            logger.info("Exit The Update Client Manager Name Function");
            return "{\"response\":\"Client Manager Name Successfully Updated\"}";

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Update Client Manager Name Function");
            return null;
        }
    }


    // add stakeholder email
    @RequestMapping(value="/addstakeholderemail",method=RequestMethod.POST)
    public String addStakeholderEmail(@RequestBody User user) {

        try {
            logger.info("Enter The Add Stakeholder Function");
            timesheetService.setUserData(user);
            logger.info("Exit The Add Stakeholder Function");
            return "{\"response\":\"StakeholderEmail is successfully Added\"}";

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Add Stakeholder Function");
            return null;
        }

    }

    // delete stakeholder email
    @RequestMapping(value="/deletestakeholderemail",method=RequestMethod.POST)
    public String deleteStakeholderEmail(@RequestBody User user) {

        try {
            logger.info("Enter The Delete StakeHolder Function");
            timesheetService.setUserData(user);
            logger.info("Exit The Delete StakeHolder Function");
            return "{\"response\":\"StakeholderEmail is successfully Deleted\"}";

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Delete Stakeholder Email Function");
            return null;
        }

    }


    // get all users
    @RequestMapping("/getusers")
    public List<User> getUsersData() {

        try {
            logger.info("Enter The GetUsers Function");
            return timesheetService.getUsersData();
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At GetUsers Function");
            return null;
        }

    }


    // post timesheet
    @RequestMapping(value="/posttimesheetdata",method=RequestMethod.POST)
    public String setTimesheet(@RequestBody Timesheet timesheet)
    {

        try {
            logger.info("Enter The post Timesheet Function");
            return timesheetService.addTimesheet(timesheet);

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At post Timesheet Function");
            return null;
        }

    }

    // get Timesheets according to specified user and date
    @RequestMapping(value="/gettimesheetifpresent",method=RequestMethod.POST)
    public Timesheet getTimesheetsAccordingToWeek(@RequestBody ConditionalTimesheet conditionalTimesheet){

        try {
            logger.info("Enter The Specified User Timesheet Function");
            return timesheetService.getTimesheetsAccordingToWeek(conditionalTimesheet.getStartDate(),conditionalTimesheet.getUser());

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Specified User Timesheet Function");
            return null;
        }

    }


    //export to excel
    @RequestMapping(value="/exporttoexcel",method=RequestMethod.POST)
    public String exportToExcel(@RequestBody Timesheet timesheet)
    {
        try {
            logger.info("Enter The Generate ExcelSheet Function");
            timesheetService.exportToExcel(timesheet);
            logger.info("Exit From The Generate ExcelSheet Function");
            return "{\"response\":\"ExcelSheet is Successfully Created\"}";
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Generate ExcelSheet Function");
            return null;
        }
    }


    // get all timesheets
    @RequestMapping(value="/gettimesheets")
    public List<Timesheet> getTimesheet()
    {

        try {
            logger.info("Enter The Get Timesheeets Data");
            return timesheetService.getTimesheets();
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Get Timesheets Function");
            return null;
        }
    }


    // get taskData
    @RequestMapping("/gettasksdata")
    public List<TaskData> getTasksData()
    {
        try {
            logger.info("Enter The Get Task Data");
            return timesheetService.getTasksData();

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Download ExcelSheet Function");
            return null;

        }

    }


    // for downloading excelsheet
    @RequestMapping("/downloadexcelsheet")
    public void downloadExcelSheet(HttpServletRequest request, HttpServletResponse response,Timesheet timesheet) throws IOException {

        try {

            logger.info("Enter in the Download ExcelSheet Function");

            File file = new File("poi-generated-file.xlsx");
            FileInputStream inputStream = new FileInputStream(file);

            logger.info("ExcelSheet Read ie Poi-Generated-Excel");

            int n = timesheetService.getExcelGeneratedUser().getStartDate().lastIndexOf("/");
            String year = timesheetService.getExcelGeneratedUser().getStartDate().substring(n + 1);


            response.setHeader("Content-Disposition", "attachment; filename=\"WeeklyTimesheet\"" + "_" + timesheetService.getExcelGeneratedUser().getUser().getUserName() + "_" + timesheetService.getExcelGeneratedUser().getDates().get(0) + "-" + year + ".xlsx");
            response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);

            ServletOutputStream outputStream = response.getOutputStream();
            IOUtils.copy(inputStream, outputStream);

            outputStream.close();
            inputStream.close();

            logger.info("Exit From The Download ExcelSheet Function");

        }
        catch(Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Download ExcelSheet Function");
        }

    }

    // for mapping with the wrong url
    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public RedirectView redirectWithUsingRedirectView( RedirectAttributes attributes) {



        try {
            logger.info("Enter The Redirect View Function ");
            attributes.addFlashAttribute("flashAttribute", "redirectWithRedirectView");
            attributes.addAttribute("attribute", "redirectWithRedirectView");
            logger.info(" ");
            return new RedirectView("redirect:/forward");

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Redirect View Function");
            return null;

        }
    }


}
