import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-main">
        <li>
          <Link href="/login/"> Main Login</Link>{" "}
        </li>
        <br />
        <li>
          <Link href="/login/studentLogin">Student Login</Link>
        </li>
        <br />
        <li>
          <Link href="/login/teacherLogin"> Teacher Login</Link>
        </li>
      </ul>
      <br />
      {children}
    </div>
  );
}
