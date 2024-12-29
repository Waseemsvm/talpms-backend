import { List } from "@mui/material";
import StudentCard from "./StudentCard";
import Student from "../model/Student";

interface $StudentListSettings {
    students: Student[];
    selectionMode?: boolean
}

export default function StudentList({ students, selectionMode = false }: $StudentListSettings) {
    return (
        <List style={{
            overflow: "auto",
        }}>
            {students.map(student => <StudentCard key={student.student_id} selectMode={selectionMode} studentDetails={new Student(student.student_name, student.student_id, student.school_name, student.guardian_name, student.mob_number, student.grade)} />)}
        </List>
    );
}