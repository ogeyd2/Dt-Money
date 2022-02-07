import { Summary } from "../Sumary";
import { Transactions } from "../TransactionsTable";
import { Container } from "./dashboard.styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transactions />
    </Container>
  );
}
