import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-main">
        <li>
          <Link href="/about/"> Main about</Link>{" "}
        </li>
        <br />
        <li>
          <Link href="/login/studentLogin">About Student</Link>
        </li>
        <br />
        <li>
          <Link href="/login/teacherLogin"> About Teacher</Link>
        </li>
      </ul>
      <br />
      {children}
    </div>
  );
}
