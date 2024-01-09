// import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Resumen = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="comentarios"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="comentarios" title="Comentarios"></Tab>
        <Tab eventKey="puntaje" title="Puntaje">
          <div>aaaa</div>
        </Tab>
        <Tab eventKey="ordenarpaginas" title="Ordenar páginas"></Tab>
      </Tabs>
    </div>
  );
};

export default Resumen;
