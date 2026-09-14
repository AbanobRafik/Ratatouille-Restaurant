import { AlertCircle, ArrowLeft, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link } from "react-router";
import { useRegister } from "../hooks/useRegister";
import { Field } from "../components/Field";
import FieldError from "../components/errMsg";


export default function Register() {
  const { form, onSubmit, status, error } = useRegister();

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
        <div className="relative hidden min-h-135 overflow-hidden rounded-4xl bg-[#e55d38] p-10 text-white lg:block">
          <p className="relative z-10 mb-5 text-sm font-semibold uppercase tracking-[.2em] text-white/75">
            À table
          </p>
          <h1 className="relative z-10 max-w-sm font-serif text-5xl leading-[.95]">
            Make every meal memorable.
          </h1>
          <blockquote className="relative z-10 mt-7 max-w-15rem font-serif text-lg leading-7 text-white/90">
            “If you focus on what you left behind, you will never see what lies
            ahead!”
          </blockquote>
          <p className="relative z-10 mt-3 text-sm font-medium text-white/70">
            — Chef Gusteau
          </p>
          <img
            className="absolute bottom-0 right-0 z-0 h-[74%] max-w-[68%] object-contain object-bottom"
            src="/assets/images/characters/gusteau.png"
            alt="Chef Gusteau"
          />
        </div>
        <div className="mx-auto w-full max-w-md rounded-4xl border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(73,43,24,.12)] sm:p-10">
          <p className="font-serif text-3xl font-semibold">Create account</p>
          <p className="mt-2 text-sm text-black/55">
            A little more flavour, made personal.
          </p>
          <form className="mt-7 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Full name"
              type="text"
              placeholder="Your name"
              icon={<UserRound size={18} />}
              {...register("username")}
            />
            {errors.username && (
              <FieldError id="username-error" message={errors.username.message} />
            )}
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
              placeholder="At least 8 characters"
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
                  <p className="font-semibold">We couldn't create your account.</p>
                  <p className="mt-0.5 text-red-800">{serverError}</p>
                </div>
              </div>
            )}
            <label className="mt-5 flex items-start gap-2 text-sm leading-5 text-black/60">
              <input type="checkbox" className="mt-1 accent-[#e55d38]" /> I
              agree to the terms and privacy policy.
            </label>
            <button
              className="w-full rounded-xl bg-[#252525] py-3.5 font-medium text-white transition hover:bg-[#e55d38] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Creating account..." : "Create account"}
            </button>
          </form>
          <p className="mt-7 text-center text-sm text-black/60">
            Already have an account?{" "}
            <Link
              className="font-semibold text-[#d94a26] hover:underline"
              to="/login"
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
