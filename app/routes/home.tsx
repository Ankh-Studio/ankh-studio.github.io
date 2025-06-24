import type { Route } from "./+types/home";
import AnkhStudioLanding from "../landing"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ANKH STUIDO" },
    { name: "description", content: "Ankh Studio" },
  ];
}

export default function Home() {
  return <AnkhStudioLanding />;
}
