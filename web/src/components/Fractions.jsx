import React from "react";
import data from "../data/space_data";
import {
  Card,
  CardBody,
  CardContent,
  Headline2,
  Row,
  Body2,
  Col,
  Headline1,
  Headline3,
} from "@sberdevices/plasma-ui";

const Fractions = ({ dispatch }) => {
  const pushOnKeyDown = (e, id) => {
    if (["Enter", "Space"].includes(e.code))
      dispatch({ type: "push_page", data: id });
  };
  return (
    <>
      <Headline2>Планеты земной группы</Headline2>
      <Row className="main-row">
        {data.slice(0, 4).map((planet, i) => (
          <React.Fragment key={i}>
            <Col size={2} className="grid--custom">
              <Card
                onClick={() => dispatch({ type: "push_page", data: planet.id })}
                onKeyDown={(e) => pushOnKeyDown(e, planet.id)}
                style={{ width: "100%" }}
                className="card-planet"
                tabIndex={0}
                outlined={true}
                scaleOnFocus={true}
              >
                {planet.icon}
                <CardBody className="card-planet__body">
                  <CardContent cover={true}>
                    <Headline3 className="card-planet__name">
                      {planet.name}
                    </Headline3>
                  </CardContent>
                </CardBody>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>

      <Headline2 mt="12x">Планеты гиганты</Headline2>
      <Row className="main-row">
        {data.slice(4).map((planet, z) => (
          <React.Fragment key={z}>
            <Col size={2} className="grid--custom">
              <Card
                onClick={() => dispatch({ type: "push_page", data: planet.id })}
                onKeyDown={(e) => pushOnKeyDown(e, planet.id)}
                style={{ width: "100%" }}
                className="card-planet"
                tabIndex={0}
                outlined={true}
                scaleOnFocus={true}
              >
                {planet.icon}
                <CardBody className="card-planet__body">
                  <CardContent cover={true}>
                    <Headline3 className="card-planet__name">
                      {planet.name}
                    </Headline3>
                  </CardContent>
                </CardBody>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </>
  );
};

export default Fractions;
