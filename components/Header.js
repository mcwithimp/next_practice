import Link from "next/link";

const linkStyle = {
  marginRight: "1rem"
};

const Header = () => {
  return (
    <div>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/about" style={linkStyle}>
        About
      </Link>
    </div>
  );
};
