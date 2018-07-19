package io.javabrains.springbootstarter.util;

import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.Timesheet;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.ClassPathResource;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class ExcelService {

    private static final String excelSheetName = "WeeklyTimesheet.xlsx";
    private static ArrayList<String> weekArray = new ArrayList<String>();


    public static void createExcelSheet(Timesheet timesheet) {
        try {

            // read a specific excel file from project
            FileInputStream excelFile = new FileInputStream(new ClassPathResource(excelSheetName).getFile());

            // get workbook from that particular excel file
            Workbook workbook = new XSSFWorkbook(excelFile);

            // get first sheet from workbook
            Sheet generatedSheet = workbook.getSheetAt(0);

            // get row of resource name
            Row getResourceNameRow = generatedSheet.getRow(2);

            // get cell of a Resource Name
            Cell resourceNameCell = getResourceNameRow.getCell(1);
            resourceNameCell.setCellValue(timesheet.getUser().getUserName());

            // row of a client ie TFA
            Row getClientRow = generatedSheet.getRow(3);

            //get cell of a Client Name
            Cell clientCell = getClientRow.getCell(1);
            clientCell.setCellValue("Teach For America");

            // get row of a week
            Row getWeekRow = generatedSheet.getRow(4);

            // get cell of a week
            Cell getWeekCell = getWeekRow.getCell(1);
            getWeekCell.setCellValue(timesheet.getStartDate() + "-" + timesheet.getEndDate());

            // arrange dates in different cells of a row
//            Row getDatesRow = generatedSheet.getRow(6);
//            for (int j = 5; j < 12; j++) {
//                Cell DatesCell = getDatesRow.getCell(j);
//                if(DatesCell == null) {
//                    //do something with an empty cell
//                    continue;
//                }
//                //your logic
//            }


            int i=8;
            for(Task t: timesheet.getTasks()){
                Row row = generatedSheet.getRow(i);
                int j=1;
                while(j<10){
                    Cell cell = row.getCell(j);
                    cell.setCellValue(t.getTaskName()+" ( " + t.getTaskDescription());
                    j=j+3;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDayOneHours());
                    j++;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDayTwoHours());
                    j++;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDayThreeHours());
                    j++;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDayFourHours());
                    j++;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDayFiveHours());
                    j++;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDaySixHours());
                    j++;
                    cell = row.getCell(j);
                    cell.setCellValue(t.getDaySevenHours());
                }
                i++;
            }

            // get row for project managerName
            Row getProjectManagerRow = generatedSheet.getRow(21);

            // get cell of a project manager
            Cell getProjectManagerNameCell = getProjectManagerRow.getCell(1);
            getProjectManagerNameCell.setCellValue(timesheet.getUser().getManagerEmail());


            // get row for client manager name
            Row getClientManagerNameRow = generatedSheet.getRow(24);

            // get cell of a client manager name
            Cell getClientManagerNameCell = getClientManagerNameRow.getCell(1);
            getClientManagerNameCell.setCellValue(timesheet.getUser().getClientEmail());



            FileOutputStream outputStream = new FileOutputStream("WeeklyTimesheet.xlsx");
            workbook.write(outputStream);
            workbook.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


//    public void getCompleteWeek(String startDate)  {
//        //06/07/2018
//        //String startDate = startDate;
//        System.out.println("Date we get:" + timesheet.getStartDate());
//        weekArray.add(timesheet.getStartDate());
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
//        Calendar c = Calendar.getInstance();
//        try {
//            c.setTime(sdf.parse(timesheet.getStartDate()));
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//
//        for (int i = 0; i < 7; i++) {
//            c.add(Calendar.DAY_OF_MONTH, 1);
//            String val = sdf.format(c.getTime());
//            weekArray.add(val);
//            i++;
//        }
//
//    }
}