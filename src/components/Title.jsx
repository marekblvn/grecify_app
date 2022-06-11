import {Stack, Typography} from "@mui/material";

export default function Title () {
    return (
        <Stack sx={{alignItems: "center", justifyContent: "center"}} pt={3} spacing={2}> {/* Title container */}
            <Typography variant="h2" sx={{
                fontFamily: "Dalek Pinpoint, sans-serif",
                color: "#EEF5DB"
            }}>
                Grecify
            </Typography>
            <Typography variant="body" sx={{
                fontFamily: "Tahoma, sans-serif",
                color: "#F8FBEF"
            }}>
                Welcome to Grecify - a latin alphabet to greek alphabet converter.
            </Typography>
        </Stack>
    )
}