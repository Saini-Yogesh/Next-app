"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/login/teacherLogin" ? (
        <ul className="login-main">
          <l i>
            <Link href="/login/"> Main Login</Link>{" "}
          </l>
          <br />
          <li>
            <Link href="/login/studentLogin">Student Login</Link>
          </li>
          <br />
          <li>
            <Link href="/login/teacherLogin"> Teacher Login</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
}
