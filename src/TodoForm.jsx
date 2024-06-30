import { ListItem } from "@mui/material"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Create from "@mui/icons-material/Create";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <div>
            <ListItem>
                <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Add Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment : (<InputAdornment position="end">
                            <IconButton aria-label="create todo" edge="end" type="submit">
                                <Create />
                            </IconButton>
                        </InputAdornment>
                        )}}
                    />
                </form>
            </ListItem>
        </div>
    )
}


// <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
            
//             label="Password"
//           />