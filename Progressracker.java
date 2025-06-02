package PaiEvalutsion;

public class Progressracker {
    

    public static void main(String[]args){
        Course[] courses1 = {
            new Course("Math", 85),
            new Course("Science", 90),
            new Course("English", 100)
        };

        Student [] students = new Student[5];
        students[0] = new Student("Alice" ,10, courses1);
        students[1] = new Student("Arman", 1, courses1);
        students[2] = new Student("Mohit", 12, courses1);
        students[3] = new Student("Monu", 11, courses1);
        students[4] = new Student("Laky", 13, courses1);


        for(Student s : students) {
        System.out.println(s);
        System.out.println("---------");
    }
  }
}
