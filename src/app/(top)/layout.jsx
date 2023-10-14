import { FooterContent } from "./_components/FooterContent";
import { HeaderContent } from "./_components/HeaderContent";

export default function TopLayout({ children }) {
  return (
    <>
      <HeaderContent />
      <main>{children}</main>
      <FooterContent/>

    </>
  );
}
