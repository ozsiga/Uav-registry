import React, { useState } from "react";
import UavCard from "../uav-card/uav-card";
import { Link } from "react-router-dom";

const UavList = ({ uavs }) => {
  const [searchName, setSearchName] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchByCountry, setSearchByCountry] = useState("");
  const [selectByCountry, setSelectByCountry] = useState("");
  const [selectByType, setSelectByType] = useState("");
  const [selectByUsage, setSelectByUsage] = useState("");
  const [orderByName, setOrderByName] = useState("");
  const [filterByMinHeight, setFilterByMinHeight] = useState("");
  const [filterByMaxHeight, setFilterByMaxHeight] = useState("");
  const [filterByMinCelsius, setFilterByMinCelsius] = useState("");
  const [filterByMaxCelsius, setFilterByMaxCelsius] = useState("");

  let originalUavs = uavs;

  const handleName = e => {
    setSearchName(e.target.value);
  };

  const handleManufacturer = e => {
    setSearchManufacturer(e.target.value);
  };

  const handleByCountry = e => {
    setSearchByCountry(e.target.value);
  };

  const handleSelectCountry = e => {
    setSelectByCountry(e.target.value);
  };

  const handleSelectType = e => {
    setSelectByType(e.target.value);
  };

  const handleSelectUsage = e => {
    setSelectByUsage(e.target.value);
  };

  const handleOrderByName = e => {
    setOrderByName(e.target.value);
  };

  const handleMinHeight = e => {
    setFilterByMinHeight(e.target.value);
  };

  const handleMaxHeight = e => {
    setFilterByMaxHeight(e.target.value);
  };

  const handleMinCelsius = e => {
    setFilterByMinCelsius(e.target.value);
  };

  const handleMaxCelsius = e => {
    setFilterByMaxCelsius(e.target.value);
  };

  const returnCountry = () => {
    const type = uavs.map(uav => uav.Származási_ország);
    const uniqueType = [...new Set(type)];
    return uniqueType.map((type, index) => (
      <option value={type} key={index}>
        {type}
      </option>
    ));
  };

  const returnType = () => {
    const type = uavs.map(uav => uav.Típus);
    const uniqueType = [...new Set(type)];
    return uniqueType.map((type, index) => (
      <option value={type} key={index}>
        {type}
      </option>
    ));
  };

  const returnUsage = () => {
    const type = uavs.map(uav => uav.Alkalmazás);
    const uniqueType = [...new Set(type)];
    return uniqueType.map((type, index) => (
      <option value={type} key={index}>
        {type}
      </option>
    ));
  };

  if (searchName) {
    uavs = uavs.filter(uav =>
      uav.Modell.toLowerCase().includes(searchName.toLowerCase())
    );
  }
  if (searchManufacturer) {
    uavs = uavs.filter(uav =>
      uav.Gyártó.toLowerCase().includes(searchManufacturer.toLowerCase())
    );
  }
  if (searchByCountry) {
    uavs = uavs.filter(uav =>
      uav.Származási_ország.toLowerCase().includes(
        searchByCountry.toLowerCase()
      )
    );
  }
  if (selectByCountry) {
    selectByCountry === "Összes"
      ? (uavs = originalUavs)
      : (uavs = uavs.filter(uav => uav.Származási_ország === selectByCountry));
  }
  if (selectByType) {
    selectByType === "Összes"
      ? (uavs = originalUavs)
      : (uavs = uavs.filter(uav => uav.Típus === selectByType));
  }
  if (selectByUsage) {
    selectByUsage === "Összes"
      ? (uavs = originalUavs)
      : (uavs = uavs.filter(uav => uav.Alkalmazás === selectByUsage));
  }
  if (orderByName === "inc") {
    uavs = uavs.sort((a, b) => (a.Modell > b.Modell ? 1 : -1));
  } else {
    uavs = uavs.sort((a, b) => (b.Modell - a.Modell ? 1 : -1));
  }
  if (filterByMinCelsius) {
    uavs = uavs.filter(uav => {
      if (uav.Minimum_működési_hőmérséklet !== "") {
        return parseInt(uav.Minimum_működési_hőmérséklet) >= filterByMinCelsius;
      }
    });
  }
  if (filterByMaxCelsius) {
    uavs = uavs.filter(uav => {
      if (uav.Maximum_működési_hőmérséklet !== "") {
        return parseInt(uav.Maximum_működési_hőmérséklet) <= filterByMaxCelsius;
      }
    });
  }
  if (filterByMinHeight) {
    uavs = uavs.filter(uav => {
      if (uav.Maximális_repülési_magasság_m !== null) {
        return uav.Maximális_repülési_magasság_m >= filterByMinHeight;
      }
    });
  }
  if (filterByMaxHeight) {
    uavs = uavs.filter(uav => {
      if (uav.Maximális_repülési_magasság_m !== null) {
        return uav.Maximális_repülési_magasság_m <= filterByMaxHeight;
      }
    });
  }

  return (
    <>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline is-centered">
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Terméknév
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={searchName}
                      onChange={handleName}
                      placeholder="Keresés"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Gyártó
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={searchManufacturer}
                      onChange={handleManufacturer}
                      placeholder="Keresés"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Gyártó ország
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={searchByCountry}
                      onChange={handleByCountry}
                      placeholder="Keresés"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Gyártó ország
                  </label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={selectByCountry}
                        onChange={handleSelectCountry}
                      >
                        <option value="Összes">Összes</option>
                        {returnCountry()}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Típus
                  </label>
                </div>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select value={selectByType} onChange={handleSelectType}>
                      <option value="Összes">Összes</option>
                      {returnType()}
                    </select>
                  </div>
                </div>
              </div>

              <div className="column is-one-third">
                <div className="field">
                  <div className="field">
                    <label className="label is-medium has-text-white">
                      Repülési magasság
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="number"
                          placeholder="Min"
                          value={filterByMinHeight}
                          onChange={handleMinHeight}
                        />
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="number"
                          placeholder="Max"
                          value={filterByMaxHeight}
                          onChange={handleMaxHeight}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Alkalmazás
                  </label>
                </div>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select value={selectByUsage} onChange={handleSelectUsage}>
                      <option value="Összes">Összes</option>
                      {returnUsage()}
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label is-medium has-text-white">
                    Rendezés
                  </label>
                </div>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      id="selectOrder"
                      value={orderByName}
                      onChange={handleOrderByName}
                    >
                      <option value="Összes">Összes</option>
                      <option value="inc">Név szerint növekvő</option>
                      <option value="desc">Név szerint csökkenő</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="field">
                  <div className="field">
                    <label className="label is-medium has-text-white">
                      Működési hőmérséklet
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="number"
                          placeholder="Min"
                          value={filterByMinCelsius}
                          onChange={handleMinCelsius}
                        />
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="number"
                          placeholder="Max"
                          value={filterByMaxCelsius}
                          onChange={handleMaxCelsius}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="has-background-grey-lighter"
        style={{ minHeight: "calc(100vh - 325px)" }}
      >
        <div className="container">
          <section className="section">
            <div className="columns is-multiline">
              {uavs &&
                uavs.map((uav, index) => {
                  return (
                    <div key={index} className="column is-one-third">
                      <Link to={`/uav/${uav.id}`}>
                        <UavCard uav={uav} key={uav.id} />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UavList;
