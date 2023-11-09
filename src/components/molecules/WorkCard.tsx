import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export interface WorkCardProps {
  content: {
    title: string;
    image: { src: string; alt: string };
    description: JSX.Element;
    link: string;
    modalDescription: {
      front: string;
      back: string;
      infra: string;
      source: { text: string; src: string };
      other: JSX.Element;
    };
  };
}

const WorkCard = ({ content }: WorkCardProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "3",
        p: 8,
        mb: 10,
      }}
    >
      <Box
        sx={{
          mb: 5,
        }}
      >
        <Typography typography="Noto1">{content.title}</Typography>
      </Box>
      <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "200px", md: "320px" },
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",
            mr: 8,
          }}
        >
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 5,
          }}
        >
          {content.description}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={handleOpen}>説明を見る</Button>
            {content.link ? (
              <Button target="_blank" href={content.link}>
                サイトに飛ぶ
              </Button>
            ) : (
              <Button disabled>サイトに飛ぶ</Button>
            )}
          </Box>
          <Modal open={open} onClose={handleClose}>
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
              <Box
                sx={{
                  p: 3,
                }}
              >
                <Typography
                  id="modal-modal-title1"
                  variant="h5"
                  fontWeight={"bold"}
                >
                  システム構成
                </Typography>
                <Typography
                  sx={{ mt: 3, ml: 2 }}
                  variant="subtitle1"
                  color="primary"
                  fontSize={17}
                >
                  フロントエンド
                </Typography>
                <Typography sx={{ mt: 1, ml: 3 }} variant="body2" fontSize={13}>
                  {content.modalDescription.front}
                </Typography>
                <Typography
                  sx={{ mt: 3, ml: 2 }}
                  variant="subtitle1"
                  color="primary"
                  fontSize={17}
                >
                  バックエンド
                </Typography>
                <Typography sx={{ mt: 1, ml: 3 }} variant="body2" fontSize={13}>
                  {content.modalDescription.back}
                </Typography>
                <Typography
                  sx={{ mt: 3, ml: 2 }}
                  variant="subtitle1"
                  color="primary"
                  fontSize={17}
                >
                  インフラ
                </Typography>
                <Typography sx={{ mt: 1, ml: 3 }} variant="body2" fontSize={13}>
                  {content.modalDescription.infra}
                </Typography>

                <Typography
                  sx={{ mt: 3, ml: 2 }}
                  variant="subtitle1"
                  color="primary"
                  fontSize={17}
                >
                  ソースコード
                </Typography>
                {content.modalDescription.source.src ? (
                  <Typography
                    sx={{ mt: 1, ml: 3 }}
                    variant="body2"
                    fontSize={13}
                  >
                    <Link
                      target="_blank"
                      href={content.modalDescription.source.src}
                    >
                      {content.modalDescription.source.text}
                    </Link>
                  </Typography>
                ) : (
                  <Typography
                    sx={{ mt: 1, ml: 3 }}
                    variant="body2"
                    fontSize={13}
                  >
                    {content.modalDescription.source.text}
                  </Typography>
                )}
                <Typography
                  sx={{ mt: 5, ml: 2 }}
                  variant="subtitle1"
                  color="primary"
                  fontSize={17}
                >
                  その他
                </Typography>
                {content.modalDescription.other}
              </Box>
            </Container>
          </Modal>
        </Box>
      </Stack>
    </Stack>
  );
};

export default WorkCard;
