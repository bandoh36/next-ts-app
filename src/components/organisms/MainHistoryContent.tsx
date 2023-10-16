import { useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import HistoryHeader from "@/components/molecules/HistoryHeader";
import {
  HistoryContents1,
  HistoryContents2,
  HistoryContents3,
} from "@/components/molecules/HistoryModalContent";
import { HistoryCard } from "@/content/content";
import content from "@/content/content.json";

const historyCard = HistoryCard;

// TODO 全体的に見直し要
// データの持ち方やuseStateなどなど
const MainHistory = () => {
  const historyContent = content.history;
  const [modalOpen1, setModalOpen1] = useState(false);
  const handleModalOpen1 = () => setModalOpen1(true);
  const handleModalClose1 = () => setModalOpen1(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const handleModalOpen2 = () => setModalOpen2(true);
  const handleModalClose2 = () => setModalOpen2(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const handleModalOpen3 = () => setModalOpen3(true);
  const handleModalClose3 = () => setModalOpen3(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    /* 幅変化指定 上下marginの指定 */
    <Container>
      <HistoryHeader />
      <Grid container spacing={4} sx={{ my: 5 }}>
        {/* 経緯部分1 */}
        <Grid item sm={12} md={4}>
          <Card
            sx={{
              height: "100%",
              boxShadow: "6",
            }}
          >
            <CardMedia
              component="img"
              src={historyContent.content[0].src}
              alt={historyContent.content[0].alt}
            />
            <CardContent>
              <Typography variant="h5" color="primary">
                {historyContent.content[0].title}
              </Typography>
              <Typography variant="body1" mt={2}>
                {historyContent.content[0].description}
              </Typography>
              <Button
                color="secondary"
                onClick={() => handleModalOpen1()}
                sx={{ mt: 3 }}
              >
                詳細
              </Button>
            </CardContent>
          </Card>
          {/* モーダル部分 */}
          <Modal open={modalOpen1} onClose={() => handleModalClose1()}>
            <Container
              maxWidth={"md"}
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
        <Grid item sm={12} md={4}>
          <Card
            sx={{
              height: "100%",
              boxShadow: "6",
            }}
          >
            <CardMedia
              component="img"
              src={historyContent.content[1].src}
              alt={historyContent.content[1].alt}
            />
            <CardContent>
              <Typography variant="h5" color="primary">
                {historyContent.content[1].title}
              </Typography>
              <Typography variant="body1" mt={2}>
                {historyContent.content[1].description}
              </Typography>
              <Button
                color="secondary"
                onClick={() => handleModalOpen2()}
                sx={{ mt: 3 }}
              >
                詳細
              </Button>
            </CardContent>
          </Card>
          {/* モーダル部分 */}
          <Modal open={modalOpen2} onClose={() => handleModalClose2()}>
            <Container
              maxWidth={"md"}
              sx={{
                width: "80%",
                height: "80%",
                mt: 10,
                overflow: "scroll",
                backgroundColor: "white",
                border: "thick double #32a1ce",
              }}
            >
              <HistoryContents2 />
            </Container>
          </Modal>
        </Grid>
        {/* 経緯部分3 */}
        <Grid item sm={12} md={4}>
          <Card
            sx={{
              height: "100%",
              boxShadow: "6",
            }}
          >
            <CardMedia
              component="img"
              src={historyContent.content[2].src}
              alt={historyContent.content[2].alt}
            />
            <CardContent>
              <Typography variant="h5" color="primary">
                {historyContent.content[2].title}
              </Typography>
              <Typography variant="body1" mt={2}>
                {historyContent.content[2].description}
              </Typography>
              <Button
                color="secondary"
                onClick={() => handleModalOpen3()}
                sx={{ mt: 3 }}
              >
                詳細
              </Button>
            </CardContent>
          </Card>
          {/* モーダル部分 */}
          <Modal open={modalOpen3} onClose={() => handleModalClose3()}>
            <Container
              maxWidth={"md"}
              sx={{
                width: "80%",
                height: "80%",
                mt: 10,
                overflow: "scroll",
                backgroundColor: "white",
                border: "thick double #32a1ce",
              }}
            >
              <HistoryContents3 />
            </Container>
          </Modal>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainHistory;
