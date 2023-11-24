import React from "react";

const Tablet = () => {
  const priceRanges = [
    { range: "50-100 kg", price: "4.10$ per kilo" },
    { range: "100-200 kg", price: "3.90$ per kilo" },
    { range: "200-300 kg", price: "3.75$ per kilo" },
    { range: "300-500 kg", price: "3.65$ per kilo + 39.60$ delivery" },
    // Add more ranges as needed
  ];

  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto  pb-24 ">
        <h2 className="text-3xl font-serif  mb-8 pt-28 text-center">Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display the pricing table */}
          <div className="col-span-3">
            <table className="w-full bg-white border border-black rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-black text-white font-serif">
                  <th className="py-2 px-4 border-b text-center">
                    Weight Range
                  </th>
                  <th className="py-2 px-4 border-b text-center">
                    Price per Kilo
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceRanges.map(({ range, price }) => (
                  <tr key={range} className="border-2 border-black">
                    <td className="py-2 px-4 text-center">{range}</td>
                    <td className="py-2 px-4 text-center">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Tablet;
