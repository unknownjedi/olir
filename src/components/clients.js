import React from "react"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import SectionIndicator from "../reusables/sectionindicator"
import ClienteleBlackImages from "../content/clients"

const ClientsContainer = styled.div`
  background-color: ${cssVariables.$color_primary_white};
  padding: 15px;
  font-family: ${cssVariables.$montserrat_bold};
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1160px;
    margin: 0 auto;
    .client-container {
      margin: 0 15px 40px;
      img {
        width: 250px;
      }
    }
  }
`

const Clients = () => {
  return (
    <ClientsContainer id="clients">
      <SectionIndicator text="Clients" />
      <div className="container">
        {ClienteleBlackImages.map((client, index) => (
          <div
            className="wow bounceInRight animated client-container"
            data-wow-duration="1.5s"
            // data-wow-delays="0.25s"
            key={index}
          >
            <img src={client.image} alt="" />
          </div>
        ))}
      </div>
    </ClientsContainer>
  )
}

export default Clients
