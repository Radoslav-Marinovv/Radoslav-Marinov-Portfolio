import Footer from "./Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};
/**
 * A component that displays the main content of the application
 * @param children - the content of the application
 * @returns - the main content of the application
 */
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className="flex flex-col gap-8">{children}</main>
      <Footer />
    </>
  );
}