import { useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import {
  HistoryCard,
  HistoryContents1,
  HistoryContents2,
  HistoryContents3,
} from "@/contents";

const historyCard = HistoryCard;

// TODO 全体的に見直し要
// データの持ち方やuseStateなどなど
const MainHistory = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const handleModalOpen1 = () => setModalOpen1(true);
  const handleModalClose1 = () => setModalOpen1(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const handleModalOpen2 = () => setModalOpen2(true);
  const handleModalClose2 = () => setModalOpen2(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const handleModalOpen3 = () => setModalOpen3(true);
  const handleModalClose3 = () => setModalOpen3(false);
  return (
    /* 幅変化指定 上下marginの指定 */
    <Container sx={{ mt: 3, mb: 3 }}>
      <Container maxWidth="md">
        <Card>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" p={1}>
              転職を考えた理由
            </Typography>
            <Typography variant="inherit" color="textSecondary" paragraph>
              これまでの活動内容と
              <br />
              転職に至るまでの経緯を説明します
            </Typography>
          </Paper>
        </Card>
      </Container>
      <Container maxWidth="md">
        <Grid container mt={5} mb={5} spacing={2}>
          {/* 経緯部分1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "6",
              }}
            >
              <CardMedia
                component="img"
                src={"/image/historyImage1.jpg"}
                alt={"historyImage1"}
              />
              <CardContent>
                <Typography variant="h5" color="primary">
                  {historyCard[0].title}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {historyCard[0].explain}
                </Typography>
                <Button
                  color="secondary"
                  onClick={() => handleModalOpen1()}
                  sx={{ mt: 3, mb: 2 }}
                >
                  詳細
                </Button>
              </CardContent>
            </Card>
            {/* モーダル部分 */}
            <Modal open={modalOpen1} onClose={() => handleModalClose1()}>
              <Container
                maxWidth={"sm"}
                sx={{
                  width: "80%",
                  height: "80%",
                  mt: 10,
                  overflow: "scroll",
                  backgroundColor: "white",
                  border: "thick double #32a1ce",
                }}
              >
                <HistoryContents1 />
              </Container>
            </Modal>
          </Grid>
          {/* 経緯部分2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "6",
              }}
            >
              <CardMedia
                component="img"
                src={"/image/historyImage2.jpg"}
                alt={"historyImage2"}
              />
              <CardContent>
                <Typography variant="h5" color="primary">
                  {historyCard[1].title}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {historyCard[1].explain}
                </Typography>
                <Button color="secondary" onClick={() => handleModalOpen2()}>
                  詳細
                </Button>
                {/* モーダル部分 */}
                <Modal open={modalOpen2} onClose={() => handleModalClose2()}>
                  <Container
                    maxWidth={"sm"}
                    sx={{
                      width: "80%",
                      height: "75%",
                      mt: 10,
                      overflow: "scroll",
                      backgroundColor: "white",
                      border: "thick double #32a1ce",
                    }}
                  >
                    <HistoryContents2 />
                  </Container>
                </Modal>
              </CardContent>
            </Card>
          </Grid>
          {/* 経緯部分3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "6",
              }}
            >
              <CardMedia
                component="img"
                src={"/image/historyImage3.jpg"}
                alt={"historyImage3"}
              />
              <CardContent>
                <Typography variant="h5" color="primary">
                  {historyCard[2].title}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {historyCard[2].explain}
                </Typography>
                <Button color="secondary" onClick={() => handleModalOpen3()}>
                  詳細
                </Button>
                {/* モーダル部分 */}
                <Modal open={modalOpen3} onClose={() => handleModalClose3()}>
                  <Container
                    maxWidth={"sm"}
                    sx={{
                      width: "80%",
                      height: "60%",
                      mt: 10,
                      overflow: "scroll",
                      backgroundColor: "white",
                      border: "thick double #32a1ce",
                    }}
                  >
                    <HistoryContents3 />
                  </Container>
                </Modal>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default MainHistory;
