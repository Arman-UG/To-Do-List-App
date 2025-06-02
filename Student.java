package PaiEvalutsion;

public class Student {
    private String name;
    private int rollNumber;
    private Course[] courses;


    public Student(String name, int rollNumber, Course[] courses) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.courses = courses;
    }

    public double calculateAverageMarks(){
        int total = 0;
        for(Course c : courses){
            total += c.getMarks();
        }
        return total / (double) courses.length;
    }

    public String CalculateGrade(){
        double avg = calculateAverageMarks();
        if(avg >= 90) return "A";
        else if(avg >= 80) return "B";
        else if(avg >= 70) return "C";
        else if(avg >= 60) return "D";
        else return "F";
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append("Name:").append(name).append("\nRollNo:").append(rollNumber).append("\nCourses:\n");
        for(Course c : courses) {
            sb.append(" ").append(c).append("\n");
        }
        sb.append("Average Marks:").append(calculateAverageMarks()).append("\nGrade:").append(CalculateGrade()).append("\n");
        return sb.toString();
    }
}


