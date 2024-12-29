import { Fab } from "@mui/material";
import type { PropTypes } from "@mui/material";
import SmartButton from "@mui/icons-material/SmartButton";
import Check from "@mui/icons-material/Check";
import React, { useState } from "react";

interface $ActionButtonSettings {
    onClickActionButton?: CallableFunction;
}

export default function ActionButton({ onClickActionButton }: $ActionButtonSettings) {

    const [actionIcon, setActionIcon] = useState("SmartButton");

    const iconsMap: { [key: string]: { icon: React.ReactElement, color: PropTypes.Color | "primary" | "success" | "error" | "warning" } } =
    {
        "SmartButton": { icon: <SmartButton />, color: "primary" },
        "Check": { icon: <Check />, color: "success" },
    };

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    return <>
        <Fab sx={fabStyle} color={iconsMap[actionIcon].color} onClick={() => {

            const IconButton = actionIcon === "SmartButton" ? "Check" : "SmartButton";

            onClickActionButton?.(IconButton);
            setActionIcon(IconButton);
        }}>
            {iconsMap[actionIcon].icon}
        </Fab></>
}