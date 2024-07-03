"use client";

import { Sidebar } from "flowbite-react";

export default function Aside() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className=""   >
      <Sidebar.Items className="">
        <Sidebar.ItemGroup className="">
          <Sidebar.Item href="#">
            <span className="font-bold">TOP CATEGORIES</span>
          </Sidebar.Item>
          <Sidebar.Collapse label="Health & Medicines" >
            <Sidebar.Item href="/resources/medicines">Medicines</Sidebar.Item>
            <Sidebar.Item href="/resources/nursing">Nursing</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Engineering" >
            <Sidebar.Item href="/resources/cs">Computer Science</Sidebar.Item>
            <Sidebar.Item href="/resources/ce">Civil Engineering</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Business" >
            <Sidebar.Item href="/resources/acc">Accounting</Sidebar.Item>
            <Sidebar.Item href="/resources/bk">Banking</Sidebar.Item>
            <Sidebar.Item href="/resources/ins">Insurance</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/resources/others">Others</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
