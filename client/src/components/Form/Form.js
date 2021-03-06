import React, {useEffect, useState} from "react";
import useStyles from './styles';
import {Button, Paper, TextField, Typography} from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../actions/posts";

const Form = ({ currentID, setCurrentId}) => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const post = useSelector((state) => (currentID ? state.posts.find((post) => post._id === currentID) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentID) {
            dispatch(updatePost(currentID, postData));
        } else{
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }
    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">{currentID ? 'Editing' : 'Creating'} a Memory</Typography>
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
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multitple={false}
                        onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear </Button>
            </form>
        </Paper>
    );
}

export default Form;