import { IconDone } from "@sberdevices/plasma-icons";
import { accent, colors } from "@sberdevices/plasma-tokens";
import {
  Body2,
  Body3,
  Caption,
  Card,
  CardBody,
  CardContent,
  Col,
  Footnote1,
  ParagraphText1,
} from "@sberdevices/plasma-ui";
import React from "react";

const Fraction = ({ fraction }) => {
  return (
    <div class="fraction">
      {fraction.sections.map((section) => (
        <React.Fragment key={section.title}>
          <Body3 className="fraction__subtitle">{section.title}</Body3>
          {section.type === "scroll" && (
            <div className="d-row wrap">
              {section.content.map((rule) => (
                <Col size={2} className="grid--custom">
                  <Card style={{ width: "100%" }} className="card-fraction">
                    <CardBody className="card-fraction__body white">
                      <CardContent cover={true}>{rule.icon}</CardContent>
                    </CardBody>
                  </Card>
                  <Footnote1 className="card-fraction__name">
                    {rule.name}
                  </Footnote1>
                </Col>
              ))}{" "}
            </div>
          )}
          {(section.type === "checklist" || section.type === "list") &&
            section.content.map((rule) => (
              <div className="checklist">
                {section.type === "checklist" && (
                  <IconDone
                    className="checklist__icon"
                    style={{ marginRight: "8px" }}
                    color={accent}
                  />
                )}
                {section.type === "list" && (
                  <div className="white checklist__icon plastic__icon">
                    {rule.icon}
                  </div>
                )}
                <div className="checklist__text">
                  <Body3>{rule.name}</Body3>
                  <ParagraphText1>{rule.description}</ParagraphText1>
                </div>
              </div>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Fraction;
