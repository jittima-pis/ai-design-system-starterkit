"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Generate realistic data for 3 months matching Figma
const generateChartData = () => {
  const data = []
  const startDate = new Date(2024, 3, 9) // April 9
  const endDate = new Date(2024, 5, 30) // June 30

  let currentDate = new Date(startDate)
  while (currentDate <= endDate) {
    const month = currentDate.toLocaleString('en-US', { month: 'short' })
    const day = currentDate.getDate()
    const dateStr = `${month} ${day}`

    data.push({
      date: dateStr,
      desktop: Math.floor(Math.random() * 200) + 150,
      mobile: Math.floor(Math.random() * 180) + 140,
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return data
}

const chartData = generateChartData()

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6", // Blue color matching Figma
  },
  mobile: {
    label: "Mobile",
    color: "#10b981", // Green color for mobile
  },
} satisfies ChartConfig

export function BarChartDemo() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card className="w-full border shadow-sm">
      {/* Header section matching Figma exactly */}
      <div className="flex flex-col items-stretch border-b sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1.5 px-6 py-5">
          <h3 className="text-sm font-semibold">Bar Chart - Interactive</h3>
          <p className="text-sm text-muted-foreground">
            Showing total visitors for the last 3 months
          </p>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            const isActive = activeChart === chart
            return (
              <button
                key={chart}
                onClick={() => setActiveChart(chart)}
                className={`flex flex-col justify-center gap-1 border-l px-8 py-6 text-left transition-colors ${
                  isActive ? "bg-muted" : "hover:bg-muted/50"
                }`}
              >
                <span className="text-xs text-muted-foreground capitalize">
                  {chart}
                </span>
                <span className="text-3xl font-bold leading-none">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Chart section */}
      <div className="p-6">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="0"
              stroke="hsl(var(--border))"
              vertical={false}
              opacity={0.5}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              minTickGap={40}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => value}
                  formatter={(value, name) => [
                    value,
                    name === "desktop" ? "Desktop" : "Mobile",
                  ]}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={chartConfig[activeChart].color}
              radius={[2, 2, 0, 0]}
              maxBarSize={8}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  )
}
