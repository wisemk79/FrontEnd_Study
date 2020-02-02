package exam;

import java.util.ArrayList;

public class GradeCalculator {
	ArrayList<String> gradesArr = new ArrayList<String>();
	ArrayList<String> studentArr = new ArrayList<String>();
	
	//숫자 버튼을 눌렀을 때 발생하는 이벤트
	String clickAdd(String subject, String grades, String studentGrade) {
		String output = "과목명 = " +  subject + ", 학점 = " + grades + ", 평점 = " + studentGrade + "\n";
		gradesArr.add(grades);
		studentArr.add(studentGrade) ;
		return output;
	}
	
	String gradeCalculation() {
		
		String output;
		double gradeSum = 0;
		double totalGrade = 0;
		for(int i = 0;  i < gradesArr.size(); i++) {
		gradeSum += Double.parseDouble(gradesArr.get(i)) * Double.parseDouble(studentArr.get(i));
		totalGrade += Double.parseDouble(gradesArr.get(i));
		}
		output =(String.format("%.2f", gradeSum / totalGrade));
		return output;
	}
}
