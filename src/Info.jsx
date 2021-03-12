import React from "react";
import "./App.css";
import { BsCode } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { BiGitPullRequest } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
const infoItems = [
  { name: "Code", icon: "<BiCode/>" },
  { name: "Issues", icon: "VscIssues" },
  { name: "Pull requests", icon: "BiGitPullRequest" },
  { name: "Discussions", icon: "GoCommentDiscussion" },
  { name: "Actions", icon: "BiPlayCircle" },
  { name: "Projects", icon: "AiOutlineProject" },
];
export default function Info() {
  return (
    <div className="info-container">
      {infoItems.map((el, index) => (
          <div className={index===1?'item issue':'item'}>
        <div className='info-icons'>
          {index === 0 ? (
            <BsCode />
          ) : index === 1 ? (
            <VscIssues />
          ) : index === 2 ? (
            <BiGitPullRequest />
          ) : index === 3 ? (
            <GoCommentDiscussion />
          ) : index === 4 ? (
            <BiPlayCircle />
          ) : (
            <AiOutlineProject />
          )}
          </div>
          <div className='info-items'>
          {el.name}
        </div></div>
      ))}
    </div>
  );
}
