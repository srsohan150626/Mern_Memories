import React, {useState} from "react";
import useStyles from './styles';
import {Paper, TextField, Typography} from "@material-ui/core";

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const classes = useStyles();
    const handleSubmit = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
            </form>
        </Paper>
    );
}

export default Form;