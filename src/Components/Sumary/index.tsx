import { Container } from "./sumary.styles";
import entrada from "../../assets/income.svg";
import saidas from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={entrada} alt="Entradas" />
        </header>
        <strong>R$19.000,00</strong>
      </div>

      <div>
        <header>
          <span>Saidas</span>
          <img src={saidas} alt="Saidas" />
        </header>
        <strong>- R$1200,00</strong>
      </div>

      <div>
        <header>
          <span>Total</span>
          <img src={total} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
