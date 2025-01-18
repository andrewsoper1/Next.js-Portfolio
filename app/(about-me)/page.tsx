import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1> About Me </h1>
      <Image
        src="/me.jpg"
        alt="Portrait of me"
        width={200}
        height={200}
        />
      <p> Hey There!</p>
      <p>I am an analyst with a background in eCommerce Fraud Prevention and Compliance who is learning about web development. This website was created to show my Next.js React skills as well as links to other projects I have built so far in my journey to become a full-stack web developer. Please view my Resume and reach out if you have any questions. Thank you!</p>
    </div>
  );
}
