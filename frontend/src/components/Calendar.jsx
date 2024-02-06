import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = ({value, setValue}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                    width: "350px",
                    ".css-dplwbx-MuiPickersCalendarHeader-label": {
                        fontSize: "20px",
                        fontWeight: "bold",
                    },
                    ".css-12mkn7b-MuiButtonBase-root-MuiIconButton-root-MuiPickersCalendarHeader-switchViewButton ": {
                        color: "white",
                    },
                    ".css-sf5j28-MuiButtonBase-root-MuiIconButton-root-MuiPickersCalendarHeader-switchViewButton": {
                        color: "white",
                    },
                    ".css-kg9q0s-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button": {
                        color: "white",
                    },
                    ".css-1nkg345-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button": {
                        color: "white"
                    },
                    ".css-i5q14k-MuiDayCalendar-header ": {
                        marginTop: "5px"
                    },
                    ".css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                        color: "white",
                        fontSize: "15px",
                        margin: "0px 5px",
                        backgroundColor: "#3D3F54",
                        borderRadius: "10px",
                    },
                    ".css-12p2adl-MuiDayCalendar-monthContainer": {
                        padding: "10px"
                    },
                    ".css-1u23akw-MuiButtonBase-root-MuiPickersDay-root": {
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                    },
                    ".css-jgls56-MuiButtonBase-root-MuiPickersDay-root": {
                        color: "white",
                    },
                    ".css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected) ": {
                        border: "1px solid white",
                    }
                }} />
        </LocalizationProvider>
    )
}

export default Calendar