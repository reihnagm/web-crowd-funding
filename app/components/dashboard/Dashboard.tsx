"use client";

import React, { useState } from "react";
import CardStats from "../card-stats/CardStats";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Saham", "Obligasi"],
  datasets: [
    {
      data: [0, 100],
      backgroundColor: ["#2cd4d9", "#ffac33"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return `${context.label}: ${context.parsed}%`;
        },
      },
    },
  },
};

const Dashboard: React.FC = () => {
  return (
    <section className="py-28 px-4 md:px-12">
      <div>
        <h2 className="text-black text-2xl font-bold">Dashboard</h2>
      </div>
      <div className="flex flex-col gap-y-4 mt-4">
        <div className="flex gap-4 flex-wrap">
          <CardStats
            title="Cash In-hand"
            desc="Dana yang tersedia untuk ditarik atau di investasikan"
          />
          <CardStats
            title="Dana Reward"
            desc="Dana promosi yang hanya dapat diinvestasikan"
          />
          <CardStats
            title="Dana Interim"
            desc="Dana hasil dividen interim atau komisi referral"
          />
          <CardStats
            title="Dana Dapat Diinvestasikan"
            desc="Cash In-hand + Dana Reward + Dana Interim"
          />
        </div>
        <div className="flex gap-x-4">
          <div className="shadow-lg p-6 basis-6/12 h-fit">
            <h6 className="text-slate-600 font-semibold mb-6">
              Alokasi pembelian berdasarkan efek
            </h6>
            <div style={{ width: 350, height: 300, margin: "0 auto" }}>
              <Doughnut data={data} options={options} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 20,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <strong className="text-slate-600">Saham</strong>
                <br />
                <div
                  style={{
                    height: 5,
                    width: 30,
                    backgroundColor: "#2cd4d9",
                    margin: "4px auto",
                  }}
                ></div>
                <span style={{ color: "#a0aec0" }}>0.00%</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <strong className="text-slate-600">Obligasi</strong>
                <br />
                <div
                  style={{
                    height: 5,
                    width: 30,
                    backgroundColor: "#ffac33",
                    margin: "4px auto",
                  }}
                ></div>
                <span style={{ color: "#a0aec0" }}>100.00%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
