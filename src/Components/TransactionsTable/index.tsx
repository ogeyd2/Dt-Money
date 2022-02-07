import { useEffect } from "react";
import { api } from "../../Services/api";
import { Container } from "./table.styles";

export function Transactions() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web sites</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>07/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$600,00</td>
            <td>Casa</td>
            <td>16/02/2022</td>
          </tr>

          <tr>
            <td>Mercado</td>
            <td className="withdraw"> - R$600,00</td>
            <td>Compras</td>
            <td>18/02/2022</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Web App em React</td>
            <td className="deposit">R$7.000,00</td>
            <td>Desenvolvimento</td>
            <td>24/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
