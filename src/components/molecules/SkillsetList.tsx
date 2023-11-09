import * as React from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { SKILLSET_CONTENT } from "@/constant/skillsetConstant";

export interface MainSkillsetContentProps {
  id: string;
}

const skillsetContent = SKILLSET_CONTENT;

const getSkillContents = (type: string) => {
  const resultContents = [];
  for (let i = 0; i < skillsetContent.length; i++) {
    skillsetContent[i].id === type && resultContents.push(skillsetContent[i]);
  }
  return resultContents;
};

const SkillsetList = ({ id }: MainSkillsetContentProps) => {
  return (
    <Box
      sx={{
        width: { xs: "95vw", md: "1100px" },
        maxWidth: { xs: "1200px" },
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "3",
        p: 6,
        mb: 6,
        mx: { xs: 0, md: 6 },
        overflow:"auto"
      }}
    >
      <Box>
        <Typography typography="h6" color="primary">
          {id === "qualification" && "資格"}
          {id === "front" && "フロントエンド"}
          {id === "back" && "バックエンド"}
          {id === "other" && "その他"}
        </Typography>
        <Table>
          <TableHead>
            {id === "qualification" && "資格" ? (
              <TableRow>
                <TableCell width="50%"></TableCell>
                <TableCell width="50%"></TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell width="15%">
                  <Typography typography="Noto2">技術要素</Typography>
                </TableCell>
                <TableCell width="15%">
                  <Typography typography="Noto2">レべル</Typography>
                </TableCell>
                <TableCell width="70%">
                  <Typography typography="Noto2">説明</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {getSkillContents(id).map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Typography typography="Noto3">{row.tech}</Typography>
                </TableCell>
                {id === "qualification" && "資格" ? (
                  <></>
                ) : (
                  <TableCell>
                    <Rating defaultValue={row.level} max={3} readOnly />
                  </TableCell>
                )}
                <TableCell>
                  <Typography typography="Noto3">{row.explain}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default SkillsetList;
