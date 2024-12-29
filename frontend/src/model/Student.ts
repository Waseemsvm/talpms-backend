export default class Student {
    public student_name: string;
    public student_id: string;
    public school_name: string;
    public guardian_name: string;
    public mob_number: string;
    public grade: string;
    constructor(student_name: string, student_id: string, school_name: string, guardian_name: string, mob_number: string, grade: string) {
        this.student_name = student_name;
        this.student_id = student_id;
        this.school_name = school_name;
        this.guardian_name = guardian_name;
        this.mob_number = mob_number;
        this.grade = grade;
    }

    public static fetchStudents(): Promise<Student[]> {
        // fetch data from API
        return fetch('api/students')
           .then(response => response.json())
           .then(students => students.map((student: Student) => new Student(student.student_name, student.student_id, student.school_name, student.guardian_name, student.mob_number, student.grade)));
    }

}