
"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterSection() {
    return (
        <Footer container className="bg-slate-950 py-16">
            <div className="container mx-auto ">
                <div className="my-12 container mx-auto justify-between sm:flex sm:justify-between items-start ">
                    <div>
                        <Link
                            href={"/"}
                            className="font-black text-sky-500 lg:text-3xl text-3xl">
                            STUDILY{" "}
                        </Link>
                    </div>
                    <div className="grid align-center mt-8 sm:grid-cols-3 sm:mt-0 gap-8">
                        <div>
                            <Footer.Title title="Resources" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Top Resources</Footer.Link>
                                <Footer.Link href="#">Latest Resources</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Forums" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Top Post</Footer.Link>
                                <Footer.Link href="#">Latest Post</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Help &amp; Support</Footer.Link>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="mt-16 w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Tesso Belvine" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
