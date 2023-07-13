import React from "react";
import { CardContainer, Card, ButtonDetails } from "./style";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";

const PokemonCard = () => {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <Card>
        <ButtonDetails onClick={() => goToPokemonDetail(navigate)}>
          Detalhes
        </ButtonDetails>
      </Card>
    </CardContainer>
  );
};

export default PokemonCard;
