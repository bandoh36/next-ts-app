import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { ProfileContents } from "@/contents";

// TODO 全体的に見直し要
const ProfileContent = () => {
  const post = ProfileContents;

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={4} lg={4}>
        <Paper sx={{ boxShadow: "6" }}>
          <Card>
            <CardMedia
              component="img"
              image={post.image}
              alt={post.imageLabel}
            />
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: "6",
          }}
        >
          {/* プロフィールレイアウト要編集 */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h4" color="primary">
              {post.title}
            </Typography>
            <Typography variant="h6">{<br />}</Typography>
            <Typography variant="h5" paragraph>
              {post.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {post.body1}
              <br />
              {post.body2}
              <br />
              {post.body3}
              <br />
              {post.body4}
              <br />
              {post.body5}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary">
              {post.mail}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              github：
              <Link
                target="_blank"
                href="https://github.com/bandoh36"
                variant="body2"
              >
                {post.github}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileContent;
