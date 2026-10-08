import React from "react";
import { LuMail } from "react-icons/lu";
import { PanelFrame } from "./Drawings";
import { Plate } from "./ui/Ui";
import { person, services } from "../content";

/* The client's door, set as the paper's classifieds page: one ruled sheet,
   run-in capital leads, ads as long as their copy, and a boxed "Wanted" ad
   that holds the whole right column and carries the action. */
export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <header className="paper-head">
          <h2 id="services-title">What I can build for you</h2>
          <p className="section-note">classifieds</p>
        </header>
        <div className="classified-sheet">
          <PanelFrame seed={30} weight={3} />
          <div className="classified-cols">
            {services.map((service) => (
              <p className="classified" key={service.title}>
                <strong className="classified-lead">{service.title}.</strong> {service.parts.join(" · ")}.
              </p>
            ))}
            <div className="classified classified--wanted">
              <PanelFrame seed={40} weight={3} />
              <p className="wanted-head" aria-hidden="true">
                Wanted
              </p>
              <p>
                <strong className="classified-lead">
                  <span className="visually-hidden">Wanted: </span>Tedious processes.
                </strong>{" "}
                Will automate. Agents, integrations and web apps, built end to end.
              </p>
              <Plate href={`mailto:${person.email}`} tone="email">
                <LuMail aria-hidden="true" /> Email Regor
              </Plate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
