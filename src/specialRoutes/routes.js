import protectedHome from "@/components/Protected/protectedHome";
import protectedHomeTwo from "@/components/Protected/protectedHomeTwo";

export default [
  { path: "/", name: "Prot One", component: protectedHome },
  { path: "/protectedHomeTwo", name: "Prot Two", component: protectedHomeTwo }
];
