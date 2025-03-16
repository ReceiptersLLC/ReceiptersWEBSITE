export default function WhoWeAre() {
  return (
    <div className="section">
      <div className="w-full max-w-7xl">

        <h2 className="text-xs font-medium  uppercase mb-3">
          We are receipters
        </h2>
        <h3 className="text-2xl font-medium mb-10">
          We are results-driven, and it shows. Take a look.
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {
            data.map((result, index) => (
              <div
                key={`result-${index}`}
                className="p-6 rounded-3xl bg-white">
                <div className="size-12 rounded-xl bg-slate-100 mb-12 flex p-2">
                  <div className="size-8 ">
                    {result.svg()}
                  </div>
                </div>
                <div className="h1 mb-6">{result.value}</div>
                <div className="text-sm">{result.caption}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    id: 1,
    value: "150K",
    caption: "Receipts captured",
    svg: () => (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path className="fill-primary"
              d="m11.05,11.05c.65-.64,1.39-1.15,2.23-1.5L9.77,1.26c-1.91.81-3.62,1.96-5.08,3.43-1.47,1.47-2.62,3.18-3.43,5.08l8.29,3.51c.35-.83.86-1.58,1.5-2.23Z"></path>
        <path className="fill-primary"
              d="m11.05,20.95c-.64-.65-1.15-1.39-1.5-2.22-.36-.86-.55-1.78-.55-2.73H0c0,2.16.42,4.25,1.26,6.23.81,1.91,1.96,3.62,3.43,5.08,1.47,1.47,3.18,2.62,5.08,3.43,1.97.83,4.07,1.26,6.23,1.26v-9c-.95,0-1.86-.18-2.72-.55-.83-.35-1.58-.86-2.23-1.5Z"></path>
        <path className="fill-primary"
              d="m30.74,9.77c-.81-1.91-1.96-3.62-3.43-5.08-1.47-1.47-3.18-2.62-5.08-3.43C20.25.42,18.16,0,16,0v9c.95,0,1.86.18,2.72.55.83.35,1.58.86,2.23,1.5.64.65,1.15,1.39,1.5,2.22.36.86.55,1.78.55,2.72s-.18,1.86-.55,2.72c-.35.83-.86,1.58-1.5,2.23-.65.64-1.39,1.15-2.23,1.5l3.51,8.29c1.91-.81,3.62-1.96,5.08-3.43,1.47-1.47,2.62-3.18,3.43-5.09.83-1.98,1.26-4.07,1.26-6.23s-.42-4.25-1.26-6.23Z"></path>
      </svg>
    )
  },
  {
    id: 2,
    value: "100+",
    caption: "Hours saved filing faxes",
    svg: () => (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path className="fill-primary"
              d="m16,23c-3.86,0-7-3.14-7-7H0c0,8.82,7.18,16,16,16s16-7.18,16-16h-9c0,3.86-3.14,7-7,7Z"></path>
        <path className="fill-primary"
              d="m16,16C24.82,16,32,8.82,32,0h-9c0,3.86-3.14,7-7,7S9,3.86,9,0H0C0,8.82,7.18,16,16,16Z"></path>
      </svg>
    )
  },
  {
    id: 3,
    value: "$10M",
    caption: "Tax rebates",
    svg: () => (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle className="fill-primary" cx="7.5" cy="7.5" r="7.5"></circle>
        <path className="fill-primary"
              d="m24.5,15c4.14,0,7.5-3.36,7.5-7.5S28.64,0,24.5,0s-7.5,3.36-7.5,7.5,3.36,7.5,7.5,7.5Zm0-10c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Z"></path>
        <path className="fill-primary"
              d="m7.5,17c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5-3.36-7.5-7.5-7.5Zm0,10c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5Z"></path>
        <circle className="fill-primary" cx="24.5" cy="24.5" r="7.5"></circle>
      </svg>
    )
  }
]
