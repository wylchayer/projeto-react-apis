import React from "react";
import { CardContainer, Card, ButtonDetails } from "./style";

const PokemonCard = (props) => {
  const {setPage} = props
  
  return (
    <CardContainer>
      <Card><ButtonDetails onClick={()=>setPage('detailsPage')} >Detalhes</ButtonDetails></Card>
    </CardContainer>
  );
};

export default PokemonCard;
