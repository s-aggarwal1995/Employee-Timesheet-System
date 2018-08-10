package io.javabrains.springbootstarter.controller;

import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import io.javabrains.springbootstarter.model.ConditionalTimesheet;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.apache.poi.util.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
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


    /**
     * programming to interfaces, using ifc as a reference variable
     */
    @Autowired
    TimesheetServiceIfc timesheetService;

//    @Value("${path}")
//    private String path;

    //post user data
    @RequestMapping(value="/postuser",method=RequestMethod.POST)
    public String setUsersData(@RequestBody User user) {
        timesheetService.setUserData(user);
        return "{\"response\":\"user successfully registered\"}";
    }

    //update project manager name
    @RequestMapping(value="/updateprojectmanagername",method=RequestMethod.POST)
    public String updateProjectManagerName(@RequestBody User user) {
        timesheetService.setUserData(user);
        return "{\"response\":\"Project Manager Name Successfully Updated\"}";
    }

    // update client manager name
    @RequestMapping(value="/updateclientmanagername",method=RequestMethod.POST)
    public String updateClientManagerName(@RequestBody User user) {
        timesheetService.setUserData(user);
        return "{\"response\":\"Client Manager Name Successfully Updated\"}";
    }

    // add stakeholder email
    @RequestMapping(value="/addstakeholderemail",method=RequestMethod.POST)
    public String addStakeholderEmail(@RequestBody User user) {
        timesheetService.setUserData(user);
        return "{\"response\":\"StakeholderEmail is successfully Added\"}";
    }

    // delete stakeholder email
    @RequestMapping(value="/deletestakeholderemail",method=RequestMethod.POST)
    public String deleteStakeholderEmail(@RequestBody User user) {
        timesheetService.setUserData(user);
        return "{\"response\":\"StakeholderEmail is successfully Deleted\"}";
    }

    // get all users
    @RequestMapping("/getusers")
    public List<User> getUsersData() {
        return timesheetService.getUsersData();
    }


    // post timesheet
    @RequestMapping(value="/posttimesheetdata",method=RequestMethod.POST)
    public String setTimesheet(@RequestBody Timesheet timesheet)
    {
       return timesheetService.addTimesheet(timesheet);

    }

    // get Timesheets according to required conditions
    @RequestMapping(value="/gettimesheetifpresent",method=RequestMethod.POST)
    public Timesheet getTimesheetsAccordingToWeek(@RequestBody ConditionalTimesheet conditionalTimesheet){
        return timesheetService.getTimesheetsAccordingToWeek(conditionalTimesheet.getStartDate(),conditionalTimesheet.getUser());
    }


    //export to excel
    @RequestMapping(value="/exporttoexcel",method=RequestMethod.POST)
    public String exportToExcel(@RequestBody Timesheet timesheet)
    {
        timesheetService.exportToExcel(timesheet);
        return "{\"response\":\"ExcelSheet is Successfully Created\"}";
    }

    // get all timesheets
    @RequestMapping(value="/gettimesheets")
    public List<Timesheet> getTimesheet()
    {

        return timesheetService.getTimesheets();
    }

    // get taskData
    @RequestMapping("/gettasksdata")
    public List<TaskData> getTasksData()
    {
        return timesheetService.getTasksData();
    }

    @RequestMapping("/downloadexcelsheet")
    public void index(HttpServletRequest request, HttpServletResponse response,Timesheet timesheet) throws IOException {
        File file = new File("poi-generated-file.xlsx");
        FileInputStream inputStream = new FileInputStream(file);

        int n = timesheetService.getExcelGeneratedUser().getStartDate().lastIndexOf("/");
        String year = timesheetService.getExcelGeneratedUser().getStartDate().substring(n + 1);


        response.setHeader("Content-Disposition", "attachment; filename=\"WeeklyTimesheet\"" + "_"+ timesheetService.getExcelGeneratedUser().getUser().getUserName() + "_" + timesheetService.getExcelGeneratedUser().getDates().get(0) + "-" + year + ".xlsx");
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);

        ServletOutputStream outputStream = response.getOutputStream();
        IOUtils.copy(inputStream, outputStream);

        outputStream.close();
        inputStream.close();

    }

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public RedirectView redirectWithUsingRedirectView( RedirectAttributes attributes) {

            attributes.addFlashAttribute("flashAttribute", "redirectWithRedirectView");
            attributes.addAttribute("attribute", "redirectWithRedirectView");
            return new RedirectView("redirect:/forward");
    }


}
