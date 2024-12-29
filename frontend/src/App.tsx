import NavBar from "./components/Navbar"
import StudentList from "./components/StudentList";
import ActionButton from "./components/ActionButton";
import { useState } from "react";
import AppDrawer from "./components/AppDrawer";
import { Snackbar } from "@mui/material";

export default function App() {

    const [showSelection, setShowSelection] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleToggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    const students = [];

    for (let i = 0; i < 100; i++) {
        students.push({ student_name: `student_name ${i}`, student_id: `student_id ${i}`, school_name: `school_name ${i}`, guardian_name: ` guardian_name${i}`, mob_number: `mob_num${i}`, grade: "grade" + i });

    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    }}>
        <AppDrawer isOpen={isOpen} onClickDrawer={() => {
            handleToggleDrawer();
        }} />
        <NavBar onClickMenuIcon={handleToggleDrawer} />
        <StudentList selectionMode={showSelection} students={students} />
        <ActionButton onClickActionButton={(e: string) => {
            if (e == "Check")
                setShowSelection(true);
            else {
                setShowSnackbar(true);
                setShowSelection(false);
            }
        }} />
        <Snackbar  message="Attendance Submitted Successfully" open={showSnackbar} autoHideDuration={1000} onClose={() => setShowSnackbar(!showSnackbar)}>
        </Snackbar>
    </div>
}