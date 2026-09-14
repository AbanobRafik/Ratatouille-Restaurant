import { AlertCircle, ArrowLeft, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { Field } from "../components/Field";
import FieldError from "../components/errMsg";

export default function Login() {
  const { form, onSubmit, status, error } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const serverError =
    typeof error === "string"
      ? error
      : error?.message || error?.error || error?.errors?.[0]?.message;

  return (
    <main className="min-h-screen bg-[#fffaf4] px-5 py-6 text-[#252525] sm:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-[#e55d38]"
      >
        <ArrowLeft size={17} /> Back to home
      </Link>
      <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-5xl items-center gap-10 py-10 lg:grid-cols-2">
        <div className="relative hidden min-h-135 overflow-hidden rounded-4xl bg-[#ffdf4f] p-10 lg:block">
          <p className="relative z-10 mb-5 text-sm font-semibold uppercase tracking-[.2em] text-[#9a3219]">
            Bienvenue
          </p>
          <h1 className="relative z-10 max-w-sm font-serif text-5xl leading-[.95]">
            Your table is waiting.
          </h1>
          <p className="relative z-10 mt-6 max-w-xs text-base leading-7 text-black/65">
            Sign in to return to your saved favourites, reservations, and the
            little tastes you love.
          </p>
          <img
            className="absolute bottom-0 right-0 z-0 h-[78%] max-w-[68%] object-contain object-bottom"
            src="/assets/images/characters/colet.png"
            alt="Colette Tatou"
          />
        </div>
        <div className="mx-auto w-full max-w-md rounded-4xl border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(73,43,24,.12)] sm:p-10">
          <p className="font-serif text-3xl font-semibold">Welcome back</p>
          <p className="mt-2 text-sm text-black/55">
            Sign in to your Ratatouille account.
          </p>
          <form className="mt-7 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon={<Mail size={18} />}
              {...register("email")}
            />
            {errors.email && (
              <FieldError id="email-error" message={errors.email.message} />
            )}
            <Field
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={<LockKeyhole size={18} />}
              {...register("password")}
            />
            {errors.password && (
              <FieldError id="password-error" message={errors.password.message} />
            )}
            {status === "error" && serverError && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-900"
              >
                <AlertCircle className="mt-0.5 shrink-0 text-red-600" size={18} />
                <div>
                  <p className="font-semibold">We couldn't sign you in.</p>
                  <p className="mt-0.5 text-red-800">{serverError}</p>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-black/60">
                <input type="checkbox" className="accent-[#e55d38]" /> Remember
                me
              </label>
              <a
                className="font-medium text-[#d94a26] hover:underline"
                href="#forgot-password"
              >
                Forgot password?
              </a>
            </div>
            <button
              className="w-full rounded-xl bg-[#252525] py-3.5 font-medium text-white transition hover:bg-[#e55d38] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <p className="mt-7 text-center text-sm text-black/60">
            New to Ratatouille?{" "}
            <Link
              className="font-semibold text-[#d94a26] hover:underline"
              to="/register"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
