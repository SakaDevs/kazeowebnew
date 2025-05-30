import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import PageWrapper from "./components/PageAnimation/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <PageWrapper>
      <div className={poppins.className}>
        <section className="bg-white min-h-screen flex items-center justify-center">
          <div className="px-4 mx-auto max-w-screen-xl text-center">
            <div className="max-w-screen-sm mx-auto">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500">
                error 404.
              </h1>
              <p
                className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl
            "
              >
                Kamu salah search mungkin?
              </p>
              <p className="mb-4 text-lg font-light text-gray-500">
                coba cari yang bener, mungkin salah ketik, atau admin belum buat
                pagenya😊
              </p>
              <Link
                href="/"
                className="inline-flex text-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Page;
