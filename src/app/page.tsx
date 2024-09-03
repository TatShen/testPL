import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/Components/Container/Container";
import PaginationContainer from "@/Components/PaginationContainer/PaginationContainer";

export default function  Home () {
  return (
    <Container>
      <PaginationContainer/>
    </Container>
  );
}
