package PaiEvalutsion;

public class Course {
    
    private String CourseName;
    private int marks;


    public Course(String CourseName, int marks){
        this.CourseName = CourseName;
        this.marks = marks; 
    }

    public int getMarks(){
        return marks;
    }

    public String toString(){
        return CourseName + " Marks: " + marks;
    }
}
