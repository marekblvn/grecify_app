import {useState} from "react";
import {Button, Input, Stack, Typography} from "@mui/material";
const transformString = require("grecify");

export default function Converter () {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const handleChangeInput = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }
    const handleSubmitInput = () => {
        const grecified = transformString(input.trim());
        setResult(grecified);
    }
    return (
        <>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
               sx={{
                   margin: "10px",
                   pt: "10px",
               }}
        >
            <Input
                disableUnderline
                multiline
                placeholder="Please enter the text you wish to convert to greek letters..."
                sx={{
                    width: "800px",
                    padding: "10px",
                    backgroundColor: "#B8D8D8",
                    border: "solid 2px #7A9E9F",
                    mt: "10px"
                }}
                inputProps={{
                    sx: {
                        "&::placeholder": {
                            color: "#040505"
                        }
                    },
                    spellCheck: "false"
                }}
                onChange={handleChangeInput}
            />
            <Button variant="outlined"
                    sx={{
                        backgroundColor: "#FE5F55",
                        color: "#FFFFFF",
                        fontWeight: "700",
                        borderColor: "#4F6367",
                        borderRadius: "10px",
                        '&:hover': {
                            backgroundColor: "#FE4134",
                            borderColor: "#FE4134",
                            color: "#FFFFFF",
                            transform: "scale(1.05)"
                        }
                    }}
                    onClick={handleSubmitInput}
            >
                Convert
            </Button>
            <Stack justifyContent="flex-start" alignItems="center">
                {result && <Typography variant="subtitle1" maxWidth="800px" style={{wordWrap: "break-word"}}
                             sx={{color: "#ffffff"}}
                >
                    <Typography component="span" sx={{fontWeight: "700", color: "#EEF5DB"}}>
                        Grecified string: {" "}
                    </Typography>
                    {result}
                </Typography>}
            </Stack>
        </Stack>
            <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={4} sx={{bottom: 0, left: 0, position: "fixed"}}>
                <Typography variant="caption" sx={{bottom: 0, left: 0, position: "fixed", pl: "5px"}}>
                    <Typography variant="caption" component="span" sx={{fontWeight: "700"}}>
                        Note: {" "}
                    </Typography>
                    The conversion is NOT based on actual grammar rules.
                </Typography>
                <Typography variant="caption" sx={{bottom: 0, right: 0, position: "fixed", pr: "5px"}}>
                    © Marek Balvín, 2022
                </Typography>
            </Stack>
            </>
    )
}