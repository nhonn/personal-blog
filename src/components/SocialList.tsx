import React from "react";
import GitHub from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Linkedin"
        href={`https://linkedin.com/in/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin widths={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 1em;
        }
      `}</style>
    </div>
  );
}
