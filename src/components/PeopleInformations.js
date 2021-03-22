import React from "react";
import '../App.scss';

export default function PeopleInformations({ data }) {

  return (
    <div className='container-informations'>
          {data.map((people, i) => {
            return (
              <div key={i} className="container-people">
                <h2 className="name">{people.name}</h2>
                <div className="container-information">
                  <p className="properties-title">Height</p>
                  <p className="properties">{people.height}</p>
                </div>
                <div className="container-information">
                  <p className="properties-title">Hair color</p>
                  <p className="properties">{people.hair_color}</p>
                </div>
                <div className="container-information">
                  <p className="properties-title">Skin color</p>
                  <p className="properties">{people.skin_color}</p>
                </div>
              </div>
            )
          })}
    </div>
  );
}
