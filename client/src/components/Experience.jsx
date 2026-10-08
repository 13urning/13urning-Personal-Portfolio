import React from "react";
import { LuDownload } from "react-icons/lu";
import { Plate } from "./ui/Ui";
import { about, education, jobs, person } from "../content";

/* The hiring manager's door, set as a newspaper page: a ruled section head,
   then the story so far and every role running down justified columns,
   each with its dateline. */
export default function Experience() {
  return (
    <section className="experience wrap" id="experience" aria-labelledby="experience-title">
      <header className="paper-head">
        <h2 id="experience-title">Experience</h2>
        <p className="section-note">where the parts were made</p>
      </header>
      <div className="dispatch">
        <p className="dispatch-lede">{about}</p>
        {jobs.map((job) => (
          <article className="dispatch-item" key={job.period}>
            <h3>{job.title}</h3>
            <p>
              <span className="dateline">
                {job.org}, {job.period}.
              </span>{" "}
              {job.detail}
            </p>
          </article>
        ))}
        <article className="dispatch-item">
          <h3>{education.title}</h3>
          <p>
            <span className="dateline">
              {education.org}, {education.period}.
            </span>
          </p>
        </article>
      </div>
      <div className="dispatch-foot">
        <Plate href={person.cv} download="Regor-Esconde-CV.pdf">
          <LuDownload aria-hidden="true" /> Download CV
        </Plate>
      </div>
    </section>
  );
}
