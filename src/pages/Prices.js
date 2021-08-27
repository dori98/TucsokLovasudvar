import React from "react"
import Layout from "../components/Layout";
import {graphql, Link} from "gatsby"
import * as styles from "../css/prices.module.css"

const Prices = ({data}) => {
    const {
        futoszar: {nodes: futoszar},
        osztaly: {nodes: osztaly},
        seta: {nodes: seta},
        terep: {nodes: terep},
        kocsi: {nodes: kocsi},
        berlet: {nodes: berlet},
        egyeni: {nodes: egyeni},
        kepzes: {nodes: kepzes},
        szallas: {nodes: szallas},
        bertartas: {nodes: bertartas},

    } = data
    return (
        <Layout>
            <div>
                <div className={styles.pricesPage}>
                    <div className={styles.pricesDiv}>
                        <h3 className={styles.pricesTitle}>Árlista</h3>
                        <div>
                            <h1>Futószár</h1>
                            {futoszar.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Osztály lovaglás</h1>
                            {osztaly.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Sétalovaglás</h1>
                            {seta.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Terep/Túralovaglás*</h1>
                            {terep.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Lovaskocsikázás</h1>
                            {kocsi.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Bérlet**</h1>
                            {berlet.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Egyéni edzés</h1>
                            {egyeni.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.oraTipus}</p>
                                        <p>{f.idotartam}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Lovak képzése</h1>
                            {kepzes.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h1>Lószállás/Bértartás</h1>
                            {szallas.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                            {bertartas.map(f => {
                                return (
                                    <div key={f.id}>
                                        <p>{f.idotartam}</p>
                                        <p>{f.ar}Ft</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Link to={'/Form'}> Jelentkezés lovaglásra</Link>
                    </div>
                    <h2>*csak gyakorlott lovasoknak, a terep és túralovaglás előtt a lovas tudásszintjét felmérjük</h2>
                    <h2>**A bérletek a megváltástól számított 60 napig érvényesek!</h2>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  {
  futoszar: allContentfulArak(filter: {oraTipus: {eq: "Futószár"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam
      }
    },
    osztaly: allContentfulArak(filter: {oraTipus: {eq: "Osztálylovaglás"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam
      }
    },
     seta: allContentfulArak(filter: {oraTipus: {eq: "Sétalovaglás"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam
      }
    },
    terep: allContentfulArak(filter: {oraTipus: {eq: "Terep/Túralovaglás"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam
      }
    },
    kocsi: allContentfulArak(filter: {oraTipus: {eq: "Lovaskocsikázás (max 5fő)"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam

      }
    },
    berlet: allContentfulArak(filter: {oraTipus: {eq: "Bérlet"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam

      }
    },
     egyeni: allContentfulArak(filter: {oraTipus: {eq: "Egyéni edzés"}}) {
      nodes {
           ar
          id
          oraTipus
          idotartam

      }
    },
     kepzes: allContentfulArak(filter: {oraTipus: {eq: "Lovak képzése"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam

      }
    },
     szallas: allContentfulArak(filter: {oraTipus: {eq: "Lószállás"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam
      }
    },
     bertartas: allContentfulArak(filter: {oraTipus: {eq: "Bértartás"}}) {
      nodes {
          ar
          id
          oraTipus
          idotartam

      }
    },
  }
`
export default Prices