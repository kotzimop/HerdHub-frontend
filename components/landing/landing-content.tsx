"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Milkings",
    title: "Record Data",
    description:
      "Manage your milking records and get full insight into your livestock!",
  },
  {
    name: "Births",
    title: "Family Tree",
    description: "Keep track of your animals by linking them effectivelly!",
  },
  {
    name: "Alerts",
    title: "Stay safe",
    description:
      "This app helps you record any potential data regarding your animal health!",
  },
  {
    name: "Miscellaneous",
    title: "Get all your data",
    description:
      "View your data with graphs, tables and symbols so that you full understand your needs!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        You can do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
