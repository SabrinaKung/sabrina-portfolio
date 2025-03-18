import basic from "@/_contents/basic";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-20">
      <p>
        {/* &copy; {basic.startYear} - {new Date().getFullYear()} {basic.name} */}
        &copy; {new Date().getFullYear()} {basic.name}
      </p>
    </footer>
  );
}
