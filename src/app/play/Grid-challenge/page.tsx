'use client';

export default function Page() {
    const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Grid Challenge Game",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "942"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="flex mt-60 flex-col items-center justify-center px-4 text-center font-game">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ">
        More Games Coming Soon! 
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl t mb-8">
        We have added only 3 games so far:
      </p>

      <ul className=" text-sm sm:text-2xl md:text-3xl space-y-2 mb-12">
        <li>Swich Challenge</li>
        <li>Deductive challengee</li>
        <li>Digit Challenge</li>
      </ul>

      <p className=" text-lg sm:text-xl md:text-2xl">
        Stay tuned for more exciting challenges! {">.<"}
      </p>

      <div className="mt-12">
        <button                 className="rounded-xl border border-black font-semibold transition-all duration-200 
                           hover:bg-zinc-100 hover:text-black hover:shadow-md 
                           dark:border-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-100 p-4" onClick={() => window.location.replace("/capgemini-games")}>
          Go Back to Games
        </button>
      </div>
    </div>
  );
}
