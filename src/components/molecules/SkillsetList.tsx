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
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "6",
        m: 6,
        p: 6,
      }}
    >
      <Typography variant="h6" color="primary">
        {id === "qualification" && "資格"}
        {id === "front" && "フロントエンド"}
        {id === "back" && "バックエンド"}
        {id === "other" && "その他"}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="15%">技術要素</TableCell>
            <TableCell width="15%">レベル</TableCell>
            <TableCell width="70%">説明</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getSkillContents(id).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.tech}</TableCell>
              <TableCell>
                <Rating defaultValue={row.level} max={3} readOnly />
              </TableCell>
              <TableCell>{row.explain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SkillsetList;
