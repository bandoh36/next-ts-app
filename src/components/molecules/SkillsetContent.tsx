import * as React from "react";

import Rating from "@mui/material/Rating";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { SkillContents } from "@/content/content";

export interface MainSkillsetContentProps {
  id: string;
}

const contents = SkillContents;

const getSkillContents = (type: string) => {
  const resultContents = [];
  for (let i = 0; i < contents.length; i++) {
    contents[i].id === type && resultContents.push(contents[i]);
  }
  return resultContents;
};

// TODO 全体的に見直し要
const SkillsetContent = ({ id }: MainSkillsetContentProps) => {
  return (
    <>
      <Typography variant="h6" color="primary">
        {id === "front" && "フロントエンド"}
        {id === "back" && "バックエンド"}
        {id === "other" && "その他"}
      </Typography>
      <Table sx={{ minWidth: "700" }}>
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
    </>
  );
};

export default SkillsetContent;
