import { AuthButtonServer } from "../components/auth-button-server";

export default function Login() {

  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mx-auto my-4">LogIn</h1>
      <AuthButtonServer />
    </section>
  )
}