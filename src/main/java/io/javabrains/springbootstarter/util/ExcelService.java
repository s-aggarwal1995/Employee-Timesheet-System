package io.javabrains.springbootstarter.util;

import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.Timesheet;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

public class ExcelService {

    private static final String excelSheetName = "WeeklyTimesheet.xlsx";
    private static ArrayList<String> weekArray = new ArrayList<String>();

    private static final Logger logger = LoggerFactory.getLogger(ExcelService.class);

//    @Value("${path}")
//    private static String path;ls -ltr



    public static void createExcelSheet(Timesheet timesheet) {
        try {
            logger.info("createExcelSheet method");

            // read a specific excel file from project
            FileInputStream excelFile = new FileInputStream(excelSheetName);

            logger.info(excelFile.toString());


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

             //arrange dates in different cells of a row
           Row getDatesRow = generatedSheet.getRow(6);
           int d=4;
           for(String date : timesheet.getDates()) {
               Cell DatesCell = getDatesRow.getCell(d);
                DatesCell.setCellValue(date);
                d++;
           }


            int i=8;
            for(Task t: timesheet.getTasks()){
                Row row = generatedSheet.getRow(i);
                int j=1;
                while(j<10){
                    Cell cell = row.getCell(j);
                    if(t.getTaskDescription()!="")
                    cell.setCellValue(t.getTaskName()+" ( " + t.getTaskDescription() + " ) ");
                    else cell.setCellValue(t.getTaskName());
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


                // individual date hour sum.
            Row getHoursRow = generatedSheet.getRow(17);
            int th=4;
            for(String eachDate : timesheet.getTotalHoursForEachDate()) {
                    Cell hoursCell = getHoursRow.getCell(th);
                    hoursCell.setCellValue(eachDate);
                    th++;
            }


            // get total weekly hours sum
            Row getTotalWeeklyHours = generatedSheet.getRow(18);
            Cell totalWeeklyHoursCell = getTotalWeeklyHours.getCell(3);
            totalWeeklyHoursCell.setCellValue(timesheet.getTotalWeeklyHours());



            // get row for project managerName
            Row getProjectManagerRow = generatedSheet.getRow(21);

            // get cell of a project manager
            Cell getProjectManagerNameCell = getProjectManagerRow.getCell(1);
            getProjectManagerNameCell.setCellValue("Offshore Consultant's Project Manager's Name :" + timesheet.getUser().getManagerEmail());


            // get row for client manager name
            Row getClientManagerNameRow = generatedSheet.getRow(24);

            // get cell of a client manager name
            Cell getClientManagerNameCell = getClientManagerNameRow.getCell(1);
            getClientManagerNameCell.setCellValue(timesheet.getUser().getClientEmail());

            /// /tmp
            FileOutputStream fileOut = new FileOutputStream("poi-generated-file.xlsx");
            logger.info("fileoutstream"+fileOut.toString());

            workbook.write(fileOut);
            workbook.close();

            logger.info("excel sheet is successfully created.");

        } catch (FileNotFoundException e) {
            e.printStackTrace();
            logger.info("Exception Into The Create Excel Sheet Function In Excel Util Of Type FileNotFoundException");

        } catch (IOException e) {
            e.printStackTrace();
            logger.info("Exception Into The Create Excel Sheet Function In Excel Util Of Type IOException");

        }
        catch (Exception e) {
            e.printStackTrace();
            logger.info("Exception Into The Create Excel Sheet Function In Excel Util Of Type Exception");
        }

    }


}