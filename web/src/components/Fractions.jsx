import React from "react";
import data from "../data/data";
import {
  Card,
  CardBody,
  CardContent,
  Headline2,
  Row,
  Body2,
  Col,
} from "@sberdevices/plasma-ui";

const Fractions = ({ dispatch }) => {
  const pushOnKeyDown = (e, id) => {
    if (["Enter", "Space"].includes(e.code))
      dispatch({ type: "push_page", data: id });
  };
  return (
    <>
      <Headline2>Основные фракции</Headline2>
      <Row className="main-row">
        {data.slice(0, 4).map((fraction, i) => (
          <React.Fragment key={i}>
            <Col size={2} className="grid--custom">
              <Card
                onClick={() =>
                  dispatch({ type: "push_page", data: fraction.id })
                }
                onKeyDown={(e) => pushOnKeyDown(e, fraction.id)}
                style={{ width: "100%" }}
                className="card-fraction"
                tabIndex={0}
                outlined={true}
                scaleOnFocus={true}
              >
                <CardBody className="card-fraction__body">
                  <CardContent cover={true}>{fraction.icon}</CardContent>
                </CardBody>
              </Card>
              <Body2 className="card-fraction__name">{fraction.name}</Body2>
            </Col>
          </React.Fragment>
        ))}
      </Row>

      <Headline2 mt="12x">Дополнительные фракции</Headline2>
      <Row className="main-row">
        {data.slice(4).map((fraction, z) => (
          <React.Fragment key={z}>
            <Col size={2} className="grid--custom">
              <Card
                onClick={() =>
                  dispatch({ type: "push_page", data: fraction.id })
                }
                onKeyDown={(e) => pushOnKeyDown(e, fraction.id)}
                style={{ width: "100%" }}
                className="card-fraction"
                tabIndex={0}
                outlined={true}
                scaleOnFocus={true}
              >
                <CardBody className="card-fraction__body">
                  <CardContent cover={true}>{fraction.icon}</CardContent>
                </CardBody>
              </Card>
              <Body2 className="card-fraction__name">{fraction.name}</Body2>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </>
  );
};

export default Fractions;
