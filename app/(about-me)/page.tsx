import Image from "next/image";

export default function AboutMe() {
  return (
   <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl p-8 pb-20 gap-16 sm:p-20 bg-white shadow-md rounded ">
        <h1 className="text-3xl font-bold text-center mb-8"> About Me </h1>
        <div className="flex flex-col items-center">
          <Image
            src="/me.jpg"
            alt="Portrait of me"
            width={200}
            height={200}
            className="mb-8 rounded-full"
            />
          <p className="text-xl mb-4"> Hey There!</p> 
          <p className="text-xl text-center">I am an analyst with a background in eCommerce Fraud Prevention and Compliance who is learning about web development. This website was created to show my Next.js React skills as well as links to other projects I have built so far in my journey to become a full-stack web developer. Please view my Resume and reach out if you have any questions. Thank you!</p>
        </div>
      </div>
   </div> 
  );
}
