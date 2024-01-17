// eslint-disable-next-line no-unused-vars
import React from "react";
import avatar from "../assets/avatar.png";
import "../styles/output.css";
import {
  studentDataClassOne,
  studentDataClassThree,
  studentDataClassTwo,
} from "./data/data";

const Table = () => {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class One
            </td>
          </tr>
          {Array.isArray(studentDataClassOne) &&
            studentDataClassOne?.length > 0 &&
            studentDataClassOne?.map((item) => (
              <tr className="border-b border-[#7ECEB529]" key={item?.id}>
                <td className="p-5 text-sm md:text-xl">{item?.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8"
                      src={avatar}
                      width="32"
                      height="32"
                      alt={item?.name}
                    />
                    <span className="whitespace-nowrap">{item?.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item?.scores}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item?.percentage}
                </td>
              </tr>
            ))}
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Two
            </td>
          </tr>
          {Array.isArray(studentDataClassTwo) &&
            studentDataClassTwo?.length > 0 &&
            studentDataClassTwo?.map((item) => (
              <tr className="border-b border-[#7ECEB529]" key={item?.id}>
                <td className="p-5 text-sm md:text-xl">{item?.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8"
                      src={avatar}
                      width="32"
                      height="32"
                      alt={item?.name}
                    />
                    <span className="whitespace-nowrap">{item?.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item?.scores}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item?.percentage}
                </td>
              </tr>
            ))}
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Three
            </td>
          </tr>
          {Array.isArray(studentDataClassThree) &&
            studentDataClassThree?.length > 0 &&
            studentDataClassThree?.map((item) => (
              <tr className="border-b border-[#7ECEB529]" key={item?.id}>
                <td className="p-5 text-sm md:text-xl">{item?.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8"
                      src={avatar}
                      width="32"
                      height="32"
                      alt={item?.name}
                    />
                    <span className="whitespace-nowrap">{item?.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item?.scores}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item?.percentage}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
