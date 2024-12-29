import { Card, CardActionArea, Checkbox, Typography } from "@mui/material";
import React from "react";
import Student from "../model/Student";

interface $StudentCardSettings {
    selectMode?: boolean;
    onSelectionChange?: CallableFunction;
    studentDetails: Student
}

export default function StudentCard({ selectMode = true, onSelectionChange, studentDetails }: $StudentCardSettings) {

    let bCheckBoxVisibilityStyle = {
        visibility: selectMode ? "visible" : "hidden",
        width: selectMode ? "42px" : "0",
    } as React.CSSProperties;

    return <Card variant="elevation" style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
    }}>
        <Checkbox style={bCheckBoxVisibilityStyle} onChange={e => {
            onSelectionChange?.(e.target.checked);
        }}></Checkbox>
        <CardActionArea>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(36, 1fr)",
                width: "100%",
            }}>
                <Typography style={{
                    gridRow: "2",
                    gridColumn: "2/30"
                }}>
                    {studentDetails.student_id}
                </Typography>
                <Typography style={{
                    gridRow: "1",
                    gridColumn: "2/20"
                }}>
                    {studentDetails.student_name}
                </Typography>
                <Typography style={{
                    gridRow: "2",
                    gridColumn: "16 / 30"
                }}>
                    {studentDetails.guardian_name}
                </Typography>
            </div>
        </CardActionArea>
    </Card>;
}