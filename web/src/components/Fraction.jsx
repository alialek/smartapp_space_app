import { Footnote1, Headline1, ParagraphText1 } from "@sberdevices/plasma-ui";
import React from "react";

const Fraction = ({ planet }) => {
  return (
    <div className="planet">
      {planet.icon}
      <Headline1 className="planet__subtitle">{planet.name}</Headline1>
      <ParagraphText1 style={{ whiteSpace: "pre-wrap" }}>
        {planet.info.about}
      </ParagraphText1>
      <dl>
        <div>
          {!!planet.info.satellites.length && (
            <>
              <dt>Спутники</dt>
              <span />
              <dd>{planet.info.satellites}</dd>
            </>
          )}
        </div>
        <div>
          <dt>Расстояние от Солнца</dt>
          <span />
          <dd>
            {planet.info.sun_distance[0]} — {planet.info.sun_distance[1]} а.е.
          </dd>
        </div>
        <div>
          <dt>Радиус</dt>
          <span />
          <dd>{planet.info.radius}</dd>
        </div>
        <div>
          <dt>Температура</dt>
          <span />
          <dd>{planet.info.temperature}</dd>
        </div>
        <div>
          <dt>
            Продолжительность суток{" "}
            {planet.id !== "earth" && (
              <Footnote1>относительно земных</Footnote1>
            )}
          </dt>
          <span />
          <dd>{planet.info.day_duration}</dd>
        </div>
        <div>
          <dt>
            Продолжительность года{" "}
            {planet.id !== "earth" && (
              <Footnote1>относительно земного</Footnote1>
            )}
          </dt>
          <span />
          <dd>{planet.info.year_duration}</dd>
        </div>
        {planet.id !== "earth" ? (
          <div>
            <dt>
              Масса <Footnote1>относительно земной</Footnote1>
            </dt>
            <span />
            <dd>{planet.info.mass}</dd>
          </div>
        ) : (
          <div>
            <dt>Масса</dt>
            <span />
            <dd>
              5.9742 × 10<sup>24</sup>кг
            </dd>
          </div>
        )}

        <div>
          <dt>Атмосфера</dt>
          <span />
          <dd>{planet.info.atmosphere}</dd>
        </div>
      </dl>
    </div>
  );
};

export default Fraction;
