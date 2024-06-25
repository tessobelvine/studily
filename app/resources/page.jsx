"use client";
// import Tables from"@/components/Tables";



import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  FaDropbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

// import React, { useState } from "react";

export default function page() {
  return (
    <>
      <div className="bg-blue-950">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                CATEGORIES
              </Sidebar.Item>
              <Sidebar.Collapse icon={FaDropbox} label="Resourses">
                <Sidebar.Item href="/resourses/products">Products</Sidebar.Item>
                <Sidebar.Item href="/resourses/sales">Sales</Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={FaDropbox} label="Resourses">
                <Sidebar.Item href="/resourses/products">Products</Sidebar.Item>
                <Sidebar.Item href="/resourses/sales">Sales</Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={FaDropbox} label="Resourses">
                <Sidebar.Item href="/resourses/products">Products</Sidebar.Item>
                <Sidebar.Item href="/resourses/sales">Sales</Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={FaDropbox} label="Resourses">
                <Sidebar.Item href="/resourses/products">Products</Sidebar.Item>
                <Sidebar.Item href="/resourses/sales">Sales</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
       
      </div>
      {/* <Tables /> */}
    </>
  );
}
