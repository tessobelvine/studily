"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiChevronDown } from "react-icons/hi";

export default function Aside() {
  return (
    
    <Sidebar aria-label="Sidebar with multi-level dropdown  example" className="bg-sky-500 text-white">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
           <span className="ml-4">CATEGORIES</span> 
          </Sidebar.Item>
          <Sidebar.Collapse label="Engineering" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Business" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Biomedicals" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Education" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  );
}
