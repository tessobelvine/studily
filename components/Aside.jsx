"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiChevronDown } from "react-icons/hi";

export default function Aside() {
  return (
    
    <Sidebar aria-label="Sidebar with multi-level dropdown  example" className="bg-blue-900">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
           <span className="ml-4">CATEGORIES</span> 
          </Sidebar.Item>
          <Sidebar.Collapse label="Resources" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Resources" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Resources" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Resources" >
            <Sidebar.Item href="/resources/products">Products</Sidebar.Item>
            <Sidebar.Item href="/resources/sales">Sales</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  );
}
