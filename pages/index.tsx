import type { NextPage } from "next";

import { FaturamentoMensal } from "../components/FaturamentoMensal";
import { FaturamentoRegional } from "../components/FaturamentoRegional";
import { Fibonacci } from "../components/Fibonnaci";
import { ReverterString } from "../components/ReverterString";
import { Soma } from "../components/Soma";

const Home: NextPage = () => {
 return (
  <main className="wrapper">
    <Soma/>
    <Fibonacci/>
    <FaturamentoMensal/>
    <FaturamentoRegional/>
    <ReverterString/>
  </main>
 )
}
export default Home;
