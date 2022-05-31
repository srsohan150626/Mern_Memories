import React from "react";
import useStyles from './styles';
import {Card, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";

const Post = ({ post }) => {
    const classes = useStyles();
    return (
       <Card className={classes.card}>
           <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{ post.creator }</Typography>
            </div>
       </Card>
    );
}

export default Post;