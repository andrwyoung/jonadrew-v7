export default function Footer() {
  return (
    <footer className="w-full px-8 py-6 text-center font-semibold text-sm text-secondary-text bg-background">
      <a
        href="https://www.andrwyoung.com/"
        className="font-body tracking-tightest text-xs font-semibold
            hover:underline"
        title="Andrew's website"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        © {new Date().getFullYear()} Andrew Yong
      </a>
    </footer>
  );
}
