import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="section">
      <div className="max-w-7xl">
        <h2 className="text-xs font-medium text-center uppercase mb-3">
          Testimonials
        </h2>
        <h3 className="h3 text-center mb-10">
          We believe Receipters is the best tool out there. But, listen to our happy clients.
        </h3>

        <div>
          <div className="grid md:grid-cols-2">
            <div
              className="relative bg-[url(/img/customer-satisfaction.webp)] size-[400px] rounded-3xl overflow-hidden bg-cover text-white flex flex-col justify-end p-10">
              <div className="h1 mb-1">
                89.54%
              </div>
              <div className="text-sm">
                Customer satisfaction
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="h-5 w-full mb-6 relative flex flex-row items-center">
                {[1, 2, 3, 4, 5].map((v, i) => (
                  <svg
                    key={`testimonail-svg-${i}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 17"
                    height="100%">
                    <path
                      d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                      className="fill-primary"></path>
                  </svg>
                ))}
              </div>
              <div className="h4">
                “As a small business owner, I can’t imagine managing my finances without Receipters. It’s the best tool
                out there for seamless expense tracking.”
              </div>
              <div className="flex flex-row space-x-4 items-center mt-6">
                <div className="size-12 relative bg-amber-50 rounded-full overflow-hidden">
                  <Image
                    alt="Customer testimonial image"
                    src="/img/customer-testimonial.webp"
                    layout="fill"/>
                </div>
                <div className="text-lg font-mediumt">
                  Leonard Ochieng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
