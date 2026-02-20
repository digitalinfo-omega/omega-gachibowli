export default function AwardsSection() {
  return (
    <section className="bg-white">
      <div className="container md:py-20 py-10">
        <h2 className="heading text-center font-bold text-gray-900 mb-12">
          Awards & Accolades
        </h2>

        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-3 bg-blue-secondary/10 text-blue-secondary px-6 py-2 rounded-full text-sm font-medium">
            <span className="text-xl">🏆</span>
            <span>LEARN MORE</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-accent/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6">
                <div className="relative w-12 h-12 md:w-14 md:h-14">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-accent rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-accent text-xl md:text-2xl">
                          ★
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-accent text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded-full">
                    2022
                  </div>
                </div>
              </div>

              <h3 className="text-blue-secondary font-semibold text-lg md:text-xl mb-3">
                Times Health Survey
              </h3>

              <p className="sm-para text-gray-600 leading-relaxed">
                The best hospital in Oncology Dedicated Single
                <br />
                Specialty Cancer Centre
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
