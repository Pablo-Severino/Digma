import Head from "next/head";
import Image from "next/image";

import close from "../public/auth/close.svg";
import lgoogle from "../public/auth/google.svg";

import IndexNavbar from "@/components/Navbar/IndexNavbar";
import IndexFooter from "@/components/Footer/IndexFooter";

import { useState } from "react";
import { supabase } from "./../lib/supabaseClient";
import { FormEvent } from "react";

import styled from "../styles/Home.module.css";
import "reactflow/dist/style.css";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const click = () => setIsActive(!isActive);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault()
    try {
     await supabase.auth.signUp({
      email,
      password,
     })
    } catch (error) {
     console.log(error)
    }
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <>
      <Head>
        <title>Digma</title>
      </Head>
      <IndexNavbar />
      <main className={styled.main}>
        <div className={styled.section1}>
          <video
            src="https://cdn.sanity.io/files/599r6htc/localized/4caa8274fa1a76f5df188b7969c41e2b00890801.mp4"
            autoPlay
            muted
            playsInline
            className={styled.video1}
          />
          <p className={styled.description}>
            Digma connects everyone in the design process so teams can deliver
            better products, faster.
          </p>
          <button onClick={click} className={styled.button}>
            Get Started
          </button>
        </div>
      </main>

      <div className={`submenuwrap ${isActive ? "active" : "inactive"}`}>
        <div className={styled.back}>
          <div className={styled.auth}>
            <button
              onClick={click}
              className={`close ${isActive ? "inactive" : "active"}`}
              role="button"
              type="button"
              aria-label="Close"
              data-not-draggable="true"
              data-testid="close-button"
            >
              <span className={styled.svgcontainer}>
                <Image className={styled.svg1} src={close} alt="close" />
              </span>
            </button>
            <div>
              <button
                onClick={signInWithGoogle}
                className={styled.authgoogle}
              >
                <div className={styled.btgoogle}>
                  <span className={styled.googleicon}>
                    <Image className={styled.svg2} src={lgoogle} alt="logo google" />
                  </span>
                  <div className={styled.googletext}>
                    Continue with Google
                  </div>
                </div>
              </button>
              <form onSubmit={handleSignup} className={styled.form}>
                <span className={styled.or}>or</span>
                <input
                  className={styled.email}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className={styled.password}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button className={styled.btauth}>
                  Create account
                </button>
                <div className={styled.footer}>
                  <div className={styled.textblue1}>
                    <p>Use single sign-on</p>
                  </div>
                  <div className={styled.textblue2}>
                    Already have an account?
                    <p>Login</p>
                  </div>
                </div>
                <div className={styled.footertext}>
                  <span className={styled.textinfo}>
                    By clicking &quot;Create account&quot;, I agree to
                    Figma&apos;s
                    <a
                      target="_blank"
                      rel="noopener"
                      className={styled.pages}
                      href="/summary-of-policy"
                    >
                      TOS
                    </a>
                    and
                    <hr className={styled.hr} />
                    <a
                      target="_blank"
                      rel="noopener"
                      className={styled.pages}
                      href="/privacy"
                    >
                      Privacy Policy{"."}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <style jsx>{`
          .submenuwrap {
            position: fixed;
            inset: 0px;
            overflow-y: auto;
            z-index: 30;
            transform: scale(0);
          }
          .submenuwrap.active {
            position: fixed;
            inset: 0px;
            overflow-y: auto;
            z-index: 30;
            background-color: rgba(0, 0, 0, 0.5);
            transform: scale(1);
          }

          .close {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 32px;
            margin-top: -4vh;
            margin-left: 23rem;
            flex: 0 0 32px;
            line-height: 32px;
            cursor: default;
            fill: #000;
            color: #000;
            border-radius: 2px;
            border: transparent;
            background-clip: padding-box;
            background-color: transparent;
            transition: transform 0.2s;
            transform: translateX(0);
          }

          .close:hover {
            transition: 0.2s;
            transform: translateY(-2px);
            border-radius: 2px;
            background-color: #f3f1f1;
          }
        `}</style>
      </div>
      <IndexFooter />
    </>
  );
}
